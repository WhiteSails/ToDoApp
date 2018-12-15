import React from 'react';

const Counter = ({tasksCounter}) => {
    return (
        <h1 className='m-5'>
            I have {tasksCounter} tasks to do.
        </h1>

    );
};

export default Counter;