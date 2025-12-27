let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("Strength");

pass.addEventListener("input", () =>{
  if(pass.value.length > 0){
    msg.style.display = "block";
  }else{
    msg.style.display = "none";
  }
  if(pass.value.length < 4){
    str.innerHTML = "weak";
    pass.style.borderColor = "red";
    msg.style.color = "#a1d2f5ff";
  }else if(pass.value.length >= 4 && pass.value.length < 8){
    str.innerHTML = "medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "pink";
  } else if(pass.value.length >=8){
    str.innerHTML = "strong";
    pass.style.borderColor = "green";
    msg.style.color = "blue";
  }
})