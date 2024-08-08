// src/components/SelectAddOns.js
import React from 'react';

const SelectAddOns = ({ formData, handleAddOnChange, handlePrevStep, handleNextStep }) => {
    return (
        <div className="form-step">
            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="addons">
                <label>
                    <input
                        type="checkbox"
                        checked={formData.addons.onlineService}
                        onChange={() => handleAddOnChange('onlineService')}
                    />
                    <div className="addon-details">
                        <div className="addon-name">Online service</div>
                        <div className="addon-description">Access to multiplayer games</div>
                        <div className="addon-price">+$1/mo</div>
                    </div>
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={formData.addons.largerStorage}
                        onChange={() => handleAddOnChange('largerStorage')}
                    />
                    <div className="addon-details">
                        <div className="addon-name">Larger storage</div>
                        <div className="addon-description">Extra 1TB of cloud save</div>
                        <div className="addon-price">+$2/mo</div>
                    </div>
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={formData.addons.customizableProfile}
                        onChange={() => handleAddOnChange('customizableProfile')}
                    />
                    <div className="addon-details">
                        <div className="addon-name">Customizable profile</div>
                        <div className="addon-description">Custom theme on your profile</div>
                        <div className="addon-price">+$2/mo</div>
                    </div>
                </label>
            </div>
            <button type="button" onClick={handlePrevStep}>Go Back</button>
            <button type="button" onClick={handleNextStep}>Next Step</button>
        </div>
    );
};

export default SelectAddOns;
