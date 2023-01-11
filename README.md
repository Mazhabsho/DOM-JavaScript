# DOM-JavaScript

   ![](./img/1.jpg)

     The Document Object Model (DOM) is an application programming interface (API) for 
     
     manipulating HTML documents.The DOM represents an HTML document as a tree of nodes. The 
     
     DOM provides functions that allow you to add, remove, and modify parts of the document 
     
     effectively.In the DOM, all HTML elements are defined as objects.The programming interface 
     
     is the properties and methods of each object.
     
     A property is a value that you can get or set (like changing the content of an HTML element).
     
     A method is an action you can do (like add or deleting an HTML element).
     
   ![](./img/2.PNG)

### DOM Searching

     If you want to access any element in an HTML page, you always start with accessing the 
     
     document object Below are some examples of how you can use the document object to access 
     
     and manipulate HTML.
  ![](./img/3.PNG);

  ![](./img/4.PNG);

  ![](./img/5.PNG);

### Manipulating Element’s Styles

     Setting inline styles

     To set the inline style of an element, you use the style property of that element:
     
     The style property returns the read-only CSSStyleDeclaration object that contains a list 
     
     of CSS properties. For example, to set the color of an element to red, you use the 
     
     following code:

  ![](./img/6.PNG)

     If the CSS property contains hyphens (-) for example -webkit-text-stroke you can use the 
     
     array-like notation ([]) to access the property:

   ![](./img/7.PNG)

     The classList is a read-only property of an element that returns a live collection of CSS 
     
     classes:Even though the classList is read-only, but you can manipulate the classes it 
     
     contains using various methods.

         1) Get the CSS classes of an element
         
         in HTML we have div:
   ![](./img/8.PNG)

         in Script we called it:

   ![](./img/9.PNG)

         output is:

   ![](./img/10.PNG)

     2) Add one or more classes to the class list of an element

     To add one or more CSS classes to the class list of an element, you use the add() method 
     
     of the classList. For example, the following code adds the info class to the class list of 
     
     the div element with the id content:

   ![](./img/11.PNG)

     3) Remove element’s classes

     To remove a CSS class from the class list of an element, you use the remove() method:

   ![](./img/12.PNG)

     4) Toggle a class

     If the class list of an element contains a specified class name, the toggle() method 
     
     removes it. If the class list doesn’t contain the class name, the toggle() method adds it 
     
     to the class list.

   ![](./img/13.PNG)

### JavaScript events

     An event is an action that occurs in the web browser, which the web browser feedbacks to 
     
     you so that you can respond to it.Each event may have an event handler which is a block of 
     
     code that will execute when the event occurs.
         
         Example: HTML
         
         <button id="btn">Click Me!</button>
         
         Script: let btn = document.querySelector('#btn');


             function display() {
                 alert('It was clicked!');
             }
             
             btn.addEventListener('click',display);

   ![](./img/14.PNG)