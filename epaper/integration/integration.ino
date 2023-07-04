#include <WiFi.h>
#include <PubSubClient.h>

// wifi setup
const char* ssid = "Gunafi";
const char* password = "GunaFam2002";

// mqtt setup
const char* MQTT_SERVER = "test.mosquitto.org";


int BUSY_Pin = A14;
int RES_Pin = A15; 
int DC_Pin = A16; 
int CS_Pin = A17; 
int SCK_Pin = A18; 
int SDI_Pin = A19;

#define EPD_W21_MOSI_0  digitalWrite(SDI_Pin,LOW)
#define EPD_W21_MOSI_1  digitalWrite(SDI_Pin,HIGH) 

#define EPD_W21_CLK_0 digitalWrite(SCK_Pin,LOW)
#define EPD_W21_CLK_1 digitalWrite(SCK_Pin,HIGH)

#define EPD_W21_CS_0 digitalWrite(CS_Pin,LOW)
#define EPD_W21_CS_1 digitalWrite(CS_Pin,HIGH)

#define EPD_W21_DC_0  digitalWrite(DC_Pin,LOW)
#define EPD_W21_DC_1  digitalWrite(DC_Pin,HIGH)
#define EPD_W21_RST_0 digitalWrite(RES_Pin,LOW)
#define EPD_W21_RST_1 digitalWrite(RES_Pin,HIGH)
#define isEPD_W21_BUSY digitalRead(BUSY_Pin)

WiFiClient espClient;
PubSubClient client(espClient);

const int EPD_WIDTH = 128;
const int EPD_HEIGHT = 296;
const int ARRAY_SIZE = EPD_WIDTH * EPD_HEIGHT / 8;

unsigned char messageTemp[ARRAY_SIZE];

void setup() {
  pinMode(BUSY_Pin, INPUT);
  pinMode(RES_Pin, OUTPUT);
  pinMode(DC_Pin, OUTPUT);
  pinMode(CS_Pin, OUTPUT);
  pinMode(SCK_Pin, OUTPUT);
  pinMode(SDI_Pin, OUTPUT);
  Serial.begin(115200);

  Serial.print("Connecting");
  // Serial.println(SSID);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  // Serial.println("");
  Serial.println("WiFi connected");
  // Serial.println("IP address: ");
  // Serial.println(WiFi.localIP());

  client.setServer(MQTT_SERVER, 1883);
  client.setCallback(callback);
}

void callback(char* topic, byte* message, unsigned int length) {
  
//    s += (char)message[i];
//    if ((char)message[i] == '1'){
//      messageTemp[i / 2] = 0XFF;  
//    } else {
//      messageTemp[i / 2] = 0X00;
//    }

//  char id = (char)message[0];
  if (String(topic) == String("supermarket")) {Serial.println(length);
    String s;
    int j = 0;
    for (int i = 0; i < length; i++) {
        char c = (char) message[i];
    
        if (c == ','){
            Serial.println(s);
            Serial.println(s.toInt());
            messageTemp[j] = s.toInt();
            j++;
            s = "";
            
        } else {
            s += c;
        }
     }
     EPD_init(); //EPD init
     PIC_display(messageTemp);//EPD_picture1
     EPD_refresh();//EPD_refresh   
     EPD_sleep();
  }
}


void loop() {
   if (!client.connected()){
     reconnect();
   }

  client.loop();
  // put your main code here, to run repeatedly:
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");

      client.subscribe("supermarket");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      
      delay(5000);
    }
  }
}

/////////////////////delay//////////////////////////////////////
void driver_delay_us(unsigned int xus) {
  for(;xus>1;xus--);
}
void driver_delay_xms(unsigned long xms) {  
  unsigned long i = 0 , j=0;

  for(j=0;j<xms;j++){
      for(i=0; i<256; i++);
  }
}

//////////////////////SPI///////////////////////////////////
void SPI_Delay(unsigned char xrate) {
  unsigned char i;
  while(xrate){
    for(i=0;i<2;i++);
    xrate--;
  }
}


