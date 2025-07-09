import{_ as a,c as s,o as e,ae as i}from"./chunks/framework.Dq8kYo8j.js";const u=JSON.parse('{"title":"Simple Activities - Print Distance","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/Ultrasonic/hc1.md","filePath":"Sensors/Ultrasonic/hc1.md"}'),p={name:"Sensors/Ultrasonic/hc1.md"};function t(l,n,r,o,c,d){return e(),s("div",null,n[0]||(n[0]=[i(`<h1 id="simple-activities-print-distance" tabindex="-1">Simple Activities - Print Distance <a class="header-anchor" href="#simple-activities-print-distance" aria-label="Permalink to &quot;Simple Activities - Print Distance&quot;">​</a></h1><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-label="Permalink to &quot;Problem Statement&quot;">​</a></h2><ul><li>Write a code to Alphabot so that the readings of Ultrasonic Sensor is Displayed in the Serial Monitor.</li></ul><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#define trigPin 3</span></span>
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
<span class="line"><span>}  }</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to code Yourself and Print the Distance </li></ul>`,8)]))}const m=a(p,[["render",t]]);export{u as __pageData,m as default};
