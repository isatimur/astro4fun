import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'

const NumerologyCalculator: React.FC = () => {
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [interpretation, setInterpretation] = useState('')

  const calculateLifePathNumber = (date: string): number => {
    const digits = date.replace(/\D/g, '').split('').map(Number)
    const sum = digits.reduce((a, b) => a + b, 0)
    return sum > 9 ? calculateLifePathNumber(sum.toString()) : sum
  }

  const calculateNameNumber = (name: string): number => {
    const letterValues: { [key: string]: number } = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    }
    const sum = name.toUpperCase().split('').reduce((acc, char) => acc + (letterValues[char] || 0), 0)
    return sum > 9 ? calculateLifePathNumber(sum.toString()) : sum
  }

  const getInterpretation = (number: number): string => {
    const interpretations = [
      "Leadership and independence. You're a natural born leader with strong ambition and determination.",
      "Cooperation and balance. You're diplomatic and have a talent for bringing people together.",
      "Creative expression and communication. You're imaginative and have a gift for self-expression.",
      "Stability and hard work. You're practical, reliable, and have a strong sense of responsibility.",
      "Freedom and adventure. You're versatile, curious, and always seeking new experiences.",
      "Harmony and nurturing. You're compassionate, supportive, and have a strong sense of community.",
      "Analysis and understanding. You're intellectual, introspective, and have a thirst for knowledge.",
      "Power and success. You're ambitious, goal-oriented, and have strong business acumen.",
      "Humanitarianism and compassion. You're idealistic, spiritual, and have a desire to make the world better."
    ]
    return interpretations[number - 1] || "Your number is unique and holds special significance."
  }

  const handleCalculate = () => {
    if (name && birthdate) {
      const lifePathNumber = calculateLifePathNumber(birthdate)
      const nameNumber = calculateNameNumber(name)
      const numerologyNumber = (lifePathNumber + nameNumber) % 9 || 9
      setResult(numerologyNumber)
      setInterpretation(getInterpretation(numerologyNumber))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Numerology Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/5 text-white"
            />
            <Input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="bg-white/5 text-white"
            />
            <Button onClick={handleCalculate} className="w-full">Calculate</Button>
            {result !== null && (
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Your Numerology Number</h3>
                <p className="text-4xl font-bold text-primary mb-4">{result}</p>
                <p className="text-white text-opacity-80">{interpretation}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default NumerologyCalculator