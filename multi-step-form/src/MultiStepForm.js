import React, { useState } from "react";
import "./MultiStepForm.css";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import SelectAddOns from "./SelectAddOns";
import Summary from "./Summary";
import FormContainer from "./FormContainer"
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Arcade',
    billing: 'monthly',
    addons: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false
    }
});

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlanChange = (plan) => {
    setFormData({
      ...formData,
      plan: plan,
    });
  };

  const handleBillingChange = (billing) => {
    setFormData({
      ...formData,
      billing: billing,
    });
  };

  const handleAddOnChange = (addOn) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        addons: {
            ...prevFormData.addons,
            [addOn]: !prevFormData.addons[addOn]
        }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set submission state
    console.log(formData);
};

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
          />
        );
      case 2:
        return (
          <SelectPlan
            formData={formData}
            handlePlanChange={handlePlanChange}
            handleBillingChange={handleBillingChange}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        );
      case 3:
        return (
          <SelectAddOns
            formData={formData}
            handleAddOnChange={handleAddOnChange}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        );

      case 4:
        return (
          <Summary
            formData={formData}
            handleSubmit={handleSubmit}
            handlePrevStep={handlePrevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormContainer
        isSubmitted={isSubmitted}
        step={step}
        renderForm={renderForm}
    />
);
  };

export default MultiStepForm;