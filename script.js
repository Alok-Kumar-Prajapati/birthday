document.addEventListener("DOMContentLoaded", function () {
    // Generate Balloons
    const balloonContainer = document.getElementById("balloon-container");
    const colors = ['#ff67a3', '#ff8da1', '#ff99b0', '#ffb3c1'];

    for (let i = 0; i < 30; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = `${Math.random() * 100}%`;
        balloonContainer.appendChild(balloon);
    }

    // Show "Happy Birthday" message after balloons fill the screen
    setTimeout(() => {
        document.getElementById("birthday-message").classList.remove("hidden");
    }, 3000);

    // Show Envelope after message
    setTimeout(() => {
        document.getElementById("envelope").classList.remove("hidden");
    }, 6000);

    // Show animal GIFs after envelope
    setTimeout(() => {
        document.getElementById("cute-animals").style.display = "block";
    }, 8000);
});
