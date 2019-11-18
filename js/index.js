


 function countryfun()
{
    var a=document.getElementById("input").value;
    
    if(a==="Egypt")
    {
        var arr=["Cairo","Alex","Giza"];
    }
    
    else if(a==="USA")
    {
        var arr=["Washington","Texas","New York"];
    } 
    
    else if(a==="UK")
    {
        var arr=["Liverpool","Londen","Birmingham"];
    }
    
    var string="";
    
    for(i=0;i<arr.length;i++)
    {
        string=string+"<option>"+arr[i]+"</option>";
    }
    
    string="<select class='custom-select mb-3' name='any_name'>"+string+"</select>";
    
    document.getElementById("output").innerHTML= string;
}




// zip code only accepts 5 numbers


function isNumber(input)
{
    var regex = /[^0-9]/gi;
    input.value = input.value.replace(regex,"");
}



$("#zipCode").keyup(function()                  
{
    var a = /^[0-9]{5}$/; 
    if (a.test($(this).val()) && $(this).val() !== "")
        {
            $("#zipCode").css("border","2px solid green");
        }
    else
        {
            $("#zipCode").css("border","2px solid red");
        }
});



$("#Fname").keyup(function()    //only characters        
{
    var b = /^^[a-zA-Z]*$/; 
    if (b.test($(this).val()) && $(this).val() !== "")
        {
            $("#Fname").css("border","2px solid green");
        }
    else
        {
            $("#Fname").css("border","2px solid red");
        }
});


$("#Lname").keyup(function()  //only characters              
{
    var b = /^[a-zA-Z]*$/; 
    if (b.test($(this).val()) && $(this).val() !== "")
        {
            $("#Lname").css("border","2px solid green");
        }
    else
        {
            $("#Lname").css("border","2px solid red");
        }
});


$("#Email").keyup(function()  //validate the mail domain                
{
    var g = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if (g.test($(this).val()) && $(this).val() !== "")
        {
            $("#Email").css("border","2px solid green");
        }
    else
        {
            $("#Email").css("border","2px solid red");
        }
});





