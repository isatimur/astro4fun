import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const allQuizQuestions = [
  {
    question: "Which planet rules Leo?",
    options: ["Mars", "Venus", "Sun", "Jupiter"],
    correctAnswer: "Sun"
  },
  {
    question: "What element is associated with Scorpio?",
    options: ["Fire", "Earth", "Air", "Water"],
    correctAnswer: "Water"
  },
  {
    question: "Which zodiac sign is represented by the scales?",
    options: ["Libra", "Virgo", "Gemini", "Aquarius"],
    correctAnswer: "Libra"
  },
  {
    question: "What is the ruling planet of Virgo?",
    options: ["Venus", "Mercury", "Mars", "Saturn"],
    correctAnswer: "Mercury"
  },
  {
    question: "Which sign is known as 'The Archer'?",
    options: ["Aries", "Sagittarius", "Capricorn", "Leo"],
    correctAnswer: "Sagittarius"
  },
  {
    question: "What is the element associated with Gemini?",
    options: ["Fire", "Earth", "Air", "Water"],
    correctAnswer: "Air"
  },
  {
    question: "Which planet is traditionally associated with communication?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: "Mercury"
  },
  {
    question: "What is the modality of Taurus?",
    options: ["Cardinal", "Fixed", "Mutable"],
    correctAnswer: "Fixed"
  },
  {
    question: "Which zodiac sign is represented by the Crab?",
    options: ["Cancer", "Pisces", "Scorpio", "Aquarius"],
    correctAnswer: "Cancer"
  },
  {
    question: "What is the traditional ruling planet of Aquarius?",
    options: ["Uranus", "Saturn", "Neptune", "Jupiter"],
    correctAnswer: "Saturn"
  }
]

const AstrologyQuiz: React.FC = () => {
  const [quizQuestions, setQuizQuestions] = useState(allQuizQuestions.slice(0, 5))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  useEffect(() => {
    const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random())
    setQuizQuestions(shuffled.slice(0, 5))
  }, [])

  const handleAnswer = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random())
    setQuizQuestions(shuffled.slice(0, 5))
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setQuizCompleted(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Astrology Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          {!quizCompleted ? (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </h3>
              <p className="text-lg text-white mb-4">{quizQuestions[currentQuestion].question}</p>
              <RadioGroup value={selectedAnswer || ''} onValueChange={setSelectedAnswer}>
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="text-white">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Button onClick={handleAnswer} disabled={!selectedAnswer} className="w-full mt-4">
                {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Quiz Completed!</h3>
              <p className="text-xl text-white mb-4">Your Score: {score} out of {quizQuestions.length}</p>
              <Button onClick={resetQuiz} className="mt-4">Retake Quiz</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default AstrologyQuiz