let tab = '&nbsp;&nbsp;&nbsp;';


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
    
      <label>Getting/Setting Elements in Document </label>
      everything listed here is written after the word document :
      <ul>
          <li>
              <code>.getElementById("id")</code>
          </li>
          <li>
              <code>.getElementsByClassName("class")</code>
          </li>
          <li>
            <code>.getElementsByTagName('tag')</code>
          </li>
          <li>
              <code>.querySelector/All('selector')</code>
          </li>
          <li>
            Finding Elements as Objects :
            <ul>
              <li><code>.title</code></li>
              <li><code>.body</code></li>
              <li><code>.images</code></li>
              <li>
                <code>.forms</code>
                <code class="full">
                <em>/* the following code will get the value of the input with name="z1" in the first form */</em>
                
                document.forms[0].z1.value
                </code>
              </li>
              <li><code>.anchors</code> : anchors are the a tags without href attribute</li>
              <li>
                <code>.links</code> : links are the a tags with href attribut
              </li>
              <li>
                <code>myDiv.children</code> : Element children only <br>
              * you can know the number of these Elements with : <code>document.childElementCount</code>
              </li>
              <li>
                <code>myDiv.childNodes</code> : all child Nodes including text and comments
              </li>
            </ul>
          </li>
          <li>
            <code>.firstElementChild</code> / <code>.lastElementChild</code> : Elements only
          </li>
          <li>
            <code>.firstChild</code> / <code>.lastChild</code> : for Nodes
          </li>
          <li>
            <code>.parentElement</code> / <code>.parentNode</code>
          </li>
          <li>
            <code>.nextSibling</code> / <code>.nextElementSibling</code>
            </li>
          <li>
            <code>.spanviousSibling</code> / <code>.spanviousElementSibling</code></li>
      </ul>
      <label>
      getting/setting element content
      </label>
      <ul>
          <li><code>.innerHTML</code> : <br>
              gets/sets the entire content of the Element including children Elements
          </li>
          <li><code>.textContent</code> : <br>
              gets/sets only the text inside the Element
          </li>
      </ul>
      <label>
      Nodes (name and type)
      </label>
      <table>
        <tr>
          <td><code>.nodeName</code></td>
          <td><code>.nodeType</code></td>
        </tr>
        <tr>
          <td>Element</td>
          <td>1</td>
        </tr>
        <tr>
          <td>attribute</td>
          <td>2</td>
        </tr>
        <tr>
          <td>text</td>
          <td>3</td>
        </tr>
        <tr>
          <td>comment</td>
          <td>8</td>
        </tr>
  
      </table>
  
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
  
      document.querySelector('.menu2').appendChild(menuLI);
    document.getElementById('content2').appendChild(mainStructure);
  
  }


  function attribute() {

    let topic = 'attribute',
    title = 'Attributes';
    
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
   
        <label>Getting/Setting Attributes</label>
        <ul>
          <li>
            <code>myElement.attribute.value</code>
          </li>
          <li>
            <code>myElement.getAttribute('attr')</code>
          </li>
          <li>
            <code>myElement.setAttribute('attr', 'value')</code> <br>
            *.setAttribute creates the attribute (attr) if it doesn't exist in the first place.
          </li>
        </ul>
        <label>
          removing/checking attribues
        </label>
        <ul>
          <li>
            <code>myElement.hasAttribute('attr')</code> : to check if the element has the attribute (attr) or not
          </li>
          <li>
            <code>.removeAttribute('attr')</code> : to remove the attribute (attr)
          </li>
        </ul>
          
        `;
        
    
        mainStructure.classList.add('card','card2');
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
    
        document.querySelector('.menu2').appendChild(menuLI);
      document.getElementById('content2').appendChild(mainStructure);
    
    }


function classes() {

  let topic = 'classes',
  title = 'Classlist';
  
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

      <code>myElement.classlist</code> :  a method that gives the classes of the element(myElement) as an Array. <br>
      <label>
      .classlist methods
      </label>
      <ul>
        <li>
          <code>.contains('class1')</code> : to check if the element has the class (class1) or not
        </li>
        <li>
          <code>.length</code> : to check how many classes the Element has
        </li>
        <li>
          <code>.item(n)</code> : to get the class number (n+1) in the classlist (zero based index)
        </li>
        <li>
          <code>.add('class1')</code> : equals to (element.className += class1)
        </li>
        <li><code>.remove('class1')</code></li>
        <li>
          <code>.toggle('class1')</code> : adds and removes the class1
        </li>
      </ul>
      
      `;
      
  
      mainStructure.classList.add('card','card2');
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
  
      document.querySelector('.menu2').appendChild(menuLI);
    document.getElementById('content2').appendChild(mainStructure);
  
  }
  

