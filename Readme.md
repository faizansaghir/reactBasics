# Overview  
Repository to track development and learning related to ReactJS.  
# Notes  

1. **Why does ReactJS need NodeJS**  
- ReactJS code contain JSX which does not directly run on browser.  
    - NodeJS provides platform to run our ReactJS code while development.  
    - NodeJS builds our code and provides files that can run on browser.  
- The code written is not optimized for production(eg: minified).  
    - Process of shortening variable and function names.  
    - Process of removing white-spaces from our file.  

*This minifies our code so that the file to be downloaded during requests is small in size.  
Due to this build process, some projects have `jsx` files while other can work with `js` files.  
Similarly, some projects have extension in import while others do not.*  

2. **Components**  
These are small building blocks which compose the UI. The size of a module depends on how small a module the developer wants.  
**Why Component based approach?**  
- ***Reusable building blocks***: A Component may be reused in different parts of use. eg: reusable button.  
- ***Related code lives together***: Related HTML and JS(and possibly CSS) code is stored together.  
- ***Separation of concerns***: Different component handle different data and logic thus separating them out simplifies working on complex apps.  
**Rules for Component Functions**
- Name starts with uppercase character. It follows PascalCase(first letter of all words in uppercase) convention.  
- Returns `Renderable` content i.e. it must return a value that can be rendered("displayed on screen") by React. It mostly returns JSX but string, number, boolean, null, array are also allowed.  

***Defining a component***
```jsx
function Header() {
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
// Multi-line return statement must be wrapped within parenthesis.
```  

***Using a component***
```jsx
function App() {
  return (
    <div>
      // ...
      <Header />
      // ...
    </div>
  );
}
// We can use either self closing TAG or expanded TAG
```  

3. **Built-in vs Custom Components**  
- ***Built-in Component***:  
    - Name start with lowercase character.  
    - Only valid, oficially defined HTML elements are allowed.  
    - Are rendered as DOM nodes by React(i.e. displayed on the screen).  
- ***Custom Component***:
    - Name starts with uppercase character.  
    - Defined by developer, wraps built-in or/and other custom components.  
    - React traverses the component tree until it has only built-in components left.  

4. **Populating Dynamic Value in JSX**  
If we use `{}` anywhere between expanded tag or value of attribute of a tag, we tell React that the value of the expression is to be substitued in place of the expression. 
```jsx
const reactDescription = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random()*(max+1));
}

function Header() {
  const description = reactDescription[genRandomInt(2)]

  return (
    <header>
        // ...
        {description} React concepts you will need for almost any app you are
        going to build!
        // ...
    </header>
  );
}
// We can also write the expression inside {} instead of variable
```  

5. **Rendering Images in React**  
When we pass `src` to `img` tag in react, the image might be lost or not included in package during build.  
Instead, one must pass these image sources as variable after importing them using `import`
```jsx
import reactImg from './assets/react-core-concepts.png'

function Header() {
    // ..
  return (
    <header>
        // ..
        <img src={reactImg} alt="Stylized atom" />
        // ..
      </header>
  );
}
```