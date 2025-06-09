// In parent page (free-xbox-gift-cards.html)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#chooser .choose-gift-card').forEach(function(card) {
  card.addEventListener('click', function() {
    var selectedUrl = card.getAttribute('data');
    var iframe = document.querySelector('iframe[src^="button.html"]');
    if (iframe && selectedUrl) {
      iframe.src = 'button.html?verifyUrl=' + encodeURIComponent(selectedUrl);
    }
  });
});

 var firstCard = document.querySelector('#chooser .choose-gift-card');
var iframe = document.querySelector('iframe[src^="button.html"]');
if (iframe && firstCard) {
  iframe.src = 'button.html?verifyUrl=' + encodeURIComponent(firstCard.getAttribute('data'));
}
});