//JavaScript for Valid.Co

//allows user to input their review of the store
function communityReview(){
	var userReview = document.getElementById("input1").value;
	
//creating censorship
	if (userReview ==="This is a scam"){
		alert("We have detected  an error, Please try again");
	}
	else if(userReview === "Material sucks"){
		alert("We have detected an error, Try again");
	}
	else{
		document.getElementById("insert1").innerHTML ="Your Review: "+ userReview;
	}
}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover
// Used ^ as reference
//this will enlarge the image for shop to have a better view on the items that's being solded
function enlarge(s){
	s.style.height="160px";
	s.style.width="160px";
}

function normal(s){
	s.style.height="100px";
	s.style.width="100px";
}

//for the other images that's larger
function enlarge1(s){
	s.style.height="560px";
	s.style.width="580px";
}

function normal1(s){
	s.style.height="350px";
	s.style.width="370px";
}

//the next three functions is for showing the goals used homework 4 as reference
function moreInfo(){
	var clickInfo;
	var goals = ["Selling over 150K Apparel", "Have over 20K Followers on our Instagram Page","Have at least 60 Employees"];
	var iter = 0;
	var S = "";
	
	
	//while loop to show each goal
	while (iter < 3){
		S = "<li>" + goals[iter]+ "</li>" + S;
		document.getElementById("goal").innerHTML = S;
		iter ++;
	}
}

function moreInfo1(){
	var clickInfo;
	var goals = ["Design at least 40 apparels", "Improve Photography skills","Learn how to swim"];
	var iter = 0;
	var S = "";
	
	//while loop to show each goal
	while (iter < 3){
		S = "<li>" + goals[iter]+ "</li>" + S;
		document.getElementById("goal1").innerHTML = S;
		iter ++;
	}
}

function moreInfo2(){
	var clickInfo;
	var goals = ["Improve Social Media Handling", "Sell more than last year","Start learning how to cook"];
	var iter = 0;
	var S = "";

	//while loop to show each goal
	while (iter < 3){
		S = "<li>" + goals[iter]+ "</li>" + S;
		document.getElementById("goal2").innerHTML = S;
		iter ++;
	}
}

// browser experience when purchasing
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm
//Used ^ this as reference
function purchase(){
		
	if(confirm("Would you like to purchase this item?")){
		alert("The item you that you purchased is currently sold out.");
	}
	else{
		alert("You pressed Cancel.");
	}
}


