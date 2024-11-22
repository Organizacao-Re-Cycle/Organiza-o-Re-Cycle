// Seleção de elementos importantes
const searchButton = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');
const downloadButton = document.querySelector('.download-button');
const navLinks = document.querySelectorAll('nav ul li a');

// Função para realizar a busca
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Você pesquisou por: "${query}"`);
        // Aqui você pode adicionar lógica para enviar o termo de busca a um servidor ou realizar outra ação
    } else {
        alert('Por favor, insira algo para pesquisar!');
    }
});

// Função para rolagem suave
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        const targetId = link.getAttribute('href').substring(0, link.href.length - 5); // Remove ".html"
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Função para alerta ao clicar no botão de download
downloadButton.addEventListener('click', () => {
    alert('Redirecionando para a loja de aplicativos...');
    // Aqui você pode redirecionar para o link real de download do app
    window.location.href = 'https://play.google.com/store'; // Substitua pelo link correto
});

// Selecionando elementos
const featureItems = document.querySelectorAll('.features-container .feature-item');

// Configuração para observar elementos ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2, // Exibe o efeito quando 20% do elemento está visível
});

// Aplicando o observador aos itens das features
featureItems.forEach(item => observer.observe(item));
