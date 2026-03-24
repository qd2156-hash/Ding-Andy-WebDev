var learnMore = document.getElementById("learn-more");
var about = document.getElementById("about");
var openNotes = document.getElementById("open-notes");
var studyNotesModal = document.getElementById("study-notes-modal");
var closeModal = document.getElementById("close-modal");
var contactForm = document.getElementById("contact-form");
var contactThanksModal = document.getElementById("contact-thanks-modal");
var closeThanksModal = document.getElementById("close-thanks-modal");

learnMore.onclick = function () {
  about.scrollIntoView({ behavior: "smooth" });
};

openNotes.onclick = function () {
  studyNotesModal.style.display = "block";
};

closeModal.onclick = function () {
  studyNotesModal.style.display = "none";
};

contactForm.onsubmit = function (event) {
  event.preventDefault();
  contactThanksModal.style.display = "block";
  contactForm.reset();
};

closeThanksModal.onclick = function () {
  contactThanksModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === studyNotesModal) {
    studyNotesModal.style.display = "none";
  }

  if (event.target === contactThanksModal) {
    contactThanksModal.style.display = "none";
  }
};
