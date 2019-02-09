import React from 'react';

const TestStart = (props) => {
    const { store } = props;
    return (
        <div>
            <button className='test-start' onClick={() => store.dispatch({
                        type: "START_TEST",
                        startTest: true
                    })}>START</button>
        </div>
    );
}

export default TestStart;