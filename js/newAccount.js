var fname = document.getElementById("fname");
var fnamelabel = document.getElementById("fnamelabel");

var lname = document.getElementById("lname");
var lnamelabel = document.getElementById("lnamelabel");

var email = document.getElementById("email");
var emaillabel = document.getElementById("emaillabel");

var phone = document.getElementById("phone");
var phonelabel = document.getElementById("phonelabel");

var password = document.getElementById("password");
var passwordlabel = document.getElementById("passwordlabel");

var confirmPassword = document.getElementById("confirmPassword");
var confirmpasswordlabel = document.getElementById("confirmpasswordlabel");

var genderlabel = document.getElementById("genderlabel");
var male = document.getElementById("male");
var female = document.getElementById("female");

var birthdate = document.getElementById("birthdate");
var birthdateLabel = document.getElementById("birthdateLabel");

function setError (label , text){
   label.innerHTML = text ;
   label.classList.replace("text-primary" , "text-danger");
}
function setSuccess (){
    fnamelabel.innerHTML = "First Name :";
    lnamelabel.innerHTML = "Last Name :";
    emaillabel.innerHTML = "Email :";
    phonelabel.innerHTML = "Phone Number :";
    passwordlabel.innerHTML = "Password :";
    confirmpasswordlabel.innerHTML = "Confirm Password :";
    genderlabel.innerHTML = "Gender :";
    birthdateLabel.innerHTML = "Birthdate :";
    var labels = [fnamelabel , lnamelabel , emaillabel , phonelabel , passwordlabel , confirmpasswordlabel , genderlabel , birthdateLabel];
    for(var i = 0 ; i < labels.length ; i++){
        labels[i].classList.replace("text-danger" , "text-primary");
    }
}

function validationSign(){
   if(fname.value == "" || fname.value.length < 3 || fname.value.includes(" ")){
        setError(fnamelabel , "Invalid First Name &#9940;");
        return false;
   }else if(lname.value == "" || lname.value.length < 3 || lname.value.includes(" ")){
        setSuccess();
        setError(lnamelabel , "Invalid Last Name &#9940;");
        return false;   
   }else if(email.value == "" || !email.value.includes("@") || !email.value.includes(".") || email.value.includes(" ")){
        setSuccess();
        setError(emaillabel , "Invalid Email &#9940;");
        return false;
    }
    else if(phone.value == "" || phone.value.length < 11 || phone.value.length > 14 || phone.value.includes(" ") || isNaN(phone.value)){
        setSuccess();
        setError(phonelabel , "Invalid Phone Number &#9940;");
        return false;
    }
    else if(password.value == "" || password.value.length < 8 || password.value.includes(" ") || !password.value.includes("!")){
        setSuccess();
        setError(passwordlabel , "Invalid Password &#9940;");
        return false;
    }
    else if(confirmPassword.value == "" || confirmPassword.value != password.value){
        setSuccess();
        setError(confirmpasswordlabel , "Password Not Matched &#9940;");
        return false;
    }
    
    else if(!male.checked && !female.checked){
        setSuccess();
        setError(genderlabel , "Please Choose Your Gender &#9940;");
        return false;
    }
    else if(birthdate.value == ""){
        setSuccess();
        setError(birthdateLabel , "Invalid Birthdate &#9940;");
        return false;
    }

    else{
        return true;
    }
}