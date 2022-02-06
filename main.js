function setup(){
    video=createCapture(VIDEO);
    video.size(450,500);
    canvas=createCanvas(400,450);
    canvas.position(470,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results) {
if(results.length>0){
    console.log(results);
}
}