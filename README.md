# Tech Advise / Research Form

A professional React form for managing volunteer or quid pro quo tech projects for small businesses.

## Features

- **Dropdowns**: Platform Technology, Payment Type, Timeline, IT Team Size
- **Multiple Selection Checkboxes**: Languages, Codebase
- **Form Validation**: Required fields are enforced with error messages
- **Project Context Section**: Grouped fields for project details
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Accessible**: Proper labels, error handling, and semantic HTML

## Required Fields

The following fields are marked as required:
- Project Name
- Platform Technology
- Payment
- Timeline to Complete the Project
- IT Team Size
- Project Needs

## Optional Fields

- Languages
- Codebase

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Build for Production

```bash
npm run build
```

## Form Data Structure

When submitted, the form collects the following data:

```javascript
{
  messageId: "d85b79a8-5b0d-5d74-bc41-fb2fe0bfa6fe",
  platformTechnology: string,
  languages: string[],
  payment: string,
  codebase: string[],
  projectName: string,
  timeline: string,
  itTeamSize: number,
  projectNeeds: string
}
```

## Customization

### Platform Technology Options
- Archer
- AWS Cloud
- Windows Desktop
- Web Application
- Database
- SAI360

### Language Options
- JavaScript
- PHP
- .NET
- Python
- SQL

### Payment Options
- Volunteer
- Quid Pro Quo

### Codebase Options
- React
- Node
- Flask
- Laravel
- FastAPI
- VuesticUI

### Timeline Options
- 1 month
- 2 month
- 3 month
- 5 month
- 8 month
- 13 month

### IT Team Size Options
- 0, 1, 2, 3, 5, 8

## File Structure

```
├── TechAdviseForm.jsx      # Main form component
├── TechAdviseForm.css      # Form styles
├── App.jsx                 # Root application component
├── App.css                 # App styles
├── index.jsx               # React entry point
├── public/
│   └── index.html          # HTML template
└── package.json            # Project dependencies
```

## License

This project is open source and available under the MIT License.
