
function data() {

 let title = 'Variables and Data types',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
        <ol>
            <li>
                <label>variables defining</label>
                <code class="full">
                    var firstVariable = <span>value</span>, <br>
                    ${tab} secondVariable = <span>value2</span>; 
                </code>
            </li>
            <li>
                <label>Data Types</label>
                <ul>
                    <li>Boolean : true or false</li>
                    <li> Array:
                        <code class="full">
                            var myArray = ["<span>Item0</span>" , "<span>Item1</span>" , "<span>Item2</span>"];
                            
                            <em>/* and to call Item0 : */</em>
                            console.log(myArray[0])
                        </code>
                    </li>
                    <li> Object:
                        <code class="full">
                            var myInfos = {firstName: "<span>name1</span>" , lastName: "<span>name2</span>"}
                            <em>/* and to call name1 : */</em>
                            console.log(myInfos.firstName)
                        </code>
                       </li>
                    <li>string: "text"</li>
                    <li>Number</li>
                    <li>
                        undefined: when calling a variable without defining it 
                    </li>
                    <li>
                        NaN: when making an operation (other than +) between a number and non number
                        * The function <code>isNan()</code> confirms if the input is a number or not
                    </li>
                    <li>Null</li>
                    <li>Symbol</li>
                </ul>
            </li>
        </ol>
        <span>Note :</span> you can ask about the data type of an input with the function <code>typeof()</code>
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

document.getElementById('data1').innerHTML = mainStructure

}



function concati() {


 let title = '',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
        <ul>
            <li>
                concatenation is used to unit variables and strings in one sentence by using the "+" symbol
            </li>
            <li>
                numbers are considered strings when concatenating with other strings and they will be put beside that string <br>
                for example: "Ahmed" + 85 = Ahmed85
            </li>
            <li>
                more examples: <br>
                85 + 15 + "Ahmed" + 25 + 40 = 100Ahmed2540 <br>
                85 + 15 + "Ahmed" + (25 + 40) = 100Ahmed65
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

document.getElementById('concat1').innerHTML = mainStructure

}


function condition() {

 let title = 'Conditions',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        <ol>
            <li>
                <label>if condition</label>
                <code class="full">
                    if(condition1) {
                    <em>${tab} /* action1 */</em>
                    } else if(condition2) {
                    <em>${tab} /* action2 */</em>
                    } else { <br>
                    <em>${tab}/* other action */</em>
                    }
                </code>
            </li>
            <li>
                <label>switch condition</label>
                 <code class="full">
                    switch(<span>value</span>) { <br>
                    ${tab} case(<span>value1</span>):
                    <em>${tab + tab}/* action1 */</em>
                    ${tab + tab} break; <br>
                    ${tab} case(<span>value2</span>):
                    <em>${tab + tab}/* action2 */</em>
                    ${tab + tab} break; <br>
                    ${tab} default:
                    <em>${tab + tab} /* other action */</em>
                    }
                </code>
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

document.getElementById('condition1').innerHTML = mainStructure

}


function output() {

 let title = 'Output',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        <ul>
            <li>
                <code>document.write()</code> : used for writing on page and you can create html elements with it (not recommended to use)
            </li>

            <li>
                <code>console.log</code> : to write in console
            </li>
            
            * you can also write codes in the Adress bar by wrriting <code>javascript:</code>  before the code
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

document.getElementById('output1').innerHTML = mainStructure

}


function func() {



 let title = 'Functions',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        <ol>
            <li>
                <label>Syntax of an auto called function </label>
                <code class="full">
                    (function myFunction(<span>param1</span>) { <br>
                      ${tab}var x = ..... ; <br>
                      ${tab}return x; <br>
                      }()); <br>
                </code>
            </li>
            <li>
                <label>functions usually contain </label>
                <ul>
                    <li>
                        a variable which is only defined inside of it 
                    </li>
                    <li>A condition</li>
                    <li>
                        the return line says what the function gives when it is called
                    </li>
                    <li>
                        params : we use params to include a variable in our function and define its value when we call the function not inside the 
                            function itself
                    </li>
                </ul>
                <span>Note :</span> to stop auto calling the function we remove the () in the begining and end of the function.
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

document.getElementById('function1').innerHTML = mainStructure;

}


