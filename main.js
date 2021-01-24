
import * as all from './section-one.js';

all.data();
all.concati();
all.condition();
all.output();
all.func();
all.loop();
all.regular();
all.array();
all.string();
all.date();
all.event();
all.math();


/* exported themeSwitch showCards backButtonFunc coloring*/





// to fit the dark background in the right high

window.onresize = () => { 
 
  document.getElementById('darkBg').style.height = document.body.clientHeight + 'px'; 
   
};







// to hide the loading page :

function loading() {

  'use strict';

  document.getElementById('loading').style.zIndex = '-2';

  document.getElementById('loading').style.opacity = '0';

};


window.onload = loading



// The very cool theme changer :

function themeSwitch() {
    
    'use strict';
    
    document.body.classList.toggle('dark-mode');
    
    document.querySelector('header button span').classList.toggle('theme-switch');

    document.querySelector('#darkBg').style.height = document.body.clientHeight + 'px';

}



// See that drop menu in header ? 

function dropMenu() {
  
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
    
