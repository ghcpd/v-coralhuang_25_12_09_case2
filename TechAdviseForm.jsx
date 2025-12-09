import React, { useState } from 'react';
import './TechAdviseForm.css';

const TechAdviseForm = () => {
  const [formData, setFormData] = useState({
    messageId: 'd85b79a8-5b0d-5d74-bc41-fb2fe0bfa6fe',
    platformTechnology: '',
    languages: [],
    payment: '',
    codebase: [],
    projectName: '',
    timeline: '',
    itTeamSize: '',
    projectNeeds: ''
  });

  const [errors, setErrors] = useState({});

  const platformOptions = ['Archer', 'AWS Cloud', 'Windows Desktop', 'Web Application', 'Database', 'SAI360'];
  const languageOptions = ['JavaScript', 'PHP', '.NET', 'Python', 'SQL'];
  const paymentOptions = ['Volunteer', 'Quid Pro Quo'];
  const codebaseOptions = ['React', 'Node', 'Flask', 'Laravel', 'FastAPI', 'VuesticUI'];
  const timelineOptions = ['1 month', '2 month', '3 month', '5 month', '8 month', '13 month'];
  const itTeamSizeOptions = ['0', '1', '2', '3', '5', '8'];

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.platformTechnology.trim()) {
      newErrors.platformTechnology = 'Platform Technology is required';
    }
    if (formData.languages.length === 0) {
      newErrors.languages = 'At least one language must be selected';
    }
    if (!formData.payment) {
      newErrors.payment = 'Payment type is required';
    }
    if (formData.codebase.length === 0) {
      newErrors.codebase = 'At least one codebase must be selected';
    }
    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project Name is required';
    }
    if (!formData.timeline) {
      newErrors.timeline = 'Timeline is required';
    }
    if (!formData.itTeamSize) {
      newErrors.itTeamSize = 'IT Team Size is required';
    }
    if (!formData.projectNeeds.trim()) {
      newErrors.projectNeeds = 'Project needs description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (e, fieldName) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [fieldName]: checked
        ? [...prev[fieldName], value]
        : prev[fieldName].filter(item => item !== value)
    }));
    // Clear error for this field
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully! Check console for data.');
      // Here you would typically send the data to a backend API
    }
  };

  const handleReset = () => {
    setFormData({
      messageId: 'd85b79a8-5b0d-5d74-bc41-fb2fe0bfa6fe',
      platformTechnology: '',
      languages: [],
      payment: '',
      codebase: [],
      projectName: '',
      timeline: '',
      itTeamSize: '',
      projectNeeds: ''
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Tech Advise / Research</h1>
        <p>Volunteer or Quid Pro Quo Projects for Small Businesses</p>
      </div>

      <form onSubmit={handleSubmit} className="tech-advise-form">
        {/* Platform Technology Section */}
        <fieldset className="form-section">
          <legend>Technology Stack</legend>

          <div className="form-group">
            <label htmlFor="platformTechnology">
              Platform Technology <span className="required">*</span>
            </label>
            <select
              id="platformTechnology"
              name="platformTechnology"
              value={formData.platformTechnology}
              onChange={handleInputChange}
              className={errors.platformTechnology ? 'input-error' : ''}
            >
              <option value="">-- Select a platform --</option>
              {platformOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.platformTechnology && (
              <span className="error-message">{errors.platformTechnology}</span>
            )}
          </div>

          <div className="form-group">
            <label>Languages <span className="required">*</span></label>
            <div className="checkbox-group">
              {languageOptions.map(language => (
                <div key={language} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={`language-${language}`}
                    value={language}
                    checked={formData.languages.includes(language)}
                    onChange={(e) => handleCheckboxChange(e, 'languages')}
                  />
                  <label htmlFor={`language-${language}`}>{language}</label>
                </div>
              ))}
            </div>
            {errors.languages && (
              <span className="error-message">{errors.languages}</span>
            )}
          </div>

          <div className="form-group">
            <label>
              Payment <span className="required">*</span>
            </label>
            <div className="radio-group">
              {paymentOptions.map(option => (
                <div key={option} className="radio-item">
                  <input
                    type="radio"
                    id={`payment-${option}`}
                    name="payment"
                    value={option}
                    checked={formData.payment === option}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={`payment-${option}`}>{option}</label>
                </div>
              ))}
            </div>
            {errors.payment && (
              <span className="error-message">{errors.payment}</span>
            )}
          </div>

          <div className="form-group">
            <label>Codebase <span className="required">*</span></label>
            <div className="checkbox-group">
              {codebaseOptions.map(codebase => (
                <div key={codebase} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={`codebase-${codebase}`}
                    value={codebase}
                    checked={formData.codebase.includes(codebase)}
                    onChange={(e) => handleCheckboxChange(e, 'codebase')}
                  />
                  <label htmlFor={`codebase-${codebase}`}>{codebase}</label>
                </div>
              ))}
            </div>
            {errors.codebase && (
              <span className="error-message">{errors.codebase}</span>
            )}
          </div>
        </fieldset>

        {/* Project Context Section */}
        <fieldset className="form-section">
          <legend>Project Context</legend>

          <div className="form-group">
            <label htmlFor="projectName">
              Project Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              placeholder="Enter project name"
              className={errors.projectName ? 'input-error' : ''}
            />
            {errors.projectName && (
              <span className="error-message">{errors.projectName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="timeline">
              Timeline to Complete <span className="required">*</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className={errors.timeline ? 'input-error' : ''}
            >
              <option value="">-- Select timeline --</option>
              {timelineOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.timeline && (
              <span className="error-message">{errors.timeline}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="itTeamSize">
              IT Team Size <span className="required">*</span>
            </label>
            <select
              id="itTeamSize"
              name="itTeamSize"
              value={formData.itTeamSize}
              onChange={handleInputChange}
              className={errors.itTeamSize ? 'input-error' : ''}
            >
              <option value="">-- Select team size --</option>
              {itTeamSizeOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.itTeamSize && (
              <span className="error-message">{errors.itTeamSize}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="projectNeeds">
              Project Needs <span className="required">*</span>
            </label>
            <textarea
              id="projectNeeds"
              name="projectNeeds"
              value={formData.projectNeeds}
              onChange={handleInputChange}
              placeholder="Document the project needs and requirements..."
              rows="6"
              className={errors.projectNeeds ? 'input-error' : ''}
            />
            {errors.projectNeeds && (
              <span className="error-message">{errors.projectNeeds}</span>
            )}
          </div>
        </fieldset>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="reset" onClick={handleReset} className="btn btn-secondary">Clear Form</button>
        </div>
      </form>
    </div>
  );
};

export default TechAdviseForm;
