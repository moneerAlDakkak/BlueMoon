let tab = '&nbsp;&nbsp;&nbsp;';

function structure() {

    let topic = 'structure',
    title = 'Html Basic Structure';
    
    // Setting up the menu item :
    let menuLI = document.createElement('li');
    menuLI.setAttribute('data-topic', topic);
    menuLI.setAttribute('id', `T-${topic}`);
    menuLI.textContent = title;
    
    // Setting up the card :
    let mainStructure = document.createElement('div');
    mainStructure.classList.add('card','card1');
    mainStructure.setAttribute('id', topic);
     
        let content = `
        <ol>
        <li>
            <label>Basic Structure</label>
            <code class="full">
                &lt;!DOCTYPE html&gt; <br>
                &lt;html&gt; <br>
                ${tab} &lt;head&gt;
                ${tab}<em>&lt;!-- head tags goes here --&gt;</em>
                ${tab}${tab} &lt;link rel="stylesheet" href="style.css"/&gt; <br>
                ${tab} &lt;/head&gt; <br>
                ${tab} &lt;body&gt;
                ${tab}<em>&lt;!-- body elements goes here --&gt; </em>
                ${tab}${tab} &lt;script src="main.js"&gt;&lt;script&gt; <br>
                ${tab} &lt;/body&gt; <br>
                &lt;/html&gt; <br>
            </code>
        </li>
        <li>
            Every page should start with the tag <code>&lt;!DOCTYPE&gt;</code> which defines the language or the version your page is written in . In html5 we write <code>&lt;!DOCTYPE html&gt;</code>
        </li>
        <li>
            <label>Page head</label>
            The <code>&lt;head&gt;</code> tag contains some tags that we can say the page settings. The most used head tags are :
            <ul>
                <li>
                    <code>&lt;title&gt;</code> : contains the title that appears when your page is open in the browser
                </li>
                <li>
                    <code>&lt;link&gt;</code> : to link a new file to your project. It has two attributes :
                    <ul>
                        <li>
                            <code>rel</code> : defines the relation between the html file and the new one. here is some of its values : 
                            <ul>
                                <li>
                                    stylesheet : for css files and the font files.
                                </li>
                                <li>
                                    icon : for the icon of the page that appears besides the page title.
                                </li>
                                <li>
                                    preconnect : you can see this in google fonts links for example.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <code>href</code> : to enter the path that the file will load from.
                        </li>
                    </ul>
                </li>
                <li>
                    <code>&lt;script&gt;</code> : can be written in the head to load the script before the body of the page or in the bottom of the body (before the closing tag) to load the script after the body and you can use it to load the script or to write inside the tag itself. It has some attributes you can read about, and it has the attribute :
                    <ul>
                        <li>
                            <code>src</code> : to enter the path that the file will load from.
                        </li>
                    </ul>
                </li>
                <li>
                    <code>&lt;style&gt;</code> : to style your page using css without an external file
                </li>
                <li>
                    <label>Meta tags</label>
                    We mention some of them which are the most used 
                    <ul>
                        <li>
                            <code>&lt;meta charset="UTF-8"/&gt;</code>
                        </li>
                        <li>
                            <code>&lt;meta name="viewport" content="width=device-width initial-scale=1"/&gt;</code> : plays a big role in the responsive design
                        </li>
                        <li>
                            <code>
                                &lt;meta name="description" content="our page description in search engines"/&gt;
                            </code>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>
    Congratulations! now you are able to create your first page. 
        `;
        
    
        mainStructure.classList.add('card','card1');
        mainStructure.setAttribute('id', topic);
    
        mainStructure.innerHTML = `
        <article class="card-ltr">
          <div class="h2titles">
              <button class="back-button">&lt;</button>
              <h2>${title}</h2>
          </div> 
          ${content}
        </article>
        `;
    
        document.querySelector('.menu1').appendChild(menuLI);
      document.getElementById('content1').appendChild(mainStructure);
    
}

