// target id on scroll
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarTargetId'
});



// typed js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Typed.js
    var typed = new Typed('#typed-output', {
        strings: ["Front-end Web Developer", "Web Designer", "Freelancer"],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 25, // backspacing speed in milliseconds
        loop: true // loop the typing effect
    });
});



// JavaScript to animate progress bar


for (let i = 1; i <= 6; i++) {
    document.addEventListener('DOMContentLoaded', function () {
        var progressBar = document.querySelector('.progress-bar' + i);
        // console.log("Iteration " + (i + 1));

        //   console.log("progressBar === ", progressBar);
        //  console.log("progressBar.aria-valuenow", i, "===", progressBar.ariaValueNow);
        var width = 1;
        var interval = setInterval(function () {
            if (width >= progressBar.ariaValueNow) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 50);

    });
}



var isFocused = false;
// Get all elements with the class name "animatedElement"
var animatedElements = document.getElementsByClassName("animatedElement");

// Loop through the collection of elements
for (let i = 0; i < animatedElements.length; i++) {
    animatedElements[i].addEventListener("mouseenter", function () {
        isFocused = true;
        // console.log("mouseenter === 1");
        gsap.to(this, {
            borderTopColor: "white",
            duration: 0.3,
            onComplete: () => { // Use arrow function to retain the correct context
                if (!isFocused) return;
                // console.log("mouseenter === 2");
                gsap.to(this, { // Use `this` instead of `this.target`
                    borderLeftColor: "white",
                    duration: 0.3,
                    onComplete: () => { // Use arrow function
                        if (!isFocused) return;
                        // console.log("mouseenter === 3");
                        gsap.to(this, { // Use `this` instead of `this.target`
                            borderBottomColor: "white",
                            duration: 0.3,
                            onComplete: () => { // Use arrow function
                                if (!isFocused) return;
                                // console.log("mouseenter === 4");
                                gsap.to(this, { // Use `this` instead of `this.target`
                                    borderRightColor: "white",
                                    duration: 0.3
                                });
                            }
                        });
                    }
                });
            }
        });
    });

    // Reset border colors on mouse leave
    animatedElements[i].addEventListener("mouseleave", function () {
        // console.log("mouseleave === ");
        isFocused = false; // Set the flag to false when the mouse leaves
        gsap.killTweensOf(this); // Stop any ongoing animations on this element
        gsap.to(this, {
            borderRightColor: "transparent",
            duration: 0.3,
            onComplete: () => { // Use arrow function to retain the correct context
                // console.log("onComplete === 1");
                gsap.to(this, { // Use `this` instead of `this.target`
                    borderBottomColor: "transparent",
                    duration: 0.3,
                    onComplete: () => { // Use arrow function
                        // console.log("onComplete === 2");
                        gsap.to(this, { // Use `this` instead of `this.target`
                            borderLeftColor: "transparent",
                            duration: 0.3,
                            onComplete: () => { // Use arrow function
                                // console.log("onComplete === 3");
                                gsap.to(this, { // Use `this` instead of `this.target`
                                    borderTopColor: "transparent",
                                    duration: 0.3
                                });
                            }
                        });
                    }
                });
            },

        });
    });
}



