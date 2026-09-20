# General Science 11 Reviewer Website

A modern, interactive quiz application for reviewing General Science 11 Term I material.

## Features

- **Practice Mode**: Answer questions one by one with immediate feedback
- **Review Wrong Mode**: Focus on questions you got wrong
- **Progress Tracking**: Visual progress ring and statistics
- **Answer Validation**: Shows correct/incorrect answers with explanations
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean interface with smooth animations

## How to Use

1. Open `index.html` in your web browser
2. Start answering questions in Practice Mode
3. Get immediate feedback on your answers
4. Track your progress with the statistics bar
5. Use "Review Wrong" button to practice questions you missed
6. Switch between Practice and Review modes using the toggle buttons

## Adding Your Questions

The questions are stored in `app.js` in the `questions` array. Each question has this format:

```javascript
{
    id: 1,
    question: "Your question here",
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correct: 1,  // Index of correct answer (0 = A, 1 = B, 2 = C, 3 = D)
    rationale: "Explanation of why this is the correct answer"
}
```

To add your actual questions from the PDF:

1. Copy the questions and answers from your PDF files
2. Format them according to the structure above
3. Replace the sample questions in `app.js` with your content
4. Save the file and refresh your browser

## Tech Stack

- HTML5
- CSS3 with TailwindCSS (via CDN)
- Vanilla JavaScript
- Font Awesome icons

## Customization

You can customize the colors and styling by modifying the CSS in `index.html`:
- Change the gradient colors in `.gradient-bg`
- Modify the correct/wrong answer colors
- Adjust animations and transitions
