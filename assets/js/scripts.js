// select the div containers as a node list
const questions = document.querySelectorAll(".question");

// access elements within the div
questions.forEach(function (question) {
    const button = question.querySelector(".title-btn");
    button.addEventListener("click", function () {
        question.classList.toggle("show-answer");
    });
});


