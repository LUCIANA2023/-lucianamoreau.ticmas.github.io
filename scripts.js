// Mostrar colores y hacer seleccion

document.querySelector('.btn-selector').onclick = () =>{
  document.querySelector('.selector-color').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.color-buttons');

themeButtons.forEach(color =>{

  color.addEventListener('click', () =>{
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--primario', dataColor);
  });

});


// Formulario para envío pre-configurado
const $form = document.querySelector('#form')
const $botonMailto = document.querySelector('#envio-mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  console.log(form.get('name'))
  $botonMailto.setAttribute('href', ` mailto:moreau.luciana@yahoo.com.ar?subject=${form.get('name')} [ ${form.get('email')} ]&body=${form.get('message')}`)
  $botonMailto.click()
 }
   
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
