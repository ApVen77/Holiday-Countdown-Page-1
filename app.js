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



function countDown()
{   
// Sets The Timer End Date
    var today= new Date();
    var eventDate= new Date("December 25,2020 00:00:00");

// Gets Current Time 
    var currentTime= today.getTime();
    var eventTime= eventDate.getTime();

    var remTime = eventTime - currentTime;

//Calculates Time
    var seconds= Math.floor(remTime/1000);
    var minutes= Math.floor(seconds/60);
    var hours= Math.floor(minutes/60);
    var days= Math.floor(hours/24);

// Hours In A Day / Minutes In An Hour / Seconds In a Minute 
    hours = hours % 24;
    minutes%= 60;
    seconds%=60;

    hours=(hours<10) ? "0" + hours : hours;
    minutes=(minutes<10) ? "0" + minutes : minutes;
    seconds=(seconds<10) ? "0" + seconds : seconds;

 //Connects To HTML IDs, Displays Time On Page
    document.getElementById("days").innerHTML =days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

    setTimeout(countDown,1000);

}

    countDown();


// var currentTime= new Date();
// console.log (currentTime);
// // This will get the date //
// var time= document.getElementById("time");
// // What do you want to do with it? //
// time.innerHTML= currentTime.toLocaleTimeString();


// // This will get the time //
// var date= document= document.getElementById("date");
// date.innerHTML= currentTime.toLocaleDateString();


// // This will get the day of the week //
// var daysOfWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
// var days= document.getElementById("week-day");
// days.innerHTML= daysOfWeek[currentTime.getDay()];


// //1- // Write an expression that uses at least 3 different arithmetic operators.
 
// // The expression should equal 42.
 
// // Hint: +, -, *, /, and % are possible arithmetic operators
 
// // Your Code:
// var x = 40;
// var y = 2;
// var z = x+y;
// console.log(x+y);
 
 
// //2- // Create a string with the name of your favorite food. The first letter of the string should be capitalized.
 
// // Your Code:
// console.log("Mexican");
 
 
// //3-// Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the udaciFamily to the console using console.log.
 
// // Your Code:
// var egFamily= ["Julia","James","Kevin"];
// console.log(egFamily);
 
 
// //4-// Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
 
// // Your Code:
// var expression= "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal"
// console.log(expression);
 
 
// //5-// Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12 °C.
//  //Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
//  //F = C x 1.8 + 32
//  //Log the fahrenheit variable to the console.
 
// // Your Code:
// var celsius= 12;
// var fahrenheit= celsius * 1.8 + 32;
// console.log(fahrenheit);
 
// //6-// Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
 
// // Blowing from the west
// // Fallen leaves gather
// // In the east.
// // Each string should be printed on its own line.
 
// // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.
 
// // Your Code:
// var poem= "Blowing from the west\n" + "Fallen Leaves gather\n" + "In the east";
// console.log(poem);
 
// //7-// Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,
 
// // red blue
// // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!
 
// // Your Code:
// var thingOne= "red";
// var thingTwo= "blue";
// console.log(thingOne + thingTwo);
 
 
 
// //8- // Create a variable called fullName and assign it your full name as a string.
 
// // Your Code:
// var fullName= "Kevin McCall";
// console.log(fullName);
 
// //9- // Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
 
// // Print the total to the JavaScript console.
 
// // Hint: 15% in decimal form is written as 0.15_._
 
// // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
 
// // Your Code:
// var bill= 10.25 + 3.99 + 7.15;
// var tip= 0.15 * bill;
// var total= bill + tip;
// console.log("$"+total.toFixed(2));
 
// //10- // "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
// // "Hi, my name is James. I love baseball. In my spare time, I like to read."
// // Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
 
// // Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
 
// // Your Code:
// var name= "Hi, my name is Julia. ";
// var cat= "I love cats. ";
// var interest= "In my spare time, I like to play video games."
// console.log(name+cat+interest);
 
 
 
// //-11- //Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elephant!" "I am Small like a mouse!". Use string methods to make the
// //'small' variable lowercase and the 'big' variable capital.
// //console.log out the results
// var big= "I am Big like an elephant!";
// var small= "I am small like a mouse";
// console.log(big.toUpperCase(),small.toLocaleLowerCase());

