import { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./cheatsheet.css";

const CodeBlock = ({ language, value }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <>
      <div className="code-block-container">
        <div className="code-block">
          <SyntaxHighlighter
            language={language}
            style={darcula}
            wrapLines={true}
            customStyle={{ borderRadius: "5px", padding: "10px" }}
            className="code-block"
          >
            {value}
          </SyntaxHighlighter>
        </div>
        <button className="copy-button" onClick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </>
  );
};

function Cheatsheet() {
  
  const markdownContent = `
# **JSX**

JSX stands for JavaScript XML. 
JSX is basically a syntax extension of JavaScript. It helps us to write HTML in JavaScript and forms the basis of React Development. Using JSX is not compulsory but it is highly recommended for programming in React as it makes the development process easier as the code becomes easy to write and read. 

1. **Sample JSX code:**

\`\`\`bash
const ele = <h1>This is sample JSX</h1>;
\`\`\`



# **React Elements:**

React elements are different from DOM elements as React elements are simple JavaScript objects and are efficient to create. React elements are the building blocks of any React app and should not be confused with React components.


- **1. Class Element Attributes:**
  - **Description:** Passes attributes to an element. The major change is that class is changed to className
  - **Syntax:** <div className="exampleclass"></div>

- **2. Style Element Attributes:**
  - **Description:** Adds custom styling. We have to pass values in double parenthesis like {{}}
  - **Syntax:** <div style={{styleName: Value}}></div>

- **3. Fragments:**
  - **Description:** Used to create single parent component
  - **Syntax:** <>Other Components</>


# **ReactJS Import and Export**

- **1. Importing Default exports:**
  - **Description:** Imports the default export from modules.
  - **Syntax:** import MOD_NAME from "PATH"

- **2. Importing Named Values:**
  - **Description:** Imports the named export from modules.
  - **Syntax:** import {NAME} from "PATH"

- **3. Multiple imports:**
  - **Description:** Used to import multiple modules, can be user-defined or npm packages.
  - **Syntax:** import MOD_NAME, {NAME} from "PATH"

- **4. Default Exports:**
  - **Description:** Creates one default export. Each component can have one default export.
  - **Syntax:** export default MOD_NAME

- **5. Named Exports:**
  - **Description:** Creates Named Exports when there are multiple components in a single module.
  - **Syntax:** export default {NAME}

- **6. Multiple Exports:**
  - **Description:** Exports multiple named components.
  - **Syntax:** export default {NAME1, NAME2}


In ReactJS we use importing and exporting to import already created modules and export our own components and modules rescpectively.

## **Functional Component:**
  - Description: Simple JS functions and are stateless
  - Syntax:
  \`\`\`bash
  javascript
    function demoComponent() {
        return (<>
            // CODE
        </>);
    }
  \`\`\`
  

## **Class-based Component:**
  - Description: Uses JS classes to create stateful components
  - Syntax:
  \`\`\`bash
  javascript
  class DemoComponent extends React.Component {
      render() {
          return <>//CODE</>;
      }
  }
  \`\`\`

## **Nested Component:**
  - Description: Creates a component inside another component
  - Syntax:

  \`\`\`bash
  javascript
    function demoComponent() {
        return (<>
            // CODE
        </>);
    }
  \`\`\`

3.
\`\`\`bash
// Functional Component

export default function App() {
	return (
		<div >
			Hello Geeks
			Lets start learning React
		</div>
	)
}

// Class Component with nesting
javascript
    function demoComponent() {
        return (<>
            <AnotherComponent/>
        </>);
    }


\`\`\`

# Managing Data Inside and Outside Components(State and props)

- **1. props:**
  - **Description:** Passes data between components and is read-only. Mainly used in functional components.
  - **Syntax:**
  // Passing
  <Comp prop_name=”VAL”/>
  
  //Accessing
  <Comp>{this.props.prop_name}</Comp>
    

- **2. state:**
  - **Description:** Manages data inside a component and is mutable. Used with class components.
  - **Syntax:**
    
    javascript
    constructor(props) {
       super(props);
       this.state = {
           var: value,
       };
    }
    

- **3. setState:**
  - **Description:** Updates the value of a state using a callback function. It is an asynchronous function call.
  - **Syntax:**
    javascript
    this.setState((prevState)=>({
          // CODE LOGIC
    }))
    
    \`\`\`bash
    const App = () => {
      const message = "Hello from functional component!";
      
      return (
        <div>
        <ClassComponent message={message} />
        </div>
      );
      };
      
      class ClassComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
        message: this.props.message
        };
      }
      
      render() {
        return (
        <div>
          <h2>Class Component</h2>
          <p>State from prop: {this.state.message}</p>
        </div>
        );
      }
      }
      
    
    \`\`\`
    
# Lifecycle of Components
- The lifecycle methods in ReactJS are used to control the components at different stages from initialization till unmounting.

## **Mounting Phase methods**
- **1. constructor:**
  - **Description:** Runs before component rendering.
  - **Syntax:** constructor(props){}

- **2. render:**
  - **Description:** Used to render the component.
  - **Syntax:** render()

- **3. componentDidMount:**
  - **Description:** Runs after the component is rendered.
  - **Syntax:** componentDidMount()

- **4. componentWillUnmount:**
  - **Description:** Runs before a component is removed from the DOM.
  - **Syntax:** componentWillUnmount()

- **5. componentDidCatch:**
  - **Description:** Used to catch errors in components.
  - **Syntax:** componentDidCatch()

# Updating Phase Methods
- **1. componentDidUpdate:**
  - **Description:** Invokes after the component is updated.
  - **Syntax:** componentDidUpdate(prevProps, prevState, snapshot)

- **2. shouldComponentUpdate:**
  - **Description:** Used to avoid unnecessary calls during re-rendering.
  - **Syntax:** shouldComponentUpdate(nextProps, nextState)

- **3. render:**
  - **Description:** Render the component after update.
  - **Syntax:** render()

\`\`\`bash
import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hello: "World!" };
	}

	componentWillMount() {
		console.log("componentWillMount()");
	}

	componentDidMount() {
		console.log("componentDidMount()");
	}

	changeState() {
		this.setState({ hello: "Geek!" });
	}

	render() {
		return (
			<div>
				<h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
				<h2>
					<a onClick={this.changeState.bind(this)}>Press Here!</a>
				</h2>
			</div>);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate()");
		return true;
	}

	componentWillUpdate() {
		console.log("componentWillUpdate()");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate()");
	}
}

ReactDOM.render(
	<Test />,
	document.getElementById('root'));

  
  
\`\`\`

# Conditional Rendering
In React, conditional rendering is used to render components based on some conditions. If the condition is satisfied then only the component will be rendered. This helps in encapsulation as the user is allowed to see only the desired component and nothing else.

- **1. if-else:**
  - **Description:** Component is rendered using if-else block.
  - **Syntax:** 
    javascript
    if (condition) {
        return <COMP1 />;
    } else {
        return <COMP2/>;
    }
    

- **2. Logical && Operator:**
  - **Description:** Used for showing/hiding a single component based on a condition.
  - **Syntax:** {condition && <Component/>}

- **3. Ternary Operator:**
  - **Description:** Component is rendered using a ternary operator.
  - **Syntax:**
    javascript
    {condition
        ? <COMP1/>
        : <COMP2/>
    }
    

\`\`\`bash
// Conditional Rendering Using if-else

import React from 'react';
import ReactDOM from 'react-dom';

// Example Component
function Example(props)
{
	if(!props.toDisplay)
		return null;
	else
		return <h1>Component is rendered</h1>;
}

ReactDOM.render(
	<div>
		<Example toDisplay = {true} />
		<Example toDisplay = {false} />
	</div>,
	document.getElementById('root')
);

\`\`\`
  
# React Lists
We can create lists in React in a similar manner as we do in regular JavaScript i.e. by storing the list in an array. In order to traverse a list we will use the map() function.

Keys are used in React to identify which items in the list are changed, updated, or deleted. Keys are used to give an identity to the elements in the lists. It is recommended to use a string as a key that uniquely identifies the items in the list. 

## **Code Snippet:**

\`\`\`bash
const arr = [];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
\`\`\`

\`\`\`bash
import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1,2,3,4,5];

const updatedNums = numbers.map((number)=>{
	return <li>{number}</li>;
});

ReactDOM.render(
	<ul>
		{updatedNums}
	</ul>,
	document.getElementById('root')
);

\`\`\`

# React DOM Events
Similar to HTML events, React DOM events are used to perform events based on user inputs such as click, onChange, mouseOver etc

- **1. Click:**
  - **Description:** Triggers an event on click.
  - **Syntax:** <button onClick={func}>CONTENT</button>

- **2. Change:**
  - **Description:** Triggers when some change is detected in the component.
  - **Syntax:** <input onChange={handleChange} />

- **3. Submit:**
  - **Description:** Triggers an event when a form is submitted.
  - **Syntax:** <form onSubmit={(e) => {//LOGIC}}></form>

\`\`\`bash
import React, { useState } from "react";

const App = () => {
// Counter is a state initialized to 0
const [counter, setCounter] = useState(0)

// Function is called everytime increment button is clicked
const handleClick1 = () => {
	// Counter state is incremented
	setCounter(counter + 1)
}

// Function is called everytime decrement button is clicked
const handleClick2 = () => {
	// Counter state is decremented
	setCounter(counter - 1)
}

return (
	<div>
	Counter App
		<div style={{
			fontSize: '120%',
			position: 'relative',
			top: '10vh',
		}}>
			{counter}
		</div>
		<div className="buttons">
			<button onClick={handleClick1}>Increment</button>
			<button onClick={handleClick2}>Decrement</button>
		</div>
	</div>
)
}

export default App

\`\`\`


# React Hooks

Hooks are used to give functional components an access to use the states and are used to manage side-effects in React. They were introduced React 16.8. They let developers use state and other React features without writing a class For example- State of a component It is important to note that hooks are not used inside the classes.

- **1. useState:**
  - **Description:** Declares a state variable inside a function.
  - **Syntax:** const [var, setVar] = useState(Val);

- **2. useEffect:**
  - **Description:** Handles side effects in React.
  - **Syntax:** useEffect(<FUNCTION>, <DEPENDENCY>)

- **useRef:**
  - **Description:** Directly creates a reference to a DOM element.
  - *Syntax:* const refContainer = useRef(initialValue);

- **3. useMemo:**
  - **Description:** Returns a memoized value.
  - **Syntax:** const memVal = useMemo(function, arrayDependencies)


\`\`\`bash
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
function App() {
	const [click, setClick] = useState(0);
	// using array destructuring here
	// to assign initial value 0
	// to click and a reference to the function
	// that updates click to setClick
	return (
		<div>
			<p>You clicked {click} times</p>

			<button onClick={() => setClick(click + 1)}>
				Click me
			</button>
		</div>
	);
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
	<App />
</React.StrictMode>
);

\`\`\`




`;

  return (
    <div className="Cheatsheet" >
      <Markdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <CodeBlock
                language={match[1]}
                value={String(children).replace(/\n$/, "")}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        className="markdown-content w-1/2 p-4 mx-auto "
      >
        {markdownContent}
      </Markdown>
    </div>
  );
}

export default Cheatsheet;
