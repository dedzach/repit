import React from 'react';

const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
        <button
        ref={buttonRef}
        onClick={showModal}>
        Add Exercise</button>
    );
};

export default Trigger;