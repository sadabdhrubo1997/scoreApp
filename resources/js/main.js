// dashboard
const dotmenu = document.querySelector("#dotmenu");


// case details page bottom tab
$("#caseDetails .section3 .detailsPageBottomTab").click(function(){
    $("#caseDetails .section3 .detailsPageBottomTab").removeClass("active")
    $(this).addClass("active")
})

// case details page bottom tab end

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

    if(email.value){
        emailArea.classList.add("border")
    }else{
        emailArea.classList.remove("border")
    }

    if(password.value){
        passwordArea.classList.add("border")
    }else{
        passwordArea.classList.remove("border")
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


    } else {
        passwordError.classList.remove("active")
        passwordArea.classList.remove("error")
        passwordArea.classList.add("noError")
        // passwordWrongIcon.style.display = "none"
        // passwordRightIcon.style.display = "block"
    }
})

// login form end
