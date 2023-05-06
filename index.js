var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;


//now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

//taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;


if(inputTypeValue === 'meter' && resultTypeValue === 'killometer'){
    result.value = Number(input.value)*0.001;
}else if(inputTypeValue === 'meter' && resultTypeValue === 'Centimeter'){
    result.value = Number(input.value)*100;
}else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
    result.value = input.value
}


if(inputTypeValue === 'killometer' && resultTypeValue === 'meter'){
    result.value = Number(input.value)*1000;
}else if(inputTypeValue === 'killometer' && resultTypeValue === 'Centimeter'){
    result.value = Number(input.value)*100000;
}else if(inputTypeValue === 'killometer' && resultTypeValue === 'killometer'){
    result.value = input.value
}


if(inputTypeValue === 'Centimeter' && resultTypeValue === 'killometer'){
    result.value = Number(input.value)*0.00001;
}else if(inputTypeValue === 'Centimeter' && resultTypeValue === 'meter'){
    result.value = Number(input.value)*0.01;
}else if(inputTypeValue === 'Centimeter' && resultTypeValue === 'Centimeter'){
    result.value = input.value
}

}
