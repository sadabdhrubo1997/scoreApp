// dashboard
const dotmenu = document.querySelector("#dotmenu");

// dashboard action bar right btn toggle
$("#dashboardActionOne").click(function () {
    $("#dashboardActionTwo").removeClass("active")
    $(this).addClass("active")
})
$("#dashboardActionTwo").click(function () {
    $("#dashboardActionOne").removeClass("active")
    $(this).addClass("active")
})



// caseDetails Multi Button

$("#caseDetaileMultiBtnAll").click(function () {
    $("#caseDetaileMultiBtnLibality").removeClass("active")
    $("#caseDetaileMultiBtnUM").removeClass("active")
    $("#caseDetaileMultiBtnUIM").removeClass("active")
    $(this).addClass("active")

})
$("#caseDetaileMultiBtnLibality").click(function () {
    $("#caseDetaileMultiBtnAll").removeClass("active")
    $("#caseDetaileMultiBtnUM").removeClass("active")
    $("#caseDetaileMultiBtnUIM").removeClass("active")
    $(this).addClass("active")

})
$("#caseDetaileMultiBtnUM").click(function () {
    $("#caseDetaileMultiBtnAll").removeClass("active")
    $("#caseDetaileMultiBtnLibality").removeClass("active")
    $("#caseDetaileMultiBtnUIM").removeClass("active")
    $(this).addClass("active")

})
$("#caseDetaileMultiBtnUIM").click(function () {
    $("#caseDetaileMultiBtnAll").removeClass("active")
    $("#caseDetaileMultiBtnLibality").removeClass("active")
    $("#caseDetaileMultiBtnUM").removeClass("active")
    $(this).addClass("active")

})


// case details page bottom tab
$("#caseDetails .section3 .detailsPageBottomTab").click(function () {
    $("#caseDetails .section3 .detailsPageBottomTab").removeClass("active")
    $(this).addClass("active")
})

// case details page bottom tab end


// case details pointer progress
var pointerProgressWrapper = document.querySelector("#pointerProgressWrapper")

let scrollAnmStart = false

let myHead = document.querySelector("#myHead")
let pointer = document.querySelector("#pointer")
var style = document.createElement('style');
pointer.classList.add("default")
let stopAngle = 0;

let percentage;
let caseScoreValue;

window.onload = () => {


    caseScoreValue = pointer.getAttribute('data-case-score') - 300;
    percentage = .5 * caseScoreValue
    // console.log("value : " +caseScoreValue)
    // console.log("percentage : " +percentage + "%")
    // console.log("pointer stop angle is: " + ((90 / 100) * percentage))
    stopAngle = ((90 / 100) * percentage)

}



// when case score value is grater then or equal 300





pointer.style.transform = `translate(-50%) rotate(${-90}deg)`




function anmStart() {
    setTimeout(() => {
        // pointer.classList.remove("default")
        // pointer.classList.add("stop")
        pointer.style.transform = `translate(-50%) rotate(${stopAngle}deg)`

    }, 1900);

    var keyFrames = `
    #pointer{
    animation: pointerRotateAnimation 2s;
    -webkit-animation: pointerRotateAnimation 2s; 
   
    
    }

    @keyframes pointerRotateAnimation {

        0% {
            transform: translate(-50%) rotate(-90deg);
            -webkit-transform: translate(-50%) rotate(-90deg);
            -moz-transform: translate(-50%) rotate(-90deg);
            -ms-transform: translate(-50%) rotate(-90deg);
            -o-transform: translate(-50%) rotate(-90deg);
        }

        50% {
            transform: translate(-50%) rotate(90deg);
            -webkit-transform: translate(-50%) rotate(90deg);
            -moz-transform: translate(-50%) rotate(90deg);
            -ms-transform: translate(-50%) rotate(90deg);
            -o-transform: translate(-50%) rotate(90deg);
        }

        100% {
            transform: translate(-50%) rotate(${stopAngle}deg);
            -webkit-transform: translate(-50%) rotate(${stopAngle}deg);
            -moz-transform: translate(-50%) rotate(${stopAngle}deg);
            -ms-transform: translate(-50%) rotate(${stopAngle}deg);
            -o-transform: translate(-50%) rotate(${stopAngle}deg);
        }

    }

    /*
    #pointer.stop{
        transform: translate(-50%) rotate(${stopAngle}deg);
        -webkit-transform: translate(-50%) rotate(${stopAngle}deg);
        -moz-transform: translate(-50%) rotate(${stopAngle}deg);
        -ms-transform: translate(-50%) rotate(${stopAngle}deg);
        -o-transform: translate(-50%) rotate(${stopAngle}deg);
        
    }*/
    
}`;


    style.innerHTML = keyFrames
    let innerHtmlDone = myHead.appendChild(style);





}

