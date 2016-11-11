document.addEventListener("DOMContentLoaded",function(){
	
	var number1 = document.getElementById('number1');
	
	var operation = document.getElementById('operation');
	
	var number2 = document.getElementById('number2');
	
	var result = document.getElementById('result');
	
	var first_number = 0;

	operation.innerHTML = 'not set';
	var second_number= 0;
	var result_value = 0;

	var listo = document.getElementById('list_box');
	
	var dot = document.getElementById('dot');
	var zero = document.getElementById('zero');
	var random = document.getElementById('random');
	var one = document.getElementById('one');
	var two = document.getElementById('two');
	var three = document.getElementById('three');
	var four = document.getElementById('four');
	var five = document.getElementById('five');
	var six = document.getElementById('six');
	var seven = document.getElementById('seven');
	var eight = document.getElementById('eight');
	var nine = document.getElementById('nine');
	
	var clear_calcs = document.getElementById('clear_calcs');
	
	var plus = document.getElementById('plus');
	var minus = document.getElementById('minus');
	var multiply = document.getElementById('multiply');
	var divide = document.getElementById('divide');
	var send = document.getElementById('send');
	var power = document.getElementById('power');
	
	var equal = document.getElementById('equal');
	var clear_memo = document.getElementById('clear_history');
	
	function press_plus(press){
		operation.innerHTML = '+';
	}
	plus.addEventListener("click", press_plus);
	
	function press_minus(press){
		operation.innerHTML = '-';
	}
	minus.addEventListener("click", press_minus);
	
	function press_multiply(press){
		operation.innerHTML = '*';
	}
	multiply.addEventListener("click", press_multiply);
	
	function press_divide(press){
		operation.innerHTML = '/';
	}
	divide.addEventListener("click", press_divide);
	
	function press_power(press){
		operation.innerHTML = '^';
	}
	power.addEventListener("click", press_power);
	
	function press_dot(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			if(parseInt(number2.innerHTML.indexOf('.')) === -1 && number2.innerHTML.length > 0){
				number2.innerHTML += '.';
			}
            else if(parseInt(number2.innerHTML.indexOf('.')) === -1 && number2.innerHTML.length === 0){
                number2.innerHTML += '0.';
            }
		}
		else{
			if(parseInt(number1.innerHTML.indexOf('.')) === -1 && number1.innerHTML.length > 0){
				number1.innerHTML += '.';
			}
            else if(parseInt(number2.innerHTML.indexOf('.')) === -1 && number1.innerHTML.length === 0){
                number1.innerHTML += '0.';
            }
		}
	}
	dot.addEventListener("click", press_dot);
	
	function press_random(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += Math.floor(Math.random() * 10);
		}
		else{
			number1.innerHTML += Math.floor(Math.random() * 10);
		}
	}
	random.addEventListener("click", press_random);
	
	function press_zero(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 0;
		}
		else{
			number1.innerHTML += 0;
		}
	}
	zero.addEventListener("click", press_zero);
	
	function press_one(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 1;
		}
		else{
			number1.innerHTML += 1;
		}
	}
	one.addEventListener("click", press_one);
	
	function press_two(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 2;
		}
		else{
			number1.innerHTML += 2;
		}
	}
	two.addEventListener("click", press_two);
	
	function press_three(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 3;
		}
		else{
			number1.innerHTML += 3;
		}
	}
	three.addEventListener("click", press_three);
	
	function press_four (press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 4;
		}
		else{
			number1.innerHTML += 4;
		}
	}
	four.addEventListener("click", press_four);
	
	function press_five(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 5;
		}
		else{
			number1.innerHTML += 5;
		}
	}
	five.addEventListener("click", press_five);
	
	function press_six(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 6;
		}
		else{
			number1.innerHTML += 6;
		}
	}
	six.addEventListener("click", press_six);
	
	function press_seven(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 7;
		}
		else{
			number1.innerHTML += 7;
		}
	}
	seven.addEventListener("click", press_seven);
	
	function press_eight(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 8;
		}
		else{
			number1.innerHTML += 8;
		}
	}
	eight.addEventListener("click", press_eight);
	
	function press_nine(press){
		if(operation.innerHTML === '+' ^ operation.innerHTML === '-' ^ operation.innerHTML === '*' ^ operation.innerHTML === '/' ^ operation.innerHTML === '^'){
			number2.innerHTML += 9;
		}
		else{
			number1.innerHTML += 9;
		}
	}
	nine.addEventListener("click", press_nine);
	
	function press_clear_calcs(press){
		number1.innerHTML = null;
		operation.innerHTML = 'not set'
		number2.innerHTML = null;
		result.innerHTML = null;
	}
	clear_calcs.addEventListener("click", press_clear_calcs);
	
	function press_equal(press){
	
        if(parseInt(number1.innerHTML.indexOf('.')) > -1 && parseInt(number2.innerHTML.indexOf('.')) > -1){
          var split1 = number1.innerHTML.split('.');
		  var first_number = parseInt(split1[0], 10) + (parseInt(split1[1], 10)/Math.pow(10,split1[1].length));
		  var split2 = number2.innerHTML.split('.');
		  var second_number = parseInt(split2[0], 10) + (parseInt(split2[1], 10)/Math.pow(10,split2[1].length));
		  if(operation.innerHTML === '+'){
              result_value = first_number + second_number;
              dot_numbers_two(split1[1],split2[1]);
		  }
		  else if(operation.innerHTML === '-'){
              result_value = first_number - second_number;
              dot_numbers_two(split1[1],split2[1]);
          }
          else if(operation.innerHTML === '*'){
              result_value = first_number * second_number;
              dot_numbers_two(split1[1],split2[1]);
          }
          else if(operation.innerHTML === '/'){
              result_value = first_number / second_number;
              dot_numbers_two(split1[1],split2[1]);
          }
          else if(operation.innerHTML === '^'){
			  result_value = Math.pow(first_number, second_number);
              dot_numbers_two(split1[1],split2[1]);
          }
        }
        else if(parseInt(number1.innerHTML.indexOf('.')) > -1 && parseInt(number2.innerHTML.indexOf('.')) === -1) {
          var split1 = number1.innerHTML.split('.');
		  var first_number = parseInt(split1[0], 10) + (parseInt(split1[1], 10)/Math.pow(10,split1[1].length));
          var second_number = parseInt(number2.innerHTML);
          if(operation.innerHTML === '+'){
              result_value = first_number + second_number;
              dot_number_one(split1[1]);
		  }
		  else if(operation.innerHTML === '-'){
              result_value = first_number - second_number;
              dot_number_one(split1[1]);
          }
          else if(operation.innerHTML === '*'){
              result_value = first_number * second_number;
              dot_number_one(split1[1]);
          }
          else if(operation.innerHTML === '/'){
              result_value = first_number / second_number;
              dot_number_one(split1[1]);
          }
          else if(operation.innerHTML === '^'){
			  result_value = Math.pow(first_number, second_number);
              dot_number_one(split1[1]);
          }
        }
        else if(parseInt(number1.innerHTML.indexOf('.')) === -1 && parseInt(number2.innerHTML.indexOf('.')) > -1) {
		  var first_number = parseInt(number1.innerHTML);
		  var split2 = number2.innerHTML.split('.');
		  var second_number = parseInt(split2[0], 10) + (parseInt(split2[1], 10)/Math.pow(10,split2[1].length));
          if(operation.innerHTML === '+'){
              result_value = first_number + second_number;
              dot_number_one(split2[1]);
		  }
		  else if(operation.innerHTML === '-'){
              result_value = first_number - second_number;
              dot_number_one(split2[1]);
          }
          else if(operation.innerHTML === '*'){
              result_value = first_number * second_number;
              dot_number_one(split2[1]);
          }
          else if(operation.innerHTML === '/'){
              result_value = first_number / second_number;
              dot_number_one(split2[1]);
          }
          else if(operation.innerHTML === '^'){
              result_value = Math.pow(first_number, second_number);
              dot_number_one(split2[1]);
          }
        }
        else if(parseInt(number1.innerHTML.indexOf('.')) === -1 && parseInt(number2.innerHTML.indexOf('.')) === -1) {
		  var first_number = parseInt(number1.innerHTML);
		  var second_number = parseInt(number2.innerHTML);
          if(operation.innerHTML === '+'){
              result_value = first_number + second_number;
              result.innerHTML = result_value;
		  }
		  else if(operation.innerHTML === '-'){
              result_value = first_number - second_number;
              result.innerHTML = result_value;
          }
          else if(operation.innerHTML === '*'){
              result_value = first_number * second_number;
              result.innerHTML = result_value;
          }
          else if(operation.innerHTML === '/'){
              result_value = first_number / second_number;
              result.innerHTML = result_value;
              
          }
          else if(operation.innerHTML === '^'){
			  result_value = Math.pow(first_number, second_number);
              result.innerHTML = result_value;
          }
        }
	}
	equal.addEventListener("click", press_equal);
    
    function press_send(press){
		if (number1.innerHTML.length !== 0 && number1.innerHTML.length !== 0){
        	if(operation.innerHTML === '+'){
            	var log = "";
            	log += 'Added ' + number1.innerHTML + ' to ' + number2.innerHTML + ' and gave ' + result.innerHTML + '<br>';
				listo.innerHTML += log;
        	}
        	else if(operation.innerHTML === '-'){
            	var log = "";
            	log += 'Substracted ' + number1.innerHTML + ' from ' +  number2.innerHTML + ' and gave ' + result.innerHTML + '<br>';
            	listo.innerHTML += log;
        	}
        	else if(operation.innerHTML === '*'){
            	var log = "";
            	log += 'Multiplied ' + number1.innerHTML + ' with ' +  number2.innerHTML + ' and gave ' + result.innerHTML + '<br>';
            	listo.innerHTML += log;
        	}
        	else if(operation.innerHTML === '/'){
            	var log = "";
            	log += 'Divided ' + number1.innerHTML + ' by ' +  number2.innerHTML + ' and gave ' + result.innerHTML + '<br>';
            	listo.innerHTML += log;
        }
        	else if(operation.innerHTML === '^'){
            	var log = "";
            	log += 'Empowered ' + parseInt(number1.innerHTML) + ' to ' + parseInt(number2.innerHTML) + ' and gave ' + result.innerHTML + '<br>';
            	listo.innerHTML += log;
        	}
		}
    }
	send.addEventListener("click", press_send);
	
	function press_clear_memo(press){
		listo.innerHTML = '<strong>Calculation logs : </strong><br>';
	}
	clear_memo.addEventListener("click", press_clear_memo);

	function dot_numbers_two(dot1, dot2){
        if(dot1.length > dot2.length){
            result.innerHTML = (result_value).toFixed(dot1.length);
            return result.innerHTML;
        }
        else if (dot1.length < dot2.length){
            result.innerHTML = (result_value).toFixed(dot2.length);
            return result.innerHTML;
        }
        else {
            result.innerHTML = (result_value).toFixed(dot1.length);
            return result.innerHTML;
        }
    }
    
    function dot_number_one(dot1){
        result.innerHTML = (result_value).toFixed(dot1.length);
        return result.innerHTML;
    }
	
	document.querySelector('body').onkeyup = function (e){
		if (e.keyCode === 48 ^ e.keyCode === 96){
			press_zero();
		}
		else if (e.keyCode === 49 ^ e.keyCode === 97){
			press_one();
		}
		else if (e.keyCode === 50 ^ e.keyCode === 98){
			press_two();
		}
		else if (e.keyCode === 51 ^ e.keyCode === 99){
			press_three();
		}
		else if (e.keyCode === 52 ^ e.keyCode === 100){
			press_four();
		}
		else if (e.keyCode === 53 ^ e.keyCode === 101){
			press_five();
		}
		else if (e.keyCode === 54 ^ e.keyCode === 102){
			press_six();
		}
		else if (e.keyCode === 55 ^ e.keyCode === 103){
			press_seven();
		}
		else if (e.keyCode === 56 ^ e.keyCode === 104){
			press_eight();
		}
		else if (e.keyCode === 57 ^ e.keyCode === 105){
			press_nine();
		}
		else if (e.keyCode === 190 ^ e.keyCode === 108){
			press_dot();
		}
		else if (e.keyCode === 82){
			press_random();
		}
		else if (e.keyCode === 67){
			press_clear_calcs();
		}
		else if (e.keyCode === 107){
			press_plus();
		}
		else if (e.keyCode === 109){
			press_minus();
		}
		else if (e.keyCode === 106){
			press_multiply();
		}
		else if (e.keyCode === 111){
			press_divide();
		}
		else if (e.keyCode === 187 ^ e.keyCode === 13){
			press_equal();
		}
		else if (e.keyCode === 80){
			press_power();
		}
		else if (e.keyCode === 83){
			press_send();
		}
		else if (e.keyCode === 68){
			press_clear_memo();
		}
	}
	
});