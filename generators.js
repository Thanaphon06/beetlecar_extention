
        // servo Start ////////////////////////////////
        Blockly.Python['servo'] = function(block) { 
          
          Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin,PWM';
          
          var servopins1 = Blockly.Python.provideFunction_(
            'servopins1',
            [
                'def servo_LiftUp(angle):',
                '    PWM(Pin(16), freq=50).duty(int(0.5 * angle + 31))',
                
            ]
        );
        var servopins2 = Blockly.Python.provideFunction_(
          'servopins2',
          [
              'def servo_Clamp(angle):',
              '    PWM(Pin(17), freq=50).duty(int((4/9) * angle + 48))',
              
          ]
      );
        
            var value_pin = block.getFieldValue('pin');
            var value_angle = block.getFieldValue('angle');
      
            var code = ``; 
            if (value_pin == '16') {
              code = `servo_LiftUp(${value_angle})\n`
            if(value_angle >= 90){
              code = `servo_LiftUp(90)\n`
              }
            if(value_angle <= 0){
              code = `servo_LiftUp(0)\n`
            }
          }
            else if(value_pin == '17'){
              code = `servo_Clamp(${value_angle})\n`
            if(value_angle >= 90){
              code = `servo_Clamp(90)\n`
            }
            if(value_angle <= 0){
              code = `servo_Clamp(0)\n`
            }
          }
      
            return code;
          };
          // servo End //////////////////////////////////
          
          
          //03/05/2024
          // buzzer Start ///////////////////////////////
          Blockly.Python['buzzer1'] = function(block) {
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    
        var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
        var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
        
        var code = `beetlecar.buzzerWrite(23, freq=${value_freq}, stop=${value_time})\n`;
        return code;
        };
        Blockly.Python['buzzer2'] = function(block) {
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';  
       
        var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
        var code = `beetlecar.buzzerWrite(23, freq=${value_freq})\n`;
        return code;
        };
        Blockly.Python['buzzer3'] = function(block) {
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  
        var code = `beetlecar.buzzerWrite(23, duty=0)\n`;
        return code;
        };
          
        Blockly.Python['buz_play_music'] = function(block) {
          Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin,PWM';
          Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
        
            //Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
        
              var select_song = block.getFieldValue('music');
  
              var functionName = Blockly.Python.provideFunction_(
                'scale',
                ['scale5 = [261,277,293,311,329,349,369,392,415,440,466,493,0 ,523 , 554 , 587 ,622 , 659 , 698 ,739 , 783 , 830 , 880 , 932 , 987 , 1046 ]',
                 'happy_birthday = [0 , 0 , 2 , 0 ,5 ,4 ,12, 0 ,0 , 2 ,0 ,7 ,5 ,12,0 ,0 ,13 , 9 , 5,4 ,2, 12 , 9 , 9 , 9, 5 , 7 ,5]',
                 'jingle_bell = [4,4,4,12,4,4,4,12,4,7,0,2,4,12,5,5,5,12,5,4,4,4,4,2,2,4,2,12,7]',
                 'mary_little_lamb = [4,2,0,2,4,4,4,12,2,2,2,12,4,7,7,12,4,2,0,2,4,4,4,12,0,2,2,4,2,0]',
                 'badboy = [3,5,7,12,7,3,3,12,3,5,7,5,5,7,3,12,3,5,7,12,7,3,3,12,3,5,7,5,5,7,3,12]',
                 'harry_potter =[11,17,20,19,17,12,24,22,12,19,12,17,20,19,15,12,18,11]',
                ]
              );
  
              
            var functionName = Blockly.Python.provideFunction_(
              'buzzerWrite()',
              ['def ' + 'buzzerWrite(pin, freq=1000, duty=50, stop=0)' + ':',
               '    pwm = PWM(Pin(pin))',
               '    pwm.freq(freq)',
               '    pwm.duty(int(duty / 100 * 1023))',
               '    if stop > 0:',
               '      sleep(stop)',
               '      pwm.duty(0)',
              ]
            );
              code = '';;
              if(select_song == 1){
                code = `for i in happy_birthday:\n    buzzerWrite(23, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
              }else if(select_song == 3){
                code = `for i in jingle_bell:\n    buzzerWrite(23, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
              }else if(select_song == 4){
                code = `for i in mary_little_lamb:\n    buzzerWrite(23, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
              }else if(select_song == 5){
                code = `for i in badboy:\n    buzzerWrite(23, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
              }else if(select_song == 7){
                code = `for i in harry_potter:\n    buzzerWrite(23, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
              }
              return code;
            };
    
          // buzzer End /////////////////////////////////
          //03/05/2024
          // LED Start //////////////////////////////////
  
          Blockly.Python['led_onoff'] = function(block) {
          
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
        
            var dropdown_trig = block.getFieldValue('pin_trig');
            code = '';;
            if(dropdown_trig == 1){
              code = `beetlecar.led_left_on()\n`;
            }else if(dropdown_trig == 2){
              code = `beetlecar.led_left_off()\n`;
            }else if(dropdown_trig == 3){
              code = `beetlecar.led_right_on()\n`;
            }else if(dropdown_trig == 4){
              code = `beetlecar.led_right_off()\n`;
            }
            return code;
          };
          // LED End /////////////////////////////////////
          
          // Ultrasonic Start ////////////////////////////
  
          Blockly.Python['ultra_read'] = function(block) {
            
            Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
            Blockly.Python.definitions_['import_sleep_us'] = 'from machine import time_pulse_us';
            Blockly.Python.definitions_['from_machine_import_pin_pwm'] = 'from machine import Pin,PWM';
            Blockly.Python.definitions_['from_time_import_sleep_us'] = 'from time import sleep_us';
  
            var functionName = Blockly.Python.provideFunction_(
              'distance()',
              ['def ' + 'distance()' + ':',
               '    return read(2, 15)'
              ]
            );
  
            var functionName = Blockly.Python.provideFunction_(
              'read(trig_pin, echo_pin)',
              ['def ' + 'read(trig_pin, echo_pin)' + ':',
               '    trigger = Pin(trig_pin, mode=Pin.OUT)',
               '    echo = Pin(echo_pin, mode=Pin.IN)',
               '    trigger.value(0)',
               '    sleep_us(5)',
               '    trigger.value(1)',
               '    sleep_us(10)',
               '    trigger.value(0)',
               '    try:',
               '        pulse_time = time_pulse_us(echo, 1, 1000000)',
               '        d = (pulse_time / 2) / 29.1',
               '        return int(d) if d < 400 else -1',
               '    except OSError as ex:',
               '        return -1'
              ]
            );
            
            code = 'distance()';
            return [code, Blockly.Python.ORDER_NONE];
          },
  
          
          Blockly.Python['ultra_read_if'] = function(block) {
            Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          
            var math_choice = block.getFieldValue('math');
            var read_number = block.getFieldValue('read_num');
    
           //var read_number = Block.Python.valueToCode(block, 'read_num', Blockly.Python.ORDER_ATOMIC);
          
            code = `beetlecar.distance() ${math_choice} ${read_number}`;
            return [code, Blockly.Python.ORDER_NONE];
          };
          // Ultrasonic End ///////////////////////////////
          
          // Neo_pixel Start //////////////////////////////
          
          Blockly.Python['neopixel_fill_color1'] = function(block) {
          //Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
            //Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
          
            /*Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
            Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
            
            Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
            
            var colour_color = block.getFieldValue('color');
          
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
            var red = parseInt(result[1], 16);
            var green = parseInt(result[2], 16);
            var blue = parseInt(result[3], 16);
          
            var code = `for i in range(beetlecar.np.n): beetlecar.np[i] = (${red},${green}, ${blue})\nbeetlecar.neo_on()\n`;
            return code;
          };
          Blockly.Python['neopixel_off'] = function(block) {
        
            /*Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
            Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
          
            Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
            Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
            
            Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
            
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
        
            
            var code = `for i in range(beetlecar.np.n): beetlecar.np[i] = (0,0,0)\nbeetlecar.neo_on()\n`;
            return code;
          };
          Blockly.Python['neopixel_toggle'] = function(block) {
            Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
            Blockly.Python.definitions_['import_time'] = 'import time';
            /*Blockly.Python.definitions_['import_time'] = 'import time';
            Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
            Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
          
            Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
            Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   */
            Blockly.Python.definitions_['neo_toggle_state'] = 'np_toggle = False';   
            
            //Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
            
        
            
            var tog_colors1 = block.getFieldValue('tog_color1');
            var tog_colors2 = block.getFieldValue('tog_color2');
          
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors1);
            var red = parseInt(result[1], 16);
            var green = parseInt(result[2], 16);
            var blue = parseInt(result[3], 16);
          
            var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors2);
            var red2 = parseInt(result2[1], 16);
            var green2 = parseInt(result2[2], 16);
            var blue2 = parseInt(result2[3], 16);
          
           
            var functionName = Blockly.Python.provideFunction_(
              `neo_tog`,
              [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
              `  global np_toggle`,
              `  np_toggle = not np_toggle`,
              `  if np_toggle:`,
              `      for i in range(beetlecar.np.n):`,
              `          beetlecar.np[i] = (${red}, ${green}, ${blue})`,
              `          time.sleep(0.1) `,
              `  else:`,
              `      beetlecar.np.fill((${red2}, ${green2}, ${blue2}))`,
              `      time.sleep(0.1)`,
              `  beetlecar.neo_on()`]);
          
            var code = '#while True:\nneo_tog()\n'
            //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
            return code;
          };
          Blockly.Python['rainbow_neo'] = function(block) {
            /*Blockly.Python.definitions_['import_time'] = 'from time import sleep_ms';
            Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
            Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
          
            Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
            Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
            
            Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
            Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
            
            
          
            var code = 'beetlecar.rainbow_neo()\n'
            //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
            return code;
          };
          
        
          // Neo_pixel End ////////////////////////////////
          
          // button Start /////////////////////////////////
          Blockly.Python['switch'] = function(block) {
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
            
            
            var dropdown_button = block.getFieldValue('pin');
            
            code = '';;
            if(dropdown_button == 18){
              code = `beetlecar.put_button_a()`;
            }else if(dropdown_button == 5){
              code = `beetlecar.put_button_b()`;
            }
            return [code, Blockly.Python.ORDER_NONE];
          };
          Blockly.Python['switch_toggle'] = function(block) {
            Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
            
           var dropdown_button = block.getFieldValue('pin');
        
           code = '';;
           if(dropdown_button == 18){
             code = `beetlecar.toggle_state_a`;
           }else if(dropdown_button == 5){
             code = `beetlecar.toggle_state_b`;
           }
            return [code, Blockly.Python.ORDER_NONE];
          };
          
          // button End ///////////////////////////////////
  
          //BLUE_START ////////////////////////////////////
  
          /*
        Blockly.Python['blue_con'] = function(block) {
            
            Blockly.Python.definitions_['import_beetlecar_ble'] = 'import beetlecar_BLE';
            
            var bluetooth_name = Blockly.Python.valueToCode(block, 'blue_name', Blockly.Python.ORDER_ATOMIC);
            var code = `beetlecar_BLE.ble = beetlecar_BLE.ESP32_BLE(${bluetooth_name})\n`
            return code;
          };
          Blockly.Python['blue_command'] = function(block) {
            Blockly.Python.definitions_['import_beetlecar_ble'] = 'import beetlecar_BLE';
        
            
            var blue_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
            
            
            var code = `beetlecar_BLE.ble_msg == ${blue_text}`;
            return [code, Blockly.Python.ORDER_NONE];
            };
            Blockly.Python['blue_msg'] = function(block) {
                Blockly.Python.definitions_['import_beetlecar_ble'] = 'import beetlecar_BLE';
            
                
                var blue_text_print = Blockly.Python.valueToCode(block, 'text_blue', Blockly.Python.ORDER_ATOMIC);
                
                
                var code = `beetlecar_BLE.ble_msg = ""\nbeetlecar_BLE.ble.send(${blue_text_print})\n`;
                return code;
                };*/
  
          //BLUE_END ////////////////////////////////////
        
        //IR_START ////////////////////////////////////
  
        Blockly.Python['ir_get_sig'] = function(block) {
            
            Blockly.Python.definitions_['import_beetlecar_ir'] = 'import beetlecar_IR';
            Blockly.Python.definitions_['import_time'] = 'import time';
            
        
            var code = 'command = beetlecar_IR.read_ircode(beetlecar_IR.ird)\n'
            return code;
          };
    Blockly.Python['ir_com'] = function(block) {
      Blockly.Python.definitions_['import_beetlecar_ir'] = 'import beetlecar_IR';
          
          
        var ir_but = block.getFieldValue('ir_but');
          
        code = '';;
        if(ir_but == "1"){
          code = `command == "1"`;
        }else if(ir_but == "2"){
          code = `command == "2"`;
        }else if(ir_but == "3"){
          code = `command == "3"`;
        }else if(ir_but == "4"){
          code = `command == "4"`;
        }else if(ir_but == "5"){
          code = `command == "5"`;
        }else if(ir_but == "6"){
          code = `command == "6"`;
        }else if(ir_but == "7"){
          code = `command == "7"`;
        }else if(ir_but == "8"){
          code = `command == "8"`;
        }else if(ir_but == "9"){
          code = `command == "9"`;
        }else if(ir_but == "0"){
          code = `command == "0"`;
        }else if(ir_but == "#"){
          code = `command == "#"`;
        }else if(ir_but == "*"){
          code = `command == "*"`;
        }else if(ir_but == "Up"){
          code = `command == "Up"`;
        }else if(ir_but == "Down"){
          code = `command == "Down"`;
        }else if(ir_but == "Left"){
          code = `command == "Left"`;
        }else if(ir_but == "Right"){
          code = `command == "Right"`;
        }else if(ir_but == "Ok"){
          code = `command == "Ok"`;
        }
        return [code, Blockly.Python.ORDER_NONE];
      };
        //IR_END ////////////////////////////////////
  // Moter 2.0 Start ////////////////////////////////////
  /*
    Blockly.Python['motor_control'] = function(block) {
      Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    var dropdown_mcontrol = block.getFieldValue('mcontrol');
    var dropdown_move = block.getFieldValue('move');
    var dropdown_speed = block.getFieldValue('speed');
    
  
    var code = '';
    if (dropdown_mcontrol == 'left' && dropdown_move == 'forward') {
      code = `beetlecar.left_fw(${dropdown_speed})\n`;
    } else if (dropdown_mcontrol == 'left' && dropdown_move == 'backward') {
      code = `beetlecar.left_bw(${dropdown_speed})\n`;
    } else if (dropdown_mcontrol == 'right' && dropdown_move == 'forward') {
      code = `beetlecar.right_fw(${dropdown_speed})\n`;
    } else if (dropdown_mcontrol == 'right' && dropdown_move == 'backward') {
      code = `beetlecar.right_bw(${dropdown_speed})\n`;
    }
    return code;
  };
  Blockly.Python['motor_control0'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    var dropdown_motor_control0 = block.getFieldValue('motor_control0');
    var dropdown_speed = block.getFieldValue('speed');
  
  
    var code = '';
    if (dropdown_motor_control0 == 'forward') {
      code = `beetlecar.forward(${dropdown_speed})\n`;
    } else if (dropdown_motor_control0 == 'backward') {
      code = `beetlecar.backward(${dropdown_speed})\n`;
    } else if (dropdown_motor_control0 == 'left') {
      code = `beetlecar.motor_left(${dropdown_speed})\n`;
    } else if (dropdown_motor_control0 == 'right') {
      code = `beetlecar.motor_right(${dropdown_speed})\n`;
    }
    return code;
  };
  */
  /*
  Blockly.Python['motor_control1'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    var dropdown_motor_control1 = block.getFieldValue('motor_control1');
    var dropdown_speed = block.getFieldValue('speed');
    var time = block.getFieldValue('time');
   
  
    var code = '';
    if (dropdown_motor_control1 == 'forward') {
      code = `beetlecar.forward_duration(${dropdown_speed},${time})\n`;
    } else if (dropdown_motor_control1 == 'backward') {
      code = `beetlecar.backward_duration(${dropdown_speed},${time})\n`;
    } else if (dropdown_motor_control1 == 'left') {
      code = `beetlecar.left_duration(${dropdown_speed},${time})\n`;
    } else if (dropdown_motor_control1 == 'right') {
      code = `beetlecar.right_duration(${dropdown_speed},${time})\n`;
    }
    return code;
  };*/
  /*Blockly.Python['motor_control2'] = function(block) {
      Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    
    var dropdown_motor_control2 = block.getFieldValue('motor_control2');
    var speed = block.getFieldValue('speed');
  
    var code = '';
    if (dropdown_motor_control2 == 'forward') {
     code = `beetlecar.forward(${speed})\n`;
    } else if (dropdown_motor_control2 == 'backward') {
     code = `beetlecar.backward(${speed})\n`;
    } else if (dropdown_motor_control2 == 'left') {
     code = `beetlecar.motor_left(${speed})\n`;
    } else if (dropdown_motor_control2 == 'right') {
     code = `beetlecar.motor_right(${speed})\n`;
    }
    return code;
  };
  */
  Blockly.Python['new_motor'] = function(block) {
    
    Blockly.Python.definitions_['from_machine_import_pin_pwm'] = 'from machine import Pin,PWM';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    
  
      
    var motorpin = Blockly.Python.provideFunction_(
      'motorpin',
      [
          'RMOTOR1 = Pin(26, Pin.OUT)',
          'LMOTOR1 = Pin(14, Pin.OUT)',
          'RMOTOR2 = Pin(25, Pin.OUT)',
          'LMOTOR2 = Pin(27, Pin.OUT)',
          'RMOTOR1_PWM = PWM(Pin(26), freq=1000)',
          'LMOTOR1_PWM = PWM(Pin(14), freq=1000)',
          'RMOTOR2_PWM = PWM(Pin(25), freq=1000)',
          'LMOTOR2_PWM = PWM(Pin(27), freq=1000)',
      ]
  );
    var stop = Blockly.Python.provideFunction_(
        'stop',
        [
            'def stop():',
            '    RMOTOR1.off()',
            '    RMOTOR1_PWM.duty(int(0))',
            '    LMOTOR1.off()',
            '    LMOTOR1_PWM.duty(int(0))',
            '    RMOTOR2.off()',
            '    RMOTOR2_PWM.duty(int(0))',
            '    LMOTOR2.off()',
            '    LMOTOR2_PWM.duty(int(0))'
        ]
    );
    
    var backward = Blockly.Python.provideFunction_(
        'backward',
        [
            'def backward(speed):',
            '    RMOTOR1.off()',
            '    RMOTOR1_PWM.duty(int(0))',
            '    LMOTOR1.off()',
            '    LMOTOR1_PWM.duty(int(0))',
            '    RMOTOR2.on()',
            '    RMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
            '    LMOTOR2.on()',
            '    LMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))'
        ]
    );
    
    var forward = Blockly.Python.provideFunction_(
        'forward',
        [
            'def forward(speed):',
            '    RMOTOR1.on()',
            '    RMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
            '    LMOTOR1.on()',
            '    LMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
            '    RMOTOR2.off()',
            '    RMOTOR2_PWM.duty(int(0))',
            '    LMOTOR2.off()',
            '    LMOTOR2_PWM.duty(int(0))'
        ]
    );
    
    var left = Blockly.Python.provideFunction_(
        'left',
        [
            'def left(speed):',
            '    RMOTOR1.on()',
            '    RMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
            '    LMOTOR1.off()',
            '    LMOTOR1_PWM.duty(int(0))',
            '    RMOTOR2.off()',
            '    RMOTOR2_PWM.duty(int(0))',
            '    LMOTOR2.on()',
            '    LMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))'
        ]
    );
    
    var right = Blockly.Python.provideFunction_(
        'right',
        [
            'def right(speed):',
            '    RMOTOR1.off()',
            '    RMOTOR1_PWM.duty(int(0))',
            '    LMOTOR1.on()',
            '    LMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
            '    RMOTOR2.on()',
            '    RMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
            '    LMOTOR2.off()',
            '    LMOTOR2_PWM.duty(int(0))'
        ]
    );
    
  
    
    
    var move = block.getFieldValue('move');
    var speed = block.getFieldValue('speed');
  
    var code = '';
    if(speed == 0){
      code = `stop()\n`;
    }else{
      if (move == 'forward') {
        code = 'forward' + '(' + speed + ')\n';
      }else if (move == 'backward') {
        code = 'backward' + '(' + speed + ')\n';
      }else if (move == 'left') {
        code = 'left' + '(' + speed + ')\n';
      }else if (move == 'right') {
        code = 'right' + '(' + speed + ')\n';
      }
    } 
    return code;
  };
  Blockly.Python['new_motor2'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin_pwm'] = 'from machine import Pin,PWM';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    
  
    var motorpin = Blockly.Python.provideFunction_(
      'motorpin',
      [
          'RMOTOR1 = Pin(26, Pin.OUT)',
          'LMOTOR1 = Pin(14, Pin.OUT)',
          'RMOTOR2 = Pin(25, Pin.OUT)',
          'LMOTOR2 = Pin(27, Pin.OUT)',
          'RMOTOR1_PWM = PWM(Pin(26), freq=1000)',
          'LMOTOR1_PWM = PWM(Pin(14), freq=1000)',
          'RMOTOR2_PWM = PWM(Pin(25), freq=1000)',
          'LMOTOR2_PWM = PWM(Pin(27), freq=1000)',
      ]
  );
  var forward_for_sec = Blockly.Python.provideFunction_(
    'forward_for_sec',
    [
        'def forward_for_sec(speed, duration):',
        '    RMOTOR1.on()',
        '    RMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
        '    LMOTOR1.on()',
        '    LMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
        '    RMOTOR2.off()',
        '    RMOTOR2_PWM.duty(int(0))',
        '    LMOTOR2.off()',
        '    LMOTOR2_PWM.duty(int(0))',
        '    time.sleep(duration)',
        '    stop()'
    ]
  );
  
  var backward_for_sec = Blockly.Python.provideFunction_(
    'backward_for_sec',
    [
        'def backward_for_sec(speed, duration):',
        '    RMOTOR1.off()',
        '    RMOTOR1_PWM.duty(int(0))',
        '    LMOTOR1.off()',
        '    LMOTOR1_PWM.duty(int(0))',
        '    RMOTOR2.on()',
        '    RMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
        '    LMOTOR2.on()',
        '    LMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
        '    time.sleep(duration)',
        '    stop()'
    ]
  );
  
  var left_for_sec = Blockly.Python.provideFunction_(
    'left_for_sec',
    [
        'def left_for_sec(speed, duration):',
        '    RMOTOR1.on()',
        '    RMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
        '    LMOTOR1.off()',
        '    LMOTOR1_PWM.duty(int(0))',
        '    RMOTOR2.off()',
        '    RMOTOR2_PWM.duty(int(0))',
        '    LMOTOR2.on()',
        '    LMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
        '    time.sleep(duration)',
        '    stop()'
    ]
  );
  
  var right_for_sec = Blockly.Python.provideFunction_(
    'right_for_sec',
    [
        'def right_for_sec(speed, duration):',
        '    RMOTOR1.off()',
        '    RMOTOR1_PWM.duty(int(0))',
        '    LMOTOR1.on()',
        '    LMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
        '    RMOTOR2.on()',
        '    RMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
        '    LMOTOR2.off()',
        '    LMOTOR2_PWM.duty(int(0))',
        '    time.sleep(duration)',
        '    stop()'
    ]
  );
  var stop = Blockly.Python.provideFunction_(
    'stop',
    [
        'def stop():',
        '    RMOTOR1.off()',
        '    RMOTOR1_PWM.duty(int(0))',
        '    LMOTOR1.off()',
        '    LMOTOR1_PWM.duty(int(0))',
        '    RMOTOR2.off()',
        '    RMOTOR2_PWM.duty(int(0))',
        '    LMOTOR2.off()',
        '    LMOTOR2_PWM.duty(int(0))'
    ]
  );
  
    var move = block.getFieldValue('move');
    var speed = block.getFieldValue('speed');
    var time = block.getFieldValue('time');
  
   
    var code = '';
    if(speed == 0){
      code = `stop()\n`;
    }else{
    if (move == 'forward') {
      
        
      code = 'forward_for_sec' + '(' + speed + ', '+ time +')\n';
    } else if (move == 'backward') {
      
        
      code = 'backward_for_sec' + '(' + speed + ', '+ time +')\n';
    } else if (move == 'left') {
      
        
      code = 'left_for_sec' + '(' + speed + ', '+ time +')\n';
    } else if (move == 'right') {
      
        
      code = 'right_for_sec' + '(' + speed + ', '+ time +')\n';
    } else if(speed == 0){
      code = `stop\n`
    } 
    }
    return code;
  };
  Blockly.Python['newstopMotor'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin_pwm'] = 'from machine import Pin,PWM';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
  
    var stop = Blockly.Python.provideFunction_(
      'stop',
      [
          'def stop():',
          '    RMOTOR1.off()',
          '    RMOTOR1_PWM.duty(int(0))',
          '    LMOTOR1.off()',
          '    LMOTOR1_PWM.duty(int(0))',
          '    RMOTOR2.off()',
          '    RMOTOR2_PWM.duty(int(0))',
          '    LMOTOR2.off()',
          '    LMOTOR2_PWM.duty(int(0))'
      ]
  );
  
    var code = 'stop()\n';
    
    return code;
    
  };
  
  // Moter 2.0 End //////////////////////////////////// .
  
  // LED Start ////////////////////////////////////
  
  Blockly.Python['led_left'] = function(block) {
            
              Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
            
                var dropdown_trig = block.getFieldValue('pin_trig');
                code = '';;
                if(dropdown_trig == 1){
                  code = `beetlecar.led_left_on()\n`;
                }else if(dropdown_trig == 2){
                  code = `beetlecar.led_left_off()\n`;
                }
                return code;
              };
  Blockly.Python['led_right'] = function(block) {
            
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
              
              var dropdown_trig = block.getFieldValue('pin_trig');
                  code = '';;
                  if(dropdown_trig == 3){
                    code = `beetlecar.led_right_on()\n`;
                  }else if(dropdown_trig == 4){
                    code = `beetlecar.led_right_off()\n`;
                  }
                  return code;
                };
  Blockly.Python['new_motor3'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin_pwm'] = 'from machine import Pin,PWM';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_time'] = 'import time';
    
    var motorpin = Blockly.Python.provideFunction_(
      'motorpin',
      [
          'RMOTOR1 = Pin(26, Pin.OUT)',
          'LMOTOR1 = Pin(14, Pin.OUT)',
          'RMOTOR2 = Pin(25, Pin.OUT)',
          'LMOTOR2 = Pin(27, Pin.OUT)',
          'RMOTOR1_PWM = PWM(Pin(26), freq=1000)',
          'LMOTOR1_PWM = PWM(Pin(14), freq=1000)',
          'RMOTOR2_PWM = PWM(Pin(25), freq=1000)',
          'LMOTOR2_PWM = PWM(Pin(27), freq=1000)',
      ]
  );
    var backward = Blockly.Python.provideFunction_(
      'backward',
      [
          'def backward(speed):',
          '    RMOTOR1.off()',
          '    RMOTOR1_PWM.duty(int(0))',
          '    LMOTOR1.off()',
          '    LMOTOR1_PWM.duty(int(0))',
          '    RMOTOR2.on()',
          '    RMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
          '    LMOTOR2.on()',
          '    LMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))'
      ]
  );
  
  var forward = Blockly.Python.provideFunction_(
      'forward',
      [
          'def forward(speed):',
          '    RMOTOR1.on()',
          '    RMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
          '    LMOTOR1.on()',
          '    LMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
          '    RMOTOR2.off()',
          '    RMOTOR2_PWM.duty(int(0))',
          '    LMOTOR2.off()',
          '    LMOTOR2_PWM.duty(int(0))'
      ]
  );
    
    var right_forward = Blockly.Python.provideFunction_(
      `right_forward`,
      ['def right_forward(speed):',
      '     RMOTOR1.on()',
      '     RMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
      '     LMOTOR1.off()',
      '     LMOTOR1_PWM.duty(int(0))',
      '     RMOTOR2.off()',
      '     RMOTOR2_PWM.duty(int(0))',
      '     LMOTOR2.off()',
      '     LMOTOR2_PWM.duty(int(0))',
    ]
      );
  var right_backward = Blockly.Python.provideFunction_(
      `right_backward`,
      ['def right_backward(speed):',
      '     RMOTOR1.off()',
      '     RMOTOR1_PWM.duty(int(0))',
      '     LMOTOR1.off()',
      '     LMOTOR1_PWM.duty(int(0))',
      '     RMOTOR2.on()',
      '     RMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
      '     LMOTOR2.off()',
      '     LMOTOR2_PWM.duty(int(0))',
    ]
      );
  var left_forward = Blockly.Python.provideFunction_(
      `left_forward`,
      ['def left_forward(speed):',
      '     RMOTOR1.off()',
      '     RMOTOR1_PWM.duty(int(0))',
      '     LMOTOR1.on()',
      '     LMOTOR1_PWM.duty(int((5.25 * speed) + 495 ))',
      '     RMOTOR2.off()',
      '     RMOTOR2_PWM.duty(int(0))',
      '     LMOTOR2.off()',
      '     LMOTOR2_PWM.duty(int(0))',
    ]
      );
  
  var left_backward = Blockly.Python.provideFunction_(
      `left_backward`,
      ['def left_backward(speed):',
      '     RMOTOR1.off()',
      '     RMOTOR1_PWM.duty(int(0))',
      '     LMOTOR1.off()',
      '     LMOTOR1_PWM.duty(int(0))',
      '     RMOTOR2.off()',
      '     RMOTOR2_PWM.duty(int(0))',
      '     LMOTOR2.on()',
      '     LMOTOR2_PWM.duty(int((5.25 * speed) + 495 ))',
    ]
      );
  
  
    var motor = block.getFieldValue('motor');
    var move = block.getFieldValue('move');
    var speed = block.getFieldValue('speed');
  
    var code = ``;
    if(speed == 0){
      code = `stop()\n`;
    }else{
    if (motor == 'left' && move == 'forward') {
      code = 'left_forward' + '(' + speed + ')\n';
  
    }else if(motor == 'left' && move == 'backward'){
      code = 'left_backward' + '(' + speed + ')\n';
      
    }else if(motor == 'right'&& move == 'forward'){
      code = 'right_forward' + '(' + speed + ')\n';
      
    }else if(motor == 'right'&& move == 'backward'){
      code = 'right_backward' + '(' + speed + ')\n';
      
    }else if(motor == 'all'&& move == 'forward'){
      code = 'forward' + '(' + speed + ')\n';
    }else{
      code = 'backward' + '(' + speed + ')\n';
    }
    }
    return code;
  };
  Blockly.Python['ir_sig_new2'] = function(block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['import_utime'] = 'import utime';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin,PWM';
    Blockly.Python.definitions_['ird_pin'] = 'ird = Pin(19,Pin.IN)';
  
      
    var actCodeDefinition =
    '{'+
    '"1": "LLLLLLLLHHHHHHHHHLHLLLHLLHLHHHLH",' +
    '"2": "LLLLLLLLHHHHHHHHLHHLLLHLHLLHHHLH",' +
    '"3": "LLLLLLLLHHHHHHHHHHHLLLHLLLLHHHLH",' +
    '"4": "LLLLLLLLHHHHHHHHLLHLLLHLHHLHHHLH",' +
    '"5": "LLLLLLLLHHHHHHHHLLLLLLHLHHHHHHLH",' +
    '"6": "LLLLLLLLHHHHHHHHHHLLLLHLLLHHHHLH",' +
    '"7": "LLLLLLLLHHHHHHHHHHHLLLLLLLLHHHHH",' +
    '"8": "LLLLLLLLHHHHHHHHHLHLHLLLLHLHLHHH",' +
    '"9": "LLLLLLLLHHHHHHHHHLLHLLLLLHHLHHHH",' +
    '"0": "LLLLLLLLHHHHHHHHHLLHHLLLLHHLLHHH",' +
    '"Up": "LLLLLLLLHHHHHHHHLLLHHLLLHHHLLHHH",' +
    '"Down": "LLLLLLLLHHHHHHHHLHLLHLHLHLHHLHLH",' +
    '"Left": "LLLLLLLLHHHHHHHHLLLHLLLLHHHLHHHH",' +
    '"Right": "LLLLLLLLHHHHHHHHLHLHHLHLHLHLLHLH",' +
    '"OK": "LLLLLLLLHHHHHHHHLLHHHLLLHHLLLHHH",' +
    '"*": "LLLLLLLLHHHHHHHHLHHLHLLLHLLHLHHH",' +
    '"#": "LLLLLLLLHHHHHHHHHLHHLLLLLHLLHHHH"' +
    '}';
  
  // Define a function to get the act_code dictionary
  var functionName = Blockly.Python.provideFunction_(
    'act_code',
    ['act_code ' + '= ' + actCodeDefinition,
     
    ]
  );
  
  // Assign the result of calling the get_act_code function to act_code variable
  
  
    var functionName = Blockly.Python.provideFunction_(
      'read_ircode(ird)',
      ['def ' + 'read_ircode(ird)' + ':',
      '    wait_ir = 1',
      '    complete_ir = 0',
      '    seq0_ir = []',
      '    seq1_ir = []',
      '',
      '    while wait_ir == 1:',
      '        if ird.value() == 0:',
      '            wait_ir = 0',
      '    while wait_ir == 0 and complete_ir == 0:',
      '        start = utime.ticks_us()',
      '        while ird.value() == 0:',
      '            ms1 = utime.ticks_us()',
      '        diff = utime.ticks_diff(ms1,start)',
      '        seq0_ir.append(diff)',
      '        while ird.value() == 1 and complete_ir == 0:',
      '            ms2 = utime.ticks_us()',
      '            diff = utime.ticks_diff(ms2,ms1)',
      '            if diff > 10000:',
      '                complete_ir = 1',
      '        seq1_ir.append(diff)',
      '',
      '    code = ""',
      '    for val in seq1_ir:',
      '        if val < 2000:',
      '            if val < 700:',
      '                code += "L"',
      '            else:',
      '                code += "H"',
      '    command = ""',
      '    for k,v in act_code.items():',
      '        if code == v:',
      '            command = k',
      '    if command == "":',
      '        command = code',
      '    return command'
      ]
  );
    
  var functionName = Blockly.Python.provideFunction_(
    'command_reader()',
    ['def ' + 'command_reader()' + ':',
    '    return read_ircode(ird)'
    ]
  );
  
  
  
    var code = '#while True:\ncommand = read_ircode(ird)\n'
    return code;
  };
  Blockly.Python['ir_comman_if'] = function(block) {
    //Blockly.Python.definitions_['from_beetlecar_ir_readircode_ird'] = 'from beetlecar_ir import read_ircode , ird';
  
        
        
      var ir_but = block.getFieldValue('ir_but');
      
      code = '';;
      if(ir_but == "1"){
        code = `command == "1"`;
      }else if(ir_but == "2"){
        code = `command == "2"`;
      }else if(ir_but == "3"){
        code = `command == "3"`;
      }else if(ir_but == "4"){
        code = `command == "4"`;
      }else if(ir_but == "5"){
        code = `command == "5"`;
      }else if(ir_but == "6"){
        code = `command == "6"`;
      }else if(ir_but == "7"){
        code = `command == "7"`;
      }else if(ir_but == "8"){
        code = `command == "8"`;
      }else if(ir_but == "9"){
        code = `command == "9"`;
      }else if(ir_but == "0"){
        code = `command == "0"`;
      }else if(ir_but == "#"){
        code = `command == "#"`;
      }else if(ir_but == "*"){
        code = `command == "*"`;
      }else if(ir_but == "Up"){
        code = `command == "Up"`;
      }else if(ir_but == "Down"){
        code = `command == "Down"`;
      }else if(ir_but == "Left"){
        code = `command == "Left"`;
      }else if(ir_but == "Right"){
        code = `command == "Right"`;
      }else if(ir_but == "OK"){
        code = `command == "OK"`;
      }
      return [code, Blockly.Python.ORDER_NONE];
    };
  
  Blockly.Python['ir_read'] = function(block) {
    //Blockly.Python.definitions_['from_beetlecar_ir_readircode_ird'] = 'from beetlecar_ir import read_ircode , ird';
  
    code = 'command';
    return [code, Blockly.Python.ORDER_NONE];
  },
    //LOOP ZONE
  
    Blockly.Python['controls_every'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      Blockly.Python.definitions_['time.ticks'] = 'start_time = time.ticks_ms()';
  
      
      if (block.getField('TIMES')) {
          // Internal number.
          var repeats = String(parseInt(block.getFieldValue('TIMES'), 10));
        } else {
          // External number.
          var repeats = Blockly.Python.valueToCode(block, 'TIMES',
              Blockly.Python.ORDER_NONE) || '0';
        }
        if (Blockly.isNumber(repeats)) {
          repeats = parseInt(repeats, 10);
        } else {
          repeats = 'int(' + repeats + ')';
        }
      var branch = Blockly.Python.statementToCode(block, 'DO');
      branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
      var loopVar = Blockly.Python.variableDB_.getDistinctName(
          'count', Blockly.VARIABLE_CATEGORY_NAME);
  
      
  
      var code = `if time.ticks_ms() - start_time >= ${repeats}: \n`;
          code += `  start_time = time.ticks_ms()\n`
          code += `${branch}`
      return code;
    };
    
     //MATH ZONE
     
    Blockly.Python['abs_of'] = function(block) {
      // Random integer between [X] and [Y].
      var argument0 = Blockly.Python.valueToCode(block, 'FROM',
          Blockly.Python.ORDER_NONE);
      
      var code = 'abs(' + argument0 + ')';
      return [code, Blockly.Python.ORDER_FUNCTION_CALL];
    };
    Blockly.Python['controls_every'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      Blockly.Python.definitions_['time.ticks'] = 'start_time = time.ticks_ms()';
    
      
      if (block.getField('TIMES')) {
          // Internal number.
          var repeats = String(parseInt(block.getFieldValue('TIMES'), 10));
        } else {
          // External number.
          var repeats = Blockly.Python.valueToCode(block, 'TIMES',
              Blockly.Python.ORDER_NONE) || '0';
        }
        if (Blockly.isNumber(repeats)) {
          repeats = parseInt(repeats, 10);
        } else {
          repeats = 'int(' + repeats + ')';
        }
      var branch = Blockly.Python.statementToCode(block, 'DO');
      branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
      var loopVar = Blockly.Python.variableDB_.getDistinctName(
          'count', Blockly.VARIABLE_CATEGORY_NAME);
    
      
    
      var code = `if time.ticks_ms() - start_time >= ${repeats}: \n`;
          code += `  start_time = time.ticks_ms()\n`
          code += `${branch}`
      return code;
    };
    Blockly.Python['bool_tf'] = function(block) {
      // Negation.
      var code = 'True'
      return [code, Blockly.Python.ORDER_LOGICAL_NOT];
    };
    Blockly.Python['bool_false'] = function(block) {
      // Negation.
      var code = 'False'
      return [code, Blockly.Python.ORDER_LOGICAL_NOT];
    };
    Blockly.Python['break_code'] = function(block) {
  
  
      //var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var code = `break\n`;
      return code;
      };
      Blockly.Python['line_sensor'] = function(block) {
  
   
        Blockly.Python.definitions_['from_machine_import_pin_pwm_adc'] = 'from machine import Pin,PWM,ADC';
    
        var dropdown_pin = block.getFieldValue('pin_sen');
        
      
        var functionName = Blockly.Python.provideFunction_(
            'adcRead',
            [
                'def adcRead(analog_pin):',
                '    adc = ADC(Pin(analog_pin))',
                '    adc.atten(ADC.ATTN_11DB)',
                '    adc.width(ADC.WIDTH_12BIT)',
                '    return adc.read()',
            ]
        );
        
        var code = `adcRead(${dropdown_pin})`;
        return [code, Blockly.Python.ORDER_NONE];
    };
    // ------------------------------------------------------------------------------------------------------
    Blockly.Python['set_ssr_ssl'] = function(block) {
      
        var sensorlr = block.getFieldValue('ssr_ssl');
        var number_sensor = block.getFieldValue('pin');
        
        code = '';;
        if(sensorlr == "ssr"){
          code = `ssr = ${number_sensor}\n`;
        }else if(sensorlr == "ssl"){
          code = `ssl = ${number_sensor}\n`;
        }
        return code;
        
    };
    // ------------------------------------------------------------------------------------------------------
    
    
    // ------------------------------------------------------------------------------------------------------
    
    Blockly.Python['line_sensor_if3'] = function(block) {
      
      Blockly.Python.definitions_['from_machine_import_pin_pwm_adc'] = 'from machine import Pin,PWM,ADC';
    
      
      var functionName = Blockly.Python.provideFunction_(
        'adcRead',
        [
            'def adcRead(analog_pin):',
            '    adc = ADC(Pin(analog_pin))',
            '    adc.atten(ADC.ATTN_11DB)',
            '    adc.width(ADC.WIDTH_12BIT)',
            '    return adc.read()',
        ]
    );
        
        var sensorpin = block.getFieldValue('pin_sen');
        var bw = block.getFieldValue('math');
                    
        code = '';;
        if(sensorpin == 35 && bw == 1){
            code = `adcRead(35) < ssl`;
          }else if(sensorpin == 35 && bw == 2){
            code = `adcRead(35) > ssl`;
          }else if(sensorpin == 34 && bw == 1){
            code = `adcRead(34) < ssr`;
          }else if(sensorpin == 34 && bw == 2){
            code = `adcRead(34) > ssr`;
          }else{
            code = `404`;
          }
        
          return [code, Blockly.Python.ORDER_NONE];
    };
    
    // ------------------------------------------------------------------------------------------------------
    Blockly.Python['read_ssl_ssr'] = function(block) {
      Blockly.Python.definitions_['from_machine_import_pin_pwm_adc'] = 'from machine import Pin,PWM,ADC';
    
      
      var functionName = Blockly.Python.provideFunction_(
        'adcRead',
        [
            'def adcRead(analog_pin):',
            '    adc = ADC(Pin(analog_pin))',
            '    adc.atten(ADC.ATTN_11DB)',
            '    adc.width(ADC.WIDTH_12BIT)',
            '    return adc.read()',
        ]
    );
        
    
      var sensorlrread = block.getFieldValue('ssr_ssl');
     
    
      code = '';;
      if(sensorlrread == "ssr"){
        code = `print((adcRead(34)))\n`;
      }else if(sensorlrread == "ssl"){
        code = `print((adcRead(35)))\n`;
      }
      return code;
      
    };
    // ------------------------------------------------------------------------------------------------------

    Blockly.Python['on_start'] = function(block) {
      // Disable automatic indentation
      Blockly.Python.INDENT = '';
  
      var branch = Blockly.Python.statementToCode(block, 'DO');
      // branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
  
      // ตรวจสอบว่ามีการเพิ่มช่องว่างหลังบล็อกไหม
      if (branch.endsWith(' ')) {
          branch = branch.slice(0, -1);  // ตัดช่องว่างที่ไม่ต้องการ
      }
  
      var code = branch;
      
      // Revert to default indentation
      Blockly.Python.INDENT = '  ';
  
      return code;
  };
  Blockly.Python['switch_is_press_beetle'] = function (block) {
    Blockly.Python.definitions_['import_switch'] = 'import switch';

    var dropdown_n = block.getFieldValue('n');

    var code = `switch.value(switch.${dropdown_n}) == 1`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['switch_is_release_beetle'] = function (block) {
    Blockly.Python.definitions_['import_switch'] = 'import switch';

    var dropdown_n = block.getFieldValue('n');

    var code = `switch.value(switch.${dropdown_n}) == 0`;
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['switch_get_value_beetle'] = function (block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';

    var dropdown_n = block.getFieldValue('n');

    var code = ``;;
    if (dropdown_n == 'a'){
        code = `beetlecar.button_a.value()`;
    }else if(dropdown_n == 'b'){
        code = `beetlecar.button_b.value()`;
    }else{
        code = `404`
    }
    return [code, Blockly.Python.ORDER_NONE];
};
// --------------------------------------------------------------------------------------------
Blockly.Python['switch_on_press_beetle'] = function(block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin,PWM';

    var dropdown_pin = block.getFieldValue('pin');
    var statements_callback = Blockly.Python.statementToCode(block, 'callback');

    // -----------------------------
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
      varName = variable.name;
      if (block.getVars().indexOf(varName) == -1) {
        globals.push(Blockly.Python.variableDB_.getName(varName,
            Blockly.VARIABLE_CATEGORY_NAME));
      }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    // -------------------------------------------

    var functionName = Blockly.Python.provideFunction_(
        'sw_a_put()',
        ['def ' + 'sw_a_put' + '(_=None):',
        `   if Pin(18, Pin.IN, Pin.PULL_UP).value() == 1:`,
        `    task()`,
        `    time.sleep(1)`,
        
        ]
        );

        var functionName = Blockly.Python.provideFunction_(
            'sw_b_put()',
            ['def ' + 'sw_b_put' + '(_=None):',
            `   if Pin(5, Pin.IN, Pin.PULL_UP).value() == 1:`,
            `    task()`,
            `    time.sleep(1)`,
            
            ]
            );

    var functionName = Blockly.Python.provideFunction_(
        'task()',
        ['def ' + 'task' + '(_=None):',
        globals,
        statements_callback]);

    var code = '';;
    if(dropdown_pin == 1){
        code = `sw_a_put()\n`
    }
    else if(dropdown_pin == 2){
        code = `sw_b_put()\n`
    }
    else{
        code = `404`
    }
    //var code = `a_put()\n`;
    return code;
};
// ------------------------------------------------------------------------------------------------------
Blockly.Python['switch_on_release_beetle'] = function(block) {
    Blockly.Python.definitions_['import_switch'] = 'import switch';

    var dropdown_pin = block.getFieldValue('pin');
    var statements_callback = Blockly.Python.statementToCode(block, 'callback');

    // -----------------------------
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
      varName = variable.name;
      if (block.getVars().indexOf(varName) == -1) {
        globals.push(Blockly.Python.variableDB_.getName(varName,
            Blockly.VARIABLE_CATEGORY_NAME));
      }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    // -----------------------------

    var functionName = Blockly.Python.provideFunction_(
        dropdown_pin + 'ReleaseCB',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(_=None):',
        globals,
        statements_callback]);

    var code = `switch.release(switch.${dropdown_pin}, ${functionName})\n`;
    return code;
};

Blockly.Python['switch_on_pressed_beetle'] = function(block) {
    Blockly.Python.definitions_['import_switch'] = 'import switch';

    var dropdown_pin = block.getFieldValue('pin');
    var statements_callback = Blockly.Python.statementToCode(block, 'callback');

    // -----------------------------
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
      varName = variable.name;
      if (block.getVars().indexOf(varName) == -1) {
        globals.push(Blockly.Python.variableDB_.getName(varName,
            Blockly.VARIABLE_CATEGORY_NAME));
      }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    // -----------------------------

    var functionName = Blockly.Python.provideFunction_(
        dropdown_pin + 'PressCB',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(_=None):',
        globals,
        statements_callback]);

    var code = `switch.pressed(switch.${dropdown_pin}, ${functionName})\n`;
    return code;
};

Blockly.Python['abs_of'] = function(block) {
  // Random integer between [X] and [Y].
  var argument0 = Blockly.Python.valueToCode(block, 'FROM',
      Blockly.Python.ORDER_NONE);
  
  var code = 'abs(' + argument0 + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};