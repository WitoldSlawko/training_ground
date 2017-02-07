$(document).ready(function(){
	console.log('U mnie dziala!');
	
	var refresh = $('.refresh');
	var surrender = $('.surrender');
	
	var hangman = $('.hangman_outer');
    var sprite = $('.hangman_inner');
	var letters = $('.letters');
    
    var select_slider = $('.categories');
    var heart_count = $('.life_count');
    
    var win_count = $('.win_count');
    var lose_count = $('.lose_count');
	
	var accept = $('.accept');
	
	//var randomWords = ['Some', 'Random', 'Words', 'Cow', 'Chicken', 'Dog', 'Bike', 'Car', 'Plane', 'Wizzard', 'Party'];
    
    var cat1_pool = ['alligator', 'ant', 'bear', 'bee', 'bird', 'camel', 'cat', 'cheetah', 'chicken', 'chimpanzee', 'cow', 'crocodile', 'deer', 'dog', 'dolphin', 'duck', 'eagle', 'elephant', 'fish', 'fly', 'fox', 'frog', 'giraffe', 'goat', 'goldfish', 'hamster', 'hippopotamus', 'horse', 'kangaroo', 'kitten', 'leopard', 'lion', 'lizard', 'lobster', 'monkey', 'octopus', 'ostrich', 'otter', 'owl', 'oyster', 'panda', 'parrot', 'pelican', 'pig', 'pigeon', 'porcupine', 'puppy', 'rabbit', 'rat', 'reindeer', 'rhino', 'ceros', 'rooster', 'scorpion', 'seal', 'shark', 'sheep', 'shrimp', 'snail', 'snake', 'sparrow', 'spider', 'squid', 'squirrel', 'swallow', 'swan', 'tiger', 'toad', 'tortoise', 'turtle', 'vulture', 'walrus', 'weasel', 'whale', 'wolf', 'zebra'];
    
    var cat2_pool = ['policeman', 'teacher', 'fireman'];
    var cat3_pool = ['baseball', 'tennis', 'rugby'];
	
	$('button').css('type','button');
    
    var sel = $('select');
    var selected = $('.selected');
    var category_1 = $('option').first();
    var category_2 = $('option').eq(1);
    var category_3 = $('option').last();
    
    var old_path = 'url(../images/the_hangman.png)';
    var new_path = 'url(../images/the_hangman_WIN.png)';
	
	var myWord = 0;
    var run_iteration = 0;
    
    var life_number = 7;
    heart_count.text(life_number);
    
    var win_number = 0;
    win_count.text(win_number);
    
    var lose_number = 0;
    lose_count.text(lose_number);
	
	function checking(letter){
		$('button').each(function(){
			if (letter == $(this).text()){
				$(this).css('background-color','red');
				$(this).off('click');
				console.log($(this).text());
				$('.selected').text('');
			}
		});
	}
	
	function first_run(){
        run_iteration = 0;
		//myWord = randomWords[Math.floor(Math.random() * randomWords.length)];
        //sel.on('change',function(drag){
            if ($('.categories option:selected').text() == 'Animals'){
                myWord = cat1_pool[Math.floor(Math.random() * cat1_pool.length)];
            }
            else if ($('.categories option:selected').text() == 'Proffesions'){
                myWord = cat2_pool[Math.floor(Math.random() * cat2_pool.length)];
            }
            else if ($('.categories option:selected').text() == 'Sport'){
                myWord = cat3_pool[Math.floor(Math.random() * cat3_pool.length)];
            }
            //return myWord;
       // })
        
		myWord = myWord.toUpperCase();
		//hangman.text(myWord);
		
		letters.children().each(function(){
			$(this).remove();
		})

        console.log(myWord);
		//var squares = $('.letters').children('div');

		for (var a=0; a < myWord.length; a++){
			var square = $('<div>');
			square.css('width','50px');
			square.css('height','50px');
			square.css('margin','0 10px');
			square.css('border','1px solid black');
			square.addClass('center');
			letters.append(square);
		}
		//return myWord, run_iteration;
		//return run_iteration;
        //sprite.css('background-image',old_path);
        sprite.removeClass('new_path');
        sprite.addClass('old_path');
        sprite.css('width','150px');
        sprite.css('background-position', '0px 0px');
        
        life_number = 7;
        heart_count.text(life_number);
    
	}
    
	function testing(){
		if(selected.text() !== ''){
		//var value_letter = $('.selected').val();
		var value_letter = $('.selected').text();
		console.log('moja litera', value_letter);
		checking(value_letter);
		var squares = $('.letters').children('div');
		var check = 0;
        var iteration = 0;
		for (var b=0; b < squares.length; b++){
			if (value_letter == myWord.charAt(b)){
				squares.eq(b).text(value_letter);
				check += 1;
			}
            if (squares.eq(b).text() !== ''){
                iteration += 1;
            }
		}
		if (check == 0) {
				//hangman.text('FAIL!');
				run_iteration -= 150;
				console.log(run_iteration);
				sprite.animate({backgroundPositionX: run_iteration + 'px'},1000);
				life_number -= 1;
				heart_count.text(life_number);
				if (run_iteration == (-1050)){
					game_over();
					lose_number += 1;
					lose_count.text(lose_number);
				}
			}
			if (iteration == squares.length){

				sprite.removeClass('old_path');
				sprite.addClass('new_path');
				sprite.css('width','160px');
				sprite.css('background-position','left');
				$('.row').find('button').each(function(){
					$(this).off('click');
					$(this).css('background-color','green');
				});   
				//console.log('juz!');
				win_number += 1;
				win_count.text(win_number);
				$(document).unbind('keyup', key_q);
				$(document).unbind('keyup', key_w);
				$(document).unbind('keyup', key_e);
				$(document).unbind('keyup', key_r);
				$(document).unbind('keyup', key_t);
				$(document).unbind('keyup', key_y);
				$(document).unbind('keyup', key_u);
				$(document).unbind('keyup', key_i);
				$(document).unbind('keyup', key_o);
				$(document).unbind('keyup', key_p);
				$(document).unbind('keyup', key_a);
				$(document).unbind('keyup', key_s);
				$(document).unbind('keyup', key_d);
				$(document).unbind('keyup', key_f);
				$(document).unbind('keyup', key_g);
				$(document).unbind('keyup', key_h);
				$(document).unbind('keyup', key_j);
				$(document).unbind('keyup', key_k);
				$(document).unbind('keyup', key_l);
				$(document).unbind('keyup', key_z);
				$(document).unbind('keyup', key_x);
				$(document).unbind('keyup', key_c);
				$(document).unbind('keyup', key_v);
				$(document).unbind('keyup', key_b);
				$(document).unbind('keyup', key_n);
				$(document).unbind('keyup', key_m);
				$(document).unbind('keyup', key_enter);
				surrender.off('click');
				surrender.css('background-color','green');
			}
		};
		if (value_letter === 'Q'){
			$(document).unbind('keyup', key_q);
		}
		else if (value_letter === 'W'){
			$(document).unbind('keyup', key_w);
		}
		else if (value_letter === 'E'){
			$(document).unbind('keyup', key_e);
		}
		else if (value_letter === 'R'){
			$(document).unbind('keyup', key_r);
		}
		else if (value_letter === 'T'){
			$(document).unbind('keyup', key_t);
		}
		else if (value_letter === 'Y'){
			$(document).unbind('keyup', key_y);
		}
		else if (value_letter === 'U'){
			$(document).unbind('keyup', key_u);
		}
		else if (value_letter === 'I'){
			$(document).unbind('keyup', key_i);
		}
		else if (value_letter === 'O'){
			$(document).unbind('keyup', key_o);
		}
		else if (value_letter === 'P'){
			$(document).unbind('keyup', key_p);
		}
		else if (value_letter === 'A'){
			$(document).unbind('keyup', key_a);
		}
		else if (value_letter === 'S'){
			$(document).unbind('keyup', key_s);
		}
		else if (value_letter === 'D'){
			$(document).unbind('keyup', key_d);
		}
		else if (value_letter === 'F'){
			$(document).unbind('keyup', key_f);
		}
		else if (value_letter === 'G'){
			$(document).unbind('keyup', key_g);
		}
		else if (value_letter === 'H'){
			$(document).unbind('keyup', key_h);
		}
		else if (value_letter === 'J'){
			$(document).unbind('keyup', key_j);
		}
		else if (value_letter === 'K'){
			$(document).unbind('keyup', key_k);
		}
		else if (value_letter === 'L'){
			$(document).unbind('keyup', key_l);
		}
		else if (value_letter === 'Z'){
			$(document).unbind('keyup', key_z);
		}
		else if (value_letter === 'X'){
			$(document).unbind('keyup', key_x);
		}
		else if (value_letter === 'C'){
			$(document).unbind('keyup', key_c);
		}
		else if (value_letter === 'V'){
			$(document).unbind('keyup', key_v);
		}
		else if (value_letter === 'B'){
			$(document).unbind('keyup', key_b);
		}
		else if (value_letter === 'N'){
			$(document).unbind('keyup', key_n);
		}
		else if (value_letter === 'M'){
			$(document).unbind('keyup', key_m);
		}
	}
    
	surrender.on('click', game_over);
    
    function game_over(e){
        surrender.css('background-color','red');
        surrender.off('click');
		var squares = $('.letters').children('div');
		for (var c=0; c < myWord.length; c++){
			squares.eq(c).text(myWord.charAt(c));
		}
		//hangman.text('FAIL!');
        $('.row').find('button').each(function(){
            $(this).off('click');
            $(this).css('background-color','red');
        });
        accept.off('click');
        accept.css('background-color','red');
        sprite.css('background-position','right');
        lose_number += 1;
        lose_count.text(lose_number);
		//$(document).unbind('keyup');
		$(document).unbind('keyup', key_q);
		$(document).unbind('keyup', key_w);
		$(document).unbind('keyup', key_e);
		$(document).unbind('keyup', key_r);
		$(document).unbind('keyup', key_t);
		$(document).unbind('keyup', key_y);
		$(document).unbind('keyup', key_u);
		$(document).unbind('keyup', key_i);
		$(document).unbind('keyup', key_o);
		$(document).unbind('keyup', key_p);
		$(document).unbind('keyup', key_a);
		$(document).unbind('keyup', key_s);
		$(document).unbind('keyup', key_d);
		$(document).unbind('keyup', key_f);
		$(document).unbind('keyup', key_g);
		$(document).unbind('keyup', key_h);
		$(document).unbind('keyup', key_j);
		$(document).unbind('keyup', key_k);
		$(document).unbind('keyup', key_l);
		$(document).unbind('keyup', key_z);
		$(document).unbind('keyup', key_x);
		$(document).unbind('keyup', key_c);
		$(document).unbind('keyup', key_v);
		$(document).unbind('keyup', key_b);
		$(document).unbind('keyup', key_n);
		$(document).unbind('keyup', key_m);
		$(document).unbind('keyup', key_enter);
		accept.off('click');
	};
		
	accept.on('click', testing);
	
    function reroll(){
        accept.on('click', testing);
		first_run();
		pressing();
        surrender.on('click', game_over);
        surrender.css('background-color','gainsboro');
	};
    
    refresh.on('click', reroll);
	
	/*
	
	
67
down vote
accepted
You have to use a named function so you can reference that specific handler when calling .unbind(), like this:

function keyUpFunc(e) {
  if (e.keyCode == 27) { functionZzy(); }
}
$(document).keyup(keyUpFunc);
Then later when unbinding:

$(document).unbind("keyup", keyUpFunc);
	
	*/
	
	//function key_q(q){
		//if (q.key == 'q'){
			//selected.text('Q');
		//}
	//}
	
	//$(document).keyup(key_q);
	
    /*
	document.querySelector('body').onkeyup = function (e){
		if (e.keyCode === 81){
			$('.selected').text('Q');
		}
		else if (e.keyCode === 87){
			$('.selected').text('W');
		}
		else if (e.keyCode === 69){
			$('.selected').text('E');
		}
		else if (e.keyCode === 82){
			$('.selected').text('R');
		}
		else if (e.keyCode === 84){
			$('.selected').text('T');
		}
		else if (e.keyCode === 89){
			$('.selected').text('Y');
		}
		else if (e.keyCode === 85){
			$('.selected').text('U');
		}
		else if (e.keyCode === 73){
			$('.selected').text('I');
		}
		else if (e.keyCode === 79){
			$('.selected').text('O');
		}
		else if (e.keyCode === 80){
			$('.selected').text('P');
		} // ------------------
		else if (e.keyCode === 65){
			$('.selected').text('A');
			//checking();
		}
		else if (e.keyCode === 83){
			$('.selected').text('S');
		}
		else if (e.keyCode === 68){
			$('.selected').text('D');
		}
		else if (e.keyCode === 70){
			$('.selected').text('F');
		}
		else if (e.keyCode === 71){
			$('.selected').text('G');
		}
		else if (e.keyCode === 72){
			$('.selected').text('H');
		}
		else if (e.keyCode === 74){
			$('.selected').text('J');
		}
		else if (e.keyCode === 75){
			$('.selected').text('K');
		}
		else if (e.keyCode === 76){
			$('.selected').text('L');
		} // ------------
		else if (e.keyCode === 90){
			$('.selected').text('Z');
		}
		else if (e.keyCode === 88){
			$('.selected').text('X');
		}
		else if (e.keyCode === 67){
			$('.selected').text('C');
		}
		else if (e.keyCode === 86){
			$('.selected').text('V');
		}
		else if (e.keyCode === 66){
			$('.selected').text('B');
		}
		else if (e.keyCode === 78){
			$('.selected').text('N');
		}
		else if (e.keyCode === 77){
			$('.selected').text('M');
		} // ===================
		else if (e.keyCode === 13){
			testing();
		}
	}
    */
	
	function key_q(q){
		if (q.key == 'q'){
			selected.text('Q');
		}
	}
	
	function key_w(w){
		if (w.key == 'w'){
			selected.text('W');
		}
	}
	
	function key_e(e){
		if (e.key == 'e'){
			selected.text('E');
		}
	}
	
	function key_r(r){
		if (r.key == 'r'){
			selected.text('R');
		}
	}
	
	function key_t(t){
		if (t.key == 't'){
			selected.text('T');
		}
	}
	
	function key_y(y){
		if (y.key == 'y'){
			selected.text('Y');
		}
	}
	
	function key_u(u){
		if (u.key == 'u'){
			selected.text('U');
		}
	}
	
	function key_i(i){
		if (i.key == 'i'){
			selected.text('I');
		}
	}
	
	function key_o(o){
		if (o.key == 'o'){
			selected.text('O');
		}
	}
	
	function key_p(p){
		if (p.key == 'p'){
			selected.text('P');
		}
	}
	
	function key_a(a){
		if (a.key == 'a'){
			selected.text('A');
		}
	}
	
	function key_s(s){
		if (s.key == 's'){
			selected.text('S');
		}
	}
	
	function key_d(d){
		if (d.key == 'd'){
			selected.text('D');
		}
	}
	
	function key_f(f){
		if (f.key == 'f'){
			selected.text('F');
		}
	}
	
	function key_g(g){
		if (g.key == 'g'){
			selected.text('G');
		}
	}
	
	function key_h(h){
		if (h.key == 'h'){
			selected.text('H');
		}
	}
	
	function key_j(j){
		if (j.key == 'j'){
			selected.text('J');
		}
	}
	
	function key_k(k){
		if (k.key == 'k'){
			selected.text('K');
		}
	}
	
	function key_l(l){
		if (l.key == 'l'){
			selected.text('L');
		}
	}
	
	function key_z(z){
		if (z.key == 'z'){
			selected.text('Z');
		}
	}
	
	function key_x(x){
		if (x.key == 'x'){
			selected.text('X');
		}
	}
	
	function key_c(c){
		if (c.key == 'c'){
			selected.text('C');
		}
	}
	
	function key_v(v){
		if (v.key == 'v'){
			selected.text('V');
		}
	}
	
	function key_b(b){
		if (b.key == 'b'){
			selected.text('B');
		}
	}
	
	function key_n(n){
		if (n.key == 'n'){
			selected.text('N');
		}
	}
	
	function key_m(m){
		if (m.key == 'm'){
			selected.text('M');
		}
	}
	
	function key_enter(ent){
		if (ent.keyCode == 13){
			testing();
		}
	}
	
	//$(document).keyup(key_q);
    
	function pressing(){
		$('button').css('background-color','gainsboro');
		
		$(document).keyup(key_q);
		$(document).keyup(key_w);
		$(document).keyup(key_e);
		$(document).keyup(key_r);
		$(document).keyup(key_t);
		$(document).keyup(key_y);
		$(document).keyup(key_u);
		$(document).keyup(key_i);
		$(document).keyup(key_o);
		$(document).keyup(key_p);
		$(document).keyup(key_a);
		$(document).keyup(key_s);
		$(document).keyup(key_d);
		$(document).keyup(key_f);
		$(document).keyup(key_g);
		$(document).keyup(key_h);
		$(document).keyup(key_j);
		$(document).keyup(key_k);
		$(document).keyup(key_l);
		$(document).keyup(key_z);
		$(document).keyup(key_x);
		$(document).keyup(key_c);
		$(document).keyup(key_v);
		$(document).keyup(key_b);
		$(document).keyup(key_n);
		$(document).keyup(key_m);
		$(document).keyup(key_enter);
		
		$('.button_Q').on('click',function(){
			$('.selected').text('Q');
		});
		$('.button_W').on('click',function(){
			$('.selected').text('W');
		});
		$('.button_E').on('click',function(){
			$('.selected').text('E');
		});
		$('.button_R').on('click',function(){
			$('.selected').text('R');
		});
		$('.button_T').on('click',function(){
			$('.selected').text('T');
		});
		$('.button_Y').on('click',function(){
			$('.selected').text('Y');
		});
		$('.button_U').on('click',function(){
			$('.selected').text('U');
		});
		$('.button_I').on('click',function(){
			$('.selected').text('I');
		});
		$('.button_O').on('click',function(){
			$('.selected').text('O');
		});
		$('.button_P').on('click',function(){
			$('.selected').text('P');
		}); // ----------------------
		$('.button_A').on('click',function(){
			$('.selected').text('A');
		});
		$('.button_S').on('click',function(){
			$('.selected').text('S');
		});
		$('.button_D').on('click',function(){
			$('.selected').text('D');
		});
		$('.button_F').on('click',function(){
			$('.selected').text('F');
		});
		$('.button_G').on('click',function(){
			$('.selected').text('G');
		});
		$('.button_H').on('click',function(){
			$('.selected').text('H');
		});
		$('.button_J').on('click',function(){
			$('.selected').text('J');
		});
		$('.button_K').on('click',function(){
			$('.selected').text('K');
		});
		$('.button_L').on('click',function(){
			$('.selected').text('L');
		}); //-----------------
		$('.button_Z').on('click',function(){
			$('.selected').text('Z');
		});
		$('.button_X').on('click',function(){
			$('.selected').text('X');
		});
		$('.button_C').on('click',function(){
			$('.selected').text('C');
		});
		$('.button_V').on('click',function(){
			$('.selected').text('V');
		});
		$('.button_B').on('click',function(){
			$('.selected').text('B');
		});
		$('.button_N').on('click',function(){
			$('.selected').text('N');
		});
		$('.button_M').on('click',function(){
			$('.selected').text('M');
		});
	}
    
    select_slider.on('change',reroll);
	
	first_run();
	
	pressing();
    
    // ---
	
});