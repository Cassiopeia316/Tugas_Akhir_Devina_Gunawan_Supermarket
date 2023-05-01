from server import app

if __name__ == "__main__":
  app.config['MQTT_CLIENT'].loop_start()
  app.run(debug=True)
  app.config['MQTT_CLIENT'].loop_stop()