function event() {

 let title = 'Events',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        <ol>
            <li>
                <label>How to use it</label>
                <ul>
                    <li>Element.Event = function() {}</li>
                    <li>Element.Event = myFunction ;</li>
                    <li>As attribute (event="myFunction()")</li>
                </ul>
            </li>
            <li>
                <label>Most used events</label>
                <ul>
                    <li>onclick</li>
                    <li>ondblclick</li>
                    <li>onload : performs the action when the page is completely loaded</li>
                    <li>onkeydown</li>
                    <li>onkeyup : performs the action when you raise your finger of the keyboard</li>
                    <li>onkeyspanss : performs the action while you're holding your finger on keyboard</li>
                    <li>onmouseenter: performs the action when the mouse is over the element</li>
                    <li>onmouseleave: performs the action when the mouse is gone from over the element</li>
                    <li>onchange: performs the action when the element's value changes (usually used in select menus)</li>
                    <li>onfocus</li>
                    <li>onblur</li>
                    <li>onscroll</li>
                    <li>onresize</li>
                    <li>onsubmit</li>
                    <li>oncontextmenu(right click)</li>
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

document.getElementById('event1').innerHTML = mainStructure;

}



function loop() {


 let title = 'Loops',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        <ol>
            <li>
                <label>for loop</label>
                <code class="full">
                    for (<span>starting value</span>; <span>loop's condition</span>; <span>operation</span>) {
                        <em>${tab} /* repeated assignment with an increasing value of i aslong the condition returns true */</em> }
                </code>
                Example :
                <code class="full">
                    var friends = ["<span>Ahmed</span>", "<span>Zeinab</span>", "<span>Sameer</span>" ] <br>
                    var i <br>
                    for (<span>i = 0</span>; <span>i &lt; friends.length</span>; <span>i++</span>) { <br>
                    ${tab} console.log(friends[i]) <br>
                                      }
                    <em>/* that loop will return : */</em>
                    Ahmed <br>
                    Zeinab <br>
                    Sameer <br>
                </code>
            </li>
            <li>
                <label>for in loop</label>
                The for in loop deals with Objects as it applies the repeated assignment on the object properties
                <code class="full">
                    var myPhone = {<br>
                    ${tab} manufacturer: <span>samsung</span>,<br>
                    ${tab} model: <span>A30</span>,<br>
                    ${tab} color: <span>blue</span>,<br>
                    }, <br>
                    prop; <br>
                    for (<span>prop</span> in <span>myPhone</span>) { <br>
                    ${tab} if(myPhone.hasOwnProperty(<span>prop</span>)) {<br>
                    ${tab + tab}console.log(<span>prop</span> + <span>":"</span> + <span>myPhone[prop]</span>) <br>
                                &nbsp; } <br>
                                }
                    <em>/* that loop will return : */</em>
                        manufacturer: samsung<br>
                        model: A30<br>
                        color: blue,<br>
                </code>
            </li>
            <li>
                <label>while loop</label>
                <code class="full">
                    var loopVariable = <span>value</span>;<br>
                    while (condition) { <br>
                    <em>/*${tab} assignment including the operation */</em>
                    }
                </code>
            </li>
            <li>
                <label>do while loop</label>
                performs the assignment at least once before checking the condition. <br>
                <code class="full">
                    var loopVariable = <span>value</span>;<br>
                    do {
                        <em>${tab}/* assignment including the operation */</em>
                    } while (<span>condition</span>) ;
                </code>
            </li>
            <li>
                <label>loop controls</label>
                <ul>
                    <li>
                        <code>label</code> : used to give the loop a name to control it with other the control tools
                    </li>
                    <li>
                        <code>break</code> : stops the loop
                    </li>
                    <li>
                        <code>continue</code> : deletes the value which implements the condition then continues the loop without that value
                    </li>
                </ul>
                for better understanding and more examples of loop controls watch <a href="https://youtu.be/-kpIv-1alTE" target="_blank">this</a>
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

document.getElementById('loop1').innerHTML = mainStructure;

}



