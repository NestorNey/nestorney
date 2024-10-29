var menuIsOpened = false

function composeEmail() {
    let email = 'nestor.emmanuelas@gmail.com';
  
    const emailLink = `mailto:${email}?subject=Hi! i to want talk with you!&body=Write your message here :)`;
  
    window.open(emailLink);
}

function startEvents() {
    setupHeaderScrollEvent();
    setupTitleAnimation();
    setupSquareCheckboxes();
    setupMenuClickEvent()
}

function setupMenuClickEvent(){
    let menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", () => (window.innerWidth < 756) ? showMenu() : null);
}

function showMenu(){
    let header = document.querySelector("header");
    let menuButton = document.getElementById("menuButton");
    let menu = document.getElementById("menu");
    let logo = document.getElementById("logo");
    let fin = document.getElementById("fin");

    if(menuIsOpened == true){
        header.classList.toggle("abajo", window.scrollY > 0);
        header.classList.remove("opened")
        
        menuButton.src = "access/media/icons/menu.png"
        menuIsOpened = false
    }else if(menuIsOpened == false){
        if(window.scrollY < 1){
            header.classList.toggle("abajo");
        }
        header.classList.add("opened")
        
        menuButton.src = "access/media/icons/close.png"
        menuIsOpened = true
    }
    
}

function setupHeaderScrollEvent() {
    window.addEventListener("scroll", toggleHeader);
}

function toggleHeader() {
    let header = document.querySelector("header");
    if(!menuIsOpened){
        header.classList.toggle("abajo", window.scrollY > 0);
    }
}

function setupTitleAnimation() {
    let titles = document.getElementsByClassName("titles");
    let callback = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("expand");
            } else {
                entry.target.classList.remove("expand");
            }
        });
    };
    let options = {
        root: document.getElementById("body"),
        rootMargin: "0px",
        threshold: 0.5, // Modifica este valor si es necesario
    };

    Array.from(titles).forEach(function(title) {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(title);
    });
}

function setupSquareCheckboxes() {
    let squareChecks = document.getElementsByClassName("checkboxSquareTray");

    Array.from(squareChecks).forEach(function(squareCheckbox) {
        squareCheckbox.addEventListener('change', function(e) {
            if (e.target.checked) {
                Array.from(squareChecks).forEach(function(checkbox) {
                    if (checkbox !== e.target) {
                        checkbox.checked = false;
                    }
                });
            }
        });
    });
}

// Llamar a la función principal para iniciar los eventos
startEvents();