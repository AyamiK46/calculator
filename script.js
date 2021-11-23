$(function(){

    $('button').click(function(){
        // let result = $(".display").text();
        // console.log(result);→OK

        let value = $('.button').text();
        console.log(value);
    
        if (value == "AC"){
            console.log("oにする")
            // result="0";
        }else if(value == "="){
            console.log("合計にする")
            // result = eval(result);
        }else{
            console.log("計算式にして表示する")
            // result += result;
        }
    });
});


