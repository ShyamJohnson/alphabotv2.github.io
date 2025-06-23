# Simple Activities


<ul>
<li>To make the robot move in a <strong>square motion</strong>.</li>
</ul>

### Square Motion


```
// Motor Control Pins (replace with your actual pins)
#define PWMA 6 // Motor Speed L
#define PWMB 5 // Motor Speed R
#define AIN2 A0 // L - Forward
#define AIN1 A1 // L - Backward
#define BIN1 A2 // R - Backward
#define BIN2 A3 // R - Forward

int Speed = 150;  // Base speed (0-255)

void setup() {
  // Initialize motor control pins
  pinMode(PWMA, OUTPUT);
  pinMode(AIN1, OUTPUT);
  pinMode(AIN2, OUTPUT);
  pinMode(PWMB, OUTPUT);
  pinMode(BIN1, OUTPUT);
  pinMode(BIN2, OUTPUT);
  
  delay(2000);  // Initial delay before movement
}

void loop() {
  // Draw a square (4 sides with 4 right turns)
  for (int i = 0; i < 4; i++) {
    Forward();      // Move straight
    delay(1000);    // Adjust for desired side length
    
    Stop();         // Brief stop
    delay(700);
    
    Right();        // Turn right 90 degrees
    delay(400);     // THIS IS CRUCIAL - CALIBRATE THIS VALUE
    
    Stop();         // Brief stop
    delay(700);
  }
  
  Stop();           // Final stop
  while(1);         // Infinite loop to prevent restart
}

// Your motor control functions
void Forward() {
  analogWrite(PWMA, Speed);
  analogWrite(PWMB, Speed);
  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, HIGH);
  digitalWrite(BIN1, LOW);
  digitalWrite(BIN2, HIGH);
}

void Right() {  // Pivot turn (right motor backward, left motor forward)
  analogWrite(PWMA, Speed);
  analogWrite(PWMB, Speed);
  digitalWrite(AIN1, HIGH);  // Right motor BACKWARD
  digitalWrite(AIN2, LOW);
  digitalWrite(BIN1, LOW);   // Left motor FORWARD
  digitalWrite(BIN2, HIGH);
}

void Stop() {
  analogWrite(PWMA, 0);
  analogWrite(PWMB, 0);
  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, LOW);
  digitalWrite(BIN1, LOW);
  digitalWrite(BIN2, LOW);
}
```
## Output

<ul>
<li>The robot will move in a square pattern: forward for 1 second, turn right (pivot) for 0.4 seconds, and repeat 4 times before stopping completely.</li>
</ul>


## Exercise 🤖

<ul>
<li>Try to make the robot move in a circular motion. </li>
</ul>
