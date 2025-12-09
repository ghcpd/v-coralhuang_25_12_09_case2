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
    projectNeeds: '',
  });

  const [errors, setErrors] = useState({});

  const platformOptions = [
    'Archer',
    'AWS Cloud',
    'Windows Desktop',
    'Web Application',
    'Database',
    'SAI360',
  ];

  const languageOptions = [
    'JavaScript',
    'PHP',
    '.NET',
    'Python',
    'SQL',
  ];

  const paymentOptions = [
    'Volunteer',
    'Quid Pro Quo',
  ];

  const codebaseOptions = [
    'React',
    'Node',
    'Flask',
    'Laravel',
    'FastAPI',
    'VuesticUI',
  ];

  const timelineOptions = [
    '1 month',
    '2 month',
    '3 month',
    '5 month',
    '8 month',
    '13 month',
  ];

  const teamSizeOptions = [0, 1, 2, 3, 5, 8];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project Name is required';
    }

    if (!formData.platformTechnology) {
      newErrors.platformTechnology = 'Platform Technology is required';
    }

    if (!formData.payment) {
      newErrors.payment = 'Payment type is required';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Timeline is required';
    }

    if (formData.itTeamSize === '') {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleCheckboxChange = (e, fieldName) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: checked
        ? [...prev[fieldName], value]
        : prev[fieldName].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
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
      projectNeeds: '',
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h1>Tech Advise / Research</h1>
      <p className="subtitle">Volunteer or Quid Pro Quo Projects - Small Businesses Only</p>

      <form onSubmit={handleSubmit}>
        {/* Platform Technology */}
        <div className="form-group">
          <label htmlFor="platformTechnology">
            Platform Technology <span className="required">*</span>
          </label>
          <select
            id="platformTechnology"
            name="platformTechnology"
            value={formData.platformTechnology}
            onChange={handleInputChange}
            className={errors.platformTechnology ? 'error' : ''}
          >
            <option value="">-- Select Platform --</option>
            {platformOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.platformTechnology && (
            <span className="error-message">{errors.platformTechnology}</span>
          )}
        </div>

        {/* Languages */}
        <div className="form-group">
          <label>Languages</label>
          <div className="checkbox-group">
            {languageOptions.map((option) => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  value={option}
                  checked={formData.languages.includes(option)}
                  onChange={(e) => handleCheckboxChange(e, 'languages')}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div className="form-group">
          <label htmlFor="payment">
            Payment <span className="required">*</span>
          </label>
          <select
            id="payment"
            name="payment"
            value={formData.payment}
            onChange={handleInputChange}
            className={errors.payment ? 'error' : ''}
          >
            <option value="">-- Select Payment Type --</option>
            {paymentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.payment && (
            <span className="error-message">{errors.payment}</span>
          )}
        </div>

        {/* Codebase */}
        <div className="form-group">
          <label>Codebase</label>
          <div className="checkbox-group">
            {codebaseOptions.map((option) => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  value={option}
                  checked={formData.codebase.includes(option)}
                  onChange={(e) => handleCheckboxChange(e, 'codebase')}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Project Context Section */}
        <fieldset className="section-fieldset">
          <legend>Project Context</legend>

          {/* Project Name */}
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
              className={errors.projectName ? 'error' : ''}
            />
            {errors.projectName && (
              <span className="error-message">{errors.projectName}</span>
            )}
          </div>

          {/* Timeline */}
          <div className="form-group">
            <label htmlFor="timeline">
              Timeline to Complete the Project <span className="required">*</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className={errors.timeline ? 'error' : ''}
            >
              <option value="">-- Select Timeline --</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <span className="error-message">{errors.timeline}</span>
            )}
          </div>

          {/* IT Team Size */}
          <div className="form-group">
            <label htmlFor="itTeamSize">
              IT Team Size <span className="required">*</span>
            </label>
            <select
              id="itTeamSize"
              name="itTeamSize"
              value={formData.itTeamSize}
              onChange={handleInputChange}
              className={errors.itTeamSize ? 'error' : ''}
            >
              <option value="">-- Select Team Size --</option>
              {teamSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.itTeamSize && (
              <span className="error-message">{errors.itTeamSize}</span>
            )}
          </div>

          {/* Project Needs */}
          <div className="form-group">
            <label htmlFor="projectNeeds">
              Project Needs <span className="required">*</span>
            </label>
            <textarea
              id="projectNeeds"
              name="projectNeeds"
              value={formData.projectNeeds}
              onChange={handleInputChange}
              placeholder="Document the project needs and requirements"
              rows="6"
              className={errors.projectNeeds ? 'error' : ''}
            />
            {errors.projectNeeds && (
              <span className="error-message">{errors.projectNeeds}</span>
            )}
          </div>
        </fieldset>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
          <button type="reset" className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default TechAdviseForm;
