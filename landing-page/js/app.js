/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


 //Define Global Variables
 const navBar= document.getElementById('navbar_list');
 const navSections= document.getElementsByTagName('section');



// build the nav
for(let i=0; i< navSections.length; i++) {
  const navItem= document.createElement('li');
  const navLink= document.createElement('a');

  navItem.class= 'nav-item';

  navLink.textContent= navSections[i].getAttribute('data-nav');
  navLink.href= `#${navSections[i].getAttribute('id')}`;
 
  navItem.appendChild(navLink);
  navBar.appendChild(navItem);
};


// Add class 'active' to section when near top of viewport, remove when it is not
document.addEventListener('scroll', function() {
  
  for(const section of navSections) {
    const position= section.getBoundingClientRect();
    
  if(position.top <= 145 && position.bottom >= 155) {
    section.classList.add('active');
  } else {
    section.classList.remove('active');
  }
}
});


// Scroll to appropriate section when a link is clicked
const links= document.getElementsByTagName('a');

for(let i=0; i<links.length; i++) {
  let link= links[i];
  link.addEventListener('click', function (e) {
    e.preventDefault();
      const section= navSections[i];
      section.scrollIntoView({behavior: 'smooth'}); 
  });
};



    






