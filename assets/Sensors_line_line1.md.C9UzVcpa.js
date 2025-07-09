import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.Dq8kYo8j.js";const h=JSON.parse('{"title":"Simple Activities - Print Sensor Values","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/line/line1.md","filePath":"Sensors/line/line1.md"}'),i={name:"Sensors/line/line1.md"};function l(t,s,r,o,c,d){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="simple-activities-print-sensor-values" tabindex="-1">Simple Activities - Print Sensor Values <a class="header-anchor" href="#simple-activities-print-sensor-values" aria-label="Permalink to &quot;Simple Activities - Print Sensor Values&quot;">​</a></h1><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-label="Permalink to &quot;Problem Statement&quot;">​</a></h2><ul><li>Write a code to Alphabot so that it reads values from 5 infrared (IR) line sensors and prints their readings to the Serial Monitor.</li></ul><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#define sensor_Num 5</span></span>
<span class="line"><span>unsigned int sensorV[sensor_Num];</span></span>
<span class="line"><span>#define Clock  13</span></span>
<span class="line"><span>#define Addr   12</span></span>
<span class="line"><span>#define DO     11</span></span>
<span class="line"><span>#define CS     10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void AnalogRead(unsigned int *sensorV){</span></span>
<span class="line"><span>  char i,j;</span></span>
<span class="line"><span>  unsigned int values[] = {0,0,0,0,0,0,0,0}; // Utilising only five positions (5 IR sensors) But the sysytem needs 8 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for(j = 0;j &lt; sensor_Num + 1;j++)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    digitalWrite(CS,LOW); // To activate Sensors Array</span></span>
<span class="line"><span>    for(i = 0;i &lt; 10;i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      if(i&lt;4) // 4-Bit Binary Numbers </span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        if((j &gt;&gt; (3 - i) &amp; 0x01)) // </span></span>
<span class="line"><span>          digitalWrite(Addr,HIGH);</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>          digitalWrite(Addr,LOW);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      else</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        digitalWrite(Addr,LOW);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      values[j] &lt;&lt;= 1;</span></span>
<span class="line"><span>      if(digitalRead(DO)) // if DataOut = 1 , OR Operation is Done</span></span>
<span class="line"><span>      values[j] |= 0x01;</span></span>
<span class="line"><span>      digitalWrite(Clock,HIGH);</span></span>
<span class="line"><span>      digitalWrite(Clock,LOW);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for(i = 0;i &lt; 2;i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      digitalWrite(Clock,HIGH);</span></span>
<span class="line"><span>      digitalWrite(Clock,LOW);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    digitalWrite(CS,HIGH);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  for(i = 0;i &lt; sensor_Num;i++)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    sensorV[i] = values[i+1];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  Serial.begin(115200);</span></span>
<span class="line"><span>  pinMode(Clock, OUTPUT);</span></span>
<span class="line"><span>  pinMode(Addr, OUTPUT);</span></span>
<span class="line"><span>  pinMode(DO, INPUT_PULLUP);</span></span>
<span class="line"><span>  pinMode(CS, OUTPUT);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  AnalogRead(sensorV);</span></span>
<span class="line"><span>  int sensors[5] = {0};</span></span>
<span class="line"><span>  for (int i = 0;i &lt; sensor_Num ; i++){</span></span>
<span class="line"><span>    Serial.print(&quot;The sensor &quot;);</span></span>
<span class="line"><span>    Serial.print(i);</span></span>
<span class="line"><span>    Serial.print(&quot; is &quot;);</span></span>
<span class="line"><span>    Serial.println(sensorV[i]);</span></span>
<span class="line"><span>    sensors[i] += sensorV[i];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  delay(100);</span></span>
<span class="line"><span>  Serial.println();</span></span>
<span class="line"><span>  Serial.println();</span></span>
<span class="line"><span>  Serial.println();}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to code Yourself and Print the Value and Check the Readings when Alphabot is in different position in White line Track</li></ul>`,8)]))}const m=n(i,[["render",l]]);export{h as __pageData,m as default};
