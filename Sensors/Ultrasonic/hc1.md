# Simple Activities - Print Distance

## Problem Statement
<ul>
<li>Write a code to Alphabot so that the readings of Ultrasonic Sensor is Displayed in the Serial Monitor.</li>
</ul>




## Code 

```
#define trigPin 3
#define echoPin 2
void setup(){
  Serial.begin(9600);
  pinMode(trigPin,OUTPUT);

  pinMode(echoPin,INPUT);

}
 void loop(){
  long duration,dist;
  digitalWrite(trigPin,LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin,HIGH);
  delayMicroseconds(2);
  digitalWrite(trigPin,LOW);
  duration = pulseIn(echoPin,HIGH);
  dist = (duration/2) / 29.1;

  if (dist >=200 || dist <= 0){
    Serial.println("OUT OF RANGE");
    Serial.println(dist);
    Serial.println("Cm");
    
  }else {
    Serial.println(dist);
    Serial.println("Cm");
    delay(200); 
}  }

```
## Output





## Exercise 🤖

<ul>
<li>Try to code Yourself and Print the Distance </li>
</ul>
# Simple Activities

## Distance Reading Using Ultrasonic Distance Sensor

```
#define trigPin 3
#define echoPin 2
void setup(){
  Serial.begin(9600);
  pinMode(trigPin,OUTPUT);

  pinMode(echoPin,INPUT);

}
 void loop(){
  long duration,dist;
  digitalWrite(trigPin,LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin,HIGH);
  delayMicroseconds(2);
  digitalWrite(trigPin,LOW);
  duration = pulseIn(echoPin,HIGH);
  dist = (duration/2) / 29.1;

  if (dist >=200 || dist <= 0){
    Serial.println("OUT OF RANGE");
    Serial.println(dist);
    Serial.println("Cm");
    
  }else {
    Serial.println(dist);
    Serial.println("Cm");
    delay(200); 
}  }

```
## Output

<ul>
<li>This code provides continuous distance readings that could be used by the Alphabot V2
</li>
</ul>


## Exercise 🤖

<ul>
<li>Try to code Yourself and Print the Distance </li>
</ul>
