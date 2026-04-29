var calligraphyStyles = [
  {
    name: "Seal Script",
    front: "The oldest of the five. Rounded strokes and a very formal look.",
    back: "It has a balanced, ancient feel. Often seen on seals and old monuments."
  },
  {
    name: "Clerical Script",
    front: "Wide, flat strokes and a small sweeping tail at the end.",
    back: "Developed during the Han Dynasty to speed up official writing."
  },
  {
    name: "Cursive Script",
    front: "Fast, flowing and sometimes hard to read.",
    back: "The most expressive of the five — more about feeling than clarity."
  },
  {
    name: "Running Script",
    front: "Somewhere between regular and cursive. Still readable but looser.",
    back: "Probably the most commonly used style for daily writing."
  },
  {
    name: "Regular Script",
    front: "Upright, neat, and carefully structured.",
    back: "This is the style most beginners start with."
  }
];

var stylesGrid = document.getElementById("styles-grid");

calligraphyStyles.forEach(function (style) {
  var col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  col.innerHTML =
    '<div class="style-card">' +
      '<div class="style-card-inner">' +
        '<div class="style-card-front">' +
          '<h3>' + style.name + '</h3>' +
          '<p>' + style.front + '</p>' +
        '</div>' +
        '<div class="style-card-back">' +
          '<h3>' + style.name + '</h3>' +
          '<p>' + style.back + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';

  stylesGrid.appendChild(col);
});

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