function create() {

  let topic = 'create',
  title = 'Creating Nodes';
  
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
        Creating Element :
        <code>document.createElement('div')</code>
        </li>
      <li>
        Creating text : 
        <code>document.createTextNode('aText')</code>
      </li>
      <li>
        Creating Comment :
        <code>document.createComment('aComment')</code>
      </li>
      <li> 
      inserting the created Elements :
      <ul>
        <li>
          <code>parentElement.appendChild(childElement)</code>
          </li>
        <li>
          <code>nextElement.insertBefore(createdElement)</code>
        </li>
      </ul>
      </li>
      <li>
        Creating and Setting Attribute :
        <br> <code class="full">
            myAttr = document.createAttribute('<span>attr</span>'); <br>
        myAttr.value = <span>value1</span>; <br>
        myElement.setAttributeNode(<span>myAttr</span>);
        <em>/* you can also use <code>setAttribute()</code> instead */</em>
        </code>
      </li>
    </ul>
      
      `;
      
  
      mainStructure.classList.add('card','card2');
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
  
      document.querySelector('.menu2').appendChild(menuLI);
    document.getElementById('content2').appendChild(mainStructure);
  
  }

function dfunc() {

  let topic = 'dfunc',
  title = 'Dom Functions';
  
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
        <code>.addEventListener('myEvent', myfunction())</code> : to add the event (myEvent) on the selected element.
      </li>
  
      <li>
        <code>.click()</code> : spanforms the click event on the selected element.
      </li>
  
      <li>
        <code>.focus()</code> / <code>.blur()</code> : focuses / blures the selected element.
      </li>
  
      <li>
        <code>.cloneNode(true / false)</code> : to clone the selected element and then use insert before or append child to place it.
      </li>
      <li>
        <code>myMain.contains(myChild)</code> : to check if the element myChild is contained in the element myMain or not.
      </li>
      <li>
        <code>.preventDefault()</code> : to prevent the default action of an Element 
        
        <code class="full">
            <em>/* the following function will disable the contextmenu: */</em>
            
            document.oncontextmenu = function (<span>e</span>) { <br>
            &nbsp; &nbsp;
            e.preventDefault(); <br>
            }
            </code>
        
      </li>
    </ul>
      
      `;
      
  
      mainStructure.classList.add('card','card2');
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
  
      document.querySelector('.menu2').appendChild(menuLI);
    document.getElementById('content2').appendChild(mainStructure);
  
  }

function styling() {

  let topic = 'styling',
  title = 'Styling & Dimensions';
  
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
  
      <label>Styling </label>
    
      myElement.style.property = 'value' ; <br>
  
      <label>
        (client/offset/scroll) Dimensions
      </label>
  
      here is a quick comparison between :
      <ul>
        <li>
          <code>.clientHeight</code> / <code>.clientWidth</code>
        </li>
        <li>
          <code>.scrollHeight</code> / <code>.scrollWidth</code>
        </li>
        <li>
          <code>.offsetHeight</code> / <code>.offsetWidth</code>
        </li>
      </ul>
      <table>
  
        <tr>
          <td></td>
          <td>client</td>
          <td>scroll</td>
          <td>offset</td>
        </tr>
        <tr>
          <td>content</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>scrollable <br> hidden content</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>padding</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>border</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>scroll bar</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>margin</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
        </tr>
      </table>
      
      `;
      
  
      mainStructure.classList.add('card','card2');
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
  
      document.querySelector('.menu2').appendChild(menuLI);
    document.getElementById('content2').appendChild(mainStructure);
  
  }

  

export {
  selector, attribute, classes, create, dfunc, styling
}
