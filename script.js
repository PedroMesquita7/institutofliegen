// Função para efeito de digitação ao título da seção "Sobre Mim"
function digitarTituloSobreMim() {
    const tituloSobreMim = document.querySelector('.txt-topo-site h1');
    if (tituloSobreMim) {
        const texto = tituloSobreMim.textContent;
        tituloSobreMim.textContent = '';
        let index = 0;

        function digitar() {
            if (index < texto.length) {
                tituloSobreMim.textContent += texto.charAt(index);
                index++;
                setTimeout(digitar, 100);
            } else {
                tituloSobreMim.innerHTML += '<span>.</span>';
            }
        }

        digitar();
    }
}

// Função para adicionar interatividade ao menu
function adicionarInteratividadeMenu() {
    const menuLinks = document.querySelectorAll('nav.menu-desktop a');

    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
            link.style.color = '#ffa500'; // Cor laranja ao passar o mouse
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.color = '#fff'; // Restaura a cor original ao tirar o mouse
        });
    });
}

// Função para animação suave ao rolar a página
function adicionarAnimacaoRolagemSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Função para efeito de digitação no título da seção com span
function digitarTituloComSpan() {
    const title = document.querySelector('.titulo span');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let index = 0;

        function typingEffect() {
            title.textContent += text.charAt(index++);
            if (index < text.length) {
                setTimeout(typingEffect, 100);
            }
        }

        typingEffect();
    }
}

// Executa as funções quando a página é carregada
window.addEventListener('load', () => {
    digitarTituloSobreMim();
    adicionarInteratividadeMenu();
    adicionarAnimacaoRolagemSuave();
    digitarTituloComSpan();
});
