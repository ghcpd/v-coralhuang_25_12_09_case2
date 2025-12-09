import React, { useState } from 'react';

const PLATFORMS = ["Archer", "AWS Cloud", "Windows Desktop", "Web Application", "Database", "SAI360"];
const LANGUAGES = ["JavaScript", "PHP", ".NET", "Python", "SQL"];
const CODEBASES = ["React", "Node", "Flask", "Laravel", "FastAPI", "VuesticUI"];
const TIMELINES = [1,2,3,5,8,13];
const TEAM_SIZES = [0,1,2,3,5,8];

export default function TechAdviceForm({ onSubmit }) {
  const [values, setValues] = useState({
    projectName: '',
    platformTechnology: '',
    languages: [],
    payment: '',
    codebase: [],
    timelineMonths: '',
    itTeamSize: '',
    projectNeed: ''
  });

  const [errors, setErrors] = useState({});

  function toggleArrayValue(key, value) {
    setValues(prev => {
      const arr = new Set(prev[key]);
      if (arr.has(value)) arr.delete(value); else arr.add(value);
      return { ...prev, [key]: Array.from(arr) };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  }

  function validate() {
    const errs = {};
    if (!values.projectName.trim()) errs.projectName = 'Required';
    if (!values.platformTechnology) errs.platformTechnology = 'Required';
    if (!values.payment) errs.payment = 'Required';
    if (!values.timelineMonths) errs.timelineMonths = 'Required';
    if (values.itTeamSize === '' || values.itTeamSize === null) errs.itTeamSize = 'Required';
    if (!values.projectNeed || values.projectNeed.length < 10) errs.projectNeed = 'Please describe the need (min 10 chars)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    const payload = {
      ...values,
      timelineMonths: parseInt(values.timelineMonths, 10),
      itTeamSize: parseInt(values.itTeamSize, 10)
    };
    if (onSubmit) onSubmit(payload);
    else console.log('TechAdviceForm submit', payload);
    alert('Submitted — check console');
  }

  return (
    <form onSubmit={submit} style={{maxWidth:680}}>
      <h2>Tech Advice / Research</h2>
      <div style={{background:'#fff3cd', padding:10, border:'1px solid #ffeeba'}}>For small businesses: volunteer or quid pro quo only.</div>

      <div>
        <label>Project Name*<br/>
          <input name="projectName" value={values.projectName} onChange={handleChange} />
        </label>
        {errors.projectName && <div style={{color:'red'}}>{errors.projectName}</div>}
      </div>

      <div>
        <label>Platform Technology*<br/>
          <select name="platformTechnology" value={values.platformTechnology} onChange={handleChange}>
            <option value="">Select...</option>
            {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
        {errors.platformTechnology && <div style={{color:'red'}}>{errors.platformTechnology}</div>}
      </div>

      <fieldset>
        <legend>Languages (optional)</legend>
        {LANGUAGES.map(l => (
          <label key={l} style={{marginRight:8}}>
            <input type="checkbox" checked={values.languages.includes(l)} onChange={() => toggleArrayValue('languages', l)} /> {l}
          </label>
        ))}
      </fieldset>

      <div>
        <label>Payment*<br/>
          <select name="payment" value={values.payment} onChange={handleChange}>
            <option value="">Select...</option>
            <option>Volunteer</option>
            <option>Quid Pro Quo</option>
          </select>
        </label>
        {errors.payment && <div style={{color:'red'}}>{errors.payment}</div>}
      </div>

      <fieldset>
        <legend>Codebase (optional)</legend>
        {CODEBASES.map(c => (
          <label key={c} style={{marginRight:8}}>
            <input type="checkbox" checked={values.codebase.includes(c)} onChange={() => toggleArrayValue('codebase', c)} /> {c}
          </label>
        ))}
      </fieldset>

      <div>
        <label>Timeline*<br/>
          <select name="timelineMonths" value={values.timelineMonths} onChange={handleChange}>
            <option value="">Select...</option>
            {TIMELINES.map(t => <option key={t} value={t}>{t} month{t>1?'s':''}</option>)}
          </select>
        </label>
        {errors.timelineMonths && <div style={{color:'red'}}>{errors.timelineMonths}</div>}
      </div>

      <div>
        <label>IT team size*<br/>
          <select name="itTeamSize" value={values.itTeamSize} onChange={handleChange}>
            <option value="">Select...</option>
            {TEAM_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        {errors.itTeamSize && <div style={{color:'red'}}>{errors.itTeamSize}</div>}
      </div>

      <div>
        <label>Project Need*<br/>
          <textarea name="projectNeed" value={values.projectNeed} onChange={handleChange} rows={5} />
        </label>
        {errors.projectNeed && <div style={{color:'red'}}>{errors.projectNeed}</div>}
      </div>

      <div style={{marginTop:12}}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
