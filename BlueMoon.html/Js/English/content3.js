/*

<div class="card card3 window_st" id="window_st1">
                    <article class="card-ltr">
    
                      <div class="h2titles">
    
                        <button class="back-button">&lt;</button>
    
                        <h2>
                          window (Alerts/Scrolls/Timing)
                        </h2>
    
                      </div>
    
                        window is the default object in Js which means that you don't have to write it when using window methods. 
                        <ol>
                          <li>
                            <label>
                              Page Alerts
                            </label>
                            <ul>
                              <li><code>alert('')</code></li>
                              <li>
                                <code>confirm('')</code> : returns boolean value
                                </li>
                              <li>
                                <code>prompt('', 'default text')</code> : returns a string that contains what is written in prompt text field
                                </li>
                            </ul>
                          </li>
                          <li>
                            <label>
                              Timing methods
                            </label>
        
                            <ul>
                              <li>
                                <code>setTimeout(myFunction, time)</code> : waits the time (in ms) before performing the function (myFunction)
                              </li>
                              <li>
                                <code>clearTimeout(mySet)</code> : to cancel a Timeout and the function it performs (after storing setTimeout in a variable)
                              </li>
                              <li>
                                <code>setInterval(myFunction, time)</code> : 
                                repeats the function every time the chosen time (in ms) ends
                              </li>
                              <li>
                                <code>clearInterval(mySet)</code> : to stop an Interval   and stop repeating the function it performs (after storing setInterval in a variable)
                                </li>
                            </ul>
                          </li>
                          <li>
                            <label>
                              Scrolls
                            </label>
                           <ul>
                             <li>
                               <code>scrollBy(x,y)</code>
                               * x and y can take negative values here to start slicing from the end of the string
                             </li>
                             <li>
                               <code>scrollTo(x,y)</code>
                             </li>
                             <li>
                               <code>scrollX</code> / <code>pageXOffset</code> : gets you the scroll amount on X
                             </li>
                             <li>
                               <code>scrollY</code> / <code>pageYOffset</code> : gets you the scroll amount on Y
                             </li>
        
                             <li>
                              here is a quick comparison between
                               <code>innerWidth</code> / <code>innerHeight</code> and <code>outerWidth</code> / <code>outerHeight</code>
                               </li>
                           </ul>
                          </li>
                          <li>
                            <label>
                              Dimensions
                            </label>
         
                                innerWidth/inner Height and outerWidth/outerHeight
                                here is a comparison between them : <br>
         
                                <img src="images/windowDim.jpg" alt="comparison"/>
                          </li>
                        </ol>
                    </article>
                </div>
    
                <div class="card card3 window_nd" id="window_nd1">
                    <article class="card-ltr">
    
                        <div class="h2titles">
                          <button class="back-button">&lt;</button>
    
                          <h2>
                            window (Links and Sub-windows)
                          </h2>
    
                        </div>
    
                        <ol>
                          <li>
                            <label>
                                .open
                            </label>
                            opens a new window .<br>
                            Syntax : <code>window.open("url", "name/attribute", "specs", "history replace")</code>
                            <ul>
                              <li>url</li>
                              <li>
                                name : to refer to the opened window
                              </li>
                              <li>
                                attribute : <code>_blank</code> , <code>_self</code>, etc...
                              </li>
                              <li>
                                specs : width, height, left/right/top/down, menubar(yes/no), status(yes/no) <br>
                              </li>
                              <li>
                                history replace: true or false inside the quotes. <br>
                                Example :
                                <code class="full">
                                    window.open('<span>https://www.google.com', '_blank</span>', '<span>width=500</span>,<span>menubar=yes</span>', '<span>true</span>')
                                </code>
                              </li>
                            </ul>    
                          </li>
                          <li>
                            <label>.location</label>
                            <ul>
                              <li>
                                <code>.href</code> : gets/sets the entire page link
                              </li>
                              <li>
                                <code>.host</code> : gets/sets the page host only
                              </li>
                              <li>
                                <code>.hash</code> : gets/sets the hashtag in the link
                              </li>
                              <li>
                                <code>.protocol</code> : gets/sets the protocol of the page
                              </li>
                              <li>
                                <code>.hostname</code>
                              </li>
                              <li>
                                <code>.pathname</code> : gets/sets the path of the page inside the website
                              </li>
                              <li>
                                <code>.search</code>
                                <code class="full">
                                    <em>/* This code will give the full link of the page you are in : *</em>
                                    console.log(<span>location.hostname</span> + <span>location.pathname</span> + <span>location.search</span>)
                                </code>
                              </li>
                              
                              <li>
                                <code>.replace('link1')</code> : takes the user to the page with the link1 and replaces the previous page in history
                              </li>
                              <li>
                                <code>.assign('link1')</code> : takes the user to the page with the link1 and doesn't replace the previous page in history
                              </li>
                              <li>
                                <code>.reload(true / false)</code> : reloads the page from server(true) or from cache(false)
                              </li>
                            </ul>
                          </li>
                        </ol>
                    </article>
                </div>
    
                <div class="card card3 history" id="history1">
                    <article class="card-ltr">
    
                      <div class="h2titles">
                        <button class="back-button">&lt;</button>
    
                        <h2>
                          history
                        </h2>
                      </div>
    
                      
    
                    </article>
                </div>


*/

