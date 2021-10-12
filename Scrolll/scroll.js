
//geting the elements we need
let RedRiding = document.getElementById("red_riding");
let branch = document.getElementById("branch");
let house = document.getElementById("house");
let bush1=document.getElementById("bush1");
let bush2=document.getElementById("bush2");
// let red2 = document.getElementById("red2");
// let wolf = document.getElementById("wolf");

//the scroll event Listener
window.addEventListener('scroll', function(){

	// getting the current scrolling value of user 
	let scrollValue = window.scrollY;

	// part one
		// letting red riding hood leave the frame
		RedRiding.style.left= (0-scrollValue * 3) +'px';
		RedRiding.style.top= scrollValue  +'px';

		// move the branch out of frame
		branch.style.top= (400+scrollValue)  +'px';
		branch.style.right= (-100-scrollValue) +'px';


		console.log(scrollValue);

	// part two and three
		// making red riding hood move in the second part and the wolf move in the third part
		if (scrollValue > 900){
			$("#wolf").animate({ 
				right: "+=10px",
			}, 2 );

			$("#red2").animate({ 
				left: "+=10px",
			}, 70 );
			// red2.style.left= (scrollValue/10) +'px';
			// wolf.style.right=(scrollValue/3) +'px';
		}

	// part four
			house.style.bottom= (-2300+scrollValue) +'px';
			bush1.style.bottom= (-2300+scrollValue) +'px';
			bush2.style.bottom= (-2100+scrollValue) +'px';
			bush3.style.bottom= (-2300+scrollValue) +'px';

			bush1.style.right= (200-scrollValue/10) +'px';
			bush2.style.right= (600-scrollValue/10) +'px';
			bush3.style.right= (500-scrollValue/10) +'px';


})