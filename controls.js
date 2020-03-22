let speed = document.getElementById("speed");
let output = document.getElementById("speed_1");
output.innerHTML = speed.value;
speed.oninput = function () {
  output.innerHTML = this.value ;
}

let l1_slider = document.getElementById("l1");
let output2 = document.getElementById("l1_1");
output2.innerHTML = l1_slider.value + " meters";
l1_slider.oninput = function () {
  output2.innerHTML = this.value + " meters";
}

let l2_slider = document.getElementById("l2");
let output3 = document.getElementById("l2_1");
output3.innerHTML = l2_slider.value + " meters";
l2_slider.oninput = function () {
  output3.innerHTML = this.value + " meters";
}

let m1_slider = document.getElementById("m1");
let output4 = document.getElementById("m1_1");
output4.innerHTML = m1_slider.value +  " kilograms";
m1_slider.oninput = function () {
  output4.innerHTML = this.value + " kilograms";
}

let m2_slider = document.getElementById("m2");
let output5 = document.getElementById("m2_1");
output5.innerHTML = m2_slider.value + " kilograms";
m2_slider.oninput = function () {
  output5.innerHTML = this.value + " kilograms";
}



//initial conditions

let phi1_slider = document.getElementById("phi1");
let output6 = document.getElementById("phi1_1");
output6.innerHTML = phi1_slider.value;
phi1_slider.oninput = function () {
  output6.innerHTML = this.value;
  reset();
}

let phi2_slider = document.getElementById("phi2");
let output7 = document.getElementById("phi2_1");
output7.innerHTML = phi2_slider.value;
phi2_slider.oninput = function () {
  output7.innerHTML = this.value;
  reset();
}

let dphi1_slider = document.getElementById("dphi1");
let output8 = document.getElementById("dphi1_1");
output8.innerHTML = dphi1_slider.value;
dphi1_slider.oninput = function () {
  output8.innerHTML = this.value;
  reset();
}

let dphi2_slider = document.getElementById("dphi2");
let output9 = document.getElementById("dphi2_1");
output9.innerHTML = dphi2_slider.value;
dphi2_slider.oninput = function () {
  output9.innerHTML = this.value;
  reset();
}
