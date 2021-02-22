/*document.getElementById('theme-switch').onclick =_=> {
    
    'use strict';
    
    document.body.classList.toggle('dark-mode');
    
    document.querySelector('header button span').classList.toggle('theme-switch');

}

document.querySelectorAll('.slideTitle').forEach(function (title) {
    
    title.onclick = function () {
      
      document.getElementById('slideshow').className = '';
      
      document.getElementById('slideshow').classList.add(this.getAttribute('id'));
      
    } 
    
  });

  document.querySelectorAll('.slide button').forEach((slideBackButton) => {
    
    slideBackButton.onclick =_=> {
    
      document.getElementById('slideshow').className = '';
      
      document.getElementById('slideshow').classList.add('to-slide-1');
    }
});


window.addEventListener('load',_=> {
    document.getElementById('loading').style.zIndex = '-2';
    document.getElementById('loading').style.opacity = '0';
});
*/

function gettingPageReady() {
  
  'use strict';

  // The very cool theme changer :
  
  document.getElementById('theme-switch').onclick =_=> {
    
      'use strict';
      
      document.body.classList.toggle('dark-mode');
      
      document.querySelector('header button span').classList.toggle('theme-switch');
  
  }

  //the slideshow movements :
  
  document.querySelectorAll('.slideTitle').forEach(function (title) {
    
    title.onclick = function () {
      
      document.getElementById('slideshow').className = '';
      
      document.getElementById('slideshow').classList.add(this.getAttribute('id'));
      
    } 
    
  });
  
  //the slideshow back buttons :
  
  document.querySelectorAll('.slide > button').forEach((slideBackButton) => {
    
    slideBackButton.onclick =_=> {
    
      document.getElementById('slideshow').className = '';
      
      document.getElementById('slideshow').classList.add('to-slide-1');
    }
  });

  
  // The loading screen will fade : 
  
  function loading() {
  
    document.getElementById('loading').style.zIndex = '-2';
    document.getElementById('loading').style.opacity = '0';
  
  }
  
  loading();
  
  //translation buttons getting ready :
  
  document.getElementById('lang-en').onclick =_=> { translateBM0To('en');
  };
  
  document.getElementById('lang-ar').onclick =_=> { translateBM0To('ar');
  };
  
}



window.addEventListener('load', gettingPageReady());

window.addEventListener('resize', _=> {
    document.querySelector('header').style.height = 0
})




// Translation & Content part of the script :


let html = document.querySelector('html'),
    header = document.querySelector('header'),
    footer = document.querySelector('footer'),
    container = document.querySelector('main');

const englishVersion = container.innerHTML;


function translateBM0To(language) {
  
  if (language === 'ar') {
    
    html.setAttribute('lang', 'ar');
    window.alert('Hello, Sorry for not translating the content but I really believe that some programming terms may lose their meaning when it is translated to another language. \n مرحباً، أعتذر عن ترجمة المحتوى لأنني أعتقد حقاً أن بعض المصطلحات البرمجية تفقد معناها عند ترجمتها إلى أي لغة أخرى.')
    
  } else if (language === 'en') {
    
    html.setAttribute('lang', 'en')
    
  }
  
  if (html.getAttribute('lang') === 'ar') {
    
    //translating footer :
  
    document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML.replace("I hope you found this helpful. if you did, don't forget to show some support in order to see more of this content.", 'أتمنى أنك حصلت على الفائدة المنشودة، إن فعلت لا تنسى إظهار الدعم لرؤية المزيد من هذا المحتوى.')
      .replace('This project took me months of studying, writing content and designing consedering every small detail.', 'استغرق إنشاء هذا المشروع أشهر من الدراسة، كتابة المحتوى والتصميم بأخذ أصغر التفاصيل بالاعتبار.')
      .replace('released on February/2021 for the mark BlueMoon.', 'أُطلِق لأول مرة في فبراير/٢٠٢١ تحت اسم مشروع BlueMoon.')
      .replace('Contact me', 'إتصل بي');

    //translating articles :
    
    container.innerHTML = container.innerHTML.replace('Welcome to BlueMoon', 'أهلاً بك في BlueMoon')
    .replace('what is BlueMoon ?', 'ما هو BlueMoon ؟')
    .replace('BlueMoon is a collection of computer science simplified explanition. Here you can find the main points in the topic we explain. For example, we started with Front-end web languages so in our first BlueMoon page we have put everything related to JavaScript in one page with a short explanition.Now every time you drop an information in Js you can go there and check it.', 'هو مجموعة من الشروحات المبسطة و المختصرة في علم الحاسوب. هنا يمكنك إيجاد النقاط الأساسية في المواضيع التي نشرحها. على سبيل المثال, بدأنا في شرح لغات تصميم المواقع و بالتالي في صفحة <bdi>BlueMoon</bdi> الأولى قمنا بوضع كل شيء له علاقة بلغة <bdi>Javascropt</bdi> في صفحة واحدة مع شرح قصير. الآن في كل مرة تحتاج معلومة في اللغة يمكنك العودة إليها والتأكد.')
    .replace('Our Team', 'فريقنا')
    .replace("It's only me who does everything here -_-", 'إنه أنا ففط من يقوم بكل شيء هنا -_-')
    .replace('My name is', 'اسمي هو')
    .replace('Moneer Al-Dakkak', 'منير الدكاك')
    .replace('and I am 19 years old. <br> I am from Syria and I study Computer engineering in Damascus university. The reason I created this project for is that I like to simplify and organize what I study, then I decided that I want to share my studing style with people and they eventually liked it ! Hope you like it as well.', 'و عمري 19 عاماً. <br> انا من سوريا و ادرس هندسة الحواسيب في جامعة دمشق. سبب إنشائي هذا المشروع هو أنني أحب تبسيط ما أدرس, ثم قررت أنني أريد مشاركة أسلوبي مع الناس حولي و قد أعجبهم ذلك . آمل أن يعجبكم أيضاً !')
    .replace('Projects by BlueMoon', 'مشاريع بواسطة BlueMoon')
    .replace('<span>BlueMoonJs</span> is the first BlueMoon page which explains JavaScript basics, DOM, BOM and ES6 soon.', '<span>BlueMoonJs</span> هو مشروع <span>BlueMoon</span> الأول الذي يشرح أساسيات <bdi>JavaScript</bdi> بالإضافة إلى <bdi>DOM, BOM</bdi> و <bdi>Es6</bdi> قريباً')
    .replace('<span>&lt;/BlueMoon&gt;</span> is your Html &amp; CSS guide. It contains Every html tag you will use.<br>for now the css section is not ready and will come as soon as possible.', '<span>&lt;/BlueMoon&gt;</span> هو دليل <bdi>Html</bdi> &amp; <bdi>Css</bdi> الخاص بك. إنه يحوي كل عنصر <bdi>html</bdi> ستستخدمه. <br>حالياً قسم لغة <bdi>css</bdi> غير جاهز بعد و سيصبح جاهزاً في أقرب وقت ممكن.')
    .replace(/Check it out/g, 'ألقِ نظرة')
    .replace('We need your Support', 'نحتاج دعمك')
    .replace('if you like what we offer please help us grow by following us on facebook and other social media accounts.', 'إن أعجبك ما نقدمه ساعدنا على تطوير أنفسنا من خلال متابعتنا على الفيسبوك و بقية منصات التواصل.')

    
  } else if (html.getAttribute('lang') === 'en') {
    
    container.innerHTML = englishVersion;
    
  }
  
  gettingPageReady();

}

translateBM0To(html.getAttribute('lang'))