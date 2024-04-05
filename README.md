## Getting Started

First, run the development server:

```
npm install
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
    
  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/6548727c-b9e6-4f85-ac45-b2fa6a2125e2)

  </details>
  
### PrototypeInheritance
Understand how prototypes and inheritance work in JavaScript.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
    
  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/7d18551d-6554-42b5-a4b3-ec9aff611702)

  </details>
  
## Browser Api

### FetchApi
Make Fetch requests.
  <details>
  <summary>Clique para mostrar conteúdo</summary>
    
  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/4afb4551-5af1-43e4-a693-8a07f2a049e3)

  </details>
  
### GeoLocation
Access the user's location through the browser.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/d8fd760f-c839-4d64-b8e4-b5a2aa6b7216)

    
  </details>
  
### IndexedDb
A NoSQL database API that operates in the browser.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/fc0b83c4-6b8a-4530-8f39-ed542e81af18)

  #### Interface Definitions:
  
  - Item: An interface representing the structure of an item. It has two properties: id of type number and name of type string.
  
  - MyDB: An interface extending DBSchema. It specifies the schema for the database, including the structure of the 'items' store and its indexes.
    
 #### Component Setup:
  
  - IndexedDBExample: This is a functional component. It sets up state variables items and itemName using the useState hook. items will hold an array of Item objects, and itemName will hold the name of the item being added.
 
  - fetchItems: This asynchronous function is responsible for fetching items from IndexedDB when the component mounts. It opens the database, retrieves items from the 'items' store, and sets them using setItems.
  
  - useEffect: This hook calls fetchItems when the component mounts, ensuring that items are fetched once the component is rendered.
   
 #### Database Operations:
 
  - addItem: This asynchronous function adds a new item to the database. It first checks if the itemName is not empty. Then, it opens the database, starts a transaction on the 'items' store with read-write access, creates a new item object with the provided name (and auto-generated id by IndexedDB), adds it to the store using store.add, and then calls fetchItems to update the item list displayed in the component.
  
#### Error Handling:

 - Errors that occur during database operations are caught using try...catch blocks and logged to the console.
    
  </details>
  
### SessionStorage
Store data locally in the user's browser.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/58300cc5-85c8-4691-a1d1-36e23b515c8c)

  - Two state variables localStorageValue and sessionStorageValue are initialized using the useState hook. These variables will hold the values retrieved from local storage and session storage respectively.

  - The useEffect hook is used to retrieve values from local storage and session storage when the component mounts. It runs once when the component mounts because of the empty dependency array [].

  - Two event handler functions handleLocalStorageChange and handleSessionStorageChange are defined to handle changes in the input fields for local storage and session storage respectively. These functions update the state variables and also update the corresponding storage items using localStorage.setItem and sessionStorage.setItem.

  - The component returns JSX containing two input fields for local storage and session storage, along with their corresponding headings (<h2> tags).

  - Below the input fields, the component displays the current values of local storage and session storage using <h1> tags.
    
  </details>
  
### WebStorage
Allow persistent local storage of data in the browser.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/c9bd71c6-911c-4fa2-b9d5-82e5e9ca5539)

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/bc1f9044-3694-424b-8fe6-7e094e95d76e)

    
  </details>
  
## Lifecycle

### ContextApi
Global application state management.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/eb8e91dd-4205-47b6-afe1-6052af0c7737)

  - interface AuthContextType { ... }: This defines an interface AuthContextType which describes the shape of the authentication context. It specifies that the context will have three properties: isLoggedIn of type boolean, login and logout both of which are functions with no arguments and no return value.

  - export const AuthContext = createContext<AuthContextType | undefined>(undefined);: This line creates an authentication context using createContext. It initializes it with an initial value of undefined, and it's typed to adhere to the AuthContextType interface or undefined.

  - export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => { ... }: This is a functional component named AuthProvider. It accepts children as props, which are of type ReactNode. It wraps its children with the AuthContext.Provider.

  - const [isLoggedIn, setIsLoggedIn] = useState(false);: This line initializes a state variable isLoggedIn using the useState hook. It's initialized with a value of false, indicating that the user is not logged in by default.

  - const login = () => { setIsLoggedIn(true); };: This function sets the isLoggedIn state to true, simulating a login action.

  - const logout = () => { setIsLoggedIn(false); };: This function sets the isLoggedIn state to false, simulating a logout action.

  - <AuthContext.Provider value={{ isLoggedIn, login, logout }}> ... </AuthContext.Provider>: This line renders the AuthProvider component with the authentication context provider. It provides the context value with the isLoggedIn state, login, and logout functions to its children components.

    ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/392ed93d-4a9e-4b6d-aa84-617f75523c2c)

  - const authContext = useContext(AuthContext);: This line uses the useContext hook to get the current context value from the AuthContext. The AuthContext presumably provides information about whether the user is logged in or not, along with functions for logging in and out.

  - if (!authContext) { throw new Error("useAuth must be used within an AuthProvider"); }: This line checks if the authContext is null or undefined. If it is, it throws an error indicating that useAuth must be used within an AuthProvider. This is a safety check to ensure that the component is being used within the appropriate context.

  - const { isLoggedIn, login, logout } = authContext;: This line destructures the authContext object to extract the isLoggedIn boolean value, login function, and logout function.

  - The return statement renders a div containing a button. If isLoggedIn is true, it renders a "Logout" button with an onClick handler set to the logout function. If isLoggedIn is false, it renders a "Login" button with an onClick handler set to the login function.

    
  </details>
  
### Hocs
Components that wrap around other components to provide additional functionality.
  <details>
    
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
  <summary>Clique para mostrar conteúdo</summary>
  </details>
  
### Hooks
Allows you to use state and other React features without writing a class.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/df92c25a-c38f-4a08-b544-35e834d76e9d)


    
  </details>
  
### Lifecycles
ComponentDidMount, ComponentDidUpdate, componentWillUnmount, etc.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/c2abe1d0-ef83-43d4-a0b4-d7b186209caf)

    
  </details>
  
## WebPerformance

### CodeSplitting
Divide the application code into smaller parts and load only what is necessary for each part of the application, improving initial loading time.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/5c4934be-2665-497a-8023-272524ab2688)

    
  </details>
  
### LazyLoading
Load images on demand, especially those below the page fold, to speed up initial load times.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/65be6ba3-fb36-47a8-a09c-cc3c54dfd601)

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/b80fa0fd-90bf-4c33-8f12-7d4f5ffcf7f4)

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/642eec53-0490-4a47-b51e-58bfdd9bd009)
    
  </details>
  
### Memoization
Use techniques like Memorization to avoid recalculating parts of the UI that don't change frequently.
  <details>
  <summary>Clique para mostrar conteúdo</summary>

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/8ea9ac07-64a7-4281-bc79-7c30f616b21f)

  - This component is defined as a functional component (React.FC).
  - It receives a prop named data, which is a number.
  - Inside the component, there's a function called expensiveCalculation, which simulates a computationally expensive operation by performing a loop with a large number of iterations.
  - The result of this expensive calculation is memoized using the useMemo hook, which ensures that the calculation is only performed when the data prop changes.
  - The component renders the value of data and the memoized result of the expensive calculation.

   ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/e0b46111-0031-49b8-a38d-0e1b713a6b7d)

  - number represents the number entered by the user.
  - inc represents the number of times the component has re-rendered due to button clicks.
  - The factorial variable holds the factorial of the number state. It uses useMemo to memoize the factorial calculation, recalculating only when the number state changes.
  - onChange: It updates the number state when the value in the input field changes.
  - onClick: It increments the inc state when the button is clicked.
  - The JSX returned by the component displays an input field for entering the number, the calculated factorial, a button to trigger re-rendering, and a counter showing the number of times the component has re-rendered.

   
   ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/ffc1a3fb-67ef-4c47-a25b-8a88f255d0d9)
   



  </details>
  
### Minification
Reduce the size of JavaScript and CSS files by removing whitespace and comments, and combining multiple files into one to reduce the number of HTTP requests.


### ServerSide
Render content server-side before sending it to the browser, reducing rendering time on the client.
  <details>
  <summary>Clique para mostrar conteúdo</summary>


  #### backend

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/5aaba5bf-3e95-4865-a225-3b8377f73f38)

  
  #### fetch data

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/3953d35a-4645-4a12-81ce-52c66e4381db)

  
  #### reduce client side

  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/5c4934be-2665-497a-8023-272524ab2688)
  
  #### sensitive data
  
  ![image](https://github.com/lucasmargui/React_UI_Engineering/assets/157809964/8dcd21e0-c1d5-4f11-92eb-f241a9bfa11a)

    
  </details>


