const countElement = document.getElementById('count');
let count = 0;

const lifeIcons = document.querySelectorAll('#life');

for (let i = 0; i < lifeIcons.length; i++) {
    lifeIcons[i].addEventListener('click', function() {
        count++;
        countElement.textContent = count;
    });
}


