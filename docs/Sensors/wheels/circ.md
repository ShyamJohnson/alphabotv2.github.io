# Simple Activities


<ul>
<li>To make the robot move in a <strong>Circular motion</strong>.</li>
</ul>

### Circular Motion
```
#define PWMA 5     // Right motor PWM
#define AIN1 6     // Right motor direction 1
#define AIN2 7     // Right motor direction 2
#define PWMB 8     // Left motor PWM
#define BIN1 9     // Left motor direction 1
#define BIN2 10    // Left motor direction 2

// Movement Parameters
int Speed = 150;   // Base speed (0-255)
int circleTime = 5000; // Time to complete full circle (ms)

void setup() {
  // Initialize motor pins
  pinMode(PWMA, OUTPUT);
  pinMode(AIN1, OUTPUT);
  pinMode(AIN2, OUTPUT);
  pinMode(PWMB, OUTPUT);
  pinMode(BIN1, OUTPUT);
  pinMode(BIN2, OUTPUT);
  delay(2000);     // Startup delay
}

void loop() {
  // Move in a continuous circle
  CircleRight();    // Right-turning circle
  delay(circleTime);
  Stop();
  while(1);        // Stop after one full circle
}

// Custom Circle Function (Right-turning)
void CircleRight() {
  // Right motor slower = tighter turn
  analogWrite(PWMA, Speed * 0.6);  // Right motor at 60% speed
  analogWrite(PWMB, Speed);        // Left motor at full speed
  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, HIGH);
  digitalWrite(BIN1, LOW);
  digitalWrite(BIN2, HIGH);
}


```
## Output

<ul>
<li>The robot will move in a continuous right-turning circle for 5 seconds, then stop permanently.</li>
</ul>



