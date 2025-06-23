# Simple Activities

## Printing The Your Name and Some Random text

```
  #include <Wire.h>
  #include <Adafruit_GFX.h>
  #include <Adafruit_SSD1306.h>
  
  // OLED display setup
  #define OLED_RESET 9
  Adafruit_SSD1306 display(OLED_RESET);  // For I2C communication
  
  void setup() {
    // Initialize OLED with I2C address 0x3C
    display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
    
    // Clear the display buffer
    display.clearDisplay();
    
    // Basic text display
    display.setTextSize(1.4);      // Text Size (Pixels)
    display.setTextColor(WHITE); // Draw white text
    display.setCursor(0,0);      // setCursor(Left - Right,Top - Bottom)
    display.println("Alphabot V2");
    display.println("Ready!");
    display.display(); // Displays The Text 
    delay(2000);
  }
  
  void DispUrName(){
    display.clearDisplay(); // Clears The Previous Texts
    display.setCursor(0,0);
    display.println("Hello");
    display.setCursor(0,12);
    display.println("Im Shyam");
    display.display();
  }

void Rand(){
  display.clearDisplay(); 
  display.setCursor(35,5);
  display.println("Just For");
  display.setCursor(30,15);
  display.println("Calibration");
  display.display();
}

void loop(){
  DispUrName();
  delay(1000);

  Rand();
  delay(5000);
}

```
## Output

<ul>
<li>Tilt/press the joystick, and the corresponding direction will print: </li>
</ul>


## Exercise 🤖

<ul>
<li>Try to print rectangle ,Triangle and circle in the OLED Display.</li>
<li>Try to Print a Simple Stickman in the OLED Display</li>

</ul>
