/* ========================================
   HERO ELEMENTS
   ======================================== */

const hero = document.querySelector(".hero");
const heroName = document.querySelector(".hero-name");
const heroImage = document.querySelector(".hero-image");
const heroImageElement = document.querySelector(".hero-image img");

const menuTrigger = document.querySelector(".menu-trigger");
const siteMenu = document.querySelector(".site-menu");

const menuLinks = document.querySelectorAll(".menu-link");

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


/* ========================================
   NAVIGATION
   ======================================== */

function openMenu() {
    siteMenu.classList.add("is-open");
    menuTrigger.classList.add("is-open");

    document.body.classList.add("menu-open");

    menuTrigger.setAttribute("aria-expanded", "true");
    menuTrigger.setAttribute("aria-label", "Close menu");

    siteMenu.setAttribute("aria-hidden", "false");
}


function closeMenu() {
    siteMenu.classList.remove("is-open");
    menuTrigger.classList.remove("is-open");

    document.body.classList.remove("menu-open");

    menuTrigger.setAttribute("aria-expanded", "false");
    menuTrigger.setAttribute("aria-label", "Open menu");

    siteMenu.setAttribute("aria-hidden", "true");
}


function toggleMenu() {
    const isOpen = siteMenu.classList.contains("is-open");

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}


/* ========================================
   MENU TRIGGER
   ======================================== */

if (menuTrigger && siteMenu) {
    menuTrigger.addEventListener("click", toggleMenu);
}


/* ========================================
   MENU LINKS
   ======================================== */

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});


/* ========================================
   ESCAPE KEY
   ======================================== */

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});


/* ========================================
   HERO INTERACTION
   ======================================== */

if (
    !reduceMotion &&
    hero &&
    heroName &&
    heroImage &&
    heroImageElement
) {
    let pointerX = 0;
    let pointerY = 0;

    let currentX = 0;
    let currentY = 0;

    let scrollProgress = 0;

    let animationFrame;


    /* ========================================
       POINTER MOVEMENT
       ======================================== */

    window.addEventListener("pointermove", (event) => {
        pointerX =
            (event.clientX / window.innerWidth - 0.5) * 2;

        pointerY =
            (event.clientY / window.innerHeight - 0.5) * 2;
    });


    /* ========================================
       SCROLL POSITION
       ======================================== */

    function updateScroll() {
        const rect = hero.getBoundingClientRect();

        const progress = Math.min(
            Math.max(-rect.top / window.innerHeight, 0),
            1
        );

        scrollProgress = progress;
    }

    window.addEventListener("scroll", updateScroll, {
        passive: true
    });


    /* ========================================
       ANIMATION LOOP
       ======================================== */

    function animate() {
        currentX += (pointerX - currentX) * 0.06;
        currentY += (pointerY - currentY) * 0.06;


        /* Typography */

        const nameX = currentX * 14;
        const nameY = currentY * 10;

        const nameScrollY = scrollProgress * -90;

        heroName.style.transform = `
            translate(
                calc(-50% + ${nameX}px),
                calc(-50% + ${nameY + nameScrollY}px)
            )
            rotate(-4deg)
        `;


        /* Image */

        const imageX = currentX * -8;
        const imageY = currentY * -6;

        const imageScrollY = scrollProgress * 40;

        heroImageElement.style.transform = `
            scale(1.08)
            translate(
                ${imageX}px,
                ${imageY + imageScrollY}px
            )
        `;


        animationFrame = requestAnimationFrame(animate);
    }


    updateScroll();
    animate();


    /* ========================================
       CLEANUP
       ======================================== */

    window.addEventListener("pagehide", () => {
        cancelAnimationFrame(animationFrame);
    });
}