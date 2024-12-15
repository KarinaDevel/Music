const audioElement = document.getElementById("audio");
    const wrapperElement = document.querySelector(".wrapper");


    wrapperElement.addEventListener("mouseover", () => {
        audioElement.play(); 
    });

    wrapperElement.addEventListener("touchstart", () => {
        audioElement.play(); // Воспроизвести аудио при касании
    });


    wrapperElement.addEventListener("mouseout", () => {
        audioElement.pause(); 
        audioElement.currentTime = 0;
    });
    wrapperElement.addEventListener("touchend", () => {
        audioElement.pause(); // Приостановить аудио
        audioElement.currentTime = 0; // Вернуться к началу
    });