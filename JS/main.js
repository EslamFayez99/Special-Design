// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
// consol.log("Local Storage Is Not Empty You Can Set It On Root Now");
// consol.log(localStorage.getItem("color_option"));

    document.documentElement.style.setProperty('--main--color', mainColors)// mainColors = localStorage.getItem("color_option"));

    // Remove Active Class From All Colors List Items
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        // Add Active Class On Element With Data-color === Local Storage Item
        if (element.dataset.color === mainColors) {

            // Add  Active Class
            element.classList.add("active");

        }

    });

}


// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

    // console.log(backgroundLocalItem);
    // console.log(typeof(backgroundLocalItem));

    if (backgroundLocalItem === "true") {

        backgroundOption = true;

    } else {

        backgroundOption = false;

    }

    // Remove Active Class Erom All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {

        element.classList.remove("active")

    });

    if (backgroundLocalItem === "true") {

        document.querySelector(".random-backgrounds .yes").classList.add("active");

    } else {

        document.querySelector(".random-backgrounds .no").classList.add("active");

    }

};




// Toggle Spin Class On Icon // ======  On Click And Add Class  ======
document.querySelector(".toggle-settings .setting-icon").onclick = function () {

    // Toggel Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open ON Main Setings Box
    document.querySelector(".settings-box").classList.toggle("open");

};

// Switch Colors  // ======  Loop li On Click تغيير الالوان  ======
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List
colorsLi.forEach(li => {

    // Click On Every List Items
    li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

    // // Remove Active Class From All Childerns
    // e.target.parentElement.querySelectorAll(".active").forEach(element => {

    //     element.classList.remove("active");

    // });

    // // Add Active Class On Self
    // e.target.classList.add("active");

    });

});


// Switch Random Background Option  // ======  Loop li On Click التخكم في تغيير الخلفية  ======
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Span
randomBackEl.forEach(span => {

    // Click On Every Span
    span.addEventListener("click", (e) => {

        handleActive(e);

    // // Remove Active Class From All Childerns
    // e.target.parentElement.querySelectorAll(".active").forEach(element => {

    //     element.classList.remove("active");

    // });

    // // Add Active Class On Self
    // e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {

        backgroundOption = true;

        randomizeImgs();

        localStorage.setItem("background_option", true);

    } else {

        backgroundOption = false;

        clearInterval(backgroundInterval);

        localStorage.setItem("background_option", false);

    }

    });

});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg", "bg-4.jpg", "bg-5.jpg", "bg-6.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
        
        },5000);

    }

};

randomizeImgs();



// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;
    
    // Window Height
    let windowHeight = this.innerHeight;
    
    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    // this.console.log(skillsOffsetTop);
    // this.console.log(skillsOuterHeight);
    // this.console.log(windowHeight);
    // this.console.log(windowScrollTop);


    if (windowScrollTop < (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span")

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};


// Create Popup With Image
let ourGallery = document.querySelectorAll('.gallery img');

// 
ourGallery.forEach(img => {

    img.addEventListener("click", (e) => {

        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay 
        overlay.className = "popup-overlay";

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = "popup-box";


        if (img.alt !== null) {

        // Create Heading
        let imgHeading = document.createElement("h3");

        // create Text For Heading
        let imgText = document.createTextNode(img.alt);

        // Append The Text To The Heading
        imgHeading.appendChild(imgText);

        // Append The Heading To The Popup Box
        popupBox.appendChild(imgHeading);

        }


        // Creat The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box Body
        document.body.appendChild(popupBox);

        // Creat The Close Span
        let closeButton = document.createElement("span");

        // Creat The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Cloae Button
        closeButton.className = "close-button";

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);

    });

});


// Close Popup
document.addEventListener("click", function (e) {

    if (e.target.className == "close-button") {

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }

});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'

            });

        });

    });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);


// Handel Active Start
function handleActive(ev) {

        // Remove Active Class From All Childerns
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    // Add Active Class On Self
    ev.target.classList.add("active");

}


// display Bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocalItem === "block") {

        bulletsContainer.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = "none";

        document.querySelector(".bullets-option .no").classList.add("active");

    }

}


bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === "show") {

            bulletsContainer.style.display = "block";

            localStorage.setItem("bullets_option", "block");

        } else {

            bulletsContainer.style.display = "none";

            localStorage.setItem("bullets_option", "none");

        }

        handleActive(e);

    });

});

// Reset Button
document.querySelector(".reset-option").onclick = function () {

    // localStorage.clear();  // delet All In The Local Storage

    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();

};


// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let theLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation ===== ع لما تدوس مبين التوجل مينيو ميحصلش حاجه =====
    e.stopPropagation();


    // Toggle Class "menu-activ" On Button
    this.classList.toggle("menu-active");

    // Toggle Class "open" On Links
    theLinks.classList.toggle("open");

};


// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== theLinks) {

        // Check If Menu Is Open
        if (theLinks.classList.contains("open")) {

        // Toggle Class "menu-activ" On Button
        toggleBtn.classList.toggle("menu-active");

        // Toggle Class "open" On Links
        theLinks.classList.toggle("open");

        }

    }

});


// Stop Propagation On Menu
theLinks.onclick = function (e) {
    e.stopPropagation();
}





// console.log();