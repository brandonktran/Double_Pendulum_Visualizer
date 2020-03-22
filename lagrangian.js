let phi1 = 0 * (Math.PI) / 2;
let phi2 =  (Math.PI) / 2.4;
let dphi1 = 0;
let dphi2 = 0;
let p1=100;
let p2=100;
let dp1 = 0;
let dp2 = 0;
let time = 0.2;
let tip = [];

function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent("canvasContainer")

  reset();
}

function draw() {
  background("#ebeded");
  translate(500, 200);

  let r1 = 20;
  let r2 = 20;
  let g = 9.8;
  let m1 = parseInt(m1_slider.value);
  let m2 = parseInt(m2_slider.value);
  let l1 = parseInt(l1_slider.value);
  let l2 = parseInt(l2_slider.value);
  let time = parseInt(speed.value)/100;
  let color = "red"
  let mu = 1 + m1 / m2;

  // //Hamiltonian equations of motion using Euler Method

  // h1 = (p1 * p2 * Math.sin(phi1 - phi2)) / (l1 * l2 * (m1 + m2 * (Math.sin(phi1 - phi2)) ** 2));
  // h2 = (m2 * l2 ** 2 * p1 ** 2 + (m1 + m2) * l1 ** 2 * p2 ** 2 - 2 * m2 * l1 * l2 * p1 * p2 * Math.cos(phi1 - phi2)) / (2 * l1 ** 2 * l2 ** 2 * (m1 + m2 * (Math.sin(phi1 - phi2)) ** 2) ** 2);

  // dphi1 = (l2 * p1 - l1 * p2 * Math.cos(phi1 - phi2)) / (l1 ** 2 * l2 * (m1 + m2 * Math.sin(phi1 - phi2) ** 2));
  // phi1 += dphi1 * time;
  // dphi2 = (-m2 * l2 * p1 * Math.cos(phi1 - phi2) + (m1 + m2) * l1 * p2) / (m2 * l1 * l2 ** 2 * (m1 + m2 * (Math.sin(phi1 - phi2)) ** 2));
  // phi2 += dphi2 * time;
  // dp1 = -(m1 + m2)*g*l1*Math.sin(phi1)-h1 + h2*Math.sin(2*(phi1-phi2));
  // p1 += dp1 * time;
  // dp2 = -m2 * g * l2 * Math.sin(phi2) +h1-h2*Math.sin(2*(phi1-phi2));
  // p2 += dp2 * time;

  //Solving Lagrangian equations of motion using Euler Method
  ddphi1 = (g * (Math.sin(phi2) * Math.cos(phi1 - phi2) - mu * Math.sin(phi1)) - (l2 * dphi2 * dphi2 + l1 * dphi1 * dphi1 * Math.cos(phi1 - phi2)) * Math.sin(phi1 - phi2)) / (l1 * (mu - Math.cos(phi1 - phi2) * Math.cos(phi1 - phi2)));
  ddphi2 = (mu * g * (Math.sin(phi1) * Math.cos(phi1 - phi2) - Math.sin(phi2)) + (mu * l1 * dphi1 * dphi1 + l2 * dphi2 * dphi2 * Math.cos(phi1 - phi2)) * Math.sin(phi1 - phi2)) / (l2 * (mu - Math.cos(phi1 - phi2) * Math.cos(phi1 - phi2)));
  dphi1 += ddphi1 * time;
  dphi2 += ddphi2 * time;
  phi1 += dphi1 * time;
  phi2 += dphi2 * time;


  let x1 = l1 * Math.sin(phi1);
  let y1 = l1 * Math.cos(phi1);
  let x2 = l2 * Math.sin(phi2);
  let y2 = l2 * Math.cos(phi2);

  tip.push([x1 + x2, y1 + y2]);

  line(-100, 0, 100, 0);

  fill("black");
  strokeWeight(1)
  ellipse(0, 0, 2);

  stroke(color)
  strokeWeight(1)
  line(0, 0, x1, y1);

  stroke(color)
  strokeWeight(1)
  line(x1, y1, x1 + x2, y1 + y2);

  fill(color);
  ellipse(x1, y1, r1);

  fill(color);
  ellipse(x1 + x2, y1 + y2, r2);

  beginShape()
  for (let i = 0; i < tip.length; i++) {
    noFill();
    vertex(tip[i][0], tip[i][1]);
  }
  endShape()

}


function reset() {
  phi1 = parseInt(phi1_slider.value)*Math.PI/50;
  phi2 = parseInt(phi2_slider.value) * Math.PI / 50;
  dphi1 = parseInt(dphi1_slider.value)/100;
  dphi2 = parseInt(dphi2_slider.value) / 100;;
  // p1 = 100;
  // p2 = 100;
  dp1 = 0;
  dp2 = 0;
  time = parseInt(speed.value) / 100;
  tip = [];
}
