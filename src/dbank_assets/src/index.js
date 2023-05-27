import {dbank} from "../../declarations/dbank";

window.addEventListener("load",async function(){
  // console.log("finished loading");
  update();
});

document.querySelector("form").addEventListener("submit",async function(event){
  event.preventDefault();
  // console.log("working");
  const button = event.target.querySelector("#submit-btn")
  const input1 = parseFloat(document.getElementById("input-amount").value);
  const input2 = parseFloat(document.getElementById("withdrawal-amount").value);
  // console.log(input1);

  button.setAttribute("disabled",true);
  
  if(document.getElementById("input-amount").value.length!=0){
    await dbank.topUp(input1);
  }

  if(document.getElementById("withdrawal-amount").value.length!=0){
    await dbank.withDraw(input2);
  }

  await dbank.compound();
  
  update();
  
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");

})

async function update(){
  const currentAmount = await dbank.showBalance();
  document.getElementById("value").innerText = Math.round(currentAmount*100)/100;
}