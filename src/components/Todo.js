import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { createTodo } from '../actions';

//connect()(Todo)
const Todo = ({ todo, oncreatePressed }) => {

    const [input, setInput] = useState('');

    return (
        <div className='container'>
            <h1>Todo List</h1>
            <div className="inline-container">
                <Input style={{ marginRight: "30px" }}
                    onChange={
                        (e) =>
                            setInput(e.target.value)
                    }
                    value={input}
                />
                <Button
                    color="primary"
                    onClick={() => {
                        oncreatePressed(input);
                        setInput('');
                    }}
                >
                    Add
                </Button>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    todo: state.todo
});
const mapDispatchToProps = dispatch => ({
    oncreatePressed: text => dispatch(createTodo(text))
});



export default connect(mapStateToProps, mapDispatchToProps)(Todo);
