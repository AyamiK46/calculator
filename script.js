
function clickbutton(target){
    let result = document.getElementById("display");
    let input = target.innerHTML;

     if (input == "AC"){
        result.innerHTML="0"
     }else if(input == "="){
        result.innerHTML = eval(result.innerHTML)
     }else{
        if(result.innerHTML == "0"){
          result.innerHTML = input;
        }else{
        result.innerHTML += input;
        }
     }
}


