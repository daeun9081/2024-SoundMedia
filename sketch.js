function setup() {
  createCanvas(1280, 720); // 이미지 크기 1280*720으로 불러오기
  jj = loadImage("jj.png"); 

}

function draw() {
  image(jj, 0, 0, 1280, 720); //진주귀걸이를 한 소녀 이미지 불러오기
  console.log(mouseX, mouseY); // 마우스 값 출력
  fill(237,208,187);
  noStroke(); // 테두리 없애기
  triangle(572, 344, 618, 336, 567, 314);
  fill(243,214,207);
  triangle(567, 314, 618, 336, 609, 274);
  fill(243,213,202);
  triangle(567, 314, 545, 255, 609, 274);
  fill(227,188,159);
  triangle(618, 336, 609, 274, 673, 309);
  fill(194,160,127);
  triangle(673, 309, 645, 360, 708, 336);
  fill(155,169,198);
  triangle(591, 208, 609, 274, 545, 255);
  fill(92,120,151);
  beginShape();
  vertex(708, 336);
  vertex(673, 309);
  vertex(653, 227);
  vertex(696, 271); 
  endShape(CLOSE);
  fill(149,174,199);
  triangle(673, 309, 653, 227, 609, 274);
  fill(164,182,211);
  triangle(609, 274, 653, 227, 591, 208);
  fill(52,67,92);
  triangle(708, 336, 785, 328, 696, 271);
  fill(41,37,47);
  triangle(708, 336, 785, 328, 753, 378); 
  fill(164,182,204);
  triangle(591, 208, 653, 227, 675, 163); 
  fill(174,198,227);
  triangle(591, 208, 675, 163, 582, 149);
  fill(43,78,126);
  triangle(785, 328, 755, 270, 696, 271); 
  fill(45,59,82);
  triangle(785, 328, 818, 265, 755, 270);
  fill(44,59,81);
  triangle(785, 328, 818, 265, 848, 320); 
  fill(105,140,179);
  triangle(818, 265, 826, 213, 756, 229 );
  fill(91,125,169);
  triangle(696, 271, 755, 270, 653, 227);
  fill(99,132,170);
  triangle(755, 270, 756, 229, 818, 265);
  fill(108,148,196);
  triangle(755, 270, 756, 229, 653, 227);
  fill(128,160,201);
  triangle(756, 229, 653, 227, 675, 163);
  fill(114,147,192);
  triangle(756, 229, 826, 213, 739, 126);
  fill(128,165,202);
  triangle(756, 229, 739, 126, 675, 163);
  fill(146,174,201);
  triangle(675, 163, 739, 126, 671, 117);
  fill(190,198,208);
  triangle(675, 163, 671, 117, 582, 149);
}