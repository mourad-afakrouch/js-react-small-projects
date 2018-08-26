// // var fname=prompt("waht is your firstname ?");
// // var ltname=prompt("waht is your lastname ?");

// // var age=prompt("waht is your age ?");

// // console.log("nice to meet you " +fname+" "+ ltname);

// // console.log("you are" + age +" years old");

// var born=prompt("how old are you ?")

// days = born* 365

// alert("you are living about "+ days)

// var num=5;

// var guess=prompt("guess a number");

// if (guess < num ){
// 	alert("its too low");
// }
// else if (guess > num ){
// 	alert("its too high");
// }
// else{
// 	alert("you guessed it");
// }

// num=-10;

// while(num<=19){
// 	console.log(num);
// 	num++
// }
// num=10;

// while(num<=40){
// 	console.log(num);
// 	num+=2;
// }

// num=300;

// odd=num + 1;
// while(odd<=333){
// 	console.log(odd);
// 	odd+=2;
// }

// num=5;


// while(num<=50){
// 	if(num%5===0 && num%3===0){
// 		console.log(num);
// 	}
// 	num++;
// }

// var a = prompt("are we there yet ?")

// while(a.indexOf("yes") === -1 ){
// 	var a = prompt("are we there yet ?");

// }

// alert("we finally made it");


// console.log(" numbers between -10 and 19 ")


// for (var i = -10; i <= 19; i++) {
// 	console.log(i)
// }

// console.log("even numbers between 10 and 40 ")

// for (var i = 10; i <= 40; i+=2) {
// 	console.log(i)
// }

// console.log("odd numbers between 300 and 333 ")

// for (var i = 300; i<=333 ; i++) {
// 	if (i%2!==0) {console.log(i);}
	
// }

// console.log(" numbers divisible by  3 and 5 ")

// for (var i = 5; i <= 50; i++) {
// 	if(i%5==0 && i%3==0){
// 		console.log(i);
// 	}
// }




// function kol(num){
// 	console.log("hello there "+num)
// }

// kol("mourad");


// function fof(man, kolo){

// 	return man * kolo
// }

// console.log(fof(5,10))

// var even=function (num){
// 		if (num%2 === 0){
// 			return true;
// 		}else{
// 			return false;
// 		}

// 		}


// console.log(even(80)


 

// function factorial(number){

// 	if(number == 0){ console.log('1')}
// 		else{
// 				x = number - 1  ;

// 				for ( x  ; x>0 ; x--){

// 					var fact = x * number;

// 					number = fact ;		

// 				}console.log(number);
// 					}


// }


// factorial(0);


// function kebabtosnake(word){

// 	if(word.includes("-")){
// 		var next = word.replace(/-/g, "_");
		
// 	}return next;

// }

 // var colore = ["red" , "blue" , "green" ];

 
 // colore.push("black");
 // console.log(colore);
 // colore.pop();
 // console.log(colore);
 // var colore = ["2" , "3" , "4","5" , "6" , "7" ];

 
 // colore.shift();
 // console.log(colore);
 // colore.unshift("black");
 // console.log(colore);

 

 // console.log(colore.slice(1, 3));


// to do function

// function todo(){

	

// 	while(true){

// 		var list = [];

// 		var add = prompt("what you like to do") ;

// 		if(add === "new"){

// 			var addnew = prompt("tell me :");

// 			while(addnew !=="quit" && addnew !=="list" && addnew!=="delete"){

// 				list.push(addnew);

// 				var addnew = prompt("tell me :");

// 				}if(addnew ==="list"){

// 				console.log(list);

// 				}else if( addnew ==="delete" ){

// 					list.forEach(function(tod, index){

// 						 console.log(index+" : "+tod);
						
// 					});

// 					var del=prompt("enter the todo to remove");

// 					// var value = indexOf(del);

// 					list.splice(del,1);

// 					console.log("todo "+  list[del] + " has been deleted");
					
// 					console.log("*********");
// 					list.forEach(function(tod, index){

// 						 console.log(index+" : "+tod);

						
// 					});console.log("*********");

// 					break;
// 					}

// 				}if(addnew === "quit"){
// 					break ;
// 					}
// 			}
// 	}
	
			

// todo();


// var list=["kaki", "blue","kdg", "54","02", "fsd","qr", "zqdesdg"];

// // // for (var i=0 ; i < list.length ; i++) {
// // // 	var col = list[i];
// // // 	console.log(col);
// // // }
// // function lo(n){


// // 	console.log("*************");
// // 	console.log(n);
// // 	console.log("*************");
// // }
// // list.forEach(lo);

// list.forEach(function(g){
// 	console.log(g);
// });












// var numbers=[1,2,3,4,5,6,7,8,9,10];
// var colors =["kaki", "blue","kdg", "54","02", "fsd","qr", "zqdesdg"];

// numbers.forEach(function(color){
// 	if(color % 3===0){
// 		var val = numbers.indexOf(color);
// 		 console.log(val);
// 	}
// });


//printreverse

// list=[];

// function printReverse(list){

// 		for (var i = list.length; i >=0 ; i--) {
// 			console.log(list[i]);
// 		}

// }

// printReverse(["a","b","c","d","e"]);

//isUniform

// function isUniforom(list){

// var state="true" ;

// for (var i = 0; i < list.length - 1 ; i++) {
	
