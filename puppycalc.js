function calculateDogAge(age) {
    //1 year for dogs is equivalent to  7 human years
    var age= document.getElementById("dogage").value;
    var dogYears= 7 * age;
    console.log("Your dog is " + dogYears + " years old in dog years!!");


document.getElementById("humanyears").innerHTML= dogYears;
};