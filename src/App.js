import React, { useEffect } from "react";
import TodoList from "./components/todo/TodoList";
import Context from "./components/context";
import Loader from "./components/Loader";
import AddTodo from "./components/todo/AddTodo";
import Modal from "./components/Modal/Modal";

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then((response) => response.json())
            .then((todos) => {
                setTodos(todos);
                setLoading(false);
            });
    }, []);

    function toggleTodo(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title: title,
                    id: Date.now(),
                    completed: false,
                },
            ])
        );
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React tutorial</h1>

				<Modal/>

                <AddTodo onCreate={addTodo} />
                {loading && <Loader />}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : loading ? null : (
                    <p>No todos</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;
