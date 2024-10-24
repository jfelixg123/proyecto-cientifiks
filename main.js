document.addEventListener("DOMContentLoaded", function () {

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

    
    const cofreImgs = document.querySelectorAll(".Cofre"); // Selecciona todos los elementos con clase 'Cofre'
    const imagenes = [
        "./LangingPagPhoto/cofre1-removebg-preview.png", // Cerrado
        "./LangingPagPhoto/cofre2-removebg-preview.png",
        "./LangingPagPhoto/cofre3-removebg-preview.png",
        "./LangingPagPhoto/cofre4-removebg-preview.png",
        "./LangingPagPhoto/cofre5-removebg-preview.png", // Abierto del todo
    ];

    const dialogoImgs = [
        "./LangingPagPhoto/perfil.png", // Imagen para el primer cofre
        "./LangingPagPhoto/cosa.png", // Imagen para el segundo cofre
        "./LangingPagPhoto/Cubo.png", // Imagen para el tercer cofre
        "./LangingPagPhoto/catalan.png", // Imagen para el cuarto cofre
    ];

    cofreImgs.forEach((cofreImg, index) => { // Itera sobre cada imagen de cofre
        let indexImagen = 0; // Para llevar el seguimiento de la imagen actual
        let abierto = false; // Estado del cofre (abierto o cerrado)
        let animando = false; // Estado de la animación
        const imagenInicial = cofreImg.src; // Guarda la imagen inicial del cofre
        const dialogoImg = cofreImg.parentElement.querySelector('.ClickAqui img'); // Selecciona la imagen de diálogo correspondiente al cofre
    
        // Establece la transición de opacidad para la imagen de diálogo
        dialogoImg.style.transition = 'opacity 0.3s ease';
    
        cofreImg.addEventListener("click", function () {
            if (!animando) { // Solo ejecutar si no está en animación
                animando = true; // Establecer que estamos en animación
    
                if (abierto) {
                    // Animación para cerrar el cofre (más rápida)
                    const interval = setInterval(function () {
                        indexImagen--; // Disminuir el índice
                        if (indexImagen < 0) {
                            clearInterval(interval); // Detener la animación
                            cofreImg.src = imagenInicial; // Restaurar la imagen inicial
                            indexImagen = 0; // Restablecer el índice
                            abierto = false; // Cambiar el estado a cerrado
                            animando = false; // Terminar la animación
    
                            // Asegúrate de que la imagen de diálogo sea invisible al final
                            dialogoImg.style.opacity = '0'; // Hace que la imagen de diálogo sea invisible
                        } else {
                            cofreImg.src = imagenes[indexImagen]; // Cambiar la imagen
    
                            // Cambiar la opacidad de la imagen de diálogo a medida que se cierra el cofre
                            const opacityValue = (indexImagen / (imagenes.length - 1)); // Calcula el nuevo valor de opacidad
                            dialogoImg.style.opacity = opacityValue; // Aplica el nuevo valor de opacidad
                        }
                    }, 100); // Cambia la imagen cada 75ms para hacerla más rápida al cerrar
                } else {
                    // Cambiar la opacidad de la imagen de diálogo antes de abrir el cofre
                    dialogoImg.style.opacity = '0'; // Oculta la imagen de diálogo al abrir el cofre
                    const interval = setInterval(function () {
                        indexImagen++; // Aumentar el índice
                        if (indexImagen >= imagenes.length) {
                            clearInterval(interval); // Detener la animación
                            indexImagen = imagenes.length - 1; // Asegúrate de que esté en la última imagen
                            animando = false; // Terminar la animación
                            dialogoImg.style.opacity = '1'; // Asegúrate de que la imagen de diálogo sea visible
                        } else {
                            cofreImg.src = imagenes[indexImagen]; // Cambiar la imagen
                        }
                    }, 100); // Cambia la imagen cada 90ms para la apertura
                    abierto = true; // Cambiar el estado a abierto
    
                    // Cambiar la imagen de diálogo correspondiente según el índice del cofre
                    dialogoImg.src = dialogoImgs[index]; // Cambia la imagen del diálogo correspondiente
                    dialogoImg.style.animation = 'none';
                    dialogoImg.style.transition = 'opacity 0.3s ease'; // Mantiene la transición para la opacidad
                    dialogoImg.style.opacity = '1'; // Asegúrate de que la imagen de diálogo sea visible
                }
            }
        });
    });
    
    
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