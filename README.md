## Getting Started

First, run the development server:

```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# UI_Engineering

## Advanced javascript

### Closures
Internal functions that have access to external scope variables even after execution of the external function has completed
  <details>
    
  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/c86f6291-d334-4b51-856a-4644676353d0)
  

  Example 4: Passing data to child components
  ```
  const ChildComponent: React.FC <{ onMessageChange: (message: string) => void }> = ({ onMessageChange }) => {
  ```

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/4cd6a8a0-d189-42c8-b7c6-2555d1aa2333)

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/43974eeb-5051-4755-ac2a-cc5d112b667c)



  <summary>Clique para mostrar conteúdo</summary>
  </details>

 
  
### EventEmitter
Implement a custom event system for communication between components or modules.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/860e6f8e-c77e-4735-9957-df0d9c519b9a)

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/2d8c11cd-255a-458f-8e91-5a9edcad6d2e)


    
  </details>
  
### HighOrder
Functions that accept other functions as arguments or return functions.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
    
  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/9cc243f8-7168-4403-9376-d060404a3ec2)

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/6f99458f-6492-434e-848b-bce77ecbe773)

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/29fe0a31-134f-4084-93c6-205be7044eeb)


  
  ```
   const withParent = ...:
  ```

   This declares a constant named withParent, which is a function.

  ```
   <P extends object>(WrappedComponent: ComponentType<P>): ComponentClass<P>:
  ``` 
    
   This function is a generic function. It takes a type parameter P which extends object. It expects a component (WrappedComponent) of type ComponentType, and it returns a component class (ComponentClass).

  ```
   return class extends Component<P> { ... }:
  ```
  
   This returns an anonymous class that extends Component, where P is the type parameter provided to the function. So, this returned class is a React component class.

  ```
   render() { ... }:
  ```
  
   This defines the render method of the component class. Inside the render method, it returns JSX, which renders a div element wrapping the WrappedComponent.
   
  ```
   <WrappedComponent {...this.props as P} />:
  ```

   This line renders the WrappedComponent by spreading all the props (this.props) onto it, and it explicitly asserts the type of these props as P.

  </details>
  
### PromiseAsync
Handle asynchronous operations in a cleaner and more readable way.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### PrototypeInheritance
Understand how prototypes and inheritance work in JavaScript.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
## Browser Api

### FetchApi
Make Fetch requests.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### GeoLocation
Access the user's location through the browser.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### IndexedDb
A NoSQL database API that operates in the browser.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### SessionStorage
Store data locally in the user's browser.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### WebStorage
Allow persistent local storage of data in the browser.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
## Lifecycle

### ContextApi
Global application state management.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### Hocs
Components that wrap around other components to provide additional functionality.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### Hooks
Allows you to use state and other React features without writing a class.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### Lifecycles
ComponentDidMount, ComponentDidUpdate, componentWillUnmount, etc.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
## WebPerformance

### CodeSplitting
Divide the application code into smaller parts and load only what is necessary for each part of the application, improving initial loading time.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### LazyLoading
Load images on demand, especially those below the page fold, to speed up initial load times.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### Memorization
Use techniques like Memorization to avoid recalculating parts of the UI that don't change frequently.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### Minification
Reduce the size of JavaScript and CSS files by removing whitespace and comments, and combining multiple files into one to reduce the number of HTTP requests.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### ServerSide
Render content server-side before sending it to the browser, reducing rendering time on the client.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
  </details>


