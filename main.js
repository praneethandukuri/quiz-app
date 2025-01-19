import { readJSON, writeJSON } from "./utils/fileOperations.js";
import { startQuiz } from "./utils/quizOperations.js";

const main = () => {
  try {
    const questions = readJSON("./data/questions.json");
    const scores = readJSON("./data/scores.json");

    startQuiz(questions, scores);
  } catch (error) {
    console.error("Error in main execution:", error);
  }
};

main();
