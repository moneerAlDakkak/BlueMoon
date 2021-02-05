import {translatePageTo} from './Js/translate.js';

export function gettingPageReady() {
  
  'use strict';

  // The very cool theme changer :
  
  document.getElementById('theme-switch').onclick =_=> {
    
      'use strict';
      
      document.body.classList.toggle('dark-mode');
      
      document.querySelector('header button span').classList.toggle('theme-switch');
  
  }
  
  
  
  
  // See that drop menu in header ? 
  
  document.getElementById('drop-button').onclick =_=> {
    
    let header = document.querySelector('header');
    
    document.getElementById('drop-button').classList.toggle('rotate90');
    
    header.classList.toggle('full-height-header');
    
    if(header.classList.contains('full-height-header')){
        
      header.style.height = header.scrollHeight + 'px'
      
    } else {
      
      header.style.height = document.querySelector('.logo').offsetHeight + 70 + 'px';
    }
    
  }
  
  
  
  
  //the slideshow movements :
  
  document.querySelectorAll('.slideTitle').forEach(function (title) {
    
    title.onclick = function () {
      
      document.getElementById('slideshow').className = '';
      
      document.getElementById('slideshow').classList.add(this.getAttribute('id'));
      
    } 
    
  });
  
  //the slideshow back buttons :
  
  document.querySelectorAll('.slide button').forEach((slideBackButton) => {
    
    slideBackButton.onclick =_=> {
    
      document.getElementById('slideshow').className = '';
      
      document.getElementById('slideshow').classList.add('to-slide-1');
    }
  });



  // All functions that will be performed on window's load :

  let backs = document.querySelectorAll('.back-button'),
  
  cardTitles = document.querySelectorAll('aside ul li'),
  
    cards = document.querySelectorAll('.card'),
    
    i;
    
  // back buttons need this to function : 
   
  backs.forEach(backFunction);
      
  function backFunction(backButton) {
          
      backButton.onclick = function () {
              
          this.parentElement.parentElement.parentElement.classList.remove('show')
              
      }
    
  }
  
  // Cards showing on titles pressing :
  
  cardTitles.forEach(showCards);
  
  function showCards(cardTitle) {
    
    cardTitle.onclick = function() {
  
      for (i = 0; i < cards.length; i = i + 1) {
  
        cards[i].classList.remove('show')
  
      }
  
      document.getElementById(this.getAttribute('data-topic')).classList.toggle('show');
  
    }
  
  }
  
  // The loading screen will fade : 
  
  function loading() {
  
    document.getElementById('loading').style.zIndex = '-2';
    document.getElementById('loading').style.opacity = '0';
  
  }
  
  loading();
  
  //translation buttons getting ready :
  
  document.getElementById('lang-en').onclick =_=> { translatePageTo('en');
  };
  
  document.getElementById('lang-ar').onclick =_=> { translatePageTo('ar');
  };
  
}



window.addEventListener('load', gettingPageReady());




