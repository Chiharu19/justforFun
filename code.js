let object = document.getElementById("obj");
let position = 100;
let position2 = 100;
let top1 = 30;
let left1 = 30;
let bottom1= 30;
let right1= 30;
let speed = 100;
let resize = 10;
let originalColor = "aqua";

document.addEventListener("input", function(){
  let choice = document.getElementById("inputSpeed");
  if(!isNaN(parseFloat(choice.value))){
    speed = parseFloat(choice.value);
  }
  else{
    choice.placeholder = "Cannot leave this blank";
    speed = 0;
  }
});

document.addEventListener("keypress", function(){
  switch(event.key) {
    case "ArrowUp":
    case "w":
      position -= speed;
      break;
    case "ArrowDown":
    case "s":
      position += speed;
      break;
    case "ArrowLeft":
    case "a":
      position2 -= speed;
      break;
    case "ArrowRight":
    case "d":
      position2 += speed;
      break;
    case "e":
      top1 += resize;
      left1 += resize;
      bottom1 += resize;
      right1 += resize;
      break;
    case "q":
      top1 -= resize;
      left1 -= resize;
      bottom1 -= resize;
      right1 -= resize;
      break;
    case "1":
      originalColor = "green";
      break;
    case "2":
      originalColor = "purple";
      break;
    case "3":
      originalColor = "yellow";
      break;
    case "4":
      originalColor = "aqua";
      break;
    case "5":
      originalColor = "red";
      break;
    case "o":
      object.style.borderRadius = "50%";
      break;
    case "p":
      object.style.borderRadius = "0%";
      break;
  }

  object.style.top = position + "px";
  object.style.left = position2 + "px";
  object.style.paddingTop = top1 + "px";
  object.style.paddingLeft = left1 + "px";
  object.style.paddingBottom = bottom1 + "px";
  object.style.paddingRight = right1 + "px";
  object.style.background = originalColor;
  console.log(event.key);
});