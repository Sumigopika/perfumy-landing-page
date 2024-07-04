document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');
  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = e.target.getAttribute('href').substring(1);
          sections.forEach(section => {
              section.style.display = 'none';
          });
          document.getElementById(targetId).style.display = 'block';
          navLinks.classList.remove('active');
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  });
  sections.forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById('home').style.display = 'block';
});

function filterProducts() {
    let searchInput = document.querySelector('.searchbar input').value.toLowerCase();
    let productBoxes = document.querySelectorAll('.product .box');
    productBoxes.forEach(box => {
        let productText = box.textContent.toLowerCase();
        if (productText.includes(searchInput)) {
            box.style.display = 'inline-block';
        } else {
            box.style.display = 'none';
        }
    });
  }
  function productAlert(event) {
    let productText = event.currentTarget.querySelector('p').textContent.split(' ')[0];
    alert(`Product: ${productText}`);
  }
  
  document.querySelectorAll('.product .box').forEach(box => {
    box.addEventListener('click', productAlert);
  });
  
