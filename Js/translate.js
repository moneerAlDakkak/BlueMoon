import {gettingPageReady} from '../main.js';

import * as part1 from './English/content1.js';

import * as part2 from './English/content2.js';

import * as part3 from './English/content3.js';

//import * as part1ar from './Arabic/content1Ar.js';

//import * as part2ar from './Arabic/content2Ar.js';

//import * as part3ar from './Arabic/content3Ar.js';

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
