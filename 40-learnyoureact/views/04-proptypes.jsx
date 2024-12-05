import React, { Children } from "react";
import PropTypes from 'prop-types';

export default function TodoBox() {
    return (
        <div className="todoBox">
            <h1>Todos</h1>
            <TodoList />
            <TodoForm />
        </div>
    );
}

function TodoList() {
    return (
        <div className="todoList">
            <table style={{ border: "2px solid black" }}>
                <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    <Todo title="Learn React">15:00</Todo>
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
    return (
        <tr>
            <td style={{ border: "1px solid black" }}>{title}</td>
            <td style={{ border: "1px solid black" }}>{children}</td>
        </tr>
    );
}

Todo.propTypes = {
    title: PropTypes.string.isRequired
};