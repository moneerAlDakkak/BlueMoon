function gettingPageReady() {
  
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
      
      header.style.height = 0
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
  
  document.getElementById('lang-en').onclick =_=> { translateBM2To('en');
  };
  
  document.getElementById('lang-ar').onclick =_=> { translateBM2To('ar');
  };
  
}



window.addEventListener('load', gettingPageReady());

window.addEventListener('resize', _=> {
    document.querySelector('header').style.height = 0
})




// Translation & Content part of the script :


import * as part1 from './English/content1.js';

import * as part2 from './English/content2.js';

import * as part3 from './English/content3.js';

let html = document.querySelector('html');

function translateContentTo(language) {
    
  if (language === 'en') {
    part1.structure(); 
    part1.semantic();
    part1.text();
    part1.multimedia();
    part1.form();
    part1.table(); 
    part1.selector();
    /*
    //////////////////////////
      
    part2.selector();
    part2.attribute();
    part2.classes();
    part2.create();
    part2.dfunc();
    part2.styling();
      
    //////////////////////////
      
    part3.window1();
    part3.window2();
    part3.history();
    part3.navigator();
    part3.screen();
    part3.cookie()
      */
  } else if (language === 'ar') {
    /*
    part1ar.dataAr();
    part1ar.concatiAr();
    part1ar.conditionAr();
    part1ar.outputAr();
    part1ar.funcAr();
    part1ar.loopAr();
    part1ar.regularAr();
    part1ar.arrayAr();
    part1ar.stringAr();
    part1ar.dateAr();
    part1ar.eventAr();
    part1ar.mathAr();
    
    //////////////////////////
    
    part2ar.selectorAr();
    part2ar.attributeAr();
    part2ar.classesAr();
    part2ar.createAr();
    part2ar.dfuncAr();
    part2ar.stylingAr();
    
    //////////////////////////
    
    part3ar.window1Ar();
    part3ar.window2Ar();
    part3ar.historyAr();
    part3ar.navigationAr();
    part3ar.screenAr();
    part3ar.cookieAr()
    */
    window.alert('Hello, Sorry for not translating the content but I really believe that some programming terms may lose their meaning when it is translated to another language. \n مرحباً، أعتذر عن ترجمة المحتوى لأنني أعتقد حقاً أن بعض المصطلحات البرمجية تفقد معناها عند ترجمتها إلى أي لغة أخرى.')
  }
  
}


let header = document.querySelector('header'),
    footer = document.querySelector('footer'),
    container = document.querySelector('main');

const englishVersion = container.innerHTML;


export function translateBM2To(language) {
  
  if (language === 'ar') {
    
    html.setAttribute('lang', 'ar')
    
    
  } else if (language === 'en') {
    
    html.setAttribute('lang', 'en')
    
  }
  
  if (html.getAttribute('lang') === 'ar') {
    
    //translating footer :
  
    document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML.replace("I hope you found this helpful. if you did, don't forget to show some support in order to see more of this content.", 'أتمنى أنك حصلت على الفائدة المنشودة، إن فعلت لا تنسى إظهار الدعم لرؤية المزيد من هذا المحتوى.')
      .replace('This project took me months of studying, writing content and designing consedering every small detail.', 'استغرق إنشاء هذا المشروع أشهر من الدراسة، كتابة المحتوى والتصميم بأخذ أصغر التفاصيل بالاعتبار.')
      .replace('released on January/2021 for the mark BlueMoon.', 'أُطلِق لأول مرة في فبراير/٢٠٢١ تحت اسم مشروع BlueMoon.')
      .replace('Contact me', 'إتصل بي')
      .replace('Follow the project', 'تابع المشروع');
    
    
    //translating header :
    
    document.querySelector('header').innerHTML = document.querySelector('header').innerHTML.replace('Who am I ?', 'من أنا ؟')
      .replace('About project', 'حول المشروع')
      .replace('Main page', 'الصفحة الرئيسية')
      .replace('My Portfolio', 'معرض أعمالي')
    
    //translating slides :
    
    container.innerHTML = container.innerHTML.replace('My name is Moneer Al-Dakkak.<br> I am 19 years old. <br> from Damascus, Syria. <br> I am a computer engineering student <br> and a front-end web developer. <br> <span>Hope you like my work </span>', 'اسمي منير الدكاك. <br>عمري ١٩ عاماً. <br> انا طالب هندسة حواسيب و مطور ويب. <br><span>آمل أن يعجبك عملي</span>')
        
    container.innerHTML = container.innerHTML.replace('is one of the <span>BlueMoon</span> series which works on simplifing and organizing computer science topics. <span>&lt;/BlueMoon&gt;</span> is your html guide which you can take a look at when you drop something in html.', 'هي واحدة من سلسلة  <span>BlueMoon</span> التي تعمل على تبسيط و تنظيم مواضيع في علم الحاسوب. <span>&lt;/BlueMoon&gt;</span> هو دليلك في <bdi>html</bdi> .في حال أضعت شيئاً في اللغة يمكنك العودة و إلقاء نظرة ');
    
    //translating body :
    
    container.innerHTML = container.innerHTML.replace('The Ultimate HTML guide', 'دليل Html الشامل')
      .replace('More nice content is coming', 'المزيد من المحتوى المميز قادم')
      .replace('guess what the next course will be', 'ماذا تتوقع أن يكون الموضوع التالي ؟');
  
    
    translateContentTo('ar')
    
  } else if (html.getAttribute('lang') === 'en') {
    
    container.innerHTML = englishVersion;
    
    translateContentTo('en');
    
  }
  
  gettingPageReady();

}

translateBM2To(html.getAttribute('lang'))