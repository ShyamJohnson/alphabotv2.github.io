import{_ as a}from"./chunks/videosh.BUczNqhx.js";import{_ as n,c as p,o as e,ae as i}from"./chunks/framework.Dq8kYo8j.js";const W=JSON.parse('{"title":"Simple Activities - Square Motion","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/wheels/shapes.md","filePath":"Sensors/wheels/shapes.md"}'),l={name:"Sensors/wheels/shapes.md"};function t(o,s,r,c,d,h){return e(),p("div",null,s[0]||(s[0]=[i(`<h1 id="simple-activities-square-motion" tabindex="-1">Simple Activities - Square Motion <a class="header-anchor" href="#simple-activities-square-motion" aria-label="Permalink to &quot;Simple Activities - Square Motion&quot;">​</a></h1><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-label="Permalink to &quot;Problem Statement&quot;">​</a></h2><ul><li>Write a code to Alphabot which has to make the robot move in a square pattern: forward for 1 second, turn right (pivot) for 0.4 seconds, and repeat 4 times before stopping completely.</li></ul><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Motor Control Pins (replace with your actual pins)</span></span>
<span class="line"><span>#define PWMA 6</span><span> // Motor Speed L</span></span>
<span class="line"><span>#define PWMB 5</span><span> // Motor Speed R</span></span>
<span class="line"><span>#define AIN2 A0</span><span> // L - Forward</span></span>
<span class="line"><span>#define AIN1 A1</span><span> // L - Backward</span></span>
<span class="line"><span>#define BIN1 A2</span><span> // R - Backward</span></span>
<span class="line"><span>#define BIN2 A3</span><span> // R - Forward</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int Speed = 150;  // Base speed (0-255)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  // Initialize motor control pins</span></span>
<span class="line"><span>  pinMode(PWMA, OUTPUT);</span></span>
<span class="line"><span>  pinMode(AIN1, OUTPUT);</span></span>
<span class="line"><span>  pinMode(AIN2, OUTPUT);</span></span>
<span class="line"><span>  pinMode(PWMB, OUTPUT);</span></span>
<span class="line"><span>  pinMode(BIN1, OUTPUT);</span></span>
<span class="line"><span>  pinMode(BIN2, OUTPUT);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  delay(2000);  // Initial delay before movement</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  // Draw a square (4 sides with 4 right turns)</span></span>
<span class="line"><span>  for (int i = 0; i &lt; 4; i++) {</span></span>
<span class="line"><span>    Forward();      // Move straight</span></span>
<span class="line"><span>    delay(1000);    // Adjust for desired side length</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Stop();         // Brief stop</span></span>
<span class="line"><span>    delay(700);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Right();        // Turn right 90 degrees</span></span>
<span class="line"><span>    delay(400);     // THIS IS CRUCIAL - CALIBRATE THIS VALUE</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Stop();         // Brief stop</span></span>
<span class="line"><span>    delay(700);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  Stop();           // Final stop</span></span>
<span class="line"><span>  while(1);         // Infinite loop to prevent restart</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Your motor control functions</span></span>
<span class="line"><span>void Forward() {</span></span>
<span class="line"><span>  analogWrite(PWMA, Speed);</span></span>
<span class="line"><span>  analogWrite(PWMB, Speed);</span></span>
<span class="line"><span>  digitalWrite(AIN1, LOW);</span></span>
<span class="line"><span>  digitalWrite(AIN2, HIGH);</span></span>
<span class="line"><span>  digitalWrite(BIN1, LOW);</span></span>
<span class="line"><span>  digitalWrite(BIN2, HIGH);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Right() {  // Pivot turn (right motor backward, left motor forward)</span></span>
<span class="line"><span>  analogWrite(PWMA, Speed);</span></span>
<span class="line"><span>  analogWrite(PWMB, Speed);</span></span>
<span class="line"><span>  digitalWrite(AIN1, HIGH);  // Right motor BACKWARD</span></span>
<span class="line"><span>  digitalWrite(AIN2, LOW);</span></span>
<span class="line"><span>  digitalWrite(BIN1, LOW);   // Left motor FORWARD</span></span>
<span class="line"><span>  digitalWrite(BIN2, HIGH);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Stop() {</span></span>
<span class="line"><span>  analogWrite(PWMA, 0);</span></span>
<span class="line"><span>  analogWrite(PWMB, 0);</span></span>
<span class="line"><span>  digitalWrite(AIN1, LOW);</span></span>
<span class="line"><span>  digitalWrite(AIN2, LOW);</span></span>
<span class="line"><span>  digitalWrite(BIN1, LOW);</span></span>
<span class="line"><span>  digitalWrite(BIN2, LOW);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><div class="video-container"><video controls width="75%"><source src="`+a+'" type="video/mp4"> Your browser doesn&#39;t support HTML5 video. </video></div><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to make the robot move in a circular motion. </li></ul>',10)]))}const g=n(l,[["render",t]]);export{W as __pageData,g as default};
