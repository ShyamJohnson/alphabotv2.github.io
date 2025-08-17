import{_ as s,c as a,o as i,ae as e}from"./chunks/framework.Dq8kYo8j.js";const h=JSON.parse('{"title":"Simple Activities - Print Distance","description":"","frontmatter":{},"headers":[],"relativePath":"public/Sensors/Ultrasonic/hc1.md","filePath":"public/Sensors/Ultrasonic/hc1.md"}'),p={name:"public/Sensors/Ultrasonic/hc1.md"};function l(t,n,c,r,o,d){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="simple-activities-print-distance" tabindex="-1">Simple Activities - Print Distance <a class="header-anchor" href="#simple-activities-print-distance" aria-label="Permalink to &quot;Simple Activities - Print Distance&quot;">​</a></h1><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-label="Permalink to &quot;Problem Statement&quot;">​</a></h2><ul><li>Write a code to Alphabot so that the readings of Ultrasonic Sensor is Displayed in the Serial Monitor.</li></ul><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#define trigPin 3</span></span>
<span class="line"><span>#define echoPin 2</span></span>
<span class="line"><span>void setup(){</span></span>
<span class="line"><span>  Serial.begin(9600);</span></span>
<span class="line"><span>  pinMode(trigPin,OUTPUT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  pinMode(echoPin,INPUT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> void loop(){</span></span>
<span class="line"><span>  long duration,dist;</span></span>
<span class="line"><span>  digitalWrite(trigPin,LOW);</span></span>
<span class="line"><span>  delayMicroseconds(2);</span></span>
<span class="line"><span>  digitalWrite(trigPin,HIGH);</span></span>
<span class="line"><span>  delayMicroseconds(2);</span></span>
<span class="line"><span>  digitalWrite(trigPin,LOW);</span></span>
<span class="line"><span>  duration = pulseIn(echoPin,HIGH);</span></span>
<span class="line"><span>  dist = (duration/2) / 29.1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (dist &gt;=200 || dist &lt;= 0){</span></span>
<span class="line"><span>    Serial.println(&quot;OUT OF RANGE&quot;);</span></span>
<span class="line"><span>    Serial.println(dist);</span></span>
<span class="line"><span>    Serial.println(&quot;Cm&quot;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  }else {</span></span>
<span class="line"><span>    Serial.println(dist);</span></span>
<span class="line"><span>    Serial.println(&quot;Cm&quot;);</span></span>
<span class="line"><span>    delay(200); </span></span>
<span class="line"><span>}  }</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to code Yourself and Print the Distance </li></ul> # Simple Activities <h2 id="distance-reading-using-ultrasonic-distance-sensor" tabindex="-1">Distance Reading Using Ultrasonic Distance Sensor <a class="header-anchor" href="#distance-reading-using-ultrasonic-distance-sensor" aria-label="Permalink to &quot;Distance Reading Using Ultrasonic Distance Sensor&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#define trigPin 3</span></span>
<span class="line"><span>#define echoPin 2</span></span>
<span class="line"><span>void setup(){</span></span>
<span class="line"><span>  Serial.begin(9600);</span></span>
<span class="line"><span>  pinMode(trigPin,OUTPUT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  pinMode(echoPin,INPUT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> void loop(){</span></span>
<span class="line"><span>  long duration,dist;</span></span>
<span class="line"><span>  digitalWrite(trigPin,LOW);</span></span>
<span class="line"><span>  delayMicroseconds(2);</span></span>
<span class="line"><span>  digitalWrite(trigPin,HIGH);</span></span>
<span class="line"><span>  delayMicroseconds(2);</span></span>
<span class="line"><span>  digitalWrite(trigPin,LOW);</span></span>
<span class="line"><span>  duration = pulseIn(echoPin,HIGH);</span></span>
<span class="line"><span>  dist = (duration/2) / 29.1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (dist &gt;=200 || dist &lt;= 0){</span></span>
<span class="line"><span>    Serial.println(&quot;OUT OF RANGE&quot;);</span></span>
<span class="line"><span>    Serial.println(dist);</span></span>
<span class="line"><span>    Serial.println(&quot;Cm&quot;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  }else {</span></span>
<span class="line"><span>    Serial.println(dist);</span></span>
<span class="line"><span>    Serial.println(&quot;Cm&quot;);</span></span>
<span class="line"><span>    delay(200); </span></span>
<span class="line"><span>}  }</span></span></code></pre></div><h2 id="output-1" tabindex="-1">Output <a class="header-anchor" href="#output-1" aria-label="Permalink to &quot;Output&quot;">​</a></h2><ul><li>This code provides continuous distance readings that could be used by the Alphabot V2 </li></ul><h2 id="exercise-🤖-1" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖-1" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to code Yourself and Print the Distance </li></ul>`,15)]))}const g=s(p,[["render",l]]);export{h as __pageData,g as default};
