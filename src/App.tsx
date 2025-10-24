import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { QuizScreen } from "./components/QuizScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { questions } from "./data/questions";
import { UserData } from "./types/quiz";

type Screen = "welcome" | "quiz" | "results";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleStart = (data: UserData) => {
    setUserData(data);
    setCurrentScreen("quiz");
  };

  const handleQuizComplete = (userAnswers: Record<number, string>) => {
    setAnswers(userAnswers);
    setCurrentScreen("results");
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentScreen("welcome");
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <>
      {currentScreen === "welcome" && <WelcomeScreen onStart={handleStart} />}
      {currentScreen === "quiz" && (
        <QuizScreen questions={questions} onComplete={handleQuizComplete} />
      )}
      {currentScreen === "results" && userData && (
        <ResultsScreen
          score={calculateScore()}
          totalQuestions={questions.length}
          userData={userData}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}
