# Tech Advise / Research Form

A React form implementation for volunteer and quid pro quo projects targeting small businesses.

## Overview

This form collects information about technology projects requiring advice or research. It's designed for small businesses and supports both volunteer and quid pro quo engagement models.

## Form Structure

### Technology Stack Section

1. **Platform Technology** (Dropdown - Required)
   - Options: Archer, AWS Cloud, Windows Desktop, Web Application, Database, SAI360

2. **Languages** (Multiple Selection - Required)
   - Options: JavaScript, PHP, .NET, Python, SQL
   - At least one must be selected

3. **Payment** (Radio Button - Required)
   - Options: Volunteer, Quid Pro Quo

4. **Codebase** (Multiple Selection - Required)
   - Options: React, Node, Flask, Laravel, FastAPI, VuesticUI
   - At least one must be selected

### Project Context Section

1. **Project Name** (Text Input - Required)
   - Free-form text field for the project name

2. **Timeline to Complete** (Dropdown - Required)
   - Options: 1 month, 2 month, 3 month, 5 month, 8 month, 13 month

3. **IT Team Size** (Dropdown - Required)
   - Options: 0, 1, 2, 3, 5, 8

4. **Project Needs** (Textarea - Required)
   - Multi-line text field for documenting project requirements and needs
   - Minimum 6 rows of visible height

## Required Fields

All fields in this form are **required**:

- ✓ Platform Technology
- ✓ Languages (at least one)
- ✓ Payment Type
- ✓ Codebase (at least one)
- ✓ Project Name
- ✓ Timeline
- ✓ IT Team Size
- ✓ Project Needs

## Form Features

### Validation

- Real-time error clearing as users start typing
- Complete form validation on submit
- Clear error messages for each field
- Visual error indicators (red borders, error text)

### User Experience

- Clean, modern design with professional styling
- Responsive layout that works on desktop, tablet, and mobile
- Grouped sections with visual hierarchy
- Smooth transitions and hover effects
- Accessible form controls with proper labels

### Data Handling

- Form state management using React hooks
- Automatic inclusion of message ID
- Console logging of submitted data (for demo purposes)
- Easy to integrate with backend API

## Form Data Structure

```javascript
{
  messageId: "d85b79a8-5b0d-5d74-bc41-fb2fe0bfa6fe",
  platformTechnology: "string",
  languages: ["string", "string"],
  payment: "string",
  codebase: ["string", "string"],
  projectName: "string",
  timeline: "string",
  itTeamSize: "string",
  projectNeeds: "string"
}
```

## Files

- `TechAdviseForm.jsx` - Main form component with validation logic
- `TechAdviseForm.css` - Complete styling and responsive design
- `App.jsx` - Example application wrapper
- `README.md` - This documentation file

## Installation & Usage

### As a React Component

```jsx
import TechAdviseForm from './TechAdviseForm';

function App() {
  return <TechAdviseForm />;
}

export default App;
```

### Integration with Backend

To integrate with your backend API, modify the `handleSubmit` function in `TechAdviseForm.jsx`:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Send data to your API
    fetch('/api/tech-advise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
      handleReset();
    })
    .catch(error => console.error('Error:', error));
  }
};
```

## Styling

The form uses CSS Grid and Flexbox for responsive layout. Key features:

- Max-width of 900px for optimal readability
- Color scheme with primary blue (#007bff) and error red (#dc3545)
- Smooth transitions and hover effects
- Mobile-first responsive design
- Accessible color contrast ratios

## Customization

### Changing Options

Edit the arrays at the top of `TechAdviseForm.jsx`:

```javascript
const platformOptions = ['Archer', 'AWS Cloud', ...];
const languageOptions = ['JavaScript', 'PHP', ...];
// etc.
```

### Styling

All styles are contained in `TechAdviseForm.css`. Modify CSS variables or class definitions to match your brand.

### Validation Rules

Edit the `validateForm()` function to adjust validation logic as needed.

## Accessibility

- Proper `<label>` associations with form inputs via `htmlFor`
- Semantic HTML with `<fieldset>` and `<legend>`
- Keyboard navigation support
- Error messages associated with form fields
- Sufficient color contrast for text and interactive elements

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Notes

- The message ID is pre-filled with the provided value
- Form data is logged to console on successful submission
- The form can be easily extended with additional fields
- All validation happens on the client side; add server-side validation for production use
