let points1 = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4],[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2]]; //list資料，
let points2 = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4],[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2]]; //list資料，
let points3 = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4],[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2]]; //list資料，
let points4 = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4],[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2]]; //list資料，
let points5 = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4],[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2]]; //list資料，
let ctx
var clo1='black'
var clo2='gray'
var m_num=1
function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  for (let i = 0; i < points1.length; i++) {
    for (let j = 0; j < points1[i].length; j++) {
      points1[i][j] = points1[i][j] * 20;
    }
  }
  for (let i = 0; i < points2.length; i++) {
    for (let j = 0; j < points2[i].length; j++) {
      points2[i][j] = points2[i][j] * 22;
    }
  }
  for (let i = 0; i < points3.length; i++) {
    for (let j = 0; j < points3[i].length; j++) {
      points3[i][j] = points3[i][j] * 24;
    }
  }
  for (let i = 0; i < points4.length; i++) {
    for (let j = 0; j < points4[i].length; j++) {
      points4[i][j] = points4[i][j] * 26;
    }
  }
  for (let i = 0; i < points5.length; i++) {
    for (let j = 0; j < points5[i].length; j++) {
      points5[i][j] = points5[i][j] * 28;
    }
  }
  ctx = canvas.getContext('2d');
	ctx.lineWidth = 3;
	ctx.lineCap = 'round'
}
function draw() {
  background(255);
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  textSize(30)  //文字大小
  text("教育科技系",-150+mouseX/10,-150)  //顯示文字
  scale(1, -1);  //上下翻轉
 for(let m = 0; m <m_num ; m++){
   draw_line(points1[points1.length-1][0],points1[points1.length-1][1])*10
 }
 for(let m = 0; m <m_num ; m++){
  draw_line(points2[points2.length-1][0],points2[points2.length-1][1])*10
}
for(let m = 0; m <m_num ; m++){
  draw_line(points3[points3.length-1][0],points3[points3.length-1][1])*10
}
for(let m = 0; m <m_num ; m++){
  draw_line(points4[points4.length-1][0],points4[points4.length-1][1])*10
}
for(let m = 0; m <m_num ; m++){
  draw_line(points5[points5.length-1][0],points5[points5.length-1][1])*10
}
}
function draw_line(){
  for(let i = 0; i <points1.length-1 ; i++){
    gradientLine(ctx, points1[i][0]+mouseX/10, points1[i][1]+mouseX/10, points1[i+1][0]+mouseX/10, points1[i+1][1]+mouseX/10, clo1, clo2)
  }
  gradientLine(ctx, points1[points1.length-1][0]+mouseX/10, points1[points1.length-1][1]+mouseX/10, points1[0][0]+mouseX/10, points1[0][1]+mouseX/10, clo1, clo2)
  for(let i = 0; i <points2.length-1 ; i++){
    gradientLine(ctx, points2[i][0]+mouseX/10, points2[i][1]+mouseX/10, points2[i+1][0]+mouseX/10, points2[i+1][1]+mouseX/10, clo1, clo2)
  }
  gradientLine(ctx, points2[points2.length-1][0]+mouseX/10, points2[points2.length-1][1]+mouseX/10, points2[0][0]+mouseX/10, points2[0][1]+mouseX/10, clo1, clo2)
  for(let i = 0; i <points3.length-1 ; i++){
    gradientLine(ctx, points3[i][0]+mouseX/10, points3[i][1]+mouseX/10, points3[i+1][0]+mouseX/10, points3[i+1][1]+mouseX/10, clo1, clo2)
  }
  gradientLine(ctx, points3[points3.length-1][0]+mouseX/10, points3[points3.length-1][1]+mouseX/10, points3[0][0]+mouseX/10, points3[0][1]+mouseX/10, clo1, clo2)
  for(let i = 0; i <points4.length-1 ; i++){
    gradientLine(ctx, points4[i][0]+mouseX/10, points4[i][1]+mouseX/10, points4[i+1][0]+mouseX/10, points4[i+1][1]+mouseX/10, clo1, clo2)
  }
  gradientLine(ctx, points4[points4.length-1][0]+mouseX/10, points4[points1.length-1][1]+mouseX/10, points4[0][0]+mouseX/10, points4[0][1]+mouseX/10, clo1, clo2)
  for(let i = 0; i <points5.length-1 ; i++){
    gradientLine(ctx, points5[i][0]+mouseX/10, points5[i][1]+mouseX/10, points5[i+1][0]+mouseX/10, points5[i+1][1]+mouseX/10, clo1, clo2)
  }
  gradientLine(ctx, points5[points1.length-1][0]+mouseX/10, points5[points1.length-1][1]+mouseX/10, points5[0][0]+mouseX/10, points5[0][1]+mouseX/10, clo1, clo2)
  
}
function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}