function regular() {


 let title = 'Regular Expression',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        Used for searching / replacing in Arrays and Strings

        <ol>
            <li>
                <label>/&nbsp;&nbsp;&nbsp;/......</label>
                <ul>
                    <li>i : insensitive charachters</li>
                    <li>g : global search (more than one result)</li>
                    <li>m : multiple line search</li>
                </ul>
            </li>
            <li> 
                <label>[........]</label> to perform action on a Character / Range of characters
                <ul>
                    <li>[character]</li>
                    <li>[^character] : not character (performs action on all characters except the one in brackets)</li>
                    <li>Ranges : <br>
                        [a-z], [A-Z], [0-9], [A-z]
                    </li>
                    <li>not-this Ranges : <br>
                        [^a-z], [^A-Z], [^0-9], [^A-z]
                    </li>
                    <li>Double Range :  [0-9a-z] </li>
                </ul>
            </li>
            <li>
                <label>Quantifiers</label>
                <ul>
                    <li>letter+ : the word has the letter once</li>
                    <li>letter{number} : the word has the letter number times</li>
                    <li>letter{number1, number2} : the word has the letter number1 or number2 times</li>
                    <li>letter{number,} : the word has the letter atleast number times</li>
                </ul>
            </li>
        </ol>
        <span>Note : </span> The brackets and quantifiers are written in charachter place
        <code class="full">
            <em>/* examples on how Regular Expression is used : */</em>
            <em>/* the following code will replace every letter that is not (e) in myString with the letter b : */</em>
            myString.replace(<span>/[^e]/g</span>, <span>b</span>)
            <em>/* the following code will search for the letter (e) where it is repeated 3 times in a word (capital or small letter) */</em>
            myString.search(<span>/e{3}/i</span>)
        </code>
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

document.getElementById('regular1').innerHTML = mainStructure;

}



function math() {


 let title = 'Maths',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        <ol>
            <li>
                <label>operators</label>
                <ul>
                    <li>+ , - , * , /</li>
                    <li>x % y : gives you the remainder of x by y
                    </li>
                    <li>
                        increament : a++ , a+=1 , a=a+1
                    </li>
                    <li>
                        decreament : a-- , a-=1 , a=a-1
                    </li>
                </ul>
            </li>
            <li>
                <label>conditional operators</label>
                <ul>
                    <li>
                        = : has no condition meaning <br>
                        == : compares value only <br>
                        === : compares value and data type 
                    </li>
                    <li>
                        != : not equal in value <br>
                        !== : not equal in value nor in data type
                    </li>
                    <li>
                        && : to demand more than one condition in the same time (in the same if) <br>
                        || : to demand one of multiple conditions in the same if
                    </li>
                </ul>
            </li>
            <li>
                <label>math methods</label>
                <ul>
                    <li>
                        <code>ceil(value)</code> : convert the value to the closest greater number<br>
                        <code>floor(value)</code> : convert the value to the closest less number<br>
                        <code>round(value)</code> : convert the value to the closest number
                    </li>
                    <li>
                        <code>min(value1, value2, value3)</code> <br>
                        <code>max(value1, value2, value3)</code>
                    </li>
                    <li>
                        <code>random() </code> : random number which is less than 1 <br>

                        <code class="full">
                            <em>/* this is a code that results a random number between 1 and 10 : */</em>

                            math.floor(<span>math.round() * 10 + 1</span>)
                        </code>

                    </li>
                </ul>
            </li>
            <li>
                <label>Numbers methods</label> 
                <ul> 
                    <li> 
                        <code>myNumber.toString()</code>
                    </li> 
                    <li> 
                        <code>myNumber.toExponential()</code> : writes the number in the following form : 0.n * 10ᵐ
                    </li> 
                    <li> 
                        <code>myNumber.toFixed(X)</code> : approximates the input keeping X numbers right to the point
                    </li> 
                    <li> 
                        <code>myNumber.parseint()</code> : converts the input to a number only (without a unit)
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

document.getElementById('math1').innerHTML = mainStructure;

}


