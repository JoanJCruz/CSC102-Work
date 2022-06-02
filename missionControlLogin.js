//Joan J. Cruz
function validateLogin()
{
    var fName = document.forms["operatorLogin"]["firstName"].value;
    //Gets the first name from the form
    var lName = document.forms["operatorLogin"]["lastName"].value;
    //Gets the last name from the form
    var fullName = fName + " " + lName;
    //Combines the first and last names to create a full name
    var num = document.forms["operatorLogin"]["badgeNumber"].value;
    //Gets the badge number from the form
    if(fName == "")
    {
        alert("Invalid Entry (No first name)");
        return false;
    }
    //Checks if the first name is empty and returns false if so
    if(lName == "")
    {
        alert("Invalid Entry (No last name)");
        return false;
    }
    //Checks if the last name is empty and returns false if so
    else if(fullName.length > 20)
    {
        alert("Invalid Entry (full name exceeds character limit)")
        return false;
    }
    //Checks if the full name is longer than 20 characters and returns false if so
    else if(num == undefined)
    {
        alert("Invalid Entry (No badge number)");
        return false
    }
    //Checks if the badge number is empty and returns false if so
    else if(num <= 0 || num >= 1000)
    {
        alert("Invalid Entry (Not a valid badge number)");
        return false; 
    }
    //Checks if the badge number has 3 digits. Returns false if found to not be 3 digits
    else if(isNaN(num))
    {
        alert("Invalid Entry (Not a number)");
        return false;
    }
    //Checks if the badge number is a number, returns false if it's not
    else
    {
        alert("Login Successful. Welcome " + fullName + " (Employee #" + num + ")."); 
        window.open("https://www.uattech.com/mission-5.-uat-in-space");
        document.write("Login complete. You may exit this page.");
    }
    //Once every check is passed, the login page welcomes the user and links to the UAT space program site

}