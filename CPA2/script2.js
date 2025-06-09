
function showAmountOptions(game) {
  document.getElementById("amountSelection").style.display = "flex";
  document.getElementById("verifyBtn").style.display = "none";
  document.querySelector(".loader").style.display = "block";
}

function closeAmountModal() {
  document.getElementById("amountSelection").style.display = "none";
}

function generateCard(amount) {
  document.getElementById("amountSelection").style.display = "none";
  document.getElementById("modal").style.display = "flex";
  document.getElementById("gameTitle").textContent = "Generating " + amount + " Card Code...";
  document.querySelector(".modal-content p").textContent = "Connecting to server...";
  document.querySelector(".loader").style.display = "block";
  document.getElementById("verifyBtn").style.display = "none";

  setTimeout(() => {
    document.querySelector(".modal-content p").textContent = "Server connected. Ready to verify your card.";
    document.querySelector(".loader").style.display = "none";
    document.getElementById("verifyBtn").style.display = "inline-block";
  }, 10000);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function redirectToLocker() {
  window.location.href = "https://your-cpa-locker-url.com";
}
