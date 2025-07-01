import{_ as s,c as a,o as p,ae as e}from"./chunks/framework.BtEkjhVd.js";const m=JSON.parse('{"title":"Simple Activities","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/wheels/circ.md","filePath":"Sensors/wheels/circ.md"}'),i={name:"Sensors/wheels/circ.md"};function l(t,n,o,c,r,d){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="simple-activities" tabindex="-1">Simple Activities <a class="header-anchor" href="#simple-activities" aria-label="Permalink to &quot;Simple Activities&quot;">​</a></h1><ul><li>To make the robot move in a <strong>Circular motion</strong>.</li></ul><h3 id="circular-motion" tabindex="-1">Circular Motion <a class="header-anchor" href="#circular-motion" aria-label="Permalink to &quot;Circular Motion&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#define PWMA 5</span><span>     // Right motor PWM</span></span>
<span class="line"><span>#define AIN1 6</span><span>     // Right motor direction 1</span></span>
<span class="line"><span>#define AIN2 7</span><span>     // Right motor direction 2</span></span>
<span class="line"><span>#define PWMB 8</span><span>     // Left motor PWM</span></span>
<span class="line"><span>#define BIN1 9</span><span>     // Left motor direction 1</span></span>
<span class="line"><span>#define BIN2 10</span><span>    // Left motor direction 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Movement Parameters</span></span>
<span class="line"><span>int Speed = 150;   // Base speed (0-255)</span></span>
<span class="line"><span>int circleTime = 5000; // Time to complete full circle (ms)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  // Initialize motor pins</span></span>
<span class="line"><span>  pinMode(PWMA, OUTPUT);</span></span>
<span class="line"><span>  pinMode(AIN1, OUTPUT);</span></span>
<span class="line"><span>  pinMode(AIN2, OUTPUT);</span></span>
<span class="line"><span>  pinMode(PWMB, OUTPUT);</span></span>
<span class="line"><span>  pinMode(BIN1, OUTPUT);</span></span>
<span class="line"><span>  pinMode(BIN2, OUTPUT);</span></span>
<span class="line"><span>  delay(2000);     // Startup delay</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  // Move in a continuous circle</span></span>
<span class="line"><span>  CircleRight();    // Right-turning circle</span></span>
<span class="line"><span>  delay(circleTime);</span></span>
<span class="line"><span>  Stop();</span></span>
<span class="line"><span>  while(1);        // Stop after one full circle</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Custom Circle Function (Right-turning)</span></span>
<span class="line"><span>void CircleRight() {</span></span>
<span class="line"><span>  // Right motor slower = tighter turn</span></span>
<span class="line"><span>  analogWrite(PWMA, Speed * 0.6);  // Right motor at 60% speed</span></span>
<span class="line"><span>  analogWrite(PWMB, Speed);        // Left motor at full speed</span></span>
<span class="line"><span>  digitalWrite(AIN1, LOW);</span></span>
<span class="line"><span>  digitalWrite(AIN2, HIGH);</span></span>
<span class="line"><span>  digitalWrite(BIN1, LOW);</span></span>
<span class="line"><span>  digitalWrite(BIN2, HIGH);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><ul><li>The robot will move in a continuous right-turning circle for 5 seconds, then stop permanently.</li></ul>`,6)]))}const h=s(i,[["render",l]]);export{m as __pageData,h as default};
