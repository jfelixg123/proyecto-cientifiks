document.addEventListener("DOMContentLoaded", function () {

    let indice = 0;

    // Variable para almacenar el identificador del intervalo
    let intervaloCambiarJuegos;

    let RollDown = document.getElementById('scrollToTop')
    if (RollDown != null) {
        RollDown.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }




    

    const translations = {
        "es": {
            title: ["¡Bienvenidos a la aventura!", "¡Explora un mundo magnifico!", "¡Diviertete!", "¡Atrévete a descubrir más!"],
            descriptions: [
                "Las emblemáticas fuentes han dejado de fluir, y un extraño misterio amenaza su agua. Tu misión es clara: desentrañar las causas de esta interrupción. Atrévete a sumergirte en esta historia y descubre los secretos que podrían restaurar el equilibrio perdido.",
                "El agua ha perdido su pureza, y el reto es claro: atravesar escenarios llenos de obstáculos para devolverle su claridad. A medida que avances, los desafíos se intensificarán. ¿Serás capaz de resolver el enigma y dar el primer paso hacia la restauración?",
                "En tu camino encontrarás máquinas y sistemas fallidos que necesitan ajustes. Cada mecanismo roto esconde pistas vitales y complejos rompecabezas que deberás resolver para acercarte a la solución final. ¿Podrás hacer que las aguas fluyan otra vez?",
                "El destino de las tres fuentes está en tus manos. Con todos los desafíos superados, tu ingenio y perseverancia te llevarán al logro definitivo. Devuelve el agua limpia y purificada a cada fuente y celebra el triunfo de haber completado la misión. ¿Estás listo para restaurar el equilibrio?",
            ],
            gameTitle: "Científico",
            buttonsCarosel: ["EXPLORA", "AVENTURATE", "DESCUBRE", "DIVIERTE"],
            session: {
                login: "Iniciar Sesión",
                register: "Registrarse"
            },
            buttonsPlay: "",
            miniTexts: [
                "Este es el mini texto 1 en español",
                "Este es el mini texto 2 en español",
                "Este es el mini texto 3 en español",
                "Este es el mini texto 4 en español"
            ],

            loginTitle: "RESULTADOS GLOBALES",
            aboutUs: "Sobre Nosotros",
            Copyright: "Copyright © 2024 Cientifiks. Todos los derechos reservados.",
            IniciarloginTitle: "INICIAR SESIÓN",
            RegisterLoginTitle: "Registrarse",
            session: {
                login: "Iniciar Sesión",
                register: "Registrarse"
            },
            formLabels: {
                username: "Nombre de usuario:",
                email: "Correo electrónico",
                password: "Contraseña"
            },
            buttons: {
                login: "INICIAR SESIÓN",
                register: "REGISTRARSE"
            }
        },
        "en": {
            title: ["Welcome to the Adventure!", "Explore a magnificent world!", "Have fun!", "Dare to discover more!"],
            descriptions: [
                "The emblematic fountains have stopped flowing, and a strange mystery threatens their water. Your mission is clear: unravel the causes of this interruption. Dare to immerse yourself in this story and discover the secrets that could restore the lost balance.",
                "The water has lost its purity, and the challenge is clear: cross scenarios full of obstacles to restore its clarity. As you progress, the challenges will intensify. Will you be able to solve the riddle and take the first step towards restoration?",
                "On your way you will encounter failed machines and systems that need adjustments. Each broken mechanism hides vital clues and complex puzzles that you must solve to get closer to the final solution. Can you make the waters flow again?",
                "The fate of the three fountains is in your hands. With all the challenges overcome, your ingenuity and perseverance will lead you to the ultimate achievement. Return clean, purified water to each fountain and celebrate the triumph of completing the mission. Are you ready to restore balance?"
            ],
            gameTitle: "Scientist",
            buttonsCarosel: ["EXPLORE", "ADVENTURE", "DISCOVER", "ENJOY"],
            loginTitle: "GLOBAL RESULTS",
            aboutUs: "About Us",
            Copyright: "Copyright © 2024 Cientifiks. All rights reserved.",
            miniTexts: [
                "This is mini text 1 in English",
                "This is mini text 2 in English",
                "This is mini text 3 in English",
                "This is mini text 4 in English"
            ],
            IniciarloginTitle: "LOGIN",
            RegisterLoginTitle: "Sign up",
            session: {
                login: "Log In",
                register: "Sign Up"
            },
            formLabels: {
                username: "Username:",
                email: "Email",
                password: "Password"
            },
            buttons: {
                login: "LOG IN",
                register: "SIGN UP"
            }
        },
        "ca": {
            title: ["Benvinguts a l'aventura!", "Explora un món magnífic!", "Diverteix-te!", "Atreveix-te a descobrir més!"],
            descriptions: [
                "Les fonts emblemàtiques han deixat de fluir, i un estrany misteri amenaça la seva aigua. La teva missió és clara: esbrinar les causes d'aquesta interrupció. Atreveix-te a submergir-te en aquesta història i descobreix els secrets que podrien restaurar l'equilibri perdut.",
                "L'aigua ha perdut la seva puresa, i el repte és clar: travessar escenaris plens d'obstacles per tornar-li la claredat. A mesura que avanços, els desafiaments s'intensificaran. Seràs capaç de resoldre l'enigma i fer el primer pas cap a la restauració?",
                "Al teu camí trobaràs màquines i sistemes fallits que necessiten ajustaments. Cada mecanisme trencat amaga pistes vitals i trencaclosques complexes que hauràs de resoldre per acostar-te a la solució final. Podràs fer que les aigües flueixin una altra vegada?",
                "El destí de les tres fonts és a les teves mans. Amb tots els desafiaments superats, el teu enginy i perseverança et portaran a l'èxit definitiu. Torna l'aigua neta i purificada a cada font i celebra el triomf de completar la missió. Estàs preparat per restaurar l'equilibri?"
            ],
            buttonsCarosel: ["EXPLORA", "AVENTURAT", "DESCOBREIX", "DIVERTEIX-TE"],
            gameTitle: "Científic",
            session: {
                login: "Inicia Sessió",
                register: "Registrar-se"
            },
            loginTitle: "RESULTATS GLOBALS",
            miniTexts: [
                "Aquest és el mini text 1 en català",
                "Aquest és el mini text 2 en català",
                "Aquest és el mini text 3 en català",
                "Aquest és el mini text 4 en català"
            ],
            aboutUs: "Sobre Nosaltres",
            Copyright: "Copyright © 2024 Cientifiks. Tots els drets reservats..",
            Copyright: "Copyright © 2024. Tots els drets reservats..",

            IniciarloginTitle: "INICIAR SESSIÓ",
            RegisterLoginTitle: "Registrar-se",
            session: {
                login: "Iniciar Sessió",
                register: "Registrar-se"
            },
            formLabels: {
                username: "Nom d'usuari:",
                email: "Correu electrònic",
                password: "Contrasenya"
            },
            buttons: {
                login: "INICIAR SESSIÓ",
                register: "REGISTRAR-SE"
            }
        }
    };
    window.addEventListener("scroll", function () {
        if (window.scrollY > changePoint) {
            navbar.classList.add("nav-active");
            titulo.classList.add("titulo-activo");
        } else {
            navbar.classList.remove("nav-active");
            titulo.classList.remove("titulo-activo");
        }
    });
    const cofreImgs = document.querySelectorAll(".Cofre"); // Selecciona todos los elementos con clase 'Cofre'
    const imagenes = [
        "./LangingPagPhoto/cofre1-removebg-preview.png", // Cerrado
        "./LangingPagPhoto/cofre2-removebg-preview.png",
        "./LangingPagPhoto/cofre3-removebg-preview.png",
        "./LangingPagPhoto/cofre4-removebg-preview.png",
        "./LangingPagPhoto/cofre5-removebg-preview.png", // Abierto del todo
    ];

    const dialogoImgs = [
        "./LangingPagPhoto/JordiPerez.png", // Imagen para el primer cofre
        "./LangingPagPhoto/Yo.png", // Imagen para el segundo cofre
        "./LangingPagPhoto/JeanCarlos.png", // Imagen para el tercer cofre
        "./LangingPagPhoto/JordiCelemin.png", // Imagen para el cuarto cofre
    ];
    const navbar = document.getElementById("navbar");
    const changePoint = 100; // Cambia este valor a la posición que desees
    const titulo = document.getElementById('miTitulo')
    const characters = document.querySelectorAll('.ClickAqui');

    characters.forEach((character) => {
        const miniTexto = character.querySelector('.mini-texto');
        const cofreImg = character.parentElement.querySelector('.Cofre'); // Selecciona la imagen del cofre

        // Inicialmente ocultar el mini texto
        miniTexto.style.display = 'none';

        let imagenActual = cofreImg.src; // Guardamos la imagen actual

        // Escuchar el movimiento del mouse dentro del div 'ClickAqui'
        character.addEventListener('mousemove', (e) => {
            // Solo mostrar el mini texto si la imagen del cofre ha cambiado
            if (cofreImg.src !== imagenActual) {
                miniTexto.style.display = 'block';
                miniTexto.style.left = `${e.clientX - character.getBoundingClientRect().left + 20}px`;
                miniTexto.style.top = `${e.clientY - character.getBoundingClientRect().top + 10}px`;
            } else {
                miniTexto.style.display = 'none'; // Ocultar el mini texto si no ha cambiado
            }
        });

        // Cuando el mouse sale del área de 'ClickAqui', ocultamos el mini texto
        character.addEventListener('mouseleave', () => {
            miniTexto.style.display = 'none';
        });
    });

    let CambiarPerfil = false;


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
                    CambiarPerfil = true;
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
                    abierto = true; // Cambiar el estado a abierto    // Cambiar la imagen de diálogo correspondiente según el índice del cofre
                    dialogoImg.src = dialogoImgs[index]; // Cambia la imagen del diálogo correspondiente
                    dialogoImg.style.animation = 'none';
                    dialogoImg.style.transition = 'opacity 0.3s ease'; // Mantiene la transición para la opacidad
                    dialogoImg.style.opacity = '1'; // Asegúrate de que la imagen de diálogo sea visible
                    CambiarPerfil = false;
                }
            }
        });
    });

    const languageButtons = document.querySelectorAll(".idioma img");
    if (languageButtons) {
        languageButtons.forEach(button => {
            button.addEventListener("click", function () {
                const selectedLang = button.alt;
                updateContent(selectedLang);
            });
        });
    }

    function updateContent(lang) {
        const content = translations[lang];

        // Actualizar los títulos y descripciones de cada item del carrusel
        const carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems.forEach((item, index) => {
            if (content.descriptions?.[index] && item.querySelector(".Descripcion p")) {
                item.querySelector(".Descripcion p").textContent = content.descriptions[index];
            }
            if (content.buttonsCarosel?.[index] && item.querySelector(".botones h1")) {
                item.querySelector(".botones h1").textContent = content.buttonsCarosel[index];
            }
            if (content.title?.[index] && item.querySelector(".TituloInicio h1")) {
                item.querySelector(".TituloInicio h1").textContent = content.title[index];
            }
        });

        const miniTextElements = document.querySelectorAll(".mini-texto");
        miniTextElements.forEach((element, index) => {
            if (content.miniTexts?.[index]) {
                element.textContent = content.miniTexts[index];
            }
        });
        const loginElement = document.querySelector(".inicarSesion h2");
        if (loginElement) {
            loginElement.textContent = content.session?.login;
        }

        const registerElement = document.querySelector(".registrarse h2");
        if (registerElement) {
            registerElement.textContent = content.session?.register;
        }

        const aboutUsElement = document.querySelector(".TituloNosotros h1");
        if (aboutUsElement) {
            aboutUsElement.textContent = content.aboutUs;
        }

        const footerElement = document.querySelector(".FooterDerechos p");
        if (footerElement) {
            footerElement.textContent = content.Copyright;
        }

        const scoreboardElement = document.querySelector(".h1_scoreboard");
        if (scoreboardElement) {
            scoreboardElement.textContent = content.loginTitle;
        }

        // Actualizar títulos de los formularios
        const loginTitleElement = document.querySelector("#login-title");
        if (loginTitleElement) {
            loginTitleElement.textContent = content.IniciarloginTitle;
        }

        const RegisterTitleElement = document.querySelector("#register-title");
        if (RegisterTitleElement) {
            RegisterTitleElement.textContent = content.RegisterLoginTitle;
        }

        // Actualizar etiquetas del formulario
        const nameLabel = document.querySelector("#name-label");
        if (nameLabel) {
            nameLabel.textContent = content.formLabels.username;
        }

        const emailLabel = document.querySelector("#email-label");
        if (emailLabel) {
            emailLabel.textContent = content.formLabels.email;
        }

        const passwordLabel = document.querySelector("#password-label");
        if (passwordLabel) {
            passwordLabel.textContent = content.formLabels.password;
        }

        // Actualizar botones
        const loginButton = document.querySelector("#login-button");
        if (loginButton) {
            loginButton.textContent = content.buttons.login;
        }

        const registerButton = document.querySelector("#register-button");
        if (registerButton) {
            registerButton.textContent = content.buttons.register;
        }
    }
    const juegos = [
        {
            imagen: "LangingPagPhoto/juegoJordiCelemin.png"
        },
        {
            imagen: "LangingPagPhoto/Warm_Ocean.png"
        },
        {
            imagen: "LangingPagPhoto/fondo-cloacas.jpg"
        },
        {
            imagen: "Juegos/Ahorcado/images/alcantarillas.png"
        }
    ];

    function cambiarJuegos() {
        const imagenJuego1 = document.getElementById('imagenJuego1');
        const imagenJuego2 = document.getElementById('imagenJuego2');

        // Verificar si ambos elementos existen
        if (!imagenJuego1 || !imagenJuego2) {
            console.warn('Uno o ambos elementos no existen. Deteniendo el intervalo.');
            clearInterval(intervaloCambiarJuegos); // Detener el intervalo
            return; // Salir de la función
        }

        // Aplicar la animación de desvanecimiento a ambos elementos
        imagenJuego1.classList.add('fade-out');
        imagenJuego2.classList.add('fade-out');

        setTimeout(() => {
            // Cambiar el contenido
            indice = (indice + 1) % juegos.length; // Cambia al siguiente juego
            const nextIndex = (indice + 1) % juegos.length; // Obtener el índice del siguiente juego
            imagenJuego1.src = juegos[indice].imagen;
            imagenJuego2.src = juegos[nextIndex].imagen;

            // Quitar la animación de desvanecimiento y aplicar la de aparición
            imagenJuego1.classList.remove('fade-out');
            imagenJuego1.classList.add('fade-in');

            imagenJuego2.classList.remove('fade-out');
            imagenJuego2.classList.add('fade-in');

            setTimeout(() => {
                imagenJuego1.classList.remove('fade-in');
                imagenJuego2.classList.remove('fade-in');
            }, 500); // Tiempo que dura la animación de aparición
        }, 500); // Tiempo que dura la animación de desaparición
    }
    // Iniciar el intervalo
    const userIcon = document.getElementById('user-icon');
    const userMenu = document.getElementById('user-menu');

    // Verifica si los elementos existen antes de añadir los eventos
    if (userIcon && userMenu) {
        // Añadir un evento de clic al icono del usuario
        userIcon.addEventListener('click', function() {
            // Alternar la clase 'show' para mostrar u ocultar el menú
            userMenu.classList.toggle('show');
        });

        // Cerrar el menú si el usuario hace clic fuera de él
        document.addEventListener('click', function(event) {
            if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
                userMenu.classList.remove('show');
            }
        });
    }

    intervaloCambiarJuegos = setInterval(cambiarJuegos, 5000);
}); 