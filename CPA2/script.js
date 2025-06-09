
function generateCard(game) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("gameTitle").textContent = "Generating " + game + " Code...";
  document.querySelector(".modal-content p").textContent = "Connecting to server...";
  document.getElementById("verifyBtn").style.display = "none";
  document.querySelector(".loader").style.display = "block";

  setTimeout(() => {
    document.querySelector(".modal-content p").textContent = "Server connected. Ready to verify your card.";
    document.querySelector(".loader").style.display = "none";
    document.getElementById("verifyBtn").style.display = "inline-block";
  }, 10000); // 10 seconds delay
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function redirectToLocker() {
  // Replace with your content locker or CPA affiliate link
  window.location.href = "https://your-cpa-locker-url.com";
}