window.addEventListener("scroll", (e) => {
    let scroll = pointerProgressWrapper.scrollHeight - pointerProgressWrapper.clientHeight;
    // console.log(pointerProgressWrapper.clientHeight)
    // console.log(pointerProgressWrapper.offsetTop)
    // console.log(window.scrollY)
    if (window.scrollY > 350) {
        scrollAnmStart = true
        // console.log(window.scrollY)
        // console.log(scrollAnmStart)
        if (scrollAnmStart == true) {
            // console.log("hello this is true animation start")
        }
        anmStart()
    }
})


// case details pointer progress end


const body = document.querySelector("html")

// Responsive html font size

//   onload problem solving
let iw = window.innerWidth;
let rootScreenWidth = 1366;
let rootFontPercentage = 44.46614583333333;

if (iw <= 1366) {
    body.style.fontSize = `${rootFontPercentage}%`;

} else {
    let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
    body.style.fontSize = `${currentFontSize}%`;
}

//   or resizing problem solving
window.addEventListener('resize', () => {
    let iw = window.innerWidth;
    let rootScreenWidth = 1366;
    let rootFontPercentage = 44.46614583333333;

    if (iw <= 1366) {
        body.style.fontSize = `${rootFontPercentage}%`;

    } else {
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        body.style.fontSize = `${currentFontSize}%`;
    }
})



// Responsive html font size end



// login form

const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#loginForm #email");
const emailArea = document.querySelector("#loginForm .email");
const emailError = document.querySelector("#loginForm #emailError");
const password = document.querySelector("#loginForm #password");
const passwordArea = document.querySelector("#loginForm .password");
const passwordError = document.querySelector("#loginForm #passwordError");
// const emailWrongIcon = document.querySelector("#loginForm .email .right .wrongIcon");
// const emailRightIcon = document.querySelector("#loginForm .email .right .rightIcon");
// const passwordWrongIcon = document.querySelector("#loginForm .password .right .wrongIcon");
// const passwordRightIcon = document.querySelector("#loginForm .password .right .rightIcon");

// emailWrongIcon.style.display = 'none';
// emailRightIcon.style.display = 'none';
// passwordWrongIcon.style.display = 'none';
// passwordRightIcon.style.display = 'none';

email.addEventListener("input", (e) => {

    if (email.value) {
        emailArea.classList.add("border")
        emailArea.classList.remove("error")
        emailError.classList.remove("active")


    } else {
        emailArea.classList.remove("border")
        emailArea.classList.remove("error")
        emailError.classList.remove("active")
    }


    if (email.value.includes("@") && email.value.includes(".")) {
        emailError.classList.remove("active")
        emailArea.classList.remove("error")
        emailArea.classList.add("noError");
        // emailWrongIcon.style.display = "none"
        // emailRightIcon.style.display = "block"
    } else {
        emailArea.classList.remove("noError")
        // emailWrongIcon.style.display = "none"
        // emailRightIcon.style.display = "none"

    }
})

password.addEventListener("input", (e) => {
    passwordError.classList.remove("active")




    if (password.value) {
        passwordArea.classList.add("border")
        passwordArea.classList.remove("error")
        passwordError.classList.remove("active")

    } else {
        passwordArea.classList.remove("border")
        passwordArea.classList.remove("error")
        passwordError.classList.remove("active")
    }


    if (password.value.length >= 8) {
        passwordArea.classList.add("noError")
        passwordError.classList.remove("active")

        // passwordWrongIcon.style.display = "none"
        // passwordRightIcon.style.display = "block"
    } else {
        passwordArea.classList.remove("noError")
        // passwordWrongIcon.style.display = "none"
        // passwordRightIcon.style.display = "none"

    }
})

loginForm.addEventListener("submit", (e) => {

    if (!email.value.includes("@") || !email.value.includes(".")) {
        e.preventDefault()
        emailArea.classList.add("error")
        emailArea.classList.remove("noError")
        emailError.classList.add("active")
        // emailWrongIcon.style.display = "block"
        // emailRightIcon.style.display = "none"
        emailArea.classList.remove("border")
    } else {
        emailError.classList.remove("active")
        emailArea.classList.remove("error")
        emailArea.classList.add("noError")
        // emailWrongIcon.style.display = "none"
        // emailRightIcon.style.display = "block"

    }
    if (password.value.length < 8) {
        e.preventDefault()
        passwordArea.classList.add("error")
        passwordArea.classList.remove("noError")
        passwordError.classList.add("active")
        // passwordWrongIcon.style.display = "block"
        // passwordRightIcon.style.display = "none"
        passwordArea.classList.remove("border")

    } else {
        passwordError.classList.remove("active")
        passwordArea.classList.remove("error")
        passwordArea.classList.add("noError")
        // passwordWrongIcon.style.display = "none"
        // passwordRightIcon.style.display = "block"
    }
})

// login form end
