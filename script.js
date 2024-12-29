// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    // Toggle the aria-expanded attribute
    const isExpanded = question.getAttribute("aria-expanded") === "true";
    question.setAttribute("aria-expanded", !isExpanded);

    // Toggle the display of the answer
    const answer = question.nextElementSibling;
    answer.style.display = isExpanded ? "none" : "block";
  });
});
