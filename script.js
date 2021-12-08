const inputs= document.querySelectorAll(".angle-input");
const isTriangleBtn =document.querySelector("#is-triangle-btn");
const outputAns=document.getElementById("#output-ans");

function calculateSumOfAngles(angle1, angle2, angle3){
const sumOfAngles= angle1+angle2+angle3;
return sumOfAngles;
}



function isTriangle(){
const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number (inputs[2].value));
if(sumOfAngles===180){
//    outputAns.innerText="Angle given is of a triangle";
    console.log("Angle given is of a triangle");
}
else{
    // outputAns.innerText="Angle given is not of a triangle";
    console.log("Angle given is NOT of a triangle");
}





}
isTriangleBtn.addEventListener("click",isTriangle);