const faqQuestions = document.querySelectorAll('.question');


faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const iconItem = question.querySelector(".icon")
        console.log(answer);


        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            iconItem.src = "./assets/images/icon-plus.svg"
        } else {
            answer.style.display = 'block';
            iconItem.src ="./assets/images/icon-minus.svg"
        }
    });
});