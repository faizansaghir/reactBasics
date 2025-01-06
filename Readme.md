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
*This minifies our code so that the file to be downloaded during requests is small in size.*  
2. **Components**  
These are small building blocks which compose the UI. The size of a module depends on how small a module the developer wants.  
**Why Component based approach?**  
- ***Reusable building blocks***: A Component may be reused in different parts of use. eg: reusable button.  
- ***Related code lives together***: Related HTML and JS(and possibly CSS) code is stored together.  
- ***Separation of concerns***: Different component handle different data and logic thus separating them out simplifies working on complex apps.  
**Rules for Component Functions**
- Name starts with uppercase character. It follows PascalCase(first letter of all words in uppercase) convention.  
- Returns `Renderable` content i.e. it must return a value that can be rendered("displayed on screen") by React. It mostly returns JSX but string, number, boolean, null, array are also allowed.  
