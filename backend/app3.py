import random
import time
import cv2
import numpy as np

from paho.mqtt import client as mqtt_client

image = cv2.imread('./landingpage.png')
image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
image = cv2.resize(image, (296, 128))

z = []
i = 0
print(image.shape)
w, h = image.shape
q = ""

string = ""
for x in range(h):
    for y in range(w - 1, -1, -1):
        if image[y, x] > 127: #127-255 putih, 0-126 hitam
            string += "0" #putih
        else:
            string += "1" #hitam
        
        if (len(string) == 8): #dikumpulin sampai 8 digit, terus mau dijadiin hexdesimal
            hexdecimal = hex(int(string, 2)).upper()
            if (len(q) > 0):
                q += ","
            q = q + hexdecimal #hasil yang mau di print e paper
            string = ""
            
print(len(q))

broker = 'test.mosquitto.org'
port = 1883
topic = "supermarket"

client_id = f'python-mqtt-{random.randint(0, 1000)}'

def connect_mqtt():
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    client.on_connect = on_connect
    # client.connect(broker, port, keepalive=60)
    client.connect(broker, port)
    return client

def publish(client):
    result = client.publish(topic, q)
    fail = result[0]
    # if not fail:
        # print(f"Send `{q}` to topic `{topic}`")

def run():
    client = connect_mqtt()
    publish(client)
    # client.loop_forever()
    client.loop_start()
    time.sleep(5)
    client.loop_stop()

if __name__ == '__main__':
    run()

# print(len(q))

# f = open("generated.txt", "a")
# n = 0
# for i in q:
#     f.write(i + ",")
#     n += 1
#     if n == 16:
#         f.write("\n")
#         n = 0
# f.close()