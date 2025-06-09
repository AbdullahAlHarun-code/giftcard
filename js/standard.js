document.addEventListener('DOMContentLoaded', function() {
  var verifyBtn = document.getElementById('verify-button');
  var firstCard = document.querySelector('#chooser .choose-gift-card');

  // Set default href on page load (first card)
  if (firstCard && verifyBtn) {
    verifyBtn.setAttribute('href', firstCard.getAttribute('data'));
  }

  // Listen for card selection
  document.querySelectorAll('#chooser .choose-gift-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var selectedUrl = card.getAttribute('data');
      if (verifyBtn && selectedUrl) {
        verifyBtn.setAttribute('href', selectedUrl);
      }
    });
  });
});