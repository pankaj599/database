#include <Wire.h>
#include <BMP180TwoWire.h>
#include <ros.h>
#include <std_msgs/Int16.h>
#include <std_msgs/Int16MultiArray.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#define air_pin1 A1
#define air_pin2 A2
#define soil_pin A0
#define I2C_ADDRESS 0x77
#define DHTPIN 4     

DHT_Unified dht(DHTPIN, DHT11);

ros::NodeHandle  nh;

std_msgs::Int16MultiArray data;
ros::Publisher datapub("sensor_data", &data);

char dim0_label[] = "data";

BMP180TwoWire bmp180(&Wire, I2C_ADDRESS);

void setup() {
  nh.getHardware()->setBaud(9600);
  Serial.begin(9600);
  Wire.begin();  
  dht.begin();
 if (!bmp180.begin())
  {
    Serial.println("begin() failed. check your BMP180 Interface and I2C Address.");
    while (1);
  }
  sensor_t sensor;
 data.layout.dim = (std_msgs::MultiArrayDimension *)
  malloc(sizeof(std_msgs::MultiArrayDimension) * 2);
  data.layout.dim[0].label = dim0_label;
  data.layout.dim[0].size = 7;
  data.layout.dim[0].stride = 1*7;
  data.layout.data_offset = 0;
   data.layout.dim_length = 0;
  data.data_length = 7;
  data.data = (int *)malloc(sizeof(int)*7);
   
  nh.initNode();
 nh.advertise(datapub);
}

void loop() {

int air1,air2,soil; //fc-28 is soil moisture sensor

air1 = analogRead(air_pin1);
air1= map(air1,550,0,0,1000);
data.data[2]=air1;

air2 = analogRead(air_pin2);
air2= map(air2,550,0,0,1000);
data.data[3]=air2;

soil=analogRead(soil_pin);
soil= map(soil,600,100,0,100);
data.data[4]=soil;

  delay(1000);

  //start a temperature measurement
  if (!bmp180.measureTemperature())
  {
    Serial.println("could not start temperature measurement, is a measurement already running?");
    return;
  }

  do
  {
    delay(100);
  } while (!bmp180.hasValue());

  data.data[0]=bmp180.getTemperature();
  
  if (!bmp180.measurePressure())
  {
    Serial.println("could not start perssure measurement, is a measurement already running?");
    return;
  }
 
  do
  {
    delay(100);
  } while (!bmp180.hasValue());

  data.data[1]=(bmp180.getPressure()/100000);

    sensors_event_t event;
    
    dht.temperature().getEvent(&event);
    data.data[5]=(event.temperature);
    
  // Get humidity event and print its value.
    dht.humidity().getEvent(&event);
    data.data[6]=(event.relative_humidity);
    
datapub.publish(&data);
Serial.println(data.data[1]);
nh.spinOnce();
}
