mustache_x= 0;
mustache_y= 0;
lipstick_x= 0;
lipstick_y= 0;
function preload(){
    m_ustache= loadImage('https://i.postimg.cc/667Gn86t/mustache.jpg')
    lip_stick= loadImage('')
}
function setup(){
   canvas= createCanvas(350, 300);
   canvas.center();
   video= createCapture(VIDEO);
   video.size(350, 300);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('mustache', gotposes);
   poseNet.on('lipstick', gotposes);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        mustache_x= results[0].pose.mustache.x;
        mustache_y= results[0].pose.mustache.y;
        console.log("mustache x="+mustache_x);
        console.log("mustache y="+mustache_y);
        lipstick_x= results[0].pose.lipstick.x;
        lipstick_y= results[0].pose.lipstick.y;
    }    
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    image(video, 0, 0, 350, 300);
    fill(255, 6, 0);
    stroke(255, 200, 0);
    image(m_ustache, mustache_x, mustache_y, 60, 60);
    image(video, 0, 0, 350, 300);
    fill(255, 0, 0);
    stroke(255, 200, 0);
    image(lip_stick, lipstick_x, lipstick_y, 25, 60);
}
function take_snapshot(){
    save('my_filtered-image.png');
}