document.addEventListener("DOMContentLoaded",function(){
	
	var number1 = document.getElementById('number1');
	
	var operation = document.getElementById('operation');
	
	var number2 = document.getElementById('number2');
	
	var result = document.getElementById('result');
	
	var first_number = 0;
	//var operation_value = 'set operation';
	operation.value = 'set operation';
	var second_number= 0;
	var result_value = 0;
    
    //var order = document.querySelector('ol');
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
	
	//var order_list = document.querySelector('ol');
	//console.log(order_list.innerHTML);
	var clear_memo = document.getElementById('clear_history');
	
	plus.addEventListener("click",function(press){
		operation.value = '+';
	})
	
	minus.addEventListener("click",function(press){
		operation.value = '-';
	})
	
	multiply.addEventListener("click",function(press){
		operation.value = '*';
	})
	
	divide.addEventListener("click",function(press){
		operation.value = '/';
	})
	
	power.addEventListener("click",function(press){
		operation.value = '^';
	})
	
	dot.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			if(parseInt(number2.value.indexOf('.')) === -1 && number2.value.length > 0){
				number2.value += '.';
			}
            else if(parseInt(number2.value.indexOf('.')) === -1 && number2.value.length === 0){
                number2.value += '0.';
            }
		}
		else{
			if(parseInt(number1.value.indexOf('.')) === -1 && number1.value.length > 0){
				number1.value += '.';
			}
            else if(parseInt(number2.value.indexOf('.')) === -1 && number1.value.length === 0){
                number1.value += '0.';
            }
		}
	})
	
	random.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += Math.floor(Math.random() * 10);
		}
		else{
			number1.value += Math.floor(Math.random() * 10);
		}
	})
	
	zero.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 0;
		}
		else{
			number1.value += 0;
		}
	})
	
	one.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 1;
		}
		else{
			number1.value += 1;
		}
	})
	
	two.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 2;
		}
		else{
			number1.value += 2;
		}
	})
	
	three.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 3;
		}
		else{
			number1.value += 3;
		}
	})
	
	four.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 4;
		}
		else{
			number1.value += 4;
		}
	})
	
	five.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 5;
		}
		else{
			number1.value += 5;
		}
	})
	
	six.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 6;
		}
		else{
			number1.value += 6;
		}
	})
	
	seven.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 7;
		}
		else{
			number1.value += 7;
		}
	})
	
	eight.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 8;
		}
		else{
			number1.value += 8;
		}
	})
	
	nine.addEventListener("click",function(press){
		if(operation.value === '+' ^ operation.value === '-' ^ operation.value === '*' ^ operation.value === '/' ^ operation.value === '^'){
			number2.value += 9;
		}
		else{
			number1.value += 9;
		}
	})
	
	clear_calcs.addEventListener("click", function(press){
		number1.value = null;
		operation.value = 'set operation'
		number2.value = null;
		result.value = null;
		//document.createElement('ol');
		//listo.appendChild(document.createElement('ol'));
		//var order = document.querySelector('ol');
		//console.log(order);
		//return order;
	})
	
	equal.addEventListener("click",function(press){
		
		//console.log(result.value);
		
        if(parseInt(number1.value.indexOf('.')) > -1 && parseInt(number2.value.indexOf('.')) > -1){
          var split1 = number1.value.split('.');
		  var first_number = parseInt(split1[0], 10) + (parseInt(split1[1], 10)/Math.pow(10,split1[1].length));
		  var split2 = number2.value.split('.');
		  var second_number = parseInt(split2[0], 10) + (parseInt(split2[1], 10)/Math.pow(10,split2[1].length));
		  if(operation.value === '+'){
              result_value = first_number + second_number;
              dot_numbers_two(split1[1],split2[1]);
		  }
		  else if(operation.value === '-'){
              result_value = first_number - second_number;
              dot_numbers_two(split1[1],split2[1]);
          }
          else if(operation.value === '*'){
              result_value = first_number * second_number;
              dot_numbers_two(split1[1],split2[1]);
          }
          else if(operation.value === '/'){
              result_value = first_number / second_number;
              dot_numbers_two(split1[1],split2[1]);
          }
          else if(operation.value === '^'){
			  result_value = Math.pow(first_number, second_number);
              dot_numbers_two(split1[1],split2[1]);
          }
        }
        else if(parseInt(number1.value.indexOf('.')) > -1 && parseInt(number2.value.indexOf('.')) === -1) {
          var split1 = number1.value.split('.');
		  var first_number = parseInt(split1[0], 10) + (parseInt(split1[1], 10)/Math.pow(10,split1[1].length));
          var second_number = parseInt(number2.value);
          if(operation.value === '+'){
              result_value = first_number + second_number;
              dot_number_one(split1[1]);
		  }
		  else if(operation.value === '-'){
              result_value = first_number - second_number;
              dot_number_one(split1[1]);
          }
          else if(operation.value === '*'){
              result_value = first_number * second_number;
              dot_number_one(split1[1]);
          }
          else if(operation.value === '/'){
              result_value = first_number / second_number;
              dot_number_one(split1[1]);
          }
          else if(operation.value === '^'){
			  result_value = Math.pow(first_number, second_number);
              dot_number_one(split1[1]);
          }
        }
        else if(parseInt(number1.value.indexOf('.')) === -1 && parseInt(number2.value.indexOf('.')) > -1) {
		  var first_number = parseInt(number1.value);
		  var split2 = number2.value.split('.');
		  var second_number = parseInt(split2[0], 10) + (parseInt(split2[1], 10)/Math.pow(10,split2[1].length));
          if(operation.value === '+'){
              result_value = first_number + second_number;
              dot_number_one(split2[1]);
		  }
		  else if(operation.value === '-'){
              result_value = first_number - second_number;
              dot_number_one(split2[1]);
          }
          else if(operation.value === '*'){
              result_value = first_number * second_number;
              dot_number_one(split2[1]);
          }
          else if(operation.value === '/'){
              result_value = first_number / second_number;
              dot_number_one(split2[1]);
          }
          else if(operation.value === '^'){
              result_value = Math.pow(first_number, second_number);
              dot_number_one(split2[1]);
          }
        }
        else if(parseInt(number1.value.indexOf('.')) === -1 && parseInt(number2.value.indexOf('.')) === -1) {
		  var first_number = parseInt(number1.value);
		  var second_number = parseInt(number2.value);
          if(operation.value === '+'){
              result_value = first_number + second_number;
              result.value = result_value;
		  }
		  else if(operation.value === '-'){
              result_value = first_number - second_number;
              result.value = result_value;
          }
          else if(operation.value === '*'){
              result_value = first_number * second_number;
              result.value = result_value;
          }
          else if(operation.value === '/'){
              result_value = first_number / second_number;
              result.value = result_value;
              
          }
          else if(operation.value === '^'){
			  result_value = Math.pow(first_number, second_number);
              result.value = result_value;
          }
        }
	})
    
    send.addEventListener("click",function(press){
		if (number1.value.length !== 0 && number1.value.length !== 0){
        	if(operation.value === '+'){
            	var log = "";
            	log += 'Added ' + number1.value + ' to ' + number2.value + ' and gave ' + result.value + '<br>';
				listo.innerHTML += log;
            	//logging(order, log);
        	}
        	else if(operation.value === '-'){
            	var log = "";
            	log += 'Substracted ' + number1.value + ' from ' +  number2.value + ' and gave ' + result.value + '<br>';
            	listo.innerHTML += log;
            	//logging(order, log);
        	}
        	else if(operation.value === '*'){
            	var log = "";
            	log += 'Multiplied ' + number1.value + ' with ' +  number2.value + ' and gave ' + result.value + '<br>';
            	listo.innerHTML += log;
            	//logging(order, log);
        	}
        	else if(operation.value === '/'){
            	var log = "";
            	log += 'Divided ' + number1.value + ' by ' +  number2.value + ' and gave ' + result.value + '<br>';
            	listo.innerHTML += log;
            	//logging(order, log);
        }
        	else if(operation.value === '^'){
            	var log = "";
            	log += 'Empowered ' + parseInt(number1.value) + ' to ' + parseInt(number2.value) + ' and gave ' + result.value + '<br>';
            	listo.innerHTML += log;
            	//logging(order, log);
        	}
		}
    })
	
	clear_memo.addEventListener("click", function(press){
		//order.remove(order.lastElementChild);
		listo.innerHTML = '<strong>Calculation logs : </strong><br>';
		//console.log(order.lastElementChild + ' ' + order.children.length);
	})

	function dot_numbers_two(dot1, dot2){
        if(dot1.length > dot2.length){
            result.value = (result_value).toFixed(dot1.length);
            return result.value;
        }
        else if (dot1.length < dot2.length){
            result.value = (result_value).toFixed(dot2.length);
            return result.value;
        }
        else {
            result.value = (result_value).toFixed(dot1.length);
            return result.value;
        }
    }
    
    function dot_number_one(dot1){
        result.value = (result_value).toFixed(dot1.length);
        return result.value;
    }
    /*
    function logging(addorder, addlog){
        var item = document.createElement('p');
        item.innerText = addlog;
        addorder.appendChild(item);
		return addorder;
    }
	*/
    
});