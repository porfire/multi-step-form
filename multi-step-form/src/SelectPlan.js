import React from 'react';

const SelectPlan = ({ formData, handlePlanChange, handleBillingChange, handlePrevStep, handleNextStep }) => {
    return (
        <div className="form-step">
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            <div className="plans">
                <div
                    className={`plan ${formData.plan === 'Arcade' ? 'selected' : ''}`}
                    onClick={() => handlePlanChange('Arcade')}
                >
                    <div className="icon">🎮</div>
                    <div className="details">
                        <div className="plan-name">Arcade</div>
                        <div className="plan-price">$9/mo</div>
                    </div>
                </div>
                <div
                    className={`plan ${formData.plan === 'Advanced' ? 'selected' : ''}`}
                    onClick={() => handlePlanChange('Advanced')}
                >
                    <div className="icon">🕹️</div>
                    <div className="details">
                        <div className="plan-name">Advanced</div>
                        <div className="plan-price">$12/mo</div>
                    </div>
                </div>
                <div
                    className={`plan ${formData.plan === 'Pro' ? 'selected' : ''}`}
                    onClick={() => handlePlanChange('Pro')}
                >
                    <div className="icon">🎮</div>
                    <div className="details">
                        <div className="plan-name">Pro</div>
                        <div className="plan-price">$15/mo</div>
                    </div>
                </div>
            </div>
            <div className="billing-toggle">
                <span
                    className={formData.billing === 'monthly' ? 'selected' : ''}
                    onClick={() => handleBillingChange('monthly')}
                >
                    Monthly
                </span>
                <span
                    className={formData.billing === 'yearly' ? 'selected' : ''}
                    onClick={() => handleBillingChange('yearly')}
                >
                    Yearly
                </span>
            </div>
            <button type="button" onClick={handlePrevStep}>Go Back</button>
            <button type="button" onClick={handleNextStep}>Next Step</button>
        </div>
    );
};

export default SelectPlan;
