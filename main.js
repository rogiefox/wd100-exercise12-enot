function setPound(){
    let inputValue = Number(document.querySelector("#inputValue").value); 


    let result = inputValue * 2.2;
    // alert(result);
    document.querySelector("#outputValue").value = result;
}

function setMilligram(){
    let inputValue = Number(document.querySelector("#inputValue").value); 


    let result = inputValue * 1000000;
    // alert(result);
    document.querySelector("#outputValue").value = result;
}

function setGram(){
    let inputValue = Number(document.querySelector("#inputValue").value); 


    let result = inputValue * 1000;
    // alert(result);
    document.querySelector("#outputValue").value = result;
}