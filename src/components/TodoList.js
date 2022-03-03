import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';

const TodoList = ({ todo = [], onremovePressed }) => {
    return (
        <>
            {todo.map(tod =>
                <div>
                    <h3>{tod.text}</h3>
                    <button onClick={
                        () => {
                            onremovePressed(tod.text)
                        }
                    }>delete</button>
                </div>
            )}
        </>
    )
}

const mapStateToProps = state => ({
    todo: state.todo
});
const mapDispatchToProps = dispatch => ({
    onremovePressed: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
