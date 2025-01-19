# 🎯 **Quiz App**

A fun and dynamic **Quiz App** designed for your terminal! Test your knowledge across various genres, improve your skills, and challenge yourself with quizzes tailored to your preferences. Built with the power of **Deno**, this project is perfect for learning, gaming, and having fun! 🧠✨

---

## 📚 **Concept**

The **Quiz App** is a terminal-based application where you can:

- Explore quizzes across multiple **genres** (e.g., movies, sports, history, programming, etc.).
- Challenge yourself with **difficulty levels** (easy, medium, hard).
- Get **instant feedback** on your performance and see your scores.
- **Expand the quiz** by adding your custom questions and genres.

It’s designed to be modular, reusable, and highly customizable, making it easy to enhance and adapt to different scenarios.

---

## 🌟 **Features**

- 🏆 **Diverse Quiz Categories**: Includes multiple genres like movies, sports, programming, and more.
- 🧩 **Difficulty Levels**: Choose your challenge—easy, medium, or hard.
- 📊 **Scoring System**: Tracks your scores and provides detailed feedback.
- 🎛️ **Customizable**: Add your own quiz data and genres.
- 🧪 **Fully Tested**: Robust test cases to ensure reliable functionality.
- 🖥️ **Terminal-Based**: Runs directly in your terminal using Deno.

---

## 🗂️ **Folder Structure**

```plaintext
quiz-app/
│
├── data/          # JSON files for quiz data
│   └── quizData.json   # Quiz questions and answers
│
├── src/           # Source code
│   ├── main.ts        # Entry point of the application
│   ├── quiz.ts        # Quiz flow logic
│   ├── score.ts       # Score calculation logic
│   └── user.ts        # User input handling
├── utils/         # Utility functions
│   ├── fileUtils.ts   # File handling utilities
│   └── helpers.ts     # Miscellaneous helpers
├── tests/         # Test cases
│   ├── testQuiz.ts    # Tests for quiz logic
│   └── testUtils.ts   # Tests for utility functions
│
├── logs/          # Logs and quiz results
├── README.md      # Project documentation
└── .gitignore     # Files to ignore in version control
```