function array() {


 let title = 'Array',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        <code class="full">
            var arrayName = ["<span>Item0</span>", "<span>Item1</span>", "<span>Item2</span>"];
            <em>/* This line returns the first Item (Item0) in console : */</em>
            console.log(arrayName[0])
        </code>
        * to check if Input is Array or not we can use Array.isArray(Input) <br> <br>
        
        <label>Array methods </label>
            <ol>
                <li>
                    <label>Get/Set length</label>
                        <code>myArray.length</code>/ <code>myArray.length = 2</code><br>
                            and the second example here sets the length of myArray to 2 Items.
                </li>
                <li>
                    <label>Converting to String</label>
                    <ul>
                        <li><code>myArray.tostring()</code></li>
                        <li>
                            <code>myArray.toLocalString()</code>
                        </li>
                        <li>
                            <code>myArray.join("seperator")</code> : converts the Array to a string with the seperator between the items
                        </li>
                    </ul>
                </li>
                <li>
                    <label>Searching in Arrays</label>
                    <ul>
                        <li>
                            Staring from first: <br> <code>myArray.indexOf("ItemName", startingIndex)</code> <br>
                            *returns the value (-1) if the item (itemName) doesn't exist in myArray .
                        </li>
                        <li>
                            Starting from last(indexes of Items remains the same): <br>
                            <code>myArray.lastIndexOf("ItemName", StartingIndex)</code>
                        </li>
                    </ul>
                </li>
                <li>
                    <label>Sorting Arrays</label>
                    <ul>
                        <li>
                            Alphabetical : <code>myArray.sort()</code>
                        </li>
                        <li>
                            Reverse : <code>myArray.reverse()</code>
                        </li>
                    </ul>
                </li>
                <li>
                    <label>Adding / Deleting items</label>
                    <ul>
                        <li>
                            Adding items :
                            <ul>
                                <li><code>myArray[myArray.length] = "newItem"</code></li>
                                <li><code>myArray.push("newItem")</code> : adds the newItem to the end of myArray</li>
                                <li><code>myArray.unshift("newItem")</code> : adds the newItem to the begining of myArray
                                </li>
                                <li> <code>myArray.splice(index, deleted items number,"newItem1", "newItem2")</code>  
                                </li>

                            </ul>
                        </li>
                        <li>
                            Deleting / Getting Items :
                            <ul>
                                <li>
                                    <code>myArray.pop()</code> : delets/gets the last item in myArray
                                </li>
                                <li>
                                    <code>myArray.shift()</code> : deletes/gets the first item in myArray
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <label>Slicing and Combining Arrays</label>
                    <ul>
                        <li>
                            Slicing : <br>
                            <code>myArray.slice(startingIndex, EndingIndex)</code> <br>
                            * you can use negative values here
                        </li>
                        <li>
                            Combining :<br>   <code>myArray1.concat(myArray2, myArray3)</code>
                        </li>
                    </ul>
                        <span>Note :</span> Sliced and Combined Arrays are Arrays too
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

document.getElementById('array1').innerHTML =
    mainStructure;

}


function string() {



 let title = 'String',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        The String is simply a text which is written inside <code >" "</code> .<br> however, it may contain html &amp; css codes too.
        <label>Strings methods :</label>
        <ol>
            <li>
                <label>Getting length</label>
                <ul><li><code>myString.length</code></li></ul>
            </li>
            <li>
                <label>Converting to String</label>
                <ul>
                    <li>
                        <code>string(myInput)</code>
                    </li>
                    <li>
                        <code>myInput.tostring()</code>
                    </li>
                </ul>
            </li>
            <li>
                <label>Searching in Strings</label>
                <ul>
                    <li>
                        <code>myString.indexOf("word")</code> <br>
                        *returns the value (-1) if the word (word) doesn't exist in mystring .
                    </li>
                    <li>
                        <code>myString.lastIndexOf("word")</code>
                    </li>
                    <li>
                        <code>myString.search("word")</code>
                    </li>
                    <li>
                        <code>myString.charat(index)</code>
                    </li>
                    <li>
                        <code>myString.charcodeat(index)</code>
                    </li>
                </ul>
            </li>
            <li>
                <label>Combining/Cutting</label>
                    <ul>
                        <li>Combining:
                            <ul>
                                <li>                           <code>myString.concat("new string1", "new string2")</code>
                                </li>
                                <li>
                                    <code>string.fromcharcode(letter code1, letter code2 ...)</code> : to make a string out of letter codes
                                </li>
                            </ul>
                        </li>
                        <li>
                            Cutting :
                            <ul>
                                <li>
                                    <code>myString.slice(startIndex, endIndex)</code>
                                </li>
                                <li>
                                    <code>myString.substring(startIndex, endIndex)</code> : differs from slice for the ability to write start and end index in both values
                                </li>
                                <li>
                                    <code>myString.substr(startIndex, length)</code>
                                </li>
                                <li>
                                    <code>myString.split("word seperator", number of objects wanted)</code> : converts the String to Array
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <label>Editing Strings</label>
                        <ul>
                            <li>
                                <code>myString.replace(value, new value)</code> : The value can be a word or a letter
                            </li>
                            <li>
                                <code>myString.touppercase()</code>
                            </li>
                            <li>
                                <code>myString.tolowercase()</code>
                            </li>
                            <li>
                                <code>myString.trim()</code> : to clear the extra unwanted spaces
                            </li>
                            <li>
                                <code>myString.link("link")</code>
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

document.getElementById('string1').innerHTML = mainStructure;

}




