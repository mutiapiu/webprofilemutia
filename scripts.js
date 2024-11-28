//EmailJS
function sendMail(){
  let parms = {
    name : document.getElementById("nama").value,
    email : document.getElementById("email").value,
    message : document.getElementById("pesan").value,
  }

  emailjs.send("service_fhnj1ts","template_uf6t44b",parms).then(alert("Pesan Terkirim!"))
}
//End EmailJS


document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Pilih semua elemen dengan class .nav-link
const navLinks = document.querySelectorAll('.nav-link');

// Tambahkan event listener ke setiap link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Hapus class 'active' dari semua link
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Tambahkan class 'active' ke link yang diklik
        this.classList.add('active');
    });
});