function semantic() {

    let topic = 'semantic',
    title = 'Semantic Elements';
    
    // Setting up the menu item :
    let menuLI = document.createElement('li');
    menuLI.setAttribute('data-topic', topic);
    menuLI.setAttribute('id', `T-${topic}`);
    menuLI.textContent = title;
    
    // Setting up the card :
    let mainStructure = document.createElement('div');
    mainStructure.classList.add('card','card1');
    mainStructure.setAttribute('id', topic);
     
        let content = `
         
        Semantically html coding is to use the element in its right place which will help your code being organized and help your site with SEO.
        <ol>
            <li>
                <label>Semantic Elements</label>
                <ul>
                    <li><code>&lt;header&gt;</code></li>
                    <li><code>&lt;nav&gt;</code></li>
                    <li><code>&lt;main&gt;</code></li>
                    <li><code>&lt;footer&gt;</code></li>
                    <li><code>&lt;article&gt;</code></li>
                    <li><code>&lt;aside&gt;</code></li>
                    <li><code>&lt;section&gt;</code></li>
                    <li><code>&lt;dialog&gt;</code></li>
                    <li><code>&lt;hgroup&gt;</code> : a container for headings and sub-headings</li>
                    <li><code>&lt;figure&gt;</code> : a container for an img and a <code>&lt;figcaption&gt;</code></li>
                    <li><code>&lt;figcaption&gt;</code></li>
                    <li><code>&lt;details&gt;</code></li>
                    <li><code>&lt;summary&gt;</code> : the title of the <code>&lt;details&gt;</code> element</li>
                </ul>
            </li>
        </ol>
        <img src="../images/semantics.jpg"/>
    
        `;
        
    
        mainStructure.classList.add('card','card1');
        mainStructure.setAttribute('id', topic);
    
        mainStructure.innerHTML = `
        <article class="card-ltr">
          <div class="h2titles">
              <button class="back-button">&lt;</button>
              <h2>${title}</h2>
          </div> 
          ${content}
        </article>
        `;
    
        document.querySelector('.menu1').appendChild(menuLI);
      document.getElementById('content1').appendChild(mainStructure);
    
}

function form() {

    let topic = 'form',
    title = 'Form Elements';
    
    // Setting up the menu item :
    let menuLI = document.createElement('li');
    menuLI.setAttribute('data-topic', topic);
    menuLI.setAttribute('id', `T-${topic}`);
    menuLI.textContent = title;
    
    // Setting up the card :
    let mainStructure = document.createElement('div');
    mainStructure.classList.add('card','card1');
    mainStructure.setAttribute('id', topic);
     
        let content = `
     
        <label>form elements</label>
        <ul>
            <li>
                The inputs : <br>
                All the following are the <code>&lt;input&gt;</code> element with different <code>type</code> attribute.
                <ul>
                    <li><code>type="text"</code> : for text input</li> 
                    <li><code>type="number"</code> : for number input only</li>
                    <li><code>type="password"</code> : displays the input as stars</li>
                    <li><code>type="file"</code> : to allow the user to upload a file</li>
                    <li><code>type="color"</code> : to input a color from the  color plate</li>
                    <li><code>type="search"</code></li>
                    <li><code>type="radio"</code> : </li>
                    <li><code>type="checkbox"</code> :</li>
                    <li><code>type="button"</code></li>
                    <li><code>type="range"</code></li>
                    <li><code>type="image"</code></li>
                    <li><code>type="url"</code></li>
                    <li><code>type="hidden"</code></li>
                </ul>
            </li>
            <li>
                <code>&lt;textarea&gt;</code> : a resizable by default text input. you can set it to be uneditable with the attribute <code>readonly</code>.
            </li>
            <li><code>&lt;button&gt;</code> : same as <code>&lt;input type="button"&gt;</code></li>
            <li><code>&lt;fieldset&gt;</code> : a frame around the the form</li>
            <li><code>&lt;legend&gt;</code> : the title of the <code>&lt;fieldset&gt;</code></li>
            <li><code>&lt;fieldset&gt;</code></li>
            <li><code>&lt;label&gt;</code> : a label for the element with its id written in label <code>for</code> attribute.</li>
            <li>
                Select menus : there are 3 main elements in select menus
                <ul>
                    <li>
                        <code>&lt;select&gt;</code>
                        <ul>
                            <li><code>name</code></li>
                            <li><code>multiple</code> : defines if the user is allowed to chose more than one option or not</li>
                            <li><code>size</code></li>
                            <li><code>disabled</code></li>
                        </ul>
                    </li>
                    <li>
                        <code>&lt;option&gt;</code>
                        <ul>
                            <li>
                                <code>label</code> : is a short text that represents the option in the select menu .
                            </li>
                            <li><code>value</code></li>
                            <li><code>selected</code></li>
                            <li><code>disabled</code></li>
                        </ul>
                    </li>
                    <li>
                        <code>&lt;optgroup&gt;</code> : to organize options in groups
                        <ul>
                            <li><code>label</code></li>
                            <li><code>selected</code></li>
                            <li><code>disabled</code></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
            
        `;
        
    
        mainStructure.classList.add('card','card1');
        mainStructure.setAttribute('id', topic);
    
        mainStructure.innerHTML = `
        <article class="card-ltr">
          <div class="h2titles">
              <button class="back-button">&lt;</button>
              <h2>${title}</h2>
          </div> 
          ${content}
        </article>
        `;
    
        document.querySelector('.menu1').appendChild(menuLI);
      document.getElementById('content1').appendChild(mainStructure);
    
}

