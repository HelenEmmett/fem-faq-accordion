// select the div containers as a node list
const questions = document.querySelectorAll(".question")

// open the first answer panel on load
window.addEventListener("load", function () {
    const answer = document.querySelector(".answer");
    answer.style.maxHeight = answer.scrollHeight + "px";
})

// access elements within the div and hide/show answers
questions.forEach(function (question) {
    const button = question.querySelector(".title");
    button.addEventListener("click", function () {
        question.classList.toggle("show-answer");

        const answer = question.querySelector(".answer");

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } 
    });
});


