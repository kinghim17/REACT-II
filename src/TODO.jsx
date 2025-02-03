// // main app 
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { CreateTodo } from './components/CreateTodo'
// import { Todos } from './components/Todos'

// // useEffect hook
// function App() {
//   const [todos, setTodos] = useState([]);


//   return (
//     <div>
//       <CreateTodo></CreateTodo>
//       <Todos todos={todos}></Todos>
//     </div>
//   )
// }

// export default App

// // components
// //create todo
// import { useState } from "react";

// export function CreateTodo(props) {
//     // react-query
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     return <div>
//         <input id="title" style={{
//             padding: 10,
//             margin: 10
//         }} type="text" placeholder="title" onChange={function(e) {
//             const value = e.target.value;
//             setTitle(e.target.value);
//         }}></input> <br />
    
//         <input id="desc" style={{
//             padding: 10,
//             margin: 10
//         }} type="text" placeholder="description" onChange={function(e) {
//             const value = e.target.value;
//             setDescription(e.target.value);
//         }}></input> <br />

//         <button style={{
//             padding: 10,
//             margin: 10
//         }} onClick={() => {
//             // axios
//             fetch("http://localhost:3000/todo", {
//                 method: "POST",
//                 body: JSON.stringify({
//                     title: title,
//                     description: description
//                 }),
//                 headers: {
//                     "Content-type": "application/json"
//                 }
//             })
//                 .then(async function(res) {
//                     const json = await res.json();
//                     alert("Todo added");
//                 })
//         }}>Add a todo</button>
//     </div>
// }

// //only to do
// export function Todos({todos}) {

//     return <div>
//         {todos.map(function(todo) {
//             return <div>
//                 <h1>{todo.title}</h1>
//                 <h2>{todo.description}</h2>
//                 <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
//             </div>
//         })}
//     </div>
// }





//backend
//express
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) { //async function if the db is down
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    // const todos = await todo.find({});

    res.json({
        todos: []
    })

})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);


//mongo
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

//zod
const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})
//exporting the create and update to-do
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}