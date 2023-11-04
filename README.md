![image](https://github.com/LourInf/my-calculator-React/assets/117685514/3f6285e1-a269-4542-a880-2f96585f1a7c)


# Main learnings:

1. **Special prop _props.children_**: _props.children_ is a special prop in React that enables us to place content between the opening and closing tags of my component, and treat it as children:
      - In this project, the Button component uses {props.children} to render the content passed between its opening and closing tags: <Button>1</Button> passes the text content "1" as the children prop to the Button component, rendering it inside the button.
        
                   const Button = (props) => {
                        return (
                          <button className="button">
                            {props.children}
                          </button>
                        );
                      };
      
      - Here, {props.children} is used to render the content passed between the opening and closing tags of the Button component. So, when using <Button>1</Button> in the App component, the text content "1" is passed as the children prop to the Button component, and it gets rendered inside the button.
      

2. **Dynamic className using a ternary operator:**

         className={`button-container ${isOperator(props.children) ? "operator" : ""}`}
  
  
    - The className in the Button component is constructed using a template literal and consists of two parts:
        - "button-container": A constant class name always applied to the div, serving as the base styling for the button container.
        - ${isOperator(props.children) ? "operator" : ""}: A dynamic part of the class name using a ternary operator to conditionally include the class "operator" based on the result of isOperator(props.children):
            - If isOperator(props.children) returns true, the class "operator" is included in the className. So the div will have the class "button-container operator".
            - If isOperator(props.children) returns false, the class is set to "button-container ", which includes an empty string.
                - NOTE: it's a common pattern to use an empty string ("") instead of null for class names in React when you want to conditionally include a class. This ensures that the resulting className is always a string, and React won't ignore it. If instead of entering an empty string ("operator" : "") we put null ("operator" : null) then if it turns false, the class would be set to "button-container null," which would have no effect, as React ignores null and undefined values when rendering classes, but it includes empty strings.
    

3. **CSS Property flex: 1 1**:
    - Syntax: _flex: flex-grow flex-shrink flex-basis_. Defines the ability to grow and shrink relative to other items, and the default size of a flex item
    - It is common to use_ flex: 1 1 _ to make items grow and shrink equally and therefore creating flexible layouts with proportional space distribution. In the calculator, applying flex: 1 1; to buttons in a flex container allows them to share space equally, adjusting to available space dynamically.


4. **"Managing State and Props in the React Calculator**:
         **Step 1: Set Up Initial State:** In the parent component "App", useState hook is created to initialize the state for the calculator's input, initially set to an empty string (""):
    
            function App() {
              const [input, setInput] = useState("");
    
     **Step 2: Pass State as a Prop:** In the parent component "App", inside the return statement, we pass the input state as a prop to the Screen component:
    
            <Screen input={input}/>
          
         **Step 3: Receive and Display Props:** In the child component "Screen", we receive the input prop as an argument and display its content inside a div:
    
            function Screen({ input }) {
              return (
                <div className="input">
                  {input}
                </div>
              );
            }
    
     **Step 4: Handle Button Clicks:** In the parent component "App", we create the function "addInput" to handle button clicks and update the state: The function akes a value (val) and uses setInput to update the input state by concatenating the current state with the provided value
    
            const addInput = (val) => {
              setInput(input + val);
              };
       
      **Step 5: Button Component Interaction:** In the "Button" component, we include the prop "handleClick" to integrate the addInput function with our Button component and therefore handle click events and interact with the state:
    
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
             ...
       
     **Step 6: onClick Event Listener:** in the "Button" component, we add an onClick attribute, which adds a click event listener to the div so that whenever the div is clicked, the function _() => props.handleClick(props.children)_ is executed:
    
    
           function Button(props) {
            ...
            return (
              <div
               ...
                onClick={() => props.handleClick(props.children)}>
              {props.children}
              </div>
            );
          }
     
    - Similarly, we follow those steps to clear the text with ButtonClear: we define the handleClear function in the parent component to clear the input, then we pass the handleClear function as a prop and then use it in our component "ButtonClear" to accept the prop and use it in the "onClick" event.

  5. **Evaluate function with mathjs Package**: in order to calculate the result of any operation when user clicks on "=" we can use the evaluate function from the mathjs library. This library is useful for evaluating mathematical expressions.
       - Import the evaluate library: _import { evaluate } from "mathjs"_.
       - We create the "calculateResult" function, pass it as a prop to the Button component associated with "=", using "handleClick"
       - Install the mathjs package by writing in the terminal the command "npm install mathjs". It will be added to our dependencies inside package.json.
