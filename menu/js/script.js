const menuItems = document.querySelectorAll('.menu-item');
const mainMenu = document.getElementById('main-menu');
const charactersScreen = document.getElementById('characters-screen');
const stagesScreen = document.getElementById('stages-screen');
const backFromCharacters = document.getElementById('back-from-characters');
const backFromStages = document.getElementById('back-from-stages');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const action = item.dataset.action;

    mainMenu.classList.add('hidden');

    if (action === 'characters') {
      charactersScreen.classList.remove('hidden');
    }

    if (action === 'stages') {
      stagesScreen.classList.remove('hidden');
    }

    if (action === 'play') {
      window.location.href = 'https://www.youtube.com/';
    }
  });
});

backFromCharacters.addEventListener('click', () => {
  charactersScreen.classList.add('hidden');
  mainMenu.classList.remove('hidden');
});

backFromStages.addEventListener('click', () => {
  stagesScreen.classList.add('hidden');
  mainMenu.classList.remove('hidden');
});
