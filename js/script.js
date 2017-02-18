var feedbackModal = document.querySelector(".feedback");
var feedbackOpenBtn = document.querySelector(".feedback-open-btn");
var feedbackCloseBtn = document.querySelector(".feedback-close-btn");
var feedbackOverlay = document.querySelector(".modal-overlay");

feedbackOpenBtn.addEventListener("click", function (openFeedback) {
  openFeedback.preventDefault();
  feedbackModal.classList.add("feedback-modal-open");
  feedbackOverlay.classList.add("modal-overlay-show");
});

function closeFeedback() {
  feedbackModal.classList.remove("feedback-modal-open");
  feedbackOverlay.classList.remove("modal-overlay-show");
}

function closeModalEsc(event) {
  if (event.keyCode === 27) {
    closeFeedback;
  }
}

/*три варианта закрытия формы, через крестик, через клик по оверлею и через ескейп*/
feedbackCloseBtn.addEventListener("click", closeFeedback);
feedbackOverlay.addEventListener("click", closeFeedback);
window.addEventListener("keydown", closeFeedback);