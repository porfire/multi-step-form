import React from 'react';
import Confirmation from './Confirmation';

const FormContainer = ({ isSubmitted, step, renderForm }) => {
    return (
        <div className="form-wrapper">
            <div className="sidebar">
                <div className={`step ${step === 1 ? 'active' : ''}`}>
                    STEP 1<br />YOUR INFO
                </div>
                <div className={`step ${step === 2 ? 'active' : ''}`}>
                    STEP 2<br />SELECT PLAN
                </div>
                <div className={`step ${step === 3 ? 'active' : ''}`}>
                    STEP 3<br />ADD-ONS
                </div>
                <div className={`step ${step === 4 ? 'active' : ''}`}>
                    STEP 4<br />SUMMARY
                </div>
            </div>
            <div className="form-container">
                {isSubmitted ? (
                    <div className="form-step">
                        <Confirmation/>
                    </div>
                ) : (
                    <>
                        {renderForm()}
                    </>
                )}
            </div>
        </div>
    );
};

export default FormContainer;
