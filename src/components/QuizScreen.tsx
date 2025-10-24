import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Question } from "../types/quiz";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "motion/react";

interface QuizScreenProps {
  questions: Question[];
  onComplete: (answers: Record<number, string>) => void;
}

export function QuizScreen({ questions, onComplete }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>("");

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
      setAnswers(newAnswers);

      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        // Check if next question already has an answer
        const nextQuestion = questions[currentIndex + 1];
        setSelectedOption(newAnswers[nextQuestion.id] || "");
      } else {
        // Quiz complete
        onComplete(newAnswers);
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const prevQuestion = questions[currentIndex - 1];
      setSelectedOption(answers[prevQuestion.id] || "");
    }
  };

  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4 py-8">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        {/* Progress Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-200">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="text-sm bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full backdrop-blur border border-blue-400/30">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-2xl border-blue-500/20 bg-white/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <motion.div
                      key={option.letter}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-gray-50 ${
                        selectedOption === option.letter
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedOption(option.letter)}
                    >
                      <RadioGroupItem value={option.letter} id={option.letter} className="mt-1" />
                      <Label
                        htmlFor={option.letter}
                        className="flex-1 cursor-pointer"
                      >
                        <span className="mr-2">{option.letter}.</span>
                        {option.text}
                      </Label>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="gap-2 bg-white/90 backdrop-blur border-blue-500/20"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            {isLastQuestion ? "Submit Quiz" : "Next"}
            {!isLastQuestion && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}