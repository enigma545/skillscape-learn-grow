import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, XCircle, Clock, ArrowRight, ArrowLeft,
  Trophy, RotateCcw, Eye
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface InteractiveQuizProps {
  title: string;
  questions: Question[];
  timeLimit?: number; // in minutes
  onComplete: (score: number, answers: number[]) => void;
}

const InteractiveQuiz = ({ title, questions, timeLimit = 20, onComplete }: InteractiveQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit * 60); // Convert to seconds
  const [score, setScore] = useState(0);

  // Timer countdown effect would go here in a real implementation
  // useEffect(() => { ... }, [timeRemaining]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (optionIndex: number) => {
    if (quizCompleted) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestionIndex] === -1) return;
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });
    
    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);
    setQuizCompleted(true);
    onComplete(finalScore, selectedAnswers);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowExplanation(false);
    setQuizCompleted(false);
    setTimeRemaining(timeLimit * 60);
    setScore(0);
  };

  const toggleExplanation = () => {
    if (selectedAnswers[currentQuestionIndex] !== -1) {
      setShowExplanation(!showExplanation);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (quizCompleted) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Trophy className="h-8 w-8 text-secondary" />
            Quiz Completed!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-4">
            <div className="text-6xl font-bold text-primary">{score}%</div>
            <p className="text-lg text-muted-foreground">
              You scored {selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length} out of {questions.length} questions correctly
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Badge variant={score >= 80 ? "default" : score >= 60 ? "secondary" : "destructive"}>
                {score >= 80 ? "Excellent!" : score >= 60 ? "Good Job!" : "Keep Practicing!"}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length}
              </div>
              <p className="text-sm text-muted-foreground">Correct</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive">
                {selectedAnswers.filter((answer, index) => answer !== questions[index].correctAnswer && answer !== -1).length}
              </div>
              <p className="text-sm text-muted-foreground">Incorrect</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">
                {selectedAnswers.filter(answer => answer === -1).length}
              </div>
              <p className="text-sm text-muted-foreground">Skipped</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRetakeQuiz} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake Quiz
            </Button>
            <Button>
              Continue Learning
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Quiz Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{title}</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {formatTime(timeRemaining)}
              </div>
              <Badge variant="outline">
                Question {currentQuestionIndex + 1} of {questions.length}
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
      </Card>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const isIncorrect = isSelected && !isCorrect && showExplanation;
              const showCorrectAnswer = showExplanation && isCorrect;
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={quizCompleted}
                  className={`
                    p-4 text-left border rounded-lg transition-all hover:border-primary
                    ${isSelected ? 'border-primary bg-primary/5' : 'border-border'}
                    ${showCorrectAnswer ? 'border-green-500 bg-green-50' : ''}
                    ${isIncorrect ? 'border-red-500 bg-red-50' : ''}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center
                      ${isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'}
                      ${showCorrectAnswer ? 'border-green-500 bg-green-500 text-white' : ''}
                      ${isIncorrect ? 'border-red-500 bg-red-500 text-white' : ''}
                    `}>
                      {showCorrectAnswer && <CheckCircle className="h-4 w-4" />}
                      {isIncorrect && <XCircle className="h-4 w-4" />}
                      {!showExplanation && isSelected && (
                        <div className="w-2 h-2 bg-current rounded-full" />
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Explanation
              </h4>
              <p className="text-sm text-muted-foreground">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {selectedAnswers[currentQuestionIndex] !== -1 && (
                <Button
                  variant="outline"
                  onClick={toggleExplanation}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {showExplanation ? "Hide" : "Show"} Explanation
                </Button>
              )}
              
              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestionIndex] === -1}
              >
                {currentQuestionIndex === questions.length - 1 ? "Submit Quiz" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => {
              const isAnswered = selectedAnswers[index] !== -1;
              const isCurrent = index === currentQuestionIndex;
              
              return (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`
                    w-10 h-10 rounded border-2 font-medium transition-all
                    ${isCurrent ? 'border-primary bg-primary text-primary-foreground' : ''}
                    ${isAnswered && !isCurrent ? 'border-green-500 bg-green-50 text-green-700' : ''}
                    ${!isAnswered && !isCurrent ? 'border-muted hover:border-primary' : ''}
                  `}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Click on any question number to navigate directly to that question
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveQuiz;