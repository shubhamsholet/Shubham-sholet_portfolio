// target id on scroll
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarTargetId'
});

// display section on scrool

var home = document.getElementById("home");
var experience = document.getElementById("experience");
var skills = document.getElementById("skills");
var project = document.getElementById("project");
var education = document.getElementById("education");
var services = document.getElementById("services");
var contact = document.getElementById("contact");

var sectionId = ["home", "experience", "skills", "project", "education", "services", "contact"]

console.log("sectionId", sectionId)


var windowfunction = window.addEventListener("wheel", function (moment) {
    console.log("moment", moment)
    console.log("momenty", moment.y)
    // console.log("moment.wheelDeltaY===", moment.wheelDeltaY)
    var viewheight = this.window.innerHeight
    console.log("viewheight === ", viewheight);


    var currentelement = document.querySelector('.d-block');
    var currentId = document.querySelector('.d-block').id;
    // console.log("currentId====", currentId);

    var check = sectionId.includes(currentId)
    // console.log("check====", check);

    var indexOfId = sectionId.indexOf(currentId)
    // console.log("indexOfId====", indexOfId);


    // Get the bounding rectangle
    var rect = currentelement.getBoundingClientRect()

    // Log the properties of the bounding rectangle
    // console.log('Top:', rect.top);
    // console.log('Right:', rect.right);
    // console.log('Bottom:', rect.bottom);
    // console.log('Left:', rect.left);
    // console.log('Width:', rect.width);
    // console.log('Height:', rect.height);


    var sectionHeightView = Math.min(rect.height, viewheight - rect.top)
    console.log("sectionHeightView === ", sectionHeightView);

    if (moment.wheelDeltaY < (-100) && indexOfId < sectionId.length - 1) {
        var nextIdvalue = sectionId[indexOfId + 1];
        console.log("nextIdvalue====", nextIdvalue);

        document.getElementById(nextIdvalue).classList.add("d-block", "transition");
        document.getElementById(nextIdvalue).classList.remove("d-none");
        document.getElementById(currentId).classList.remove("d-block", "transition");
        document.getElementById(currentId).classList.add("d-none");
        gsap.from(".transition", {
            opacity: 0,
            y: "30%",
        })
    }

    if (moment.wheelDeltaY > 100 && indexOfId > 0) {
        var nextIdvalue = sectionId[indexOfId - 1];
        console.log("nextIdvalue reverse====", nextIdvalue);

        document.getElementById(nextIdvalue).classList.add("d-block", "transition");
        document.getElementById(nextIdvalue).classList.remove("d-none");
        document.getElementById(currentId).classList.remove("d-block", "transition");
        document.getElementById(currentId).classList.add("d-none");
        gsap.from(".transition", {
            opacity: 0,
            y: "-30%",
        })
    }
})


