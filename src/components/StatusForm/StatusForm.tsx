import React from 'react';

type IProps = {
    statusText: string
    onClose: () => void
}

const StatusForm = ({statusText, onClose} : IProps) => {
    return (
        <>
            {
                statusText !== "...Loading" ? <>
                    <h3 className="popup__status-text">{statusText}</h3>
                    <button type="button" onClick={onClose} className="popup__status-btn">Ok</button>
                </> : <h3>{statusText}</h3>
            }
        </>
    );
};

export default StatusForm;