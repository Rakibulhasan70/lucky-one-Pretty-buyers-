import React from 'react';
import './Qus.css'

const Qus = () => {
    return (
        <div>
            <div className="Question-NO-1">
                <h1>How Reacts Works?</h1>
                <p>React is a Javascript Library. You can use it to build single-page applications and mobiles apps. Nowadays react is the most powerful library in our programming world. If you use react you have to create many components for proper use. But if someone wants to create a complex UI, you need to order the components logically. To do that, we need to look at what state is in React. There is a six-core concept for using react ..JSX, React  Components,  Components Interacting, and other things.
                </p>
            </div>

            <div className="Question-No-2">
                <h1>How useState Works??</h1>
                <p>
                    Hooks are a fundamentally simpler way to encapsulate stateful behaviour and side effects in user interfaces. useState is a Hook that allows you to have state variables in functional components. useState enables you to add state to function components, Calling React.useState...You can pass the value to the function ...and also the return variable.
                </p>
            </div>
        </div>
    );
};

export default Qus;