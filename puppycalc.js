function calculateDogAge(age) {
    //1 year for dogs is equivalent to  7 human years
    var age= document.getElementById("dogage").value;
    var dogYears= 7 * age;
    console.log("Your dog is " + dogYears + " years old in dog years!!");

//Targets human years ID in HTML and applies variable dog years
document.getElementById("humanyears").innerHTML= dogYears;
};

//Age CalculatorS
var checkName = window.prompt("Enter your name:")
var checkAge = window.prompt("Enter your age:")

if (checkAge < 18) {
    window.alert("You are under " + checkAge + ": and therefore not authorized to access this page.");
    location.replace("http://www.google.com");
}

else if (checkAge > 18 && checkAge < 100) {
    window.alert("You are old enough to visit the site. Welcome " + checkName + "!");

}

else {
    window.alert("You must be honest about your age," + checkName + ".");
}

