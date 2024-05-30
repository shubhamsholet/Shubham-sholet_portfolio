// target id on scroll
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarTargetId'
});


// page change on scroll gsap

gsap.utils.toArray('section').forEach((section, i) => {
console.log("window.innerWidth === ",window.innerWidth,window.innerWidth >= 600);
    if (section.getAttribute('data-header-nav') !== null && window.innerWidth >= 600) {
        var colorClass = section.getAttribute('data-header-nav')
console.log("colorClass === ",colorClass);

        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            toggleClass: {
                targets: '#structure-header',
                className: colorClass
            },
            // markers: true
        })

    }

});

// navbar toggle js 

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector("#navbarSupportedContent");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Add event listener to the parent element
    navbarCollapse.addEventListener("click", function (event) {
        // Check if the clicked element is inside navbarToggler
        if (!event.target.closest('.navbar-toggler') && navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    });
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




// for border animate

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







gsap.to(".skill-sec ", {
    // opacity: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: ".skill-sec ",
        scroller: "body",
        // markers: true,
        start: "top 1%",
        end: "top 10%",
        // scrub: true,
        onEnter: myFunction // Pass your function here
    }
})

function myFunction() {
    // console.log("Triggered!");
    for (let i = 1; i <= 6; i++) {
        let progressBar = document.querySelector('.progress-bar' + i); // Use 'let' instead of 'var'
        let width = 1;
        let interval = setInterval(function () {
            if (width >= progressBar.ariaValueNow) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 50);
    }
}

