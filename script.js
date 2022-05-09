const calculateTemp = () => {

    const numberTemp = document.getElementById("temp").value ;

    const tempSelected = document.getElementById("tempSelect");
    const valueTemp = tempSelect.options[tempSelected.selectedIndex].value;
    
    let result;
    if(valueTemp == "cel") {
        result = Math.round( (numberTemp - 32)*(5/9) );
        document.getElementById("resultContainer").innerHTML= result + "°C";
        console.log(result) ;
    } else {
        result =  Math.round( (numberTemp * 1.8) + 32 );
        document.getElementById("resultContainer").innerHTML=  result + "°F";
        console.log(result) ;
    }

}