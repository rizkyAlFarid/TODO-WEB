// KODE DI TULIS OLEH RIZKY AL FARID HAFIZH

import makeList from "./utils/makelist.js";

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  makeList();
})