// 		 if( list[i]!== list[i+1]){
// 			state = "false";
// 			}
// 	}
// console.log(state);
// }


// isUniforom(["a","0","a","a"]);





//sumArray

// function sumArray(list){

// 	var sum = 0;

// for (var i = 0; i < list.length  ; i++) {

		

// 		if(isNaN(list[i])){

// 		 console.log( "please enter array of numbers only");

// 		 	sum = "";

// 		 	break ;

// 				}else{
// 					sum += list[i];
					
// 				}
// 			}console.log(sum);
// 		}


// sumArray([9,8,0,1,0,1,0,0,0,0,"es",3]);



// var x=[11,55,555];

// for (var i = 0; i < x.length; i++) {
// 	console.log(isNaN(x));
// }



// function max(list){

// 	var max=0;

// 	for (var i = 0; i < list.length  ; i++) {

		

// 		if(isNaN(list[i])){

// 		 console.log( "please enter array of numbers only");

// 		 	sum = "";

// 		 	break ;

// 				}else{
// 				if( list[i] > max){
// 					max=list[i];
// 					}
					
// 				}
// 			}console.log(max);
// 		}


// max([0,300,8,3,100])

//movie rating

// var movies = [
	
// 	{
// 		title:"madmax",
// 		rating:"5",
// 		watched:true,
// 	},
// 	{
// 		title:"scherlock",
// 		rating:"4",
// 		watched:false

// 	},
// 	{
// 		title:"inception",
// 		rating:"5",
// 		watched:false,
// 	},
// 	{
// 		title:"fastfarious",
// 		rating:"2",
// 		watched:false

// 	}
// ];


// function imdb(somedb){

// 	somedb.forEach(function(item){

// 			if(item.watched){

// 				console.log("you have watched "+item.title+" - "+item.rating)

// 			}else{
// 				console.log("you have not seen "+item.title+" - "+item.rating)
// 			}


// 	});

// }


// DOM MANIPULATION



// var selec = document.querySelector("h1");

// var dam = true;

// setInterval(function(){

// 	if(dam){

// 		selec.style.color= "pink";

// 	}else{
// 		selec.style.color= "white";
// 	}
// 		dam = !dam;	
// },200);









// var button = document.querySelector("button");

// var body=document.querySelector("body");

// function background(){

// 	body.classList.toggle("bor");
// 	}

// button.addEventListener("click" ,background);


// var player1 ;
// var player2 ;

// var playingto = 5;

// *********************************keep score game**************************************//

// var inputs = document.querySelectorAll("input");
// var h1 = document.querySelectorAll("span");
// var p1 = Number(h1[0].textContent) ;
// var p2 = Number(h1[2].textContent) ;
// function add(){
// 		if (p1  < Number(inputs[0].value) && p2  < Number(inputs[0].value)){
// 		h1[0].textContent = p1 + 1 ;
// 		p1 = Number(h1[0].textContent);
// 		if(p1 == inputs[0].value){h1[0].classList.add("bor");}
// 		  }
// }
// function add2(){
// 		if (p2 < Number(inputs[0].value) && p1  < Number(inputs[0].value)){
// 		h1[2].textContent = p2 + 1 ;
// 		p2 = Number(h1[2].textContent) ;
// 		if(p2 == inputs[0].value){h1[2].classList.add("bor");}
// 		}
// }
// function reset(){
// 	h1[0].textContent = "0";
// 	p1 = 0; 
// 	h1[0].classList.remove("bor");
// 	h1[2].textContent = "0";
// 	p2 = 0;
// 	h1[2].classList.remove("bor");
// }
// inputs[1].addEventListener("click", add)
// inputs[2].addEventListener("click", add2)
// inputs[3].addEventListener("click", reset)
// //**************************************************************************//

// var links = document.querySelectorAll("a");


// for(var i = 0; i < links.length ; i++){
	
// 	links[i].getAttribute("href");
	

// }



// ============================== color game =======================//

///selectors

// var td = document.querySelectorAll("td");
// var rgb = document.querySelectorAll("span");
// var new_color = document.getElementById("new_color")
// var score = document.getElementById("score")
// var easy = document.getElementById("easy")
// var hard = document.getElementById("hard")
// var h1 = document.querySelector("h1")

// ///javascript variabls 
// // var  right_color = rgb(255,74,233)
// // var wrong1=rgb(77,255,62)
// // var wrong2=rgb(14,74,81)
// // var wrong3=rgb(255,74,0)
// // var wrong4=rgb(0,100,233)
// // var wrong5=rgb(90,74,30)
// var hue = "";
// // 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';


// var colors =[];

// for (var i = 0; i < 7; i++) {
// 	hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
// 	colors.push(hue);	
// }
// for(var i=0 ; i < td.length ; i++ ){
		
// 	td[i].style.backgroundColor = colors[i] ;
// }

// h1.textContent=td[(Math.floor(Math.random() * 6))].style.backgroundColor;

// function check(){

// if(this.style.backgroundColor===h1.textContent){
// 	score.textContent=("You Guess it !!");
// 	}else{
// 		score.textContent=("Try again !!")
// 		this.style.opacity="0"; 
// 		}

// }


// for (var i = 0; i < td.length; i++) {
	
// 	td[i].addEventListener("click", check);

// 	}

























