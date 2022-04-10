//function splits the sentence
function onFormSubmit(){
    
    //form fields
    let message = document.getElementById("error");
    let message1 = document.getElementById("result");
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    
   //converted to strings
    let str1 = input1.toString();
    let str2 = input2.toString();
    
    if(validate(str1,str2)){
    if(str1.includes(str2)){
        let result = str1.substring(str1.indexOf(str2)+1,str1.length);
        message.innerHTML = "";
        message1.innerHTML = result;
        resetForm();    
    }
    else{
       message.innerHTML = "The letter does not exits in the sentence";
    }}
}

//Validation
function validate(str1,str2){
   
    let isValid = true;
    let message = document.getElementById("error");
    let message1 = document.getElementById("result");
    message1.innerHTML = "";
    
    try{
      if((str1 != null)&&(str1 != "")&&(str2 != null)&&(str2 != "")){
         if(str2.length!=1){
             isValid = false;
              throw "Input2 must be a single letter, Kindly edit and resubmit";
           }
         if(!onlyLetters(str2)){
              isValid = false;
              throw "Input2 must be a alphabet, Kindly edit and resubmit";
           }
         
       }
      else{
        isValid = false;
        throw "Kindly fill the Empty field and resubmit";
       }

    }
    catch(err){ 
       message.innerHTML = err;
    }
     
    return isValid;
}


//checks input contains only alphabets
function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

//Resets form
function resetForm(){
   document.getElementById("formID").reset();
}
