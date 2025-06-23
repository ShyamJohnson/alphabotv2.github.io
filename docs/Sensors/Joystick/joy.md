# Joystick

## Overview

<p>The joystick in the AlphaBot2 provides an intuitive way to interact with the robot, making it great for beginners learning about analog inputs and motor control. With some programming, you can extend its functionality for more advanced projects.
</p>


<center>
<img src="/img/joystick.jpg" width="500" height="700">
</center>

## Key Feature

<ul>
    <li><strong>Movements In Joystick</strong>
        <ul>
            <li>Two analog axes (X and Y) – Measures movement in horizontal and vertical directions.</li>
            <li>A push-button (Z-axis) – Can be pressed down for an additional input.</li>
        </ul>
    </li>
    <li><strong>Analog Inputs (X & Y)</strong>
        <ul>
            <li>Moving it forward/backward or left/right changes the voltage, which is read by the microcontroller.</li>
            <li>When centered, it outputs ~2.5V (or a mid-range ADC value).</li>
        </ul>
    </li>
    <li><strong>Digital Input (Button Press)</strong>
        <ul>
            <li>The joystick can be pressed down, acting like a button, which is useful for triggering actions (e.g., changing modes)..</li>
        </ul>
    </li>
    
</ul>


## Working

<ul>
    <li><strong>Joystick Module</strong>
        <ul>
            <li>Connected to the PCF8574 I/O expander (I2C address 0x20).</li>
            <li>Uses 5 bits (bits 0-4) to represent directions (Up, Down, Left, Right, Center press).</li>
            <li>The remaining 3 bits (bits 5-7) are likely used for other functions (e.g., buzzer).</li>
        </ul>
    </li>
    <li><strong>PCF8574Read()</strong>
        <ul>
            <li>Reads 1 byte from the PCF8574 (joystick state).</li>
            <li>Example: If "Up" is pressed, it returns 0xFE (binary 11111110).</li>
        </ul>
    </li>
    <li><strong>PCF8574Write(data)</strong>
        <ul>
            <li>Writes a byte to the PCF8574 (used to reset/update I/O states).</li>
        </ul>     
    </li>    
    <li><strong>Reading Joystick State (PCF8574Read() | 0xE0)</strong>
        <ul>
            <li>The | 0xE0 operation ensures only the joystick bits (0-4) are checked.</li>
        </ul>     
    </li>    
</ul>

## Joystick Logic

| Direction       | HEX VALUE          | BINARY         |
| ------------ | -----------  |-------------- |      
| Up          | 0xFE          |11111110 (Bit 0 = 0)              |
| Right        | 0xFD            |11111101  (Bit 1 = 0)            |
| Left         | 0xFB            |11111011 (Bit 2 = 0)              |
| Down       | 0xF7          |11110111 (Bit 3 = 0)            |
| Center      | 0xEF          |11101111 (Bit 4 = 0)              |
| No Press         | 0xFF            |11111111 (All bits high)|
