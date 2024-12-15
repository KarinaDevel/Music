const audioElement = document.getElementById("audio");
    const wrapperElement = document.querySelector(".wrapper");


    wrapperElement.addEventListener("mouseover", () => {
        audioElement.play(); 
    });


    wrapperElement.addEventListener("mouseout", () => {
        audioElement.pause(); 
        audioElement.currentTime = 0;
    });