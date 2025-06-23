# Simple Activities

## Print The Value of White Line Sensor In Serial Monitor

```
#define sensor_Num 5
unsigned int sensorV[sensor_Num];
#define Clock  13
#define Addr   12
#define DO     11
#define CS     10

void AnalogRead(unsigned int *sensorV){
  char i,j;
  unsigned int values[] = {0,0,0,0,0,0,0,0}; // Utilising only five positions (5 IR sensors) But the sysytem needs 8 

  for(j = 0;j < sensor_Num + 1;j++)
  {
    digitalWrite(CS,LOW); // To activate Sensors Array
    for(i = 0;i < 10;i++)
    {
      if(i<4) // 4-Bit Binary Numbers 
      {
        if((j >> (3 - i) & 0x01)) // 
          digitalWrite(Addr,HIGH);
        else
          digitalWrite(Addr,LOW);
      }
      else
      {
        digitalWrite(Addr,LOW);
      }
      values[j] <<= 1;
      if(digitalRead(DO)) // if DataOut = 1 , OR Operation is Done
      values[j] |= 0x01;
      digitalWrite(Clock,HIGH);
      digitalWrite(Clock,LOW);
    }
    for(i = 0;i < 2;i++)
    {
      digitalWrite(Clock,HIGH);
      digitalWrite(Clock,LOW);
    }
    digitalWrite(CS,HIGH);
  }
  for(i = 0;i < sensor_Num;i++)
  {
    sensorV[i] = values[i+1];
  }
  
}
void setup() {
  Serial.begin(115200);
  pinMode(Clock, OUTPUT);
  pinMode(Addr, OUTPUT);
  pinMode(DO, INPUT_PULLUP);
  pinMode(CS, OUTPUT);
  

}

void loop() {
  AnalogRead(sensorV);
  int sensors[5] = {0};
  for (int i = 0;i < sensor_Num ; i++){
    Serial.print("The sensor ");
    Serial.print(i);
    Serial.print(" is ");
    Serial.println(sensorV[i]);
    sensors[i] += sensorV[i];
  }
  delay(100);
  Serial.println();
  Serial.println();
  Serial.println();}

```
## Output

<ul>
<li>This code reads values from 5 infrared (IR) line sensors and prints their readings to the Serial Monitor.

</li>
</ul>


## Exercise 🤖

<ul>
<li>Try to code Yourself and Print the Value and Check the Readings when Alphabot is in different position in White line Track</li>

</ul>
