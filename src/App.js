import './App.css';
//import{User} from './user'
//function App() {
 /*const name=<h1>Pratyush</h1>
 const age=<h2>21</h2>
 const email=(<h2>Pedro@pedro</h2>);
 const user= <div>
   {name}
   {age}
   {email}
   </div>                           //parenthesis ka andar bhi likh sakte hai but compulsory nahi hai (<div></div>);
  return (
  <div className="App">
    <div>
    {user}
    {user}
    {user}

    </div>    
    </div>
  );
 
  
}

const getname=()=>{ ye javascript function hai jisme small letter likh sakte hai
  return "Pedro";
};
const Getn=()=>{           //Component ka first letter Capital hona chaiye nahi ti error.A component is a modular and reusable piece of code that defines the functionality and appearance of a part of a user interface.




  return <h1>Pedro</h1>
};
export default App;*/

/*return (
  <div className="App"> Javascript me class ki jagaha className hota hai
    <User/>
    <User/>
    <User/>
  </div>
);
}
const User=()=>{
  return(
  <div>
  <h1>Pedro</h1>
  <h1>21</h1>
  <h1>Pedro@pedro</h1>

  </div>
  );
}*/
/*return(
<div className="App">
  <User name="Pedro" age={21} email="pedro@pedro.com"/>  
  <User name="Jake" age={29} email="jake@pedro.com"/>
  <User name="Jessica" age={190} email="pedro@pedro.com"/>
  

</div>
);//string "" number {}
}//pros Passing data between components.

const User=(props)=>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
     <h1>{props.email}</h1>

    </div>
  )
}*/
/*return(
  <div className="App">
    <Job salary={90000} position="Senior SDE" company="Amazon"/>
    <Job salary={12000} position="Junior SDE" company="Google"/>
    <Job salary={10000} position="Project Manager" company="Netflix"/>


  </div>
);
}
In React, props is a shorthand for "properties" and refers to a mechanism for passing data from a parent component to a child component.


const Job=(props)=>{
  return(
    <div>    
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>              <h1>{props.salary}</h1>, <h1>{props.position}</h1>, and <h1>{props.company}</h1> are JSX expressions that render the salary, position, and company props passed to the Job component, respectively.




    </div>



  );
}  ;

export default App;*/
/*return(
  <div className="App">
    <h1 className="name">Pratyush</h1>
  </div>
)
}
export default App;*/
/*const age=19;
if(age>=18){
  return <h1>Over Age</h1>
}
else{
  return<div className="App">Under Age</div>
}
}
export default App;*/
/*function App(){
  const age=17;
  const isGreen=true;
return (
<div className="App">
  {age>=18 ? <h1>Over age</h1> : <h1>Under age</h1>}
  <h1 style={{color:isGreen?"green":"red"}}>THIS HAS COLOR</h1>
  <h1 style={{color: "red"}}>THIS HAS COLOR</h1>
{{color: "red"}} Reactjs me bracket ke andar   //backgroundColor:"blue" BUT IN Css backgroun-color:blue
{isGreen &&<button>THIS IS A BUTTON</button>}
</div>
);
}
export default App;
*/
/*function App(){
  const names=["Pedro","Jake","Jessica","Mike","Dustbin","Lukas"];
  return(
/*<div className="App">
<h1>{names[1]}</h1>
</div>//agar {names[1]} use nahi karenge tab vo plain text samaj lega aur names[1] dikhega
 
<div className="App">
  {names.map((name)=>{
    return<h1>{name}</h1>;
  })}
</div>
  )
}
//Without the curly brackets, the code inside the <div> element would be treated as plain text rather than JavaScript expressions, causing an error or unexpected behavior in the React app.
//he curly brackets are used to include a JavaScript expression inside JSX. In this case, the expression is the result of calling the map() method on the names array, which generates a new array of <h1> elements.


export default App;*/
/*but why curly brackets for each one why not in a single curly bracket
You could define the users array using a single curly bracket like this:


yaml
Copy code
const users = [
  {                   //har curly bracket ko likha hai jinke object hai
    name: "Padro",
    age: 21
  },                     inhe ese bhi likh sakte hai 
   {name: "Padro",age: 21},     
     {
    name: "Jake", //doosra object 
    age: 25
  },
  {
    name: "Jessica",
    age: 45
  }
];
This defines an array of three objects with name and age properties. The objects are enclosed within a single pair of curly brackets {}.

Using a single pair of curly brackets to enclose multiple objects is a common pattern in JavaScript when defining an array of objects or a list of items. It can make the code more concise and easier to read, especially when the objects have many properties.

However, it's also perfectly valid to define each object in its own pair of curly brackets, as in the original code snippet. This can make it easier to read and modify individual objects, especially when working with a smaller number of objects or when the objects have fewer properties.




/*function App(){
  const users=[
    {name:"Padro",age:21},
    {name:"Jake",age:25},
    {name:"Jessica",age:45},

  ];
 /* return (
    <div className="App">
      {users.map((userrr)=>{
        return(
         <div>
           {userrr.name}{userrr.age}
         </div>
        );
      })}
    </div>

  );
}*/
/*return (
  <div className="App">
    {users.map((user)=>{    // Bas (()=>{}) parenthesis ka andar function
      return<User name={user.name} age={user.age}/>;
    })}
  </div>
/*  why return is used 2 times?
The return statement within the arrow function is used to return the new <User> component for each object in the array.
Without the return statement, the new <User> components would not be generated and rendered on the page.
  To summarize, the first return statement returns the JSX code for the individual child elements, while the second return statement returns the entire JSX expression that defines the App component.

);
}

/*const User=(props)=>{
  return (
    <div>
      {props.name}{props.age}
    </div>
  );
};
export default App;
*/
/*function App(){
  const planets=[
    {name:"Mars",isGasPlanet: false},
    {name:"Earth",isGasPlanet: false},
    {name:"Jupiter",isGasPlanet: true},
    {name:"Venus",isGasPlanet: false},
    {name:"Neptune",isGasPlanet: true},
    {name:"Uranus",isGasPlanet: true}
*/

  //];
  /*return(
  <div className="App">
    {planets.map((plane)=>{//map sare element me jaega
   /*if(plane.isGasPlanet){
     return<h1>{plane.name}</h1>;
   }*/
 
 /* })};
  </div>
  );
}
export default App;*/
/*return(
  <div className="App">
    {planets.map(
   (planet)=>planet.isGasPlanet &&<h1>{planet.name}</h1>
    )}
    </div>
);
    }
    export default App;*/
 //import {useState} from "react";
    /*function App(){
      let age=0;
      const increaeAge=()=>{
        age=age+1;
        console.log(age);
      };
      return(
      <div className="App">
       {age}
       <button onClick={increaseAge}>Increase Age</button>
        </div>
      );//onClick React.js me and onclick javascript
    }
    export default App;*/
    /*import {useState} from "react";
    function App(){
      const [age,setAge]=useState(1); //     age value current value,function to change value,useState function returns array with 2 items current value static variable and function to update value of state variable
      const increaseAge=()=>{
        //setAge(5);
       // setAge(age+1);
       setAge(age-1);

      };
      return(
      <div className="App">
       {age}
       <button onClick={increaseAge}>Increase Age</button>
        </div>
      );//onClick React.js me and onclick javascript
    }
    export default App;*/
    /*import {useState} from "react";
    function App(){
     const[inputValue,setInputValue]=useState("");//The "useState" function returns an array with two items: the current value of the state variable (initially set to an empty string), and a function to update the value of the state variable (called "setInputValue" in this case).
     const handleInputChange=(event)=>{//handleInputChange function is called every time the input field's value changes
       setInputValue(event.target.value);//console.log(event.target.value) logs the current value of the input field to the console every time the user types something into the input field.
     };
      return(
        //onChange event handler on the input field, React is able to track changes to the input field's value and call the handleInputChange function every time the user types something new. This allows us to update the state of our React component based on what the user is typing.
      <div className="App">
       <input type="text" onChange={handleInputChange}/> 
{inputValue}
        </div>
      );//onClick React.js me and onclick javascript
    }
    export default App;*/
   /* import {useState} from "react";
    function App(){
      const [showText,setShowText]=useState(true)
      return(
        <div className="App">
          <button onClick={()=>{setShowText(!showText)}}>Show/Hide</button>
          {showText===true && <h1>HI MY NAME IS Pratyush</h1>}
          </div>// button with the text "Show/Hide" and a conditional rendering of an h1 element based on the value of the showText state variable. The conditional rendering is achieved using the && operator, which only renders the h1 element if showText is true
      );
    }//          <button onClick={()=>{alert("Hey")}}>Show/Hide</button>

    export default App;*/
    /*import {useState} from "react";
    function App(){
      const [textColor,setTextColor]=useState("");
      return(
        <div className="App">
          <button onClick={()=>{ 
            setTextColor(textColor==="black" ? "red" : "black");

          }}>Show/Hide</button>
          <h1 style={{color:textColor}}>HI MY NAME IS PEDRO</h1>
          </div>// button with the text "Show/Hide" and a conditional rendering of an h1 element based on the value of the showText state variable. The conditional rendering is achieved using the && operator, which only renders the h1 element if showText is true
      );
    }//          <button onClick={()=>{alert("Hey")}}>Show/Hide</button>
//          <h1 style={{color:"red"}}>HI MY NAME IS PEDRO</h1>
//            setTextColor("red");

    export default App;*/
    /*import{useState}from "react";
    function App(){
      const [count,setCount]=useState(0);
      const increase=()=>{
        setCount(count+1);
      }; 
      const decrease=()=>{
        setCount(count-1);
      };
      const setToZero=()=>{
        setCount(0);
      };
      return(
        <div className="App">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={setToZero}>Set to Zero</button>
        
          {count}
        </div>
      );
    }
    export default App;*/
   /* import{useState} from "react";
    import{Task}from "./Task"
    function App(){
      const [todoList,setTodoList]=useState([]);//todoList is an empty array that will hold all the tasks, and newTask is an empty string that will store the value of the input field where users can type in a new task.
      const[newTask,setNewTask]=useState("");
      /*{
        id:1
        taskName:"do homework"
      } */
     
     // const handleChange=(event)=>{//handleChange function is called every time the user types something into the input field. It updates the newTask variable to reflect what the user typed.     
       // setNewTask(event.target.value);/*(event) in JavaScript is a parameter that represents an event that has occurred, such as a mouse click or a key press. When used in React, (event) is often used as an argument for event handlers like onClick or onChange.

       // For example, in the code you provided, the handleChange function is an event handler that takes (event) as a parameter. This function is called every time the user types something into the input field. The parameter event contains information */
      //};
       /*Whenever the user types something into the input field, the handleChange function updates the newTask variable to reflect what the user typed.
The {newTask} expression is just for testing purposes, to make sure that the newTask variable is updating correctly.
In React, event.target.value is a way to access the current value of an input field when the user types something into it.
event.target.value in this case would give you the current value of the input field, which is then used to update the newTask state variable with the setNewTask function. This allows the application to keep track of the current value of the input field as the user types, and use that value to add a new task to the list.
*/
/*const addTask=()=>{
  const task={
    id:todoList.length===0?1 :todoList[todoList.length-1].id+1,
taskName:newTask,
completed:false,
  };
  setTodoList([...todoList,task]);//addTask function is called when the user clicks the "Add Task" button. It adds the current value of newTask to the todoList array
};/*...todoList part of the code is called the spread operator. It creates a new array with all the elements of the existing todoList array. By including the existing todoList array elements, we ensure that we don't lose any data when adding a new task.   The spread operator in JavaScript is represented by three dots (...) and is used to spread the elements of an array or object into another array or object.*/
 /* const deleteTask=(id)=>{//deleteTask function is called when the user clicks the "X" button next to a task. It removes the task from the todoList array
setTodoList(todoList.filter((task)=> task.id!==id));
  };
  const completeTask=(id)=>{
    setTodoList(
      todoList.map((task)=>{
  if(task.id===id){
    return{...task,completed:true};
  }else{
    return task;*/
  /*}
 })
);
};
/*if(task===taskname){
  return false;
}else{
  return true; */