let topic,
    tab = '&nbsp;&nbsp;&nbsp;';


function window1() {


  topic = 'window1';
  
  let title = document.getElementById('T-' + topic).textContent,

    

    content = `
    
      window is the default object in Js which means that you don't have to write it when using window methods. 
        <ol>
          <li>
            <label>
              Page Alerts
            </label>
            <ul>
              <li><code>alert('')</code></li>
              <li>
                <code>confirm('')</code> : returns boolean value
              </li>
              <li>
                <code>prompt('', 'default text')</code> : returns a string that contains what is written in prompt text field
              </li>
            </ul>
          </li>
          <li>
            <label>Timing methods</label>
            <ul>
              <li>
                <code>setTimeout(myFunction, time)</code> : waits the time (in ms) before performing the function (myFunction)
              </li>
              <li>
                <code>clearTimeout(mySet)</code> : to cancel a Timeout and the function it performs (after storing setTimeout in a variable)
              </li>
              <li>
                <code>setInterval(myFunction, time)</code> : repeats the function every time the chosen time (in ms) ends
              </li>
              <li>
                <code>clearInterval(mySet)</code> : to stop an Interval   and stop repeating the function it performs (after storing setInterval in a variable)
              </li>
            </ul>
          </li>
          <li>
            <label>Scrolls</label>
            <ul>
              <li>
                <code>scrollBy(x,y)</code> <br>
                * x and y can take negative values here to start slicing from the end of the string
              </li>
              <li>
                <code>scrollTo(x,y)</code>
              </li>
              <li>
                <code>scrollX</code> / <code>pageXOffset</code> : gets you the scroll amount on X
              </li>
              <li>
                <code>scrollY</code> / <code>pageYOffset</code> : gets you the scroll amount on Y
              </li>
              <li>
                here is a quick comparison between
                <code>innerWidth</code> / <code>innerHeight</code> and <code>outerWidth</code> / <code>outerHeight</code>
              </li>
            </ul>
          </li>
          <li>
            <label>Dimensions</label>
            innerWidth/innerHeight and outerWidth/outerHeight <br>
            here is a comparison between them : <br>
            <img src="images/windowDim.jpg" alt="comparison"/>
          </li>
        </ol>
    
    `,

    mainStructure = document.createElement('div');
    mainStructure.classList.add('card card3');
    mainStructure.setAttribute('id', topic);

    mainStructure.innerHTML = `
    <article class="card-ltr">
      <div class="h2titles">
          <button class="back-button">&lt;</button>
          <h2>${title}</h2>
      </div> 
      ${content}
    </article>
    `

  document.getElementById('content3').appendChild(mainStructure);

}

