# General Science 11 Reviewer Website

A modern, interactive quiz application for reviewing General Science 11 Term I material with 75 questions (60 original + 15 alternative).

## Features

- **Practice Mode**: Answer questions one by one with immediate feedback
- **Review Wrong Mode**: Focus on questions you got wrong
- **Random Question Selection**: Each session shows 30 randomly selected questions (70% original, 30% alternative)
- **Alternative Questions**: 15 additional questions that test the same concepts in different ways to prevent memorization
- **Progress Tracking**: Visual progress ring and statistics
- **Answer Validation**: Shows correct/incorrect answers with detailed rationales
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean interface with smooth animations

## How to Use

1. Open `index.html` in your web browser
2. Start answering questions in Practice Mode (30 random questions per session)
3. Get immediate feedback on your answers with detailed explanations
4. Track your progress with the statistics bar
5. Use "Review Wrong" button to practice questions you missed
6. Click "Start Over" to begin a new session with different random questions
7. Switch between Practice and Review modes using the toggle buttons

## Question Structure

The reviewer includes:
- **60 original questions** covering all 6 parts of the Term I examination
- **15 alternative questions** that test the same concepts with different scenarios

Each session randomly selects 30 questions (21 original + 9 alternative) to prevent memorization and ensure you learn the concepts rather than just memorizing answers.

## Question Format

Each question in `app.js` follows this format:

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

## Topics Covered

- **Part I**: Translational and Rotational Motion (Questions 1-10 + alternatives)
- **Part II**: Simple and Compound Machines (Questions 11-20 + alternatives)
- **Part III**: Electricity, Energy, and Safety (Questions 21-30 + alternatives)
- **Part IV**: Physics of Fluids (Questions 31-40 + alternatives)
- **Part V**: Integrated Physics and Engineering Applications (Questions 41-50 + alternatives)
- **Part VI**: Quantitative and Higher-Order Review (Questions 51-60 + alternatives)

## Tech Stack

- HTML5
- CSS3 with TailwindCSS (via CDN)
- Vanilla JavaScript
- Font Awesome icons

## Customization

You can customize the reviewer by modifying:
- **Number of questions per session**: Change the parameter in `selectRandomQuestions(30)` in `app.js`
- **Question mix ratio**: Adjust the 70/30 split in the `selectRandomQuestions` function
- **Colors and styling**: Modify the CSS in `index.html` (gradient colors, correct/wrong colors)
- **Animations**: Adjust transitions and animations in the CSS
