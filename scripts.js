//Mushroom loader:
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 800) {
        const animatedImage = document.getElementById("mushroom");
        const hiddenText = document.getElementById("linksignup");

        setTimeout(function() {
            animatedImage.style.display = "none";
            hiddenText.style.display = "block";
        }, 4000);
    }
});


//Estrella loader:
document.addEventListener("DOMContentLoaded", function() {
    const animatedImage = document.getElementById("estrellaContainer");
    const hiddenText = document.getElementById("insideStoreProducts");

    setTimeout(function() {
    animatedImage.style.display = "none"; 
    hiddenText.style.opacity = "1";
    }, 3000);
});

//Dropdown categories change name:
var dropContent = document.getElementById("drop-content");
var dropdownCategories = document.getElementById("dropdownCategories");

document.getElementById("drop-content").addEventListener("click", function(e) {
    if (e.target.tagName === "A") {
    var selectedCategory = e.target.textContent;
    dropdownCategories.textContent = selectedCategory;
    dropdownCategories.classList.add("selected"); // Agregar clase para cambiar el color
    dropContent.style.display = "none";
    }
});

dropdownCategories.addEventListener("click", function() {
    dropContent.style.display = (dropContent.style.display === "block") ? "none" : "block";
});

  // Close the dropdown when clicking outside of it
window.addEventListener("click", function(e) {
    if (!e.target.matches("#dropdownCategories") && !e.target.matches("#drop-content")) {
    dropContent.style.display = "none";
    }
});



//Account responsive loader:
document.addEventListener("DOMContentLoaded", function() {
    const animatedImage = document.getElementById("spinner");
    const hiddenText = document.getElementById("accountBottom");

    setTimeout(function() {
    animatedImage.style.display = "none";
    hiddenText.style.visibility = "visible";
    }, 3000);
});


//Drop Search Menu:
// Este evento se dispara cuando el DOM ha sido completamente cargado y parseado.
document.addEventListener("DOMContentLoaded", function() {

    // Se obtiene una referencia al elemento con el id "dropNewSearch".
    let botonMostrar = document.getElementById("dropNewSearch");

    // Se obtiene una referencia al elemento con el id "headerHidden".
    let seccion = document.getElementById("headerHidden");

    // Se agrega un evento al botón identificado por "dropNewSearch" que se ejecutará cuando se haga clic en él.
    botonMostrar.addEventListener("click", function() {
        
        // Cuando se hace clic en el botón, se cambia la propiedad "visibility" del elemento con id "headerHidden" a "visible".
        seccion.style.visibility = "visible";
        seccion.style.opacity = "1";

    });
});



//Close buttons:

//Close button search menu:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("toclosebutton");
    let seccion = document.getElementById("headerHidden");

    botonMostrar.addEventListener("click", function() {
        seccion.style.visibility = "hidden";
        seccion.style.opacity = "1";
    });
});

//Close button Store:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("toclosebuttonStore");
    let seccion = document.getElementById("storeContainer");

    botonMostrar.addEventListener("click", function() {
        seccion.style.visibility = "hidden";
    });
});

//Close button Games:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("toclosebuttongames");
    let seccion = document.getElementById("gamesContainer");

    botonMostrar.addEventListener("click", function() {
        seccion.style.visibility = "hidden";

    });
});

//Close button Switch:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("toclosebuttonswitch");
    let seccion = document.getElementById("switchContainer");

    botonMostrar.addEventListener("click", function() {
        seccion.style.visibility = "hidden";
    });
});

//Close button Play:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("toclosebuttonplay");
    let seccion = document.getElementById("playContainer");

    botonMostrar.addEventListener("click", function() {
        seccion.style.visibility = "hidden";
    });
});




// Mostrar Drop Menus:

//All categories Menu:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("dropdownCategories");
    let seccion = document.getElementById("drop-content");

    botonMostrar.addEventListener("click", function() {
        // Alternar la visibilidad
        if (seccion.style.visibility === "visible") {
            seccion.style.visibility = "hidden";
            seccion.style.opacity = "0";
        } else {
            seccion.style.visibility = "visible";
            seccion.style.opacity = "1";
        }
    });
});


//Store Menu:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("dropdownstore");
    let seccion = document.getElementById("storeContainer");

    botonMostrar.addEventListener("click", function() {
        // Alternar la visibilidad
        if (seccion.style.visibility === "visible") {
            seccion.style.visibility = "hidden";
            seccion.style.opacity = "0";
        } else {
            seccion.style.visibility = "visible";
            seccion.style.opacity = "1";
        }

    
    });
});

//Games Menu:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("dropdowngames");
    let seccion = document.getElementById("gamesContainer");

    botonMostrar.addEventListener("click", function() {
        if (seccion.style.visibility === "visible") {
            seccion.style.visibility = "hidden";
            seccion.style.opacity = "0";
        } else {
            seccion.style.visibility = "visible";
            seccion.style.opacity = "1";
        }
    });
});

//Switch Menu:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("dropdownswitch");
    let seccion = document.getElementById("switchContainer");

    botonMostrar.addEventListener("click", function() {
        if (seccion.style.visibility === "visible") {
            seccion.style.visibility = "hidden";
            seccion.style.opacity = "0";
        } else {
            seccion.style.visibility = "visible";
            seccion.style.opacity = "1";
        }
    });
});

//Play Menu:
document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("dropdownplay");
    let seccion = document.getElementById("playContainer");

    botonMostrar.addEventListener("click", function() {
        if (seccion.style.visibility === "visible") {
            seccion.style.visibility = "hidden";
            seccion.style.opacity = "0";
        } else {
            seccion.style.visibility = "visible";
            seccion.style.opacity = "1";
        }
    });
});


//Chevrons:

//Chevron All Categories:
document.getElementById("dropdownCategories").addEventListener("click", function() {
    let chevron = document.getElementById("downchevroncategories");
    chevron.style.transform = chevron.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
});

//Chevron Store:
document.getElementById("dropNintendo").addEventListener("click", function() {
    let chevron = document.getElementById("downchevronstore");
    chevron.style.transform = chevron.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
});

//Chevron Games:
document.getElementById("dropdowngames").addEventListener("click", function() {
    let chevron = document.getElementById("downchevrongames");
    chevron.style.transform = chevron.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
});

//Chevron Switch:
document.getElementById("dropdownswitch").addEventListener("click", function() {
    let chevron = document.getElementById("downchevronswitch");
    chevron.style.transform = chevron.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
});

//Chevron Play:
document.getElementById("dropdownplay").addEventListener("click", function() {
    let chevron = document.getElementById("downchevronplay");
    chevron.style.transform = chevron.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
});