function window2() {


  topic = 'window2';
  
  let title = document.getElementById('T-' + topic).textContent,

    

    content = `
    
      <ol>
        <li>
          <label>.open</label>
          opens a new window .<br>
          Syntax : <code>window.open("url", "name/attribute", "specs", "history replace")</code>
          <ul>
            <li>url</li>
            <li>
              name : to refer to the opened window
            </li>
            <li>
              attribute : <code>_blank</code> , <code>_self</code>, etc...
            </li>
            <li>
              specs : width, height, left/right/top/down, menubar(yes/no), status(yes/no) <br>
            </li>
            <li>
              history replace: true or false inside the quotes. <br>
              Example :
              <code class="full">
                window.open('<span>https://www.google.com', '_blank</span>', '<span>width=500</span>,<span>menubar=yes</span>', '<span>true</span>')
              </code>
            </li>
          </ul>    
        </li>
        <li>
          <label>.location</label>
          <ul>
            <li>
              <code>.href</code> : gets/sets the entire page link
            </li>
            <li>
              <code>.host</code> : gets/sets the page host only
            </li>
            <li>
              <code>.hash</code> : gets/sets the hashtag in the link
            </li>
            <li>
              <code>.protocol</code> : gets/sets the protocol of the page
            </li>
            <li>
              <code>.hostname</code>
            </li>
            <li>
              <code>.pathname</code> : gets/sets the path of the page inside the website
            </li>
            <li>
              <code>.search</code>
              <code class="full">
                <em>/* This code will give the full link of the page you are in : */</em>
                console.log(<span>location.hostname</span> + <span>location.pathname</span> + <span>location.search</span>)
              </code>
            </li>
            <li>
              <code>.replace('link1')</code> : takes the user to the page with the link1 and replaces the previous page in history
            </li>
            <li>
              <code>.assign('link1')</code> : takes the user to the page with the link1 and doesn't replace the previous page in history
            </li>
            <li>
              <code>.reload(true / false)</code> : reloads the page from server(true) or from cache(false)
            </li>
          </ul>
        </li>
      </ol>
    
    `,

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

function history() {


  topic = 'history';
  
  let title = document.getElementById('T-' + topic).textContent,

    

    content = `
    
      <ul>
        <li>
          <code>.back()</code> : takes thee user to the vious page in history
        </li>
        <li>
          <code>.forward()</code> :  takes thee user to the next page in history
        </li>
        <li>
          <code>.go(n)</code> : takes the user n pages forward (n &gt; 0) or backwards(n &lt; 0)
        </li>
      </ul>
    
    `,

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

function screen() {


  topic = 'screen';
  
  let title = document.getElementById('T-' + topic).textContent,

    

    content = `
    
      <ul>
        <li><code>.width</code></li>
        <li><code>.height</code></li>
        <li>
          <code>.availWidth</code> : available screen width without the operating system interface
        </li>
        <li>
          <code>.availHeight</code> : available screen height without the operating system interface
        </li>
        <li><code>.colorDepth</code> / <code>.pixelDepth</code></li>
      </ul>
    
    `,

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

function navigator() {


  topic = 'navigator';
  
  let title = document.getElementById('T-' + topic).textContent,

    

    content = `
    
      gives informations about the browser the user uses .
      <ul>
        <li><code>.appCodeName</code></li>
        <li><code>.appName</code></li>
        <li><code>.appVersion</code></li>
        <li><code>.platform</code></li>
        <li><code>.cookieEnabled</code></li>
        <li><code>.language</code></li>
        <li><code>.online</code></li>
        <li><code>.product</code></li>
      </ul>
    
    `,

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

function cookie() {


  topic = 'cookie';
  
  let title = document.getElementById('T-' + topic).textContent,

    

    content = `
    
      <ol>
        <li>
          <label>Creating</label>
          <code class="full">
            document.cookie = " <span>name=name1</span>; <span>expires=Date1; path=/</span> ";
          </code>
          <ul>
            <li><code>name</code> : the name of the cookie (can be any name)</li>
            <li><code>expires</code> : a date when the cookie expires (as explained in date section)</li>
            <li><code>path</code> : the path where the cookie makes effect (the path in the example makes effect on all the website)</li>
          </ul>
        </li>
        <li>
          <label>Modifying</label>
          <ul>
            <li>To modify a cookie name value we rewrite the cookie with the new value</li>
            <li>To modify a cookie date we rewrite the cookie with the new date</li>
            <li>We can't modify a cookie path because that will create another cookie with the same name instead</li>
          </ul>
        </li>
        <li>
          <label>Deleting</label>
          To delete a cookie we modify its expiration date to some date in the past
        </li>
      </ol>
    
    `,

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

export {
  window1, window2, history, navigator, screen, cookie
};
