// filepath: /website-project/website-project/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website is ready!');
    

 
    const projectImages = document.querySelectorAll("#Project img");

    // Dynamic Effect 1: Change image opacity on image click
    projectImages.forEach(img => {
        img.addEventListener("click", () => {
            img.style.opacity = img.style.opacity === "0.5" ? "1" : "0.5";
        });
    });
    

    // Dynamic Effect 2: Image hover zoom
    projectImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });

    // Dynamic Effect 3: Add a button to toggle text visibility
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Text Visibility";
    toggleButton.style.margin = "10px";
    document.querySelector("#Project").appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        const projectText = document.querySelector("#Project p");
        if (projectText.style.display === "none") {
            projectText.style.display = "block";
        } else {
            projectText.style.display = "none";
        }
    });

    // Dynamic Effect 4: Change background color on click

    const changeBackgroundButton = document.createElement("button");
    changeBackgroundButton.textContent = "Change Background Color";
    changeBackgroundButton.style.margin = "10px";
    document.querySelector("#Project").appendChild(changeBackgroundButton);


    const projectSection = document.querySelector("#Project");
    changeBackgroundButton.addEventListener("click", () => {
        projectSection.style.backgroundColor =
            projectSection.style.backgroundColor === "lightblue" ? "white" : "lightblue";
    });

    //Dynamic effect 5: Image spins clockwise on double click
    projectImages.forEach(img => {
        img.addEventListener("dblclick", () => {
            img.style.transition = "transform 0.5s ease";
            img.style.transform = "rotate(360deg)";
            setTimeout(() => {
                img.style.transform = "rotate(0deg)";
            }, 500);
        });
    });

});