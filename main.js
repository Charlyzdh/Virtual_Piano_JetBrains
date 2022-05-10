

function a(event){
    let audio = document.createElement("AUDIO");
    let src = audio.src;
    if(event.key === 'a' || event.key === 'A') {audio.src = "Audios/A.mp3"; audio.play();}
    if(event.key === 's' || event.key === 'S') {audio.src = "Audios/S.mp3"; audio.play();}
    if(event.key === 'd' || event.key === 'D') {audio.src = "Audios/D.mp3"; audio.play();}
    if(event.key === 'f' || event.key === 'F') {audio.src = "Audios/F.mp3"; audio.play();}
    if(event.key === 'g' || event.key === 'G') {audio.src = "Audios/G.mp3"; audio.play();}
    if(event.key === 'h' || event.key === 'H') {audio.src = "Audios/H.mp3"; audio.play();}
    if(event.key === 'j' || event.key === 'J') {audio.src = "Audios/J.mp3"; audio.play();}
    if(event.key === 'w' || event.key === 'W') {audio.src = "Audios/W.mp3"; audio.play();}
    if(event.key === 'e' || event.key === 'W') {audio.src = "Audios/E.mp3"; audio.play();}
    if(event.key === 't' || event.key === 'T') {audio.src = "Audios/T.mp3"; audio.play();}
    if(event.key === 'y' || event.key === 'Y') {audio.src = "Audios/Y.mp3"; audio.play();}
    if(event.key === 'u' || event.key === 'U') {audio.src = "Audios/U.mp3"; audio.play();}
}

document.addEventListener("keydown",function(event){
    let teclas = ['A','a','S','s','D','d','F','f','G','g','H','h','J','j','W','w','E','e','T','t','Y','y','U','u'];
    let error_flag = true;
    for (i = 0; i< teclas.length; i++)
    {
        if (event.key === teclas[i])
        {
            a(event);
            error_flag = false;
        }
    }
    if(error_flag === true)
    {
        console.log("Error, key pressed not matching piano keyboard");
    }
});