import React from 'react';

const Defination = () => {
    return (
        <div>
           <p><b>How React Works :</b>
           React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM
            </p> 
            <p>
                <b>How useState Work :</b>
                The state of a component can change either due to a response to an action performed by the user or an event triggered by the system. Whenever the state changes, React re-renders the component to the browser.
            </p>
        </div>
    );
};

export default Defination;