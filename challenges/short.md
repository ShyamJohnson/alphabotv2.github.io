# Task 10 - Line Maze Solving Alphabot (Shortest Path)


## Task 

### Finding The Shortest Path Possible to Solve The Maze Using Alphabot
###


## Functions To Do

<ol>
    <li><strong>Sensor & Movement Logic</strong>
        <ul>
            <li>Read 5 IR sensors to detect the white line and junctions, storing values in an array.</li>
            <li>Calibrate sensors at startup for accurate detection.</li>
            <li>Continuously process sensor values and round for stability.</li>
            <li>Detect junctions (T, L, +, dead ends) using sensor patterns and logic.</li>
            <li>Implement maze-solving logic: record the path taken, optimize it for the shortest route using backtracking and path simplification, and update path memory to avoid unnecessary loops.</li>
            <li>Switch to shortest path replay mode after mapping, following the optimized path memory.</li>
            <li>Stop at the end of the maze or when a goal is detected.</li>
        </ul>
    </li>
    <li><strong>Motor Control</strong>
        <ul>
            <li>Use PID control (proportional, integral, derivative) to follow the line and adjust motor speeds for smooth tracking.</li>
            <li>Use PWM to control left and right motor speeds independently.</li>
            <li>Implement functions for turning left, right, moving forward, and making 180-degree turns using motor direction and speed control.</li>
            <li>Stop motors when needed for precise maneuvers or at the end of the maze.</li>
        </ul>
    </li>
    <li><strong>Path Recording & Optimization</strong>
        <ul>
            <li>Record each movement (L, R, S, B) at junctions into a path array.</li>
            <li>Optimize the path by removing unnecessary loops and dead ends to find the shortest route.</li>
            <li>Replay the optimized path for efficient maze solving.</li>
        </ul>
    </li>
    <li><strong>Feedback & Debugging</strong>
        <ul>
            <li>Print sensor values, path memory, and power difference to the serial monitor for debugging and calibration.</li>
        </ul>
    </li>
</ol>

## Output

##
## Solution 

<a href="https://github.com/deepaavudiappan/AlphabotV2/tree/e5715e0cc9439e9033e58b9eef1fa5abf4e590f2/Alphabot%20V2%20-%20Ar/Activities/Maze_Solving_Shortest_Path" target="_blank">Maze_Solving_Shortest_Path</a>



<h6> (Please Go To Main branch)</h6>