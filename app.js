//console.log("Hello, World");
//window.alert("Merry Christmas!!!")//
//confirm("Are you at least 18?")//
//prompt("Ho Ho Ho!!!")//


// Variables can store values using data types //
//var name= "Kevin"; // String //
//var age= 35; // Number //
//var favFood = "Mexican";
//var isHungry= true; // Bolean is true or false values //
//var dayOfWeek= ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]; //Array List Of Items, Always starts at 0 //
//alert(('Welcome') + ' ' + name + ' ' + age + ' ' + favFood + ' ' + isHungry);
//console.log (dayOfWeek [1]); //Add number to display which day of week in the array //



var currentTime= new Date();
console.log (currentTime);
// This will get the date //
var time= document.getElementById("time");
// What do you want to do with it? //
time.innerHTML= currentTime.toLocaleTimeString();


// This will get the time //
var date= document= document.getElementById("date");
date.innerHTML= currentTime.toLocaleDateString();


// This will get the day of the week //
var daysOfWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var days= document.getElementById("week-day");
days.innerHTML= daysOfWeek[currentTime.getDay()];

