$(document).ready(function () {


    // Responsive html font size

    //   onload problem solving
    let iw = window.innerWidth;
    let rootScreenWidth = 1366;
    let rootFontPercentage = 44.46614583333333;

    if (iw <= 1366) {
        $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);

    } else {
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);
    }

    //   or resizing problem solving

    $(window).resize(function () {
        let iw = window.innerWidth;
        let rootScreenWidth = 1366;
        let rootFontPercentage = 44.46614583333333;

        if (iw <= 1366) {
            $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);

        } else {
            let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
            $('#my_html').attr("style", `font-size:${currentFontSize}%`);
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


    /*
    email.addEventListener("input", (e) => {
        if (!e.target.value.includes("@") || !e.target.value.includes(".")) {
            console.log("email is invaled")
        }
    })

    password.addEventListener("input", (e) => {
        if (!e.target.value.includes("@") || !e.target.value.includes(".")) {
            console.log("email is invaled")
        }
    })
    */

    $('#loginForm .email .right .wrongIcon').attr("style", "display:none");
    $('#loginForm .email .right .rightIcon').attr("style", "display:none");
    $('#loginForm .password .right .wrongIcon').attr("style", "display:none");
    $('#loginForm .password .right .rightIcon').attr("style", "display:none");


    email.addEventListener("input", (e) => {
        if (email.value.includes("@") && email.value.includes(".")) {
            emailError.classList.remove("active")
            emailArea.classList.remove("error")
            emailArea.classList.add("noError");
            $('#loginForm .email .right .wrongIcon').attr("style", "display:none");
            $('#loginForm .email .right .rightIcon').attr("style", "display:block");
        } else {
            emailArea.classList.remove("noError")
            $('#loginForm .email .right .wrongIcon').attr("style", "display:none");
            $('#loginForm .email .right .rightIcon').attr("style", "display:none");

        }
    })

    password.addEventListener("input", (e) => {
        console.log(password.value.length)
        passwordError.classList.remove("active")

        if (password.value.length >= 8) {
            passwordArea.classList.add("noError")
            passwordError.classList.remove("active")

            $('#loginForm .password .right .wrongIcon').attr("style", "display:none");
            $('#loginForm .password .right .rightIcon').attr("style", "display:block");
        } else {
            passwordArea.classList.remove("noError")
            $('#loginForm .password .right .wrongIcon').attr("style", "display:none");
            $('#loginForm .password .right .rightIcon').attr("style", "display:none");

        }
    })

    loginForm.addEventListener("submit", (e) => {



        if (!email.value.includes("@") || !email.value.includes(".")) {
            e.preventDefault()
            console.log("invalid email address")
            emailArea.classList.add("error")
            emailArea.classList.remove("noError")
            emailError.classList.add("active")
            $('#loginForm .email .right .wrongIcon').attr("style", "display:block");
            $('#loginForm .email .right .rightIcon').attr("style", "display:none");
        } else {
            emailError.classList.remove("active")
            emailArea.classList.remove("error")
            emailArea.classList.add("noError")
            $('#loginForm .email .right .wrongIcon').attr("style", "display:none");
            $('#loginForm .email .right .rightIcon').attr("style", "display:block");

        }
        if (password.value.length < 7) {
            e.preventDefault()
            console.log(password.value.length)
            passwordArea.classList.add("error")
            passwordArea.classList.remove("noError")
            passwordError.classList.add("active")
            $('#loginForm .password .right .wrongIcon').attr("style", "display:block");
            $('#loginForm .password .right .rightIcon').attr("style", "display:none");


        } else {
            passwordError.classList.remove("active")
            passwordArea.classList.add("error")
            passwordArea.classList.remove("noError")
            $('#loginForm .password .right .wrongIcon').attr("style", "display:none");
            $('#loginForm .password .right .rightIcon').attr("style", "display:block");

        }

    })


    // login form end







})