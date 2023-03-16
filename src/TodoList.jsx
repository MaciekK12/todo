import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.li`
display: flex;
justify-content: space-between;
width: 300px;
  color: black;
  text-align: left
`

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
        {todos.map(todo => (
            <ItemContainer key={todo.id}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                </span>
                <button onClick={()=> onDelete(todo.id)}>X</button>
            </ItemContainer>
        ))}
    </ul>
  )
}

export default TodoList