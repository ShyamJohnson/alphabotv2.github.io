# Simple Activities

## Printing a circle on the 0.96-inch OLED display (SSD1306, 128x64 pixels) using the AlphaBot2.

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
<li>A small Circle is displayed in OLED Display.</li>
</ul>


## Exercise 🤖

<ul>
<li>Try to Print a Rectangle ,Triangle and a Simple Stickman in the OLED Display</li>

</ul>
