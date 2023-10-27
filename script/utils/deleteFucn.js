function fungsiDelete(e) {
  if(e.target.classList.contains('fa-circle-xmark')){
    let konfir = confirm('Apakah anda yakin');
    if(konfir) {
      e.target.parentElement.parentElement.style.display = 'none'
    } else {
      // Tidak melakukan apa apa;
    }
  }
}

export default fungsiDelete;