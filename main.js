Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

cam = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="captured_img" src=" '+ data_uri +'">';
    });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_gxxO9RNx/model.json', modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img, result);
}

function result(error, results){
    if(error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("output_object").innerHTML = results[0].label;
        document.getElementById("output_accuracy").innerHTML = results[0].confidence.toFixed(3);
        
    }
}