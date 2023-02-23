
///////////////////////////
////////// REACT //////////
///////////////////////////
https://reactjs.org/

A React app's UI consists of components.
In React, we build an app's UI by composing built-in and user-defined components.

UI written in JSX.
Has state and props.
Renders on the Virtual DOM
After the rendering is done, React compares the latest Virtual DOM to the previous Virtual DOM and computes only the "difference", known as the diff.
React then updates the browser's actual DOM with the actual changes (the computed diff).

React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.

React lets you create components, reusable UI elements for your app.

In a React app, every piece of UI is a component.

ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. React is used to create modular user interfaces. It promotes the development of reusable UI components that display dynamic data.
 
 It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks
 
 
 How does it work: While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.

React components are regular JavaScript functions except:

Their names always begin with a capital letter.
They return JSX markup.


/////////////////////////////
// REACT CODE ORGANIZATION //
/////////////////////////////

https://beta.reactjs.org/learn/thinking-in-react



/////////////////////////////
//////// JSX ///////////////
/////////////////////////////

Although a React component's UI is ultimately defined by JavaScript, there is a better way to define the UI using a special syntax known as JSX.
The syntax is an XML-based syntax that looks like HTML - as it should since HTML is also based on XML.
Since our browsers do not understand JSX, it must first be transpiled (converted) into pure JS.

A Syntax that allows us to write our HTML, CSS and Javascript in the same file so that we can more easily create user interfaces React is one of the most well known users of JSX. But other libraries like Lit-HTML, and KofuJS use it as well.

JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM

It is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.
It makes it easier for us to create templates.
Instead of separating the markup and logic in separated files, React uses components for this purpose. We will learn about components in detail in further articles.

Using JavaScript expressions in JSX: In React we are allowed to use normal JavaScript expressions with JSX. To embed any JavaScript expression in a piece of code written in JSX we will have to wrap that expression in curly braces {}.

Attributes in JSX: JSX allows us to use attributes with the HTML elements just like we do with normal HTML. But instead of the normal naming convention of HTML, JSX uses camelcase convention for attributes. For example, class in HTML becomes className in JSX. The main reason behind this is that some attribute names in HTML like ‘class’ are reserved keywords in JavaScripts. So, in order to avoid this problem, JSX uses the camel case naming convention for attributes.

Comments in JSX begins with /* and ends with */. We can add comments in JSX by wrapping them in curly braces {}


///////////////////////////
/////// REACT STATE ///////
///////////////////////////

State: A Component's Memory
Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

To make the UI interactive, you need to let users change your underlying data model. You will use state for this.

Think of state as the minimal set of changing data that your app needs to remember. The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself). Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand. For example, if you’re building a shopping list, you can store the items as an array in state. If you want to also display the number of items in the list, don’t store the number of items as another state value—instead, read the length of your array.

Now think of all of the pieces of data in this example application:

The original list of products
The search text the user has entered
The value of the checkbox
The filtered list of products
Which of these are state? Identify the ones that are not:

Does it remain unchanged over time? If so, it isn’t state.
Is it passed in from a parent via props? If so, it isn’t state.
Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!
What’s left is probably state.

Let’s go through them one by one again:

The original list of products is passed in as props, so it’s not state.
The search text seems to be state since it changes over time and can’t be computed from anything.
The value of the checkbox seems to be state since it changes over time and can’t be computed from anything.
The filtered list of products isn’t state because it can be computed by taking the original list of products and filtering it according to the search text and value of the checkbox.
This means only the search text and the value of the checkbox are state! Nicely done!


///////////////////////////
/////////// PROPS ////////
//////////////////////////

Passing Props to a Component
React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props


Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>
  <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />


////////////////////////
//////// SPA ///////////
////////////////////////

A Single Page Application (SPA) is a single web page, website, or web application that works within a web browser and loads just a single document. It does not need page reloading during its usage, and most of its content remains the same while only some of it needs updating. When the content needs to be updated, the SPA does it through JavaScript APIs.

This way, users can view a website without loading the entire new page and data from the server. As a result, performance increases, and you feel like using a native application. It offers a more dynamic web experience to the users. SPAs help users be in a single, uncomplicated web space in easy, workable, and simple ways.

Examples of SPAs

Gmail, Facebook, Trello, Google Maps, etc., all are Single Page Applications that offer an outstanding user experience in the browser with no page reloading.

For instance, when you open your Gmail account, you can see nothing changes much during navigation. Its header and sidebar are the same in the inbox, and when a new email arrives, it reflects the change quickly by loading its content via JavaScript.

The architecture of Single page applications is simple. It involves client-side and server-side rendering technologies.

Suppose you want to visit a specific web page. When you enter its address to request access from your browser, the browser sends this request to a server and comes with an HTML document in return.

Using a SPA, the server sends the HTML document only for the first request, and for subsequent requests, it sends JSON data. This means a SPA will rewrite the current page’s content and not reload the whole web page. Hence, no need to wait extra for reloading and faster performance. This capability makes a SPA behave like a native application.

A Single Page Application is different from multi-page applications (MPAs). The latter are web apps with multiple pages reloaded when a user requests new data.

Furthermore, SPAs can take a while to load at first but offer faster performance and smooth navigation after loading. MPAs can be comparatively slow and needs top-class internet, especially with graphical elements. Examples of MPAs can be Amazon and Google Docs.

What are the benefits of SPAs? 👍
Most resources, like HTML, JavaScript, and CSS that SPA needs, are loaded initially and don’t require reloading when in use. Only data transmission can change, which makes it highly responsive. Let’s find out what all benefits SPAs offer.



/////////////////////////////
// CREATE-REACT-APP /////////
/////////////////////////////

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.


npx create-react-app projectName


NPX npx is a tool build into npm to run different npm tools one time, so that way you don't have to install them permanent for quick use. This is usually used mainly with project generators and CLI tools.
create-react-app tool created by facebook that does one thing, generate a React project with all the fancy tools ready to go (Webpack, ESLint, Babel, more).

projectName The name of the folder that will be created with your new project!



/////////////////////////////
///////// BABEL /////////////
/////////////////////////////

A tool for taking cutting ends javascript code and jsx and translating it into older browser readable javascript. This allows us to use the newest javascript in React with out concern for browser compatibility.




/////////////////////////////
///////// WEBPACK ///////////
/////////////////////////////
https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/
https://webpack.js.org/

Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser. Modules are reusable chunks of code built from your app’s JavaScript, node_modules, images, and the CSS styles which are packaged to be easily used in your website. Webpack separates the code based on how it is used in your app, and with this modular breakdown of responsibilities, it becomes much easier to manage, debug, verify, and test your code.

When Webpack processes your application, it builds a dependency graph which maps out the modules that your project needs and generates one or more bundles. A bundle is a distinct grouping of connected code that has been compiled and transformed for the browser.c

If one file depends on another (it uses the code from a separate file), Webpack treats this as a dependency. Webpack also takes your non-code assets (images, fonts, styles, etc.) and converts them to dependencies for your application.













 