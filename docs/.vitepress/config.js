export default {

    base: '/alphabotv2.github.io/', 
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
                    { text: 'Learn Section', link: '/sensors/wheels/wheel.md' },
                    {text:"Activities",
                    collapsed:false,
                    items:[
                        {text:'Motion Control',link:'/sensors/wheels/rect.md'},
                        {text:'Square Motion',link:'/sensors/wheels/shapes.md'},
                        {text:'Circular Motion',link:'/sensors/wheels/circ.md'}
                    ]

                    }
                ]
                
            },
            {
                text:"RGB Led",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/sensors/RGB/learnrgb.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Sequential LED Activation', link: '/sensors/RGB/rgb1.md'},
                            {text: 'Paired LED Activation', link: '/sensors/RGB/rgb2.md'},
                            {text: 'Full Forward & Reverse Sequence', link: '/sensors/RGB/rgb3.md'}
                        ]
                     },
                    
                ]
                
            },
            {
                text:"Buzzer",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/sensors/Buzzer/buzinfo.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Beep Sound', link: '/sensors/Buzzer/buzcode1.md'},
                            {text: 'Musical Tone', link: '/sensors/Buzzer/buzcode2.md'},
                           
                        ]
                     },
                ]
                
            },
            {
                text:"Joystick",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/sensors/Joystick/joy.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Joystick Direction', link: '/sensors/Joystick/joy1.md'},
                            
                        ]
                     },
                ]
                
            },
            {
                text:"OLED",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/sensors/OLED/oled.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Printing Name', link: '/sensors/OLED/oled1.md'},
                            {text: 'Printing Circle', link: '/sensors/OLED/oled2.md'},
                            {text: 'Printing Rectangle', link: '/sensors/OLED/oled3.md'},
                            {text: 'Printing Triangle', link: '/sensors/OLED/oled4.md'},
                            {text: 'Printing Stickman', link: '/sensors/OLED/oled5.md'},
                            
                        ]
                     },
                    
                ]
                
            },
            {
                text:"IR",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/sensors/IR/learnIR.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Decodes IR Signal', link: '/sensors/IR/ir1.md'},
                            
                        ]
                     },
                ]
                
            },
            {
                text:"Ultasonic Distance Sensor",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/sensors/Ultrasonic/learnultra.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Print Distance', link: '/sensors/Ultrasonic/hc1.md'},
                            
                        ]
                     },
                ]
                
            },
            {
                text:"White Line Sensor",
                collapsed:true,
                items:[
                    { text: 'Learn Section', link: '/sensors/line/linelearn.md' },
                    { text: 'Activities',
                        collapsed:false,
                        items:[
                            {text: 'Print Sensor Value', link: '/sensors/line/line1.md'},
                            
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