function text() {

    let topic = 'text',
    title = 'Text formatting';
    
    // Setting up the menu item :
    let menuLI = document.createElement('li');
    menuLI.setAttribute('data-topic', topic);
    menuLI.setAttribute('id', `T-${topic}`);
    menuLI.textContent = title;
    
    // Setting up the card :
    let mainStructure = document.createElement('div');
    mainStructure.classList.add('card','card1');
    mainStructure.setAttribute('id', topic);
     
        let content = `
     
        <ul>
        <li>
            <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> : different sizes headings . The bigger of them which is the h1 should be used only one time in a single page
        </li>
        <li>
            <code>&lt;span&gt;</code>: used to style or seperate a part of text without selecting / styling the whole text
        </li>
        <li>
            <code>&lt;p&gt;</code> : paragraph
        </li>
        <li>
            <code>&lt;strong&gt;</code> / <code>&lt;b&gt;</code> : for a bold text <b>test</b>
        </li>
        <li>
            <code>&lt;em&gt;</code> / <code>&lt;i&gt;</code> for an italic text : <i>test</i>
        </li>
        <li>
            <code>&lt;small&gt;</code> : <small>test</small>
        </li>
        <li>
            <code>&lt;pre&gt;</code> : preformatted text, represents the text in the html page exactly how it is written inside of it
        </li>
        <li>
            <code>&lt;sub&gt;</code> : (subscript)<sub>test</sub>
        </li>
        <li>
            <code>&lt;sup&gt;</code> : (superscript)<sup>test</sup>
        </li>
        <li>
            <code>&lt;strike&gt;</code> / <code>&lt;del&gt;</code> : <del>test</del>
        </li>
        <li>
            <code>&lt;mark&gt;</code> : <mark>test</mark>
        </li>
        <li>
            <code>&lt;u&gt;</code> / <code>&lt;ins&gt;</code> : underlined text : <u>test</u>
        </li>
        <li>
            <code>&lt;q&gt;</code> : quote : <q>test</q>
        </li>
        <li>
            <code>&lt;blockquote&gt;</code> : same as <code>&lt;q&gt;</code> but the display property for it is <code>block</code>
        </li>
        <li>
            <code>&lt;abbr&gt;</code> : the text inside it becomes an abbrevation of the text in the <code>title</code> attribute . try hovering on <abb title="cool text here isn't it ?">test</abb>
        </li>
        <li>
        <code>&lt;wbr&gt;</code> : you put this tag inside a long one word to tell the browser it can break that long word from this place not somewhere else.
        </li>
        <li>
            <code>&lt;bdi&gt;</code> : use this tag when you are writing in two languages and each has a different direction. put the the word that has a different direction inside a <code>&lt;bdi&gt;</code>.
        </li>
        <li>
            <code>&lt;code&gt;</code> : used to write codes inside of it, it gives you a code font by default and you can customize it further more with css like all elements.
        </li>
        <li>
            <code>&lt;a&gt;</code> : to add links to your page. Its attributes :
            <ul>
                <li><code>href</code> : which we write an external or an internal link inside of it</li>
                <li>
                <code>target</code> : which defines where the link will be open
                    <ul>
                        <li>
                            _blank : in a new window
                        </li>
                        <li>
                            _self : in the same window
                        </li>
                        <li>
                            _parent : in the the parent frame
                        </li>
                        <li>
                            _top : in the full body of the window
                        </li>
                        <li>
                            framename : in the iframe element which has the name framename
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    
        `;
        
    
        mainStructure.classList.add('card','card1');
        mainStructure.setAttribute('id', topic);
    
        mainStructure.innerHTML = `
        <article class="card-ltr">
          <div class="h2titles">
              <button class="back-button">&lt;</button>
              <h2>${title}</h2>
          </div> 
          ${content}
        </article>
        `;
    
        document.querySelector('.menu1').appendChild(menuLI);
      document.getElementById('content1').appendChild(mainStructure);
    
}

