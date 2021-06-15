function setup(){
    video = createCapture(VIDEO);
    video.size(700, 700)
    video.position(230, 100)
    
    canvas = createCanvas(550, 550);
    canvas.position(1100, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded)
    
    poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded(){
        console.log('Posenet Is Initialized!')
    }
    
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
        }
    }
    
    function draw(){
        background('#FFFF00')
    }