function date() {



 let title = 'Date',
 
    tab = '&nbsp;&nbsp;&nbsp;',

    content = `
    
        <ol>
            <li>
                <label>Date writing</label>
                <ul>
                    <li><code>new date()</code> : gives the current time and date</li>
                    <li><code>new date(milliseconds)</code> : adds the milliseconds to 1/1/1970 00:00:00</li>
                    <li><code>new date('month day year hours:minutes:seconds')</code></li>
                    <li>
                        <code>new date(year, month, day, hour, minutes, seconds, millseconds)</code>
                    </li>
                </ul>
            </li>
            <li>
                <label>Date formats</label>
                <ul>
                    <li>Full/Long format : "month day year hours:minutes:seconds"</li>
                    <li>Short format : "month/day/year hours:minutes:seconds"</li>
                    <li>ISO format : "year-month-day hours:minutes:seconds TDZ"</li>
                </ul>
            </li>
            <li>
                <label>Date methods :</label>
                <ol>
                    <li>
                        <label>Getting/Setting Date</label>
                        <table>
                              <tr>
                                <td>Getting</td>
                                <td>Setting</td>
                                <td>Result / Input</td>
                              </tr>
                              <tr>
                                <td><code>getDate()</code></td>
                                <td><code>setDate()</code></td>
                                <td>1-31</td>
                              </tr>
                               <tr>
                                <td><code>getDay()</code></td>
                                <td>-</td>
                                <td>0-6</td>
                              </tr>
                               <tr>
                                <td><code>getFullYear()</code></td>
                                <td><code>setFullYear()</code></td>
                                <td>year (months/days are optional for setting)</td>
                              </tr>
                               <tr>
                                <td><code>getMonth()</code></td>
                                <td><code>setMonth()</code></td>
                                <td>Month (day is optional for setting)</td>
                              </tr>
                               <tr>
                                <td><code>getHours()</code></td>
                                <td><code>setHours()</code></td>
                                <td>Hours (anything smaller is optional for setting)</td>
                              </tr>
                               <tr>
                                <td><code>getMinutes()</code></td>
                                <td><code>setMinutes()</code></td>
                                <td>Minutes (anything smaller is optional for setting)</td>
                              </tr>
                               <tr>
                                <td><code>getSeconds()</code></td>
                                <td><code>setSeconds()</code></td>
                                <td>Seconds (milliseconds are optional for setting)</td>
                              </tr>
                               <tr>
                                <td><code>getMilliseconds()</code></td>
                                <td><code>setMilliseconds()</code></td>
                                <td>Milliseconds</td>
                              </tr>
                               <tr>
                                <td><code>getTimezoneOffset()</code></td>
                                <td>-</td>
                                <td>gets the difference between UTC and the local time (in minutes)</td>
                              </tr>
                               <tr>
                                <td><code>getTime()</code> / <code>now()</code></td>
                                <td>-</td>
                                <td>gets the milliseconds from 1/1/1970 until this moment</td>
                              </tr>
                               <tr>
                                <td><code>parse(myDate)</code></td>
                                <td>-</td>
                                <td>gets the milliseconds from 1/1/1970 to a specific date </td>
                              </tr>
                        </table>
                    </li>
                    <li>
                        <label>Converting formats</label>
                        <ul>
                            <li><code>myDate.toISOString()</code></li>
                            <li><code>myDate.toDateString()</code></li>
                            <li><code>myDate.toTimeString()</code></li>
                        </ul>
                    </li>
                </ol>
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

document.getElementById('date1').innerHTML = mainStructure

}

export {
    data, concati, condition, output, func, loop, regular, array, string, date, event, math
}



/*
function () {


 let title = '',
 
    tab = '&nbsp;&nbsp;&nbsp;',

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

return mainStructure;

}
*/

//document.getElementById('').innerHTML = ()
