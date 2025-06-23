export default {

    base: '/alphabotv2/', 
    title: 'AlphaBot-V2-Ar Documentation',

  themeConfig: {
    sidebar: [
      {       
        items: [
            { text: 'Introduction To Alphabot V2 Ar', link: '/index.md' },
            
          ]
      },

      {
        text: 'Sensors',
       collapsed : true,
        items: [
            {
                text:"Motor Wheels",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/Sensors/wheels/wheel.md' },
                    {text:"Activities",
                    collapsed:false,
                    items:[
                        {text:'Motion Control',link:'/Sensors/wheels/rect.md'},
                        {text:'Square Motion',link:'/Sensors/wheels/shapes.md'},
                        {text:'Circular Motion',link:'/Sensors/wheels/circ.md'}
                    ]

                    }
                ]
                
            },
            {
                text:"RGB Led",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/Sensors/RGB/learnrgb.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Sequential LED Activation', link: '/Sensors/RGB/rgb1.md'},
                            {text: 'Paired LED Activation', link: '/Sensors/RGB/rgb2.md'},
                            {text: 'Full Forward & Reverse Sequence', link: '/Sensors/RGB/rgb3.md'}
                        ]
                     },
                    
                ]
                
            },
            {
                text:"Buzzer",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/Sensors/Buzzer/buzinfo.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Beep Sound', link: '/Sensors/Buzzer/buzcode1.md'},
                            {text: 'Musical Tone', link: '/Sensors/Buzzer/buzcode2.md'},
                           
                        ]
                     },
                ]
                
            },
            {
                text:"Joystick",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/Sensors/Joystick/joy.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Joystick Direction', link: '/Sensors/Joystick/joy1.md'},
                            
                        ]
                     },
                ]
                
            },
            {
                text:"OLED",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/Sensors/OLED/oled.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Printing Name', link: '/Sensors/OLED/oled1.md'},
                            {text: 'Printing Circle', link: '/Sensors/OLED/oled2.md'},
                            {text: 'Printing Rectangle', link: '/Sensors/OLED/oled3.md'},
                            {text: 'Printing Triangle', link: '/Sensors/OLED/oled4.md'},
                            {text: 'Printing Stickman', link: '/Sensors/OLED/oled5.md'},
                            
                        ]
                     },
                    
                ]
                
            },
            {
                text:"IR",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/Sensors/IR/learnIR.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Decodes IR Signal', link: '/Sensors/IR/ir1.md'},
                            
                        ]
                     },
                ]
                
            },
            {
                text:"Ultasonic Distance Sensor",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/Sensors/Ultrasonic/learnultra.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Print Distance', link: '/Sensors/Ultrasonic/hc1.md'},
                            
                        ]
                     },
                ]
                
            },
            {
                text:"White Line Sensor",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/Sensors/line/linelearn.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Print Sensor Value', link: '/Sensors/line/line1.md'},
                            
                        ]
                     },
                ]
                
            },

          ]
      },
      {
        text: 'Challenges',
       collapsed : true,
        items: [
            { text: 'Task 1', link: '/challenges/joymotor.md' },
                    { text: 'Task 2', link: '/challenges/joyoled.md' },
                    { text: 'Task 3', link: '/challenges/irrgb.md' },
                    { text: 'Task 4', link: '/challenges/rgbirmotor.md' },
                    { text: 'Task 5', link: '/challenges/urbm.md' },
                    { text: 'Task 6', link: '/challenges/edge.md' },
                    { text: 'Task 7', link: '/challenges/white.md' },
            
          ]
      }


    ]
  },

 
}

