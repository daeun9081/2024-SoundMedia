function preload(){
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230,220,0);
  
  fill(255);
  stroke(0,255);
  ellipse(200,200, 200,200); //(x,y,diameterX, diameterY)
  //triangle(200,50,50,200,350,200); //트라이앵글 각 꼭짓점의 좌표
  arc(200,200,120,120,2*PI, PI); //호도법으로 계산
  ellipse(160,170,10,10);
  ellipse(240,170,10,10);
  line(200,190,200,220);
  rect(210,212,5,5);
  rect(185,212,5,5);
  
  stroke(200, 255); //밝기, 알파값
  line(100, 100, 200, 200);
  stroke(155,200,0,255);//RGB,알파값
  line(200,200,300,100);
  
  fill(200,100,0);
  //noFill();
  //noStroke();
  stroke(0);
  ellipse(100,100, 20,20);
  
  //색상을 다시 원래대로 돌리는 명령어는 없음
  fill(255);
  stroke(0,0,0);
  strokeWeight(3); 
  //draw는 반복하기 때문에 다른 위의 도형도 모두 굵어진다
  rect(10,10,10,10);
}