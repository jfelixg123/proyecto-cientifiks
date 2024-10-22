document.addEventListener("DOMContentLoaded", function () {
    const cofreImgs = document.querySelectorAll(".Cofre"); // Selecciona todos los elementos con clase 'Cofre'
    const imagenes = [
        "./LangingPagPhoto/cofre1-removebg-preview.png", // Cerrado
        "./LangingPagPhoto/cofre2-removebg-preview.png",
        "./LangingPagPhoto/cofre3-removebg-preview.png",
        "./LangingPagPhoto/cofre4-removebg-preview.png",
        "./LangingPagPhoto/cofre5-removebg-preview.png", // Abierto del todo
    ];

    cofreImgs.forEach(cofreImg => { // Itera sobre cada imagen de cofre
        let index = 0; // Para llevar el seguimiento de la imagen actual
        let abierto = false; // Estado del cofre (abierto o cerrado)
        let animando = false; // Estado de la animación

        cofreImg.addEventListener("click", function () {
            if (!animando) { // Solo ejecutar si no está en animación
                animando = true; // Establecer que estamos en animación
                if (abierto) {
                    const interval = setInterval(function () {
                        index--; // Disminuir el índice
                        if (index < 0) {
                            clearInterval(interval); // Detener la animación
                            index = 0; // Restablecer el índice
                            abierto = false; // Cambiar el estado a cerrado
                            animando = false; // Terminar la animación
                        } else {
                            cofreImg.src = imagenes[index]; // Cambiar la imagen
                        }
                    }, 100); // Cambia la imagen cada 100ms
                } else {
                    const interval = setInterval(function () {
                        index++; // Aumentar el índice
                        if (index >= imagenes.length) {
                            clearInterval(interval); // Detener la animación
                            index = imagenes.length - 1; // Asegúrate de que esté en la última imagen
                            animando = false; // Terminar la animación
                        } else {
                            cofreImg.src = imagenes[index]; // Cambiar la imagen
                        }
                    }, 100); // Cambia la imagen cada 100ms
                    abierto = true; // Cambiar el estado a abierto
                }
            }
        });
    });

    const translations = {
        "es": {
            title: ["¡Bienvenidos a la aventura!", "¿Qué quieres?", "¡Maldita sea la aventura!"],
            descriptions: [
                "Nuestra página web es un espacio dinámico diseñado para ofrecer a los usuarios...",
                "En nuestra página web, la creatividad y la funcionalidad se combinan...",
                "Nuestra página web se destaca por su enfoque centrado en el usuario...",
            ],
            gameTitle: "Científico en juego",
            clickHereImg: "./LangingPagPhoto/DIALOGO_ES.png",
            buttons: ["EXPLORA", "DESCUBRE", "DIVIERTE"],
            session: {
                login: "Iniciar Sesión",
                register: "Registrarse"
            },
            aboutUs: "Sobre Nosotros" 
        },
        "en": {
            title: ["Welcome to the Adventure!", "What do you want", "Damn the adventure"],
            descriptions: [
                "Our website is a dynamic space designed to provide users...",
                "On our website, creativity and functionality come together...",
                "Our website stands out for its user-centered approach...",
            ],
            gameTitle: "Scientist at Play",
            clickHereImg: "./LangingPagPhoto/DIALOGO_EN.png",
            buttons: ["EXPLORE", "DISCOVER", "ENJOY"],
            session: {
                login: "Login",
                register: "Register"
            },
            aboutUs: "About Us" 
        },
        "ca": {
            title: ["Benvinguts a l'aventura!", "Què vols", "Maldita l'aventura"],
            descriptions: [
                "El nostre lloc web és un espai dinàmic dissenyat per oferir als usuaris...",
                "A la nostra pàgina web, la creativitat i la funcionalitat es combinen...",
                "El nostre lloc web destaca pel seu enfocament centrat en l'usuari...",
            ],
            gameTitle: "Científic en joc",
            clickHereImg: "./LangingPagPhoto/DIALOGO_CAT.png",
            buttons: ["EXPLORA", "DESCOBERT", "DIVERTIR"],
            session: {
                login: "Inicia Sessió",
                register: "Registrar-se"
            },
            aboutUs: "Sobre Nosaltres" 
        }
    };
    const languageButtons = document.querySelectorAll(".idioma img");
    languageButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedLang = button.alt; // Asumiendo que el alt es "en", "es", o "ca"
            updateContent(selectedLang);
        });
    });

    function updateContent(lang) {
        const content = translations[lang];
        if (!content) return; // Verifica si el contenido existe para el idioma seleccionado
    
        // Actualizar los títulos y descripciones de cada item del carrusel
        const carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems.forEach((item, index) => {
            if (content.descriptions[index]) {
                item.querySelector(".Descripcion p").innerText = content.descriptions[index]; // Cambia la descripción
            }
            if (content.buttons[index]) {
                item.querySelector(".botones h1").innerText = content.buttons[index]; // Cambia el título del botón
            }
            if (content.title[index]) {
                item.querySelector(".TituloInicio h1").innerText = content.title[index]; // Cambia el título del carrusel
            }
        });
    
        document.querySelector(".navegador .titulo h1").innerText = content.gameTitle; // Actualiza el título del juego
    
        const clickHereImages = document.querySelectorAll(".ClickAqui img");
        clickHereImages.forEach(img => {
            img.src = content.clickHereImg; // Actualiza la imagen de clic
        });

        document.querySelector(".inicarSesion h2").innerText = content.session.login;
        document.querySelector(".registrarse h2").innerText = content.session.register;
        document.querySelector(".TituloNosotros h1").innerText = content.aboutUs;
    }
    
    const juegos = [
        {
          titulo: "Juego 1",
          imagen: "./LangingPagPhoto/Cubo.png"
        },
        {
          titulo: "Juego 2",
          imagen: "./LangingPagPhoto/SapoRecortado.png"
        },
        {
          titulo: "Juego 3",
          imagen: "./LangingPagPhoto/cosa.png"
        },
        {
          titulo: "Juego 4",
          imagen: "./LangingPagPhoto/pulpo2.png"
        }
    ];
      
      let indice = 0;
      
      function cambiarJuegos() {
        const tituloJuego1 = document.getElementById('tituloJuego1');
        const imagenJuego1 = document.getElementById('imagenJuego1');
        const tituloJuego2 = document.getElementById('tituloJuego2');
        const imagenJuego2 = document.getElementById('imagenJuego2');
      
        // Aplicar la animación de desvanecimiento a ambos elementos
        imagenJuego1.classList.add('fade-out');
        imagenJuego2.classList.add('fade-out');
        tituloJuego1.classList.add('fade-out');
        tituloJuego2.classList.add('fade-out');
      
        setTimeout(() => {
          // Cambiar el contenido
          indice = (indice + 1) % juegos.length; // Cambia al siguiente juego
          const nextIndex = (indice + 1) % juegos.length; // Obtener el índice del siguiente juego
      
          tituloJuego1.textContent = juegos[indice].titulo;
          imagenJuego1.src = juegos[indice].imagen;
      
          tituloJuego2.textContent = juegos[nextIndex].titulo;
          imagenJuego2.src = juegos[nextIndex].imagen;
      
          // Quitar la animación de desvanecimiento y aplicar la de aparición
          tituloJuego1.classList.remove('fade-out');
          tituloJuego1.classList.add('fade-in');
          imagenJuego1.classList.remove('fade-out');
          imagenJuego1.classList.add('fade-in');
          
          tituloJuego2.classList.remove('fade-out');
          tituloJuego2.classList.add('fade-in');
          imagenJuego2.classList.remove('fade-out');
          imagenJuego2.classList.add('fade-in');
      
          setTimeout(() => {
            tituloJuego1.classList.remove('fade-in');
            tituloJuego2.classList.remove('fade-in');
            imagenJuego1.classList.remove('fade-in');
            imagenJuego2.classList.remove('fade-in');
          }, 500); // Tiempo que dura la animación de aparición
        }, 500); // Tiempo que dura la animación de desaparición
      }
      
      // Cambiar los juegos cada 3 segundos
      setInterval(cambiarJuegos, 5000);
      
});