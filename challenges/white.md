# Task 7 - Line Following Alphabot



## Task 

### Line Following Alphabot
###


## Functions To Do

<ol>
    <li><strong>Sensor & Movement Logic</strong>
        <ul>
            <li>Use 5 IR sensors to read the white line position and store values in an array.</li>
            <li>Calibrate sensors at startup for accurate detection.</li>
            <li>Continuously read sensor values and round them for stability.</li>
            <li>Calculate the line position using a weighted sum for proportional control.</li>
            <li>Implement PID control (proportional, integral, derivative) to follow the line smoothly.</li>
            <li>Adjust motor speeds based on PID output to keep the robot centered on the line.</li>
        </ul>
    </li>
    <li><strong>Motor Control</strong>
        <ul>
            <li>Use PWM to control left and right motor speeds independently.</li>
            <li>Implement functions for turning left, right, and making 180-degree turns using motor direction and speed control.</li>
            <li>Stop motors when needed for precise maneuvers or at the end of the line.</li>
        </ul>
    </li>
    <li><strong>Feedback & Debugging</strong>
        <ul>
            <li>Print sensor values and calculated positions to the serial monitor for debugging and calibration.</li>
        </ul>
    </li>
</ol>

## Output

##
## Solution 

<a href="https://github.com/deepaavudiappan/AlphabotV2/tree/00155f95efc2b72ecd84d1d14afa7b96079c1fd0/Alphabot%20V2%20-%20Ar/Activities/whitelinesensor/whitelinesensor" target="_blank">White_line_tracking</a>