void SPI_Write(unsigned char value) {                                                           
  unsigned char i;  
  SPI_Delay(1);
  for(i=0; i<8; i++) {
    EPD_W21_CLK_0;
    SPI_Delay(1);
    if(value & 0x80) EPD_W21_MOSI_1;
    else EPD_W21_MOSI_0;   
    value = (value << 1); 
    SPI_Delay(1);
    driver_delay_us(1);
    EPD_W21_CLK_1; 
    SPI_Delay(1);
  }
}


void EPD_W21_WriteCMD(unsigned char command) {
  SPI_Delay(1);
  EPD_W21_CS_0;                   
  EPD_W21_DC_0;   // command write
  SPI_Write(command);
  EPD_W21_CS_1;
}
void EPD_W21_WriteDATA(unsigned char command)
{
  SPI_Delay(1);
  EPD_W21_CS_0;                   
  EPD_W21_DC_1;   // command write
  SPI_Write(command);
  EPD_W21_CS_1;
}



/////////////////EPD settings Functions/////////////////////
void EPD_W21_Init(void)
{
  EPD_W21_RST_0;    // Module reset
  delay(100); //At least 10ms
  EPD_W21_RST_1;
  delay(100);  
}
void EPD_init(void)
{
    EPD_W21_Init(); //Electronic paper IC reset
  
    EPD_W21_WriteCMD(0x06);         //boost soft start
    EPD_W21_WriteDATA (0x17);   //A
    EPD_W21_WriteDATA (0x17);   //B
    EPD_W21_WriteDATA (0x17);   //C       


    EPD_W21_WriteCMD(0x04);  //Power on
    lcd_chkstatus();        //waiting for the electronic paper IC to release the idle signal

    EPD_W21_WriteCMD(0x00);     //panel setting
    EPD_W21_WriteDATA(0x0f);    //LUT from OTP£¬400x300
    EPD_W21_WriteDATA(0x0d);     //VCOM to 0V fast
  }
void EPD_refresh(void)
{
    EPD_W21_WriteCMD(0x12);     //DISPLAY REFRESH   
    driver_delay_xms(100);          //!!!The delay here is necessary, 200uS at least!!!     
    lcd_chkstatus();
} 
void EPD_sleep(void)
{
    EPD_W21_WriteCMD(0X50);  //VCOM AND DATA INTERVAL SETTING  
    EPD_W21_WriteDATA(0xf7);
       
    EPD_W21_WriteCMD(0X02);   //power off
    lcd_chkstatus();
    EPD_W21_WriteCMD(0X07);   //deep sleep
    EPD_W21_WriteDATA(0xA5);
}


void PIC_display(const unsigned char* picData_old)
{
    unsigned int i;
    EPD_W21_WriteCMD(0x10);        //Transfer old data
    for(i=0;i<ARRAY_SIZE;i++)      
  {
    EPD_W21_WriteDATA(pgm_read_byte(&picData_old[i]));
  }

//  for red color
    EPD_W21_WriteCMD(0x13);        //Transfer new data
    for(i=0;i<ARRAY_SIZE;i++)      
  {
    EPD_W21_WriteDATA(0xff);
  }
}
void PIC_display_Clean(void)
{
    unsigned int i;
    EPD_W21_WriteCMD(0x10);        //Transfer old data
    for(i=0;i<15000;i++)      
  {
    EPD_W21_WriteDATA(0xff);
  }
  
    EPD_W21_WriteCMD(0x13);        //Transfer new data
    for(i=0;i<15000;i++)      
  {
    EPD_W21_WriteDATA(0xff);
  }
}
void lcd_chkstatus(void)
{
  unsigned char busy;
  do
  {
    EPD_W21_WriteCMD(0x71);
    busy = isEPD_W21_BUSY;
    busy =!(busy & 0x01);        
  }
  while(busy);   
  driver_delay_xms(200);                       
}
//////////////////////////////////END/////////////////////////////////////////
