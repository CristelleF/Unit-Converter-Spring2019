// select input field
var input= document.querySelector("#input");

//Select unit selection
varunit= document.querySelector("#unit");

//catch user input eventand unit change
input.addEventListener("input, convert");
unit.addEventListener("input, convert");

function convert(){


     //get value of user input and the unit
     var value= input.value;
     var unitValue=unit.value;
     var output=document.querySelector("#output");


     //Show output when there is a value
     if(value !==""){
         output.style.display="block";
     } else{
         output.style.display="none";
     }
       
// Check unit type
switch(unitValue) {
    case "lbs":
    convertLbs
    case "grams";
    case "kilograms";


}
   var card1= document.querySelector("#card-1");
   var card2= document.querySelector("#card-2");
   var card3= document.querySelector("#card-3");


   function convertLbs(value){
       card1.querySelector('h4').textContent="Grams:"
       card1.querySelector('h4').textContent="Grams:"
       card1.querySelector('h4').textContent="Grams:"
       
   }


   
    //Gram
    document.querySelector("#gram").textContent=value*453.592;
    
    

    //Kilogram
    document.querySelector("#kilogram").textContent=value*453.592/1000;



    //Ounce
    document.querySelector("#ounce").textContent=value*16;
}