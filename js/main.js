const generateButton = document.getElementById("gen");

const validHEXChars = "0123456789AaBbCcDdEeFf";

function regenColours(){
    let randomValue = 0;
    let hex = "#";

    for(let i = 0; i < 6; i++){
        randomValue = Math.floor(Math.random() * validHEXChars.length);
        hex = hex + validHEXChars[randomValue];
    }

    return hex;
}

generateButton.onclick = () => {
    let col1 = regenColours();
    let col2 = regenColours();

    document.getElementById("box1").style.backgroundColor = col1;
    document.getElementById("box2").style.backgroundColor = col2;
    document.getElementById("field1").innerHTML = col1;
    document.getElementById("field2").innerHTML = col2;
}