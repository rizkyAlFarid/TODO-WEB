function fungsiCek (e) {
  if(e.target.classList.contains('fa-circle-check')){
    e.target.parentElement.previousElementSibling.previousElementSibling.style.textDecoration = 'line-through';
  } else {
    444
  }
}

export default fungsiCek;