//break//setTodoList(newTodoList);
  //};

//const newTodoList =[...todoList,newTask];
//setTodoList([...todoList,newTask]);
//};
/*const arr=["pedro","jessica","james"]; filter ko use kiya jata hai kuch remove karne ke liye
const newArr=arre.filter(()=>{
  if(name==="pedro"){
    return false;
  }else{
    return true;
  }
})*/ 
/*const deleteTask =(taskName)=>{
setTodoList()
}*/
  /*return(
        <div className="App">
          <div className="addTask">
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
            </div>
          

          <div className="list">
            {todoList.map((task)=>{ //map function is used to loop through the todoList array and display each task along with a delete button.
return<Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask}/>;
            })}
          </div>

        </div>
  
      );//          {newTask} likhenge tab side me likhta hua aege

          }
    export default App; 
   
    /*This is a code for a basic to-do list application built using React framework. It allows users to add new tasks and delete existing ones from the list. Let me explain the code in simple terms for you:

Importing dependencies: The code first imports the useState function from the React package. This function is used to manage state in a React component.

Setting up state: The App function is a React component that initializes two state variables, todoList and newTask. The todoList is an empty array that will hold all the tasks, and newTask is an empty string that will store the value of the input field where users can type in a new task.

Handling input changes: The handleChange function is called every time the user types something into the input field. It updates the newTask variable to reflect what the user typed.

Adding tasks: The addTask function is called when the user clicks the "Add Task" button. It adds the current value of newTask to the todoList array.

Deleting tasks: The deleteTask function is called when the user clicks the "X" button next to a task. It removes the task from the todoList array.

Rendering the UI: The return statement contains the UI code that will be rendered on the screen. It consists of an input field, a button to add tasks, and a list of tasks that have been added. The map function is used to loop through the todoList array and display each task along with a delete button.

Overall, this code is a basic example of how React components can be used to create interactive web applications. The useState function is used to manage state, and functions like handleChange, addTask, and deleteTask are used to modify the state based on user actions.



import{useState} from "react"
import{Text} from "./Text";
function App(){
  const [showText,setShowText]=useState(false);
  return(
    <div className="App">
      <button
      onClick={()=>{
setShowText(!showText);
        }}
        >
          Show Text
        </button>
        {showText &&<Text/>}
    </div>
  );
}
  export default App; */
 /* import{useState} from "react"
  import{Text} from "./Text";
  function App(){
    const [showText,setShowText]=useState(false);
    return(
      <div className="App">
        <button
        onlick={()=>{
  setShowText(!showText);
          }}
          >
            Show Text
          </button>
          {showText &&<Text/>}
      </div>
    );
  }
    export default App;  */
     /* import React from "react";
  import {useState,useEffect} from "react";
  export const Text=()=>{
      const[text,setText]=useState("");
      useEffect(()=>{
  console.log("COMPONENT MOUNTED");
  return()=>{                //},[]);Mounting and updating and },[text]) mounting;
    console.log("COMPONENT UNMOUNTED");
  };
      },[]);//Mounting and Unmounting 
  
      return(
          <div>
              <input
              onChange={(event)=>{
                  setText(event.target.value);
              }}
              />
              <h1>{text}</h1>
          </div>
      );
  };     
  
  export default App; */



  /*import Axios from "axios";
  import {useEffect,useState} from "react";
  function App(){
   // fetch("http://catfact.ninja/fact")
    //.then((res)=>res.json())
    //.then((data)=>{
      //console.log(data);
    //});

    const[catFact,setCatFact]=useState("");
    const fetchCatFact=()=>{
      Axios.get("http://catfact.ninja/fact").then((res)=>{
        setCatFact(res.data.fact);
      });
    };

    useEffect(()=>{
fetchCatFact();
  },[]);
    return (
      <div className="App">
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
      </div>
    );
  }
export default App;*/
/*import Axios from "axios";
import{useEffect,useState}from "react";

function App(){
  const[name,setName]=useState("");
  const[predictedAge,setPredictedAge]=useState(null);
  const fetchData=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
setPredictedAge(res.data);
    })
  };
  return(
    <div className="App">
      <input 
      placeholder="Ex. Pedro..."
      onChange={(event)=>{
        setName(event.target.value);
      }}
      />
<button onClick={fetchData}>Predict Age</button>
<h1>Predicte Name:{predictedAge?.name}</h1>
<h1>Predicte Predicted Age:{predictedAge?.age}</h1>
<h1>Predicte Count:{predictedAge?.count}</h1>

    </div>
  );
}
export default App;
import Axios from "axios";
import{useEffect,useState} from "react";
function App(){
  const[generatedExcuse,setGeneratedExcuse]=useState("");
    const fetchExcuse=(excuse)=>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{
setGeneratedExcuse(res.data[0].excuse);
    });
  };
  return(

   <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={()=>fetchExcuse("party")}>Party</button>
      <button onClick={()=>fetchExcuse("family")}>Family</button>
      <button onClick={()=>fetchExcuse("office")}>Office</button>
      <button>Family</button>
      <button>Office</button>

<p>{generatedExcuse}</p>
      
    </div>
  );
}
export default App;*/
//import{useEffect,useState}from "react";
/*import React, { useState,createContext} from "react";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import{Home} from "./pages/Home";
import{Profile} from "./pages/Profile";
import{Contact} from "./pages/Contact";
import{Navbar} from "./Navbar";
//import { Menu } from "./pages/Menu";
export const AppContext=createContext();

function App(){
  const[username,setUsername]=useState("PedroTech");
  return(
    <div className="App">
      <AppContext.Provider value={{username,setUsername}}>
<Router>
  <Navbar/>
 <Routes>
<Route path="/" element={<Home />}/>
<Route path="/profile" element={<Profile />}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="*" element={<h1>Page Not Found</h1>}/>
  </Routes>
</Router>
</AppContext.Provider>
    </div>
  );
}
export default App;*/
import{form} from "./components/Form";
function App(){
  return(
    <div className="App">
      <form/>
    </div>
  );
}
export default App;