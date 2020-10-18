var age = 18;
var gender = "Male";

if((age < 21 && gender.toLowerCase() == "male") || (age < 18 && gender.toLowerCase() == "female")){
    console.log("Not For marriage");
}else{
    console.log("Aged For marriage");
}