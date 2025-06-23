# Motor Wheels

## Working 


### Trajectories Of the Robot

<p>The robot has two motors, namely the left-wheel motor and the right-wheel motor,which can be independently controlled by the controller code. By varying the rate of rotation, or simply the speed of the wheels, we can vary the trajectory or the path travelled by the robot.</p>

<p>The Wheels can Rotoate either <strong> Clockwise Or Anti Clockwise</strong></p>



<center>
<img src="/img/Move.jpg" width="1000" height="1000">
</center>

#### ClockWise Direction

<ul>
    <li>To Make the Motor Wheel Rotate ,<strong>Positive voltage is applied to the armature and the winding is connected to the negative part.</strong></li>
</ul>

#### Anti-Clockwise Direction

<ul>
    <li>To make the Motor Wheel rotate, polarity is reversed. <strong>Positive voltage is applied to the winding and the armature is connected to the negative part</strong>.</li>
</ul>

>:warning: **Warning:** The Speed of the Motor should be somehow higher (say ~150 RPM) To overcome inertia   .

## Specifications

<ol>
    <li>Motor Type
        <ul>
            <li>2x TT gear motors (6V DC)</li>
            <li>Metal gearbox for durability</li>
            <li>~200 RPM at full speed</li>
        </ul>
    </li>
    <li>Motor Control
        <ul>
            <li>L298P driver chip</li>
            <li>PWM speed control</li>
            <li>Bidirectional operation (forward/reverse)</li>
        </ul>
    </li>
    <li>Power
        <ul>
            <li>6V operating voltage</li>
            <li>300mA typical current draw (per motor)</li>
            <li>2A peak current capacity</li>
        </ul>
    </li>
</ol>


## L293D (Motor Driver)

<center>
<img src="/img/L293D.jpg" width="400" height="400">
</center>

<ul>
    <li> Need for Motor Driver The 20mA current limit of microcontroller port pins is insufficient for driving motors, especially DC motors that may require up to 500mA for maximum speed.</li>
    <li> To overcome this limitation, a motor driver like the L293D is needed. </li>
    <li> The L293D provides higher current and voltage levels, serving as an interface between the microcontroller and the motor, ensuring safe and efficient motor operation.</li>
    <li>The L293D motor driver is capable of handling higher currents and voltages, making it suitable for driving motors with higher power requirements.</li>
    <li>It typically contains multiple H-bridges, allowing for control of the motor's direction and speed.</li>
</ul>

## Input For Motor Wheels Rotation

| Direction    | Left Forward | Left Backwards| Right Forward | Right Backwards |
| ------------ | -----------  |-------------- |---------------|-----------------|         
| Forward      | 1            |0              |1              |0                |
| Backward     | 0            |1              |0              |1                |
| Left         | 0            |1              |1              |0                |    
|Right         | 1            |0              |0              |1                |
|Soft Left     | 0            |0              |0              |1                |
|Soft Right    | 1            |0              |0              |0                |
|Stop          | 0            |0              |0              |0                |



