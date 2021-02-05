import {gettingPageReady} from '../main.js';

import * as part1 from './English/content-one.js';

import * as part2 from './English/content-two.js';

import * as part3 from './English/content-three.js';

//import * as part1ar from './Arabic/content-one-ar.js';

//import * as part2ar from './Arabic/content-two-ar.js';

//import * as part3ar from './Arabic/content-three-ar.js';

let html = document.querySelector('html');

function translateContentTo(language) {
    
  if (language === 'en') {
    
    part1.data();
    part1.concati();
    part1.condition();
    part1.output();
    part1.func();
    part1.loop();
    part1.regular();
    part1.array();
    part1.string();
    part1.date();
    part1.event();
    part1.math();
      
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
      
  } else if (language === 'ar') {
    /*
    part1ar.data();
    part1ar.concati();
    part1ar.condition();
    part1ar.output();
    part1ar.func();
    part1ar.loop();
    part1ar.regular();
    part1ar.array();
    part1ar.string();
    part1ar.date();
    part1ar.event();
    part1ar.math();
    
    //////////////////////////
    
    part2ar.selector();
    part2ar.attribute();
    part2ar.classes();
    part2ar.create();
    part2ar.dfunc();
    part2ar.styling();
    
    //////////////////////////
    
    part3ar.windowSt();
    part3ar.windowNd();
    part3ar.history();
    part3ar.navigation();
    part3ar.screen();
    part3ar.cookie()
    */
    window.alert('hello, Arabic content is not ready yet')
  }
  
}


let header = document.querySelector('header'),
    footer = document.querySelector('footer'),
    container = document.querySelector('.first-container');

const englishVersion = container.innerHTML;


export function translatePageTo(language) {
  
  if (language === 'ar') {
    
    html.setAttribute('lang', 'ar')
    
    
  } else if (language === 'en') {
    
    html.setAttribute('lang', 'en')
    
  }
  
  if (html.getAttribute('lang') === 'ar') {
    
    //translating footer :
  
    document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML.replace("I hope you found this helpful. if you did, don't forget to show some support in order to see more of this content.", 'أتمنى أنك حصلت على الفائدة المنشودة، إن فعلت لا تنسى إظهار الدعم لرؤية المزيد من هذا المحتوى.')
      .replace('This page has been created by me for months of studying, writing content and designing consedering every small detail.', 'استغرق إنشاء هذه الصفحة أشهر من الدراسة، كتابة المحتوى والتصميم بأخذ أصغر التفاصيل بالاعتبار.')
      .replace('released on January/2021 for the mark BlueMoon.', 'أُطلِق لأول مرة في فبراير/٢٠٢١ تحت اسم مشروع BlueMoon.')
      .replace('Contact me', 'إتصل بي')
      .replace('Follow the project', 'تابع المشروع');
    
    
    //translating header :
    
    document.querySelector('header').innerHTML = document.querySelector('header').innerHTML.replace('Who am I ?', 'من أنا ؟')
      .replace('About project', 'حول المشروع')
      .replace('Contact us', 'إتصل بنا')
      .replace('My portfolio', 'معرض أعمالي')
    
    //translating slides :
    
    container.innerHTML = container.innerHTML.replace('My name is Moneer Al-Dakkak.<br> I am 19 years old. <br> from Damascus, Syria. <br> I am a computer engineering student <br> and a front-end web developer. <br> <span>Hope you like my work </span>', 'اسمي منير الدكاك. <br>عمري ١٩ عاماً. <br> انا طالب هندسة حواسيب و مطور ويب. <br><span>آمل أن يعجبك عملي</span>')
        
    container.innerHTML = container.innerHTML.replace('is the first of the BlueMoon series which works on simplifying science and put it in one organized place. <br><span>Note :</span> we are here considering that you have already took a Js course and you wanna see all the informations you studied in one place.<br> If that is not the case I will recommend you (for Arab visitors) the <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAw6p0z0Ek0OjPzeXoqlFlCh">Elzero web school</a> courses. <br>thanks to <a href="https://www.facebook.com/OsElzero">Osama Mohamed</a> for his awesome youtube courses.', 'هي الأولى ضمن سلسلة BlueMoon التي تهدف لتبسيط العلم ووضعه في مكان منظم. <br><span>ملاحظة :</span> نحن هنا نعتبر أنك قد تعلمت هذه الأساسيات و تريد أن تراها في مكان واحد. <br>إن لم يكن هذا ما تبحث عنه فأنا أقترح عليك دروس <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAw6p0z0Ek0OjPzeXoqlFlCh">Elzero web school</a>.<br>شكراً للأستاذ <a href="https://www.facebook.com/OsElzero">Osama Mohamed</a> على دروسه المفيدة و المميزة.')
    
    //translating body :
    
    container.innerHTML = container.innerHTML.replace('JavaScript Basics', 'أساسيات اللغة')
      .replace('The complete Javascript beginner guide', 'دليل المبتدئين في<br> Javascript')
      .replace('More nice content is coming', 'المزيد من المحتوى المميز قادم')
      .replace('guess what the next course will be', 'ماذا تتوقع أن يكون الموضوع التالي ؟');
  
    
    translateContentTo('ar')
    
  } else if (html.getAttribute('lang') === 'en') {
    
    container.innerHTML = englishVersion;
    
    translateContentTo('en');
    
  }
  
  gettingPageReady();

}

translatePageTo(html.getAttribute('lang'))
