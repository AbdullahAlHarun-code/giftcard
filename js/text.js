document.addEventListener('DOMContentLoaded', function() {
  // Define marketing messages for each card type and value
  var messages = {
    'card-xbox': {
      '25': 'Get your $25 Xbox Gift Card!',
      '50': 'Get your $50 Xbox Gift Card!',
      '100': 'Get your $100 Xbox Gift Card!',
      'default': 'Get your Xbox Gift Card!'
    },
    'card-steam': {
      '20': 'Get your $20 Steam Gift Card!',
      '50': 'Get your $50 Steam Gift Card!',
      '100': 'Get your $100 Steam Gift Card!',
      'default': 'Get your Steam Gift Card!'
    },
    'card-playstation': {
      '10': 'Get your $10 PlayStation Gift Card!',
      '50': 'Get your $50 PlayStation Gift Card!',
      '100': 'Get your $100 PlayStation Gift Card!',
      'default': 'Get your PlayStation Gift Card!'
    },
    'card-amazon': {
      '25': 'Get your $25 Amazon Gift Card!',
      '50': 'Get your $50 Amazon Gift Card!',
      '100': 'Get your $100 Amazon Gift Card!',
      'default': 'Get your Amazon Gift Card!'
    },
    'card-spotify': {
      '10': 'Get your $10 Spotify Gift Card!',   
        '30': 'Get your $30 Spotify Gift Card!',
        '60': 'Get your $60 Spotify Gift Card!',
        'default': 'Get your Spotify Gift Card!'
    },
    'card-itunes': {
      '15': 'Get your $15 iTunes Gift Card!',
      '50': 'Get your $50 iTunes Gift Card!',
      '100': 'Get your $100 iTunes Gift Card!',
      'default': 'Get your iTunes Gift Card!'
    },
    'card-google': {
      '10': 'Get your $10 Google Play Gift Card!',
      '25': 'Get your $25 Google Play Gift Card!',
      '50': 'Get your $50 Google Play Gift Card!',
      'default': 'Get your Google Play Gift Card!'
    },
    'card-paypal': {    
        '20': 'Get your $20 PayPal Gift Card!',
        '50': 'Get your $50 PayPal Gift Card!',
        '100': 'Get your $100 PayPal Gift Card!',
        'default': 'Get your PayPal Gift Card!'
        },

    // Add more card types and values as needed
  };

  var cards = document.querySelectorAll('.choose-gift-card');
  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      var valueDiv = card.querySelector('.value');
      if (valueDiv) {
        var val = valueDiv.textContent.replace('$', '').trim();
        // Find the card type class (e.g., card-xbox, card-steam)
        var cardType = Array.from(card.classList).find(function(cls) {
          return cls.startsWith('card-');
        });
        var marketingText = '';
        if (cardType && messages[cardType]) {
          marketingText = messages[cardType][val] || messages[cardType]['default'];
        } else {
          marketingText = 'Get your Gift Card!';
        }
        document.querySelectorAll('.user-card-val').forEach(function(el) {
          el.textContent = marketingText;
        });
      }
    });
  });
});

