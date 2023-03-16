import React, { useState, useMemo } from 'react';
import TodoList from './TodoList';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: black;
  text-align: left
`

function TodoApp() {

    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
    ])
    const [newTodo, setNewTodo] = useState('');
    const completedCount = useMemo(() => todos.filter(todo => todo.completed).length, [todos])

    function handleToggle(id) {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }
        
    function handleRemove(id) {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!newTodo) return
        setTodos(todos => [...todos, { id: Date.now(), text: newTodo, completed: false }])
        setNewTodo('')
    }

    return (
        <>
        <h1>Todo List</h1>
        <StyledDiv>
            <p>Completed: {completedCount}</p>
                <TodoList todos={todos} onToggle={handleToggle} onDelete={ handleRemove } />
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button type="submit">Add</button>
            </form>
        </StyledDiv>
        </>
    )
}

export default TodoApp;