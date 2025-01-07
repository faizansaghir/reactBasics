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

6. **Props**  
- Similar to attribute and value in built-in components, when we pass key value pair to custom components, they are called props.  
- The key of the prop can be any custom name we want and then value that can be passed to the prop is any type i.e. object, array, number, string.  
- The custom component can get this prop as a parameter. The prop parameter is a single parameter that will be an object which will contain the prop name as key and prop value as the corresponding value.  
- It increases the reusability of a component.  

*We can pass the props as key value pair or as single object*
```jsx
function App() {
  return (
    <div>
        // ...
        <CoreConcept 
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description} 
            image={CORE_CONCEPTS[0].image}
        />
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        // ...
    </div>
  );
}
```

*We can access the prop as single object or we can destructure it or group all props into a single object*
```jsx
function CoreConceptSingleObject(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

OR

function CoreConceptDescrtuctured({title, image, description}) {
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

OR

function CoreConceptGrouped({...concept}) {
  return (
    <li>
      <img src={concept.image} alt={tconcept.itle}/>
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}
```
*We can also set default value for a prop*
```jsx
function CoreConceptDescrtuctured({title="title", image, description}) {
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

7. **Children prop**  
The default prop that is always passed to the functional component is `children` prop which can be access using `prop.children`. This contains any element or text between the opening and closing custom component tag. This process of wrapping component inside custom component is called Component Composition.  
*Only `children` prop has pre-defined name, rest any other prop can has any name other than `children`*
```jsx
export default function TabButton(props){
    return <li><button>{props.children}</button></li>
}

OR  

export default function TabButton({children}){
    return <li><button>{children}</button></li>
}
```  

8. **Handler props for Built-in Components**  
The built-in components have props that can handle events. These are then compiled by compiler to convert to proper handler functions. These function start with `on` followed by a verb.  

*The function to be executed in handler functions are usually passed from Component where all components are present that are to be affected by the event down to children.*  
*When a handler function is to be executed with some parameters, we usually pass the function inside an arrow function. The arrow function calls the function with required parameter*  
*If we use variables to render dynamic content, changing value of variable does not trigger re-execution thus, re-rendering of components. Thus, even after changing value of variable, the rendered value will still be same.*  

***App.jsx***  
```jsx
function App() {
  function handleSelect(selectedButton){
    console.log(selectedButton);
    tabContent = selectedButton;
  }

  let tabContent = 'Please click a button'

  return (
    <div>
        // ...
        <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
        {tabContent}
        // ...
    </div>
  );
}
```
***TabButton.jsx***
```jsx
export default function TabButton({children, onSelect}){
    return <li>
        <button onClick={onSelect}>{children}</button>
    </li>
}
```  

9. **Hooks**  
Hooks are react function that can be imported from `react` library and follow the convention of `use` followed by object name. eg: `useState`. These hooks should be used inside functional components or inside other hooks only. These functions/ hooks should be used on top-level of the functional component and not inside any nested function.  
    - ***useState***: This is used to create sttes which are variables which when changed , tells react that the component needs to be re-rendered. This function when called, returns an array of 2 object. The first is snapshot of the state at that point, while the second object will be actually a function that will be used to update the snapshot value. This function when executed, informs react that the component must be re-executed.  
    
    *When we use setState function, it schedules the execution of the function and when the app re-rendered, it then changes the value of the state. Hence, if we setState and then immediately after, we execute or print the state, it will show the stale value as the state will not be updated on the go rather it will wait for re-rendering.*  
```jsx
import { useState } from 'react'

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components')

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedTopic); // Print stale value as this usually executes before re-rendering can happen
  } 
  // ...
}
```