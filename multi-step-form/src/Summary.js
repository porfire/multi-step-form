const Summary = ({ formData, handlePrevStep, handleSubmit }) => {
    const calculateTotal = () => {
        let total = 0;
        if (formData.plan === 'Arcade') total += 9;
        if (formData.plan === 'Advanced') total += 12;
        if (formData.plan === 'Pro') total += 15;

        if (formData.addons.onlineService) total += 1;
        if (formData.addons.largerStorage) total += 2;
        if (formData.addons.customizableProfile) total += 2;

        return total;
    };

    return (
        <div className="form-step">
            <h2>Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="summary">
                <div className="summary-item">
                    <div>{formData.plan} ({formData.billing})</div>
                    <div>${formData.plan === 'Arcade' ? 9 : formData.plan === 'Advanced' ? 12 : 15}/mo</div>
                </div>
                {formData.addons.onlineService && (
                    <div className="summary-item">
                        <div>Online service</div>
                        <div>+$1/mo</div>
                    </div>
                )}
                {formData.addons.largerStorage && (
                    <div className="summary-item">
                        <div>Larger storage</div>
                        <div>+$2/mo</div>
                    </div>
                )}
                {formData.addons.customizableProfile && (
                    <div className="summary-item">
                        <div>Customizable profile</div>
                        <div>+$2/mo</div>
                    </div>
                )}
                <div className="total">
                    <div>Total (per month)</div>
                    <div>+${calculateTotal()}/mo</div>
                </div>
            </div>
            <button type="button" onClick={handlePrevStep}>Go Back</button>
            <button type="submit" onClick={handleSubmit}>Confirm</button>
        </div>
    );
};

export default Summary;