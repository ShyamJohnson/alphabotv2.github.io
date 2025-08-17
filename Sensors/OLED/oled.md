# OLED

## Overview

<p>The AlphaBot2 kit often comes with a 0.96-inch OLED display (usually 128x64 pixels) that connects via I2C (Inter-Integrated Circuit) communication. This small but sharp display is useful for showing real-time data, sensor readings, or debugging information without needing a serial monitor.
</p>

##

<center>
<img src="/img/OLED.jpg" width="500" height="700">
</center>

## Key Feature

<ul>
    <li><strong>Size</strong>
        <ul>
            <li>0.96 inches (diagonal)</li>
        </ul>
    </li>
    <li><strong>Resolution</strong>
        <ul>
            <li>128x64 pixels (monochrome or sometimes blue/yellow)</li>
        </ul>
    </li>
    <li><strong>Interface</strong>
        <ul>
            <li>I2C (uses SDA and SCL pins)</li>
        </ul>
    </li>
    <li><strong>Low Power Consumption</strong>
        <ul>
            <li>OLEDs only light up active pixels, saving energy.</li>
        </ul>
    </li>
    
</ul>


## Working

<ul>
    <li><strong>Libraries</strong>
        <ul>
            <li>Wire.h: Enables I2C communication between Arduino and the OLED..</li>
            <li>Adafruit_GFX: Provides basic graphics functions (text, shapes).</li>
            <li>Adafruit_SSD1306: Driver for the OLED display.</li>
            <li>Adafruit_SSD1306: Creates an object named display for controlling the OLED.</li>
        </ul>
    </li>
    <li><strong>begin(SSD1306_SWITCHCAPVCC, 0x3C)</strong>
        <ul>
            <li>Starts the OLED with internal voltage (address 0x3C for I2C).</li>
        </ul>
    </li>
    <li><strong>Buffer Management</strong>
        <ul>
            <li>clearDisplay() is called before new content to avoid Overlapping of text.</li>
            <li>display() is required to push changes to the OLED.</li>
        </ul>     
    </li>    
    <li><strong>Text Positioning</strong>
        <ul>
            <li>setCursor(X, Y) sets the text origin (top-left is (0, 0)).</li>
        </ul>     
    </li>    
    <li><strong>I2C Address</strong>
        <ul>
            <li>0x3C is the default I2C address for most OLEDs in AlphaBot2.</li>
        </ul>     
    </li>    
</ul>