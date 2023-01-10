function calculate(){
    let temp = document.querySelector("#characters").value;
     temp.trim();
     let count = 0;
    for(let i = 0; i<temp.length; i++ ){
        if(temp[i] != " ")count++;
    }
    document.querySelector(".result").innerHTML=  count;

}