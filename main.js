var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
content=event.results[0][0].transcript.toLowerCase();
console.log(content);
if(content=="selfie"){
    speak();
}
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in five seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
        speak_data="taking your selfie in ten seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    },5000);
    setTimeout(function(){
        img_id="selfie2";
        take_snapshot();
        speak_data="taking your selfie in fifteen seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    },10000);
    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
    },15000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format:'png',
    png_quality:90
});
function take_snapshot()
{
console.log(img_id);
Webcam.snap(function(data_uri){
if (img_id=="selfie1"){
document.getElementById("result").innerHTML = "<img id='selfie1' src='"+data_uri+"'>";
}
if (img_id=="selfie2"){
document.getElementById("result").innerHTML = "<img id='selfie2' src='"+data_uri+"'>";
}
if (img_id=="selfie3"){
document.getElementById("result").innerHTML = "<img id='selfie3' src='"+data_uri+"'>";
}
});
}
