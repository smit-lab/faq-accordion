const header = document.querySelectorAll("#faq--header");
const faqAnswer = document.querySelectorAll("#faq--answer");
const faqQuestion = document.querySelectorAll("#faq--question");

header.forEach((cardHeader, index) => {
  const arrowIcon = cardHeader.querySelector("#arrow-icon");

  cardHeader.addEventListener("click", listener(index));

  function listener(index) {
    return () => {
      const cardPosition = faqAnswer[index];
      const headingPosition = faqQuestion[index];
      const isOpen = cardPosition.classList.toggle("faq-open");
      const isBold = headingPosition.classList.toggle("bold");

      faqAnswer.forEach((content, i) => {
        if (i !== index) {
          content.classList.remove("faq-open");
          header[i].querySelector("#faq--question").classList.remove("bold");
          header[i]
            .querySelector("#arrow-icon")
            .classList.remove("arrow-icon--up");
        }
      });

      faqQuestion[index].classList.toggle("bold", isBold);
      arrowIcon.classList.toggle("arrow-icon--up", isOpen);
    };
  }
});
