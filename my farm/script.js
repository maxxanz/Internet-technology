const plantButton = document.getElementById('plantButton');
const field = document.getElementById('field');

plantButton.addEventListener('click', () => {
    field.innerHTML = '🌱 Поздравляю! Ты посадил морковь, картошку и капусту! 🥕🥔🥬';
});