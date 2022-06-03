'use strict';

// Store results of selected element in variable.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// To select something that has multiple.
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Keep code dry by keeping copied code into a single function.

// Don't need the '.' before the class name since you're already specifying it's a class using classList.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal());

// Listening to events everywhere.
// The event is an object that logs whatever key is pressed in the console - get information about the event itself including what key was pressed.
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
