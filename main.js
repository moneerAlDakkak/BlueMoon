/*global document*/
/*jslent plusplus: true*/
/* exported themeSwitch showCards backButtonFunc coloring*/


/*
<div class="logo">

  

              <div class="restName">
                <span>oneer</span>
              </div>
  
              <span class="lastName"> Al-Dakkak </span>
             
        </div>
*/
/*

const logo = document.createElement('div'),
      restName = document.createElement('div'),
      restSpan = document.createElement('span'),
      lastName = document.createElement('span'),
      restText = document.createTextNode('oneer'),
      lastText = document.createTextNode('Al-Dakkak');
      

lastName.appendChild(lastText);

restSpan.appendChild(restText);

restName.appendChild(restSpan);

logo.appendChild(restName);

logo.appendChild(lastName);

document.querySelector('.header-grid').insertBefore(logo, document.querySelector('button[title="Change theme"]'));

logo.setAttribute('class', 'logo');

restName.setAttribute('class', 'restName');

lastName.setAttribute('class', 'lastName');

*/


//to fit the loading page and the light background in the right size all the time : 

document.getElementById('loading').style.height = document.body.clientHeight + 'px';




window.onresize = () => { 
 
  document.getElementById('lightBg').style.height = document.body.clientHeight + 'px'; 
 
  document.getElementById('loading').style.height = document.body.clientHeight + 'px'; 
   
}







// to hide the loading page :

function loading() {

  'use strict';

  document.getElementById('loading').style.zIndex = '-2';

  document.getElementById('loading').style.opacity = '0';

}

setTimeout(loading, 6000);




// The very cool theme changer :

function themeSwitch() {
    
    "use strict";
    
    document.body.classList.toggle('light-mode');
    
    document.querySelector('header button span').classList.toggle('theme-switch');

    document.querySelector('#lightBg').style.height = document.body.clientHeight + 'px';

}







// See that drop menu in header ? 

function dropDown() {
  
  'use strict';
  
  var header = document.querySelector('header');
  
  document.querySelector('button[onclick="dropDown()"]').classList.toggle('rotate90');
  
  header.classList.toggle('full-height-header');
  
  if(header.classList.contains('full-height-header')){
      
    header.style.height = header.scrollHeight + 'px'
    
  } else {
    
    header.style.height = document.querySelector('.logo').offsetHeight + 70 + 'px';
  }
  
}






//the slideshow movements :

function slideShow(slide) {
  
  'use strict';
  
  document.getElementById('slideshow').className ='';
  
  document.getElementById('slideshow').classList.add(slide);
  
}







// showing and hiding cards :

var cardTitles = document.querySelectorAll('aside ul li'),
    cards = document.querySelectorAll('.card'),
    i;

cardTitles.forEach(showCards);

function showCards(cardTitle) {
    
    'use strict';
    
    cardTitle.onclick = function () {
        
        for (i = 0; i < cards.length; i = i + 1) {
            
        cards[i].classList.remove('show')
        
        }
        
        document.getElementById(this.getAttribute('id') + '1').classList.toggle('show');
        
    }
    
}

/* the for loop was necessary bcz you can't edit classList of all the elements at once*/







//the back buttons need this to function :  

var backs = document.querySelectorAll('.back-button');
    
backs.forEach(backFunction);
    
function backFunction(backButton) {
        
    'use strict';
        
    backButton.onclick = function () {
            
        backButton.parentElement.parentElement.parentElement.classList.remove('show')
            
    }
}
    




/*

if (window.innerWidth <= 800 ) {

  window.onscroll = function () {
    
    'use strict';
    
    var cards = document.querySelectorAll('.card'),
        i;
    
    if (window.scrollY > 3750) {
      
      
      
    } else if (window.scrollY > 2500 && window.scrollY < 2920) {
      
      document.getElementById('selector1').classList.add('show')
      
    } else if (window.scrollY > 1200 && window.scrollY < 1500) {
      
      document.getElementById('data1').classList.add('show')
      
    }
    
  }

}
*/

