/* ==========================================
   PORTFOLIO SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Typing Animation
    =============================== */

    const words = [
        "Computer Science Student",
        "Web Developer",
        "Frontend Developer",
        "Programmer",
        "Software Engineer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typing = document.querySelector(".typing");

    function typeEffect() {

        if (!typing) return;

        let current = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typing.textContent =
                current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 120);

    }

    typeEffect();

});


/* ===============================
   Sticky Header
=============================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/* ===============================
   Active Navigation
=============================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===============================
   Back To Top
=============================== */

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});
.sticky{
    box-shadow:0 10px 30px rgba(0,0,0,.35);
}

nav a.active{
    color:#00d9ff;
}

.top-btn{
    display:none;
}

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
".about,.education,.skills,.projects,#certificates,#services,#counter,.contact"
);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        if(top < trigger){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/* ==========================================
   ANIMATED COUNTER
========================================== */

const counters = document.querySelectorAll(".counter-box h2");

let started = false;

function startCounter(){

    if(started) return;

    const counterSection = document.querySelector("#counter");

    if(!counterSection) return;

    const top = counterSection.getBoundingClientRect().top;

    if(top < window.innerHeight){

        started = true;

        counters.forEach(counter=>{

            const target =
            parseInt(counter.innerText);

            let count = 0;

            const speed = target / 80;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.floor(count) + "+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText =
                    target + "+";

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll",startCounter);


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons =
document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("click",(e)=>{

const circle =
document.createElement("span");

const x =
e.clientX -
button.offsetLeft;

const y =
e.clientY -
button.offsetTop;

circle.style.left = x+"px";

circle.style.top = y+"px";

circle.classList.add("ripple");

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const profile =
document.querySelector(".left img");

if(profile){

profile.addEventListener("mousemove",(e)=>{

profile.style.transform =
"scale(1.05) rotateY(8deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform =
"scale(1) rotateY(0deg)";

});

}


/* ==========================================
   CONTACT FORM
========================================== */

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you! Your message has been sent.");

form.reset();

});

}
/* Reveal Animation */

.about,
.education,
.skills,
.projects,
#certificates,
#services,
#counter,
.contact{

opacity:0;

transform:translateY(80px);

transition:.8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

/* Ripple */

.btn,
.btn2{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

width:15px;

height:15px;

background:white;

border-radius:50%;

transform:scale(0);

animation:ripple .6s linear;

}

@keyframes ripple{

to{

transform:scale(25);

opacity:0;

}

}
/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    }

});


/* ==========================================
   PARALLAX EFFECT
========================================== */

const heroImage = document.querySelector(".left img");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    let x = (window.innerWidth/2 - e.pageX)/40;

    let y = (window.innerHeight/2 - e.pageY)/40;

    heroImage.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});


/* ==========================================
   FLOATING ANIMATION
========================================== */

let angle = 0;

setInterval(()=>{

    angle += 0.05;

    if(heroImage){

        heroImage.style.translate =
        `0 ${Math.sin(angle)*10}px`;

    }

},30);


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});


/* ==========================================
   RANDOM GLOW EFFECT
========================================== */

const cards = document.querySelectorAll(

".skill-card,.project-card,.service-card,.certificate-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow =
"0 0 35px rgba(0,217,255,.45)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow = "";

});

});


/* ==========================================
   COPY EMAIL
========================================== */

const email = document.querySelector(".fa-envelope");

if(email){

email.addEventListener("click",()=>{

navigator.clipboard.writeText("your-email@gmail.com");

alert("Email copied successfully!");

});

}


/* ==========================================
   FOOTER YEAR
========================================== */

const year = new Date().getFullYear();

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${year} Gautam Kumar. All Rights Reserved.`;

}
