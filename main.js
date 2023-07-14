// Change color of input text and border to tomato then make inside of 
// input a lighter less opaque color of tomato when user input is invalid.

let inputText = document.getElementById("email");
let subscribeBtn = document.getElementById("subBtn");
let successPage = document.getElementById("successContainer");
let inputPage = document.getElementById("container");
let dismissBtn = document.getElementById("dismiss");

subscribeBtn.addEventListener('click', function () {
    let email = inputText.value;

    if (validEmail(email)) {
        loadSuccessPage(email.toLowerCase());
    } else {
        invalidStyle();
    }
});

dismissBtn.addEventListener('click', function() {
    loadInputPage();
    validStyle();
});

function loadInputPage() {
    inputPage.classList.remove("hidden");
    successPage.classList.add("hidden");
    console.log("Input page loaded!")
}

function loadSuccessPage(email) {
    inputPage.classList.add("hidden");
    let e = document.getElementById("thankEmail")
    e.textContent = email;
    successPage.classList.remove("hidden");
    console.log("Success page loaded!")
}

function invalidStyle() {
    inputText.style.border = '1px solid hsl(4, 100%, 67%)';
    inputText.style.backgroundColor = 'hsl(4, 100%, 84%)';
    let label = document.getElementById("invalidInputLabel");
    label.classList.remove("hidden");
    inputText.value = '';
}

function validStyle() {
    inputText.style.border = '1px solid hsl(231, 7%, 60%)';
    inputText.style.backgroundColor = 'white';
    let label = document.getElementById("invalidInputLabel");
    label.classList.add("hidden");
    inputText.value = '';
}

function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}