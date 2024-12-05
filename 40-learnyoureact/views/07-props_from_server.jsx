import React from "react";
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function TodoBox({ data }) {
    return (
        <div className="todoBox">
            <h1>Todos</h1>
            <TodoList data = {data} />
            <TodoForm />
        </div>
    );
}

function TodoList({ data }) 
{
    let todo;
    try { todo = data.map(obj => <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo> ); } 
    catch (error) 
    { 
        if (error instanceof TypeError)
            todo = <Todo title={data.title} key={data.title}>{data.detail}</Todo>
    }
    
    return (
        <div className="todoList">
            <table style={{ border: "2px solid black;" }}>
                <tbody>
                    {todo}
                </tbody>
            </table>
        </div>
    );
}

function TodoForm() {
    return (
        <div className="todoForm">
            I am a TodoForm.
        </div>
    );
}

function Todo({ title, children }) {
    const [checked, setChecked] = useState(false);
    return (
        <tr>
            <td style={{border: style.tableContent.border}}>
                <input type="checkbox" checked={checked} onChange={setChecked}/>
            </td>
            <td style={{ border: style.tableContent.border }}>{title}</td>
            <td style={{ border: style.tableContent.border }}>{children}</td>
        </tr>
    );
}

Todo.propTypes = {
    title: PropTypes.string.isRequired
};

const style = {
    tableContent: {
        border: "1px solid black;"
    }
};