function table() {

    let topic = 'table',
    title = 'Tables and Lists';
    
    // Setting up the menu item :
    let menuLI = document.createElement('li');
    menuLI.setAttribute('data-topic', topic);
    menuLI.setAttribute('id', `T-${topic}`);
    menuLI.textContent = title;
    
    // Setting up the card :
    let mainStructure = document.createElement('div');
    mainStructure.classList.add('card','card1');
    mainStructure.setAttribute('id', topic);
     
        let content = `
        <ol>
        <li>
            <label>Tables</label>
            <code>&lt;table&gt;</code> elements are :
            <ul>
                <li><code>&lt;thead&gt;</code> : the table head which is in the first rows</li>
                <li><code>&lt;tbody&gt;</code>: the table body is the rows in the middle</li>
                <li><code>&lt;tfoot&gt;</code> the table foot is the rows in the end of the table</li>
                <li><code>&lt;tr&gt;</code> : table row (contains the table cells)</li>
                <li><code>&lt;th&gt;</code> : same as <code>&lt;tr&gt;</code> but it's is used in the table head</li>
                <li><code>&lt;td&gt;</code> : the cells in the table</li>
            </ul> 
            <code>&lt;table&gt;</code> Attributes :
            <ul>
                <li><code>rowspan</code> : sets the number of rows the cell should span to</li>
                <li><code>colspan</code> : sets the number of columns the cell should span to</li>
            </ul>
            <code>&lt;table&gt;</code> structure :
            <code class="full">
                &lt;table&gt; <br>
                ${tab}&lt;thead&gt; <br>
                ${tab}${tab}&lt;tr&gt; <br>
                ${tab}${tab}${tab}&lt;td&gt; <br>
                ${tab}${tab}${tab}&lt;/td&gt; <br>
                ${tab}${tab}${tab}&lt;td&gt; <br>
                ${tab}${tab}${tab}&lt;/td&gt; <br>
                ${tab}${tab}&lt;/tr&gt; <br>
                ${tab}&lt;/thead&gt; <br>
                ${tab}&lt;tbody&gt; <br>
                ${tab}${tab}&lt;tr&gt; <br>
                ${tab}${tab}${tab}&lt;td&gt; <br>
                ${tab}${tab}${tab}&lt;/td&gt; <br>
                ${tab}${tab}${tab}&lt;td&gt; <br>
                ${tab}${tab}${tab}&lt;/td&gt; <br>
                ${tab}${tab}&lt;/tr&gt; <br>
                ${tab}&lt;/tbody&gt; <br>
                ${tab}&lt;tfoot&gt; <br>
                ${tab}${tab}&lt;tr&gt; <br>
                ${tab}${tab}${tab}&lt;td&gt; <br>
                ${tab}${tab}${tab}&lt;/td&gt; <br>
                ${tab}${tab}${tab}&lt;td&gt; <br>
                ${tab}${tab}${tab}&lt;/td&gt; <br>
                ${tab}${tab}&lt;/tr&gt; <br>
                ${tab}&lt;/tfoot&gt; <br>
                &lt;/table&gt;
            </code>
        </li>
        <li>
            <label>Lists</label>
            <ul>
                <li><code>&lt;ul&gt;</code> : unorderd lists</li>
                <li><code>&lt;ol&gt;</code> : ordered lists</li>
                <li><code>&lt;dl&gt;</code></li>
                <li>every list of these contains a number of <code>&lt;li&gt;</code> elements (list items)</li>
            </ul>
        </li>
    </ol>
    
    
        `;
        
    
        mainStructure.classList.add('card','card1');
        mainStructure.setAttribute('id', topic);
    
        mainStructure.innerHTML = `
        <article class="card-ltr">
          <div class="h2titles">
              <button class="back-button">&lt;</button>
              <h2>${title}</h2>
          </div> 
          ${content}
        </article>
        `;
    
        document.querySelector('.menu1').appendChild(menuLI);
      document.getElementById('content1').appendChild(mainStructure);
    
}

