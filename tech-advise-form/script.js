(() => {
  const form = document.getElementById('tech-form');
  const errorsEl = document.getElementById('errors');
  const result = document.getElementById('result');
  const jsonOutput = document.getElementById('json-output');
  const closeBtn = document.getElementById('close-result');

  function gather(formData) {
    // gather multi selections
    const languages = formData.getAll('languages');
    const codebase  = formData.getAll('codebase');

    return {
      projectName: formData.get('projectName') || '',
      timeline: formData.get('timeline') || '',
      teamSize: formData.get('teamSize') || '',
      need: formData.get('need') || '',
      platform: formData.get('platform') || '',
      languages, codebase,
      payment: formData.get('payment') || ''
    };
  }

  function validate(data) {
    const missing = [];
    if (!data.projectName.trim()) missing.push('Project name is required');
    if (!data.timeline) missing.push('Timeline must be selected');
    if (!data.need.trim()) missing.push('Describe the need (textarea) is required');
    if (!data.platform) missing.push('Platform Technology is required');
    if (!data.payment) missing.push('Payment / arrangement is required');
    return missing;
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    errorsEl.innerText = '';

    const fm = new FormData(form);
    const data = gather(fm);
    const missing = validate(data);

    if (missing.length) {
      errorsEl.innerText = missing.join('\n');
      result.classList.add('hidden');
      return;
    }

    // Simulate submission by showing JSON preview
    jsonOutput.textContent = JSON.stringify(data, null, 2);
    result.classList.remove('hidden');
    // move focus for accessibility
    closeBtn.focus();
  });

  closeBtn.addEventListener('click', () => {
    result.classList.add('hidden');
  });

  // Show helpful soft validation on input change
  form.addEventListener('input', () => {
    errorsEl.innerText = '';
  });
})();
