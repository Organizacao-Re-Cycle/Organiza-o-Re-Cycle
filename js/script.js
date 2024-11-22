// Elementos do DOM
const searchButton = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');
const downloadButtons = document.querySelectorAll('.cta-button, .download-button');
const navLinks = document.querySelectorAll('nav ul li a');

// Função para alerta da busca
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Você pesquisou por: "${query}"`);
    } else {
        alert('Digite algo para pesquisar!');
    }
});

// Rolagem suave ao clicar nos links do menu
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('.html', '');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Offset para ajustar a altura do cabeçalho
                behavior: 'smooth'
            });
        }
    });
});

// Animação para os botões de download
downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecionando para a página do aplicativo...');
        window.location.href = 'https://play.google.com/store'; // Link para o aplicativo (modifique para o correto)
    });
});

// Efeito de animação ao rolar (cards aparecem gradualmente)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Observa os cards para aplicar a animação
const cards = document.querySelectorAll('.card');
cards.forEach(card => observer.observe(card));
