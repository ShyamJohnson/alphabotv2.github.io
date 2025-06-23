# Simple Activities


<ul>
<li>To develop a motion control algorithm that allows the robot to execute dynamic manoeuvres such as forward movement, turning left or right, and stopping.</li>
</ul>

### Basic Movements Of The Alphabot 


```
#define PWMA 6 // Motor Speed L
#define PWMB 5 // Motor Speed R
#define AIN2 A0 // L - Forward
#define AIN1 A1 // L - Backward
#define BIN1 A2 // R - Backward
#define BIN2 A3 // R - Forward

void setup() {
  pinMode(PWMA,OUTPUT);
  pinMode(AIN2,OUTPUT);      
  pinMode(AIN1,OUTPUT);
  pinMode(PWMB,OUTPUT);       
  pinMode(AIN1,OUTPUT);     
  pinMode(AIN2,OUTPUT);
}

void moveFront(){
  analogWrite(PWMA , 250);
  analogWrite(PWMB , 250);
  digitalWrite(AIN2 , HIGH);
  digitalWrite(BIN2 , HIGH);
  delay(2000); 
  analogWrite(PWMA , 0);
  analogWrite(PWMB , 0);
  delay(2000); 
}

void moveLeft(){
  analogWrite(PWMB , 250);
  digitalWrite(BIN2 , HIGH);
  delay(2000);
  analogWrite(PWMB , 0);
  digitalWrite(BIN2 , LOW);
  delay(2000);
}

void moveRight(){
  analogWrite(PWMA , 250);
  digitalWrite(AIN2 , HIGH);
  delay(2000);
  analogWrite(PWMA , 0);
  digitalWrite(AIN2 , LOW);
  delay(2000);
}

void moveBack(){
  analogWrite(PWMA , 250);
  analogWrite(PWMB , 250);
  digitalWrite(AIN1 , HIGH);
  digitalWrite(BIN1 , HIGH);
  delay(2000); 
  analogWrite(PWMA , 0);
  analogWrite(PWMB , 0);
  digitalWrite(AIN1 , LOW);
  digitalWrite(BIN1 , LOW);
}

void loop() {
  
  moveFront();
  moveLeft();
  moveRight();
  moveBack();
  delay(1000);
}
```
## Output

<ul>
<li>The robot will move forward for 2 seconds, turn left for 2 seconds, turn right for 2 seconds, move backward for 2 seconds, and repeat.</li>
</ul>


## Exercise 🤖

<ul>
<li>Try to make the robot move in a square motion. </li>
<li>Try to make the robot move in a circular motion. </li>
</ul>
