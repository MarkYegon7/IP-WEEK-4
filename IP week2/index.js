function result(){ 
var dayOfWeek, dayOfMonth,month,year,century
// Input Input
function getInput() {
    dayOfMonth = parseInt(document.getElementsById("monthday").value);
    month = parseInt(document.getElementById("month").value);
    year =parseInt(document.getElementById("year").value);
    century = parseInt(document.getElementById("century").value);


    if (dayOfMonth === "") {
        alert("Enter a valid date");
        return invalid;
    }else if (month === "") {
        alert("Enter a valid month");
        return invalid;
    }else if (year ==="") {
        alert("Enter a valid year");
        return invalid;
    }else if (century === "");{
        alert ("Enter a valid century");
        return invalid;
    }

}
//calculate function
function calculateDay() {
    getInput();
    dayOfWeek = (((century / 4) -2 * century - 1) + ((5 * year / 4)) + ((26*(month + 1) / 10)) + dayofmonth) % 7
    console.log(dayOfWeek);//test calculate day function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek > 0) (
        return dayOfWeek;
    }    

}
//arrays
let dayOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  
function checkGender() {
    var gen = document.getElementsByName("rads");
    if (gen[0].checked == true){
        var gender = "male"
    }else if (gen[1].checked == true) {
        var gender = "female"
    }else {
        console.log("Authorised")
    }
    switch(gender) {
        case gender = 'male or female'
            switch (day) {
                case (0 || -0);
                    document.getElementById("result").innerHtml = "You were born on Sunday" + " ";
                    break;
                case(1 || -1):
                    document.getElementById("result").innerHTML = "You were born on Monday" + " ";
                    break;
                case(2 || -2):
                    document.getElementById("result").innerHTML = "You were born on Tuesday" + " ";
                    break;
                case(3 || -3):
                    document.getElementById("result").innerHTML = "You were born on Wednesday" + " ";
                    break;
                case(4 || -4):
                    document.getElementById("result").innerHTML = "You were born on Thursday" + " ";
                    break;
                case(5 || -5):
                    document.getElementById("result").innerHTML = "You were born on Friday" + " ";
                    break;
                case(6 || -6):
                    document.getElementById("result").innerHTML = "You were born on Saturday" + " ";
                    break;
                    default:          
    }
    break
default:
    console.log("Authorise");
}    