function multimedia() {

    let topic = 'multimedia',
        title = 'Multimedia';

    // Setting up the menu item :
    let menuLI = document.createElement('li');
    menuLI.setAttribute('data-topic', topic);
    menuLI.setAttribute('id', `T-${topic}`);
    menuLI.textContent = title;

    // Setting up the card :
    let mainStructure = document.createElement('div');
    mainStructure.classList.add('card', 'card1');
    mainStructure.setAttribute('id', topic);

    let content = `
    <ol>
        <li>
            <label>&lt;img&gt;</label>
            the <code>&lt;img&gt;</code> tag attributes :
            <ul>
                <li>
                    <code>src</code> : to select the path of the image
                </li>
                <li><code>title</code></li>
                <li>
                    <code>alt</code> : an alternative text of the image that appears when the image fails for some reason.
                </li>
                <li>
                    <code>loading</code> : 
                    <ul>
                        <li>
                            eager : loads the image immediately
                        </li>
                        <li>
                            lazy : loads the image only when you scroll near it
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <label>&lt;video&gt;&lt;/video&gt;</label>
            the video tag contains :
            <ul>
                <li>
                    <code>autoplay</code> / <code>controls</code> : Attributes to choose how the video is played
                </li>
                <li>
                    <code>muted</code>
                </li>
                <li>
                    <code>loop</code>
                </li>
                <li>
                    <code>&lt;source&gt;</code>
                    the source tag in the video tag contains the attributes :
                    <ul>
                        <li>
                            <code>src</code> : to select the path of the video
                        </li>
                        <li>
                            <code>type</code> : to define the type of the video. For example <code>type="video/mp4"</code>
                        </li>
                    </ul>
                </li>
            </ul>
            
        </li>
        <li>
            <label>&lt;audio&gt;&lt;/audio&gt;</label>
            the audio tag contains :
            <ul>
                <li>
                    <code>autoplay</code> / <code>controls</code> : Attributes to choose how the audio is played
                </li>
                <li>
                    <code>muted</code>
                </li>
                <li>
                    <code>loop</code>
                </li>
                <li>
                    <code>&lt;source&gt;</code>
                    the source tag in the audio tag contains the attributes :
                    <ul>
                        <li>
                            <code>src</code> : to select the path of the audio file
                        </li>
                        <li>
                            <code>type</code> : to define the type of the audio. For example <code>type="audio/mp3"</code>
                        </li>
                    </ul>
                </li>
            </ul>
            
        </li>
        <li>
            <label>&lt;iframe&gt;</label>
            this tag allows to include a web page inside your current page. its attributes :
            <ul>
                <li>loading : same as the <code>&lt;img&gt;</code> tag</li>
                <li>name</li>
                <li>src</li>
            </ul>
        </li>
    </ol>
        `;


    mainStructure.classList.add('card', 'card1');
    mainStructure.setAttribute('id', topic);

    mainStructure.innerHTML = `
        <article class="card-ltr">
          <div class="h2titles">
              <button class="back-button">&lt;</button>
              <h2>${title}</h2>
          </div> 
          ${content}
        </article>
        `;

    document.querySelector('.menu1').appendChild(menuLI);
    document.getElementById('content1').appendChild(mainStructure);

}


