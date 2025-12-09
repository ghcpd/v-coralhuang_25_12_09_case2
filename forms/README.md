This folder contains artifacts generated from the Tech Advice / Research spec in Propmt2.txt

Files:
- tech-advice.schema.json  - JSON Schema for server-side validation
- tech-advice.html         - Minimal accessible HTML form (no JS framework required)

Also created:
- src/components/TechAdviceForm.jsx - React functional component with client-side validation

How to use:
- Open forms/tech-advice.html to try a simple prototype in the browser.
- Import the React component from src/components/TechAdviceForm.jsx into your app and pass an onSubmit handler.
