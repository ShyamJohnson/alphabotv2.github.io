# AlphaBot V2 - Ar Documentation

## Overview

The AlphaBot V2 Arduino version is a complete robotics development platform specifically designed for Arduino-based projects, offering a robust foundation for learning embedded systems and robotics programming. Built around the popular ATmega328P microcontroller (compatible with Arduino Uno/Nano), this kit provides all necessary components for creating intelligent robotic applications while maintaining beginner-friendly accessibility. The heart of the system features a custom-designed PCB that seamlessly integrates motor control, sensor inputs, and expansion capabilities in a single compact board, eliminating the wiring complexity that often hinders beginners.

Central to its design is the L298P motor driver module, which provides dual H-bridge control for the included TT gear motors, allowing precise speed and direction management through PWM signals.  For environmental interaction, the platform includes three TCRT5000-based infrared sensors mounted at the front for line following applications, each adjustable via onboard potentiometers to fine-tune detection thresholds. The HC-SR04 ultrasonic sensor module offers reliable distance measurement capabilities with a 2cm to 4m range, essential for obstacle detection and avoidance behaviors.

What makes the AlphaBot V2 particularly valuable for Arduino developers is its thoughtful integration of peripherals. The included HC-05 Bluetooth module (using UART communication) enables wireless control and data monitoring, while a multi-color RGB LED and buzzer provide visual and auditory feedback for debugging and user interaction. The board features clearly labeled pin headers that maintain compatibility with standard Arduino shields while providing convenient access to all onboard sensors and actuators. 


<center>
<img src="/img/nabor-alphabot-2-dlya-arduino.jpg" width="500" height="700">
</center>

>Alphabot V2 with Aurdino or RaspBerry Pi

## Components 

<ul>
    <li>AlphaBot2 control interface: for connecting sorts of the controller adapter board</li>
    <li>Ultrasonic module interface</li>
    <li>Obstacle avoiding indicators</li>
    <li>Omni-direction wheel</li>
    <li>ST188: reflective infrared photoelectric sensor, for obstacle avoiding</li>
    <li>ITR20001/T: reflective infrared photoelectric sensor, for line tracking</li>
    <li>Potentiometer for adjusting obstacle avoiding range</li>
    <li>TB6612FNG dual H-bridge motor driver</li>
    <li>LM393 voltage comparator</li>
    <li>N20 micro gear motor reduction rate 1:30, 6V/600RPM</li>
    <li>Rubber wheels diameter 42mm, width 19mm</li>
    <li>Power switch</li>
    <li>Battery holder: supports 14500 batteries</li>
    <li>WS2812B: true-color RGB LEDs</li>
   <li> Battery charging indicator</li>
    <li>5V USB battery charging port</li>
    <li>Power indicator</li>

</ul>


## Sensors

<ul> 
    <li>Xbee connector: for connecting dual-mode Bluetooth module, remotely control the robot via Bluetooth</li>
    <li>IR receiver</li>
    <li>PC8574: I/O expander, SPI interface</li>
    <li>Arduino peripheral jumpers</li>
    <li>TLC1543: 10-bit AD acquisition chip</li>
    <li>Buzzer</li>
    <li>0.96inch OLED SSD1306 driver, 128x64 resolution</li>
    <li>Joystick</li>
</ul>