function selector() {

    let topic = 'selector',
    title = 'Selectors';
    
    // Setting up the menu item :
    let menuLI = document.createElement('li');
    menuLI.setAttribute('data-topic', topic);
    menuLI.setAttribute('id', `T-${topic}`);
    menuLI.textContent = title;
    
    // Setting up the card :
    let mainStructure = document.createElement('div');
    mainStructure.classList.add('card','card1');
    mainStructure.setAttribute('id', topic);
     
        let content = `
        Selectors are used to get the html elements with JavaScript and style them with Css.
            <ol>
                <li>
                    <label>id vs class comparison</label>
                    <ul>
                        <li>
                            use the id selector for unique elements. Which means that you can't use one id for more than one element.
                        </li>
                        <li>
                            use the class selector for non-unique elements. Unlike the id selector, we can give the same class for more than one element.
                        </li>
                    </ul>
                </li>
                <li>
                    <label>data Attributes</label>
                    <code class="full">&lt;div data-something="123"&gt;&lt;/div&gt;</code>
                    what we write after <code>data-</code> is optional and the value is optional too. <br>
                    data attributes are used to store some value in an element to use it in a certain way with that element. <br>
                    here is a simple concept on the use of it :
                    <code class="full">
                        &lt;div data-test="hi"&gt;&lt;/div&gt; <br>
                        &lt;script&gt; <br>
                        ${tab} console.log(document.querySelector('div').getAttribute('data-test'))
                        <em>// that will print 'hi' in console</em>
                        &lt;/script&gt;
                    </code>
                </li>
            </ol>
        `;
        
    
        mainStructure.classList.add('card','card1');
        mainStructure.setAttribute('id', topic);
    
        mainStructure.innerHTML = `
        <article class="card-ltr">
          <div class="h2titles">
              <button class="back-button">&lt;</button>
              <h2>${title}</h2>
          </div> 
          ${content}
        </article>
        `;
    
        document.querySelector('.menu1').appendChild(menuLI);
      document.getElementById('content1').appendChild(mainStructure);
    
}




export {
    structure, semantic, form, text, table, selector, multimedia
}


/*


Now this the steps to write new content : 

1-- Add the title and the card in the html consedering:
      -- title id must be (T-) + topic
      -- title includes data-topic="topic"

2-- use this function and write content in it (conseder that the function name must be the same as topic )

function topic() {


 topic = '';
 
 let title = document.getElementById('T-' + topic).textContent,
 
    

    content = ``,
    
    mainStructure = `

        <article class="card-ltr">
            <div class="h2titles">
                <button class="back-button">&lt;</button>
                <h2>${title}</h2>
            </div> 
       
            ${content}
       
        </article>

    `;

document.getElementById(topic).innerHTML = mainStructure

}

so in the end you have :

card id = content function name = data-topic in the title = topic 


*/
