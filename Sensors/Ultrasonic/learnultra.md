# Ultrasonic Distance Sensor (HC-SR04)

## Overview

<p>An ultrasonic distance sensor is a device that measures distance to an object using sound waves beyond human hearing range (typically 40kHz). The HC-SR04 is a common module used in robotics projects like the Alphabot V2.</p>

## 

<center>
<img src="/img/HC.jpg" width="500" height="700">
</center>


## Key Features

<ul>
    <li>Operating Voltage: 5V DC</li>
    <li>Measuring Range: 2cm - 400cm (practical limit often 200cm)</li>
    <li>Accuracy: ~3mm</li>
    <li>Measuring Angle: 15° cone</li>
    <li>Response Time: 100ms between measurements</li>
</ul>

## Key Components

<ul>
    <li>Transmitter: Emits ultrasonic pulses</li>
    <li>Receiver: Detects reflected pulses (echoes)</li>
    <li>Control circuit: Manages timing and signal processing</li></ul>

## Working

<ul>
    <li>The sensor emits an ultrasonic burst (8 pulses at 40kHz)</li>
    <li>The sound travels through air at ~343 m/s (varies with temperature)</li>
    <li>The wave reflects off objects in its path</li>
    <li>The sensor measures the time between transmission and echo reception</li>
    <li>Distance is calculated using: Distance = (Speed of Sound × Time)/2</li>
</ul>