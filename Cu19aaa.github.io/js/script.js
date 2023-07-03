/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
/*sr.reveal('.home_img',{delay: 400}); */
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about_img',{}); 
/*sr.reveal('.about_subtitle',{delay: 400}); */
/*sr.reveal('.about_text',{delay: 400}); */

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200}); 
/*sr.reveal('.skills_img',{delay: 600});*/

/*SCROLL WORK*/
sr.reveal('.work_img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact_input',{interval: 200}); 

sr.reveal('.work_container',{interval: 200}); 

sr.reveal('.image__img',{interval: 200}); 


/*===== SCROLL REVEAL ANIMATION(RIGHT) =====*/
const sr1 = ScrollReveal({
  origin: 'right',
  distance: '100px',
  duration: 2000,
  reset: true
});

/*SCROLL ABOUT(RIGHT)*/
sr1.reveal('.about_text',{delay: 400}); 
sr1.reveal('.about_subtitle',{delay: 400});

/*SCROLL SKILLS(RIGHT)*/
sr1.reveal('.skills_img',{delay: 200});

/*SCROLL HOME(RIGHT)*/
sr1.reveal('.home_img',{delay: 400}); 




var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
}

