const countElement = document.getElementById('count');
let count = 0;

const lifeIcons = document.querySelectorAll('#life');

for (let i = 0; i < lifeIcons.length; i++) {
    lifeIcons[i].addEventListener('click', function() {
        count++;
        countElement.textContent = count;
    });
}





const coinElement = document.getElementById('coin');
let coins = parseInt(coinElement.textContent);

const callButtons = document.querySelectorAll('.call-btn');

const callHistory = document.getElementById('call-history');

const template = document.getElementById('call-history-item');

for (const btn of callButtons) {
  btn.addEventListener('click', function() {
    const service = btn.getAttribute('data-service');
    const number = btn.getAttribute('data-number');

    if (coins < 20) {
      alert('Not enough coins to make a call!');
      return;
    }
    coins -= 20;
    coinElement.textContent = coins;
    alert(`Calling ${service} (${number})`);

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const clone = template.content.cloneNode(true);
    clone.querySelector('.service-name').textContent = service;
    clone.querySelector('.service-number').textContent = ` ${number}`;
    clone.querySelector('.call-time').textContent = timeString;

    callHistory.appendChild(clone);
  });
}





document.getElementById('clear-history').addEventListener('click', function() {
    callHistory.innerHTML = '';
});


const copyButtons = document.querySelectorAll('#copy-btn');
const copyCountElement = document.getElementById('copy-count');
let copyCount = 0;

for (const btn of copyButtons) {
    btn.addEventListener('click', function() {
        const number = btn.getAttribute('data-number');
        navigator.clipboard.writeText(number)
            .then(function() {
                alert('Hotline number copied: ' + number);
                copyCount++;
                copyCountElement.textContent = copyCount;
            });
    });
}