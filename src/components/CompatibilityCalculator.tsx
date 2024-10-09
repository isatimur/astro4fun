import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ZodiacSign } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'

interface CompatibilityCalculatorProps {
  sign1: ZodiacSign
}

const zodiacSigns: ZodiacSign[] = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
]

const CompatibilityCalculator: React.FC<CompatibilityCalculatorProps> = ({ sign1 }) => {
  const [sign2, setSign2] = useState<ZodiacSign | ''>('')
  const [compatibility, setCompatibility] = useState<string | null>(null)

  const calculateCompatibility = () => {
    if (!sign2) return

    const compatibilityScores: Record<string, number> = {
      'Fire-Fire': 90, 'Earth-Earth': 95, 'Air-Air': 85, 'Water-Water': 95,
      'Fire-Air': 80, 'Earth-Water': 90, 'Fire-Earth': 60, 'Air-Water': 65,
      'Fire-Water': 40, 'Earth-Air': 55
    }

    const elements: Record<ZodiacSign, string> = {
      Aries: 'Fire', Leo: 'Fire', Sagittarius: 'Fire',
      Taurus: 'Earth', Virgo: 'Earth', Capricorn: 'Earth',
      Gemini: 'Air', Libra: 'Air', Aquarius: 'Air',
      Cancer: 'Water', Scorpio: 'Water', Pisces: 'Water'
    }

    const element1 = elements[sign1]
    const element2 = elements[sign2]

    let score: number

    if (element1 === element2) {
      score = compatibilityScores[`${element1}-${element2}`]
    } else {
      const key = `${element1}-${element2}` in compatibilityScores
        ? `${element1}-${element2}`
        : `${element2}-${element1}`
      score = compatibilityScores[key] || 70 // Default to 70 if not found
    }

    setCompatibility(`${score}% - ${getCompatibilityDescription(score)}`)
  }

  const getCompatibilityDescription = (score: number): string => {
    if (score >= 90) return "Excellent match!"
    if (score >= 80) return "Very good compatibility"
    if (score >= 70) return "Good potential"
    if (score >= 60) return "Average compatibility"
    if (score >= 50) return "Challenging but possible"
    return "May require extra effort"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Compatibility Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-white">Your Sign: {sign1}</span>
              <Select value={sign2} onValueChange={(value) => setSign2(value as ZodiacSign)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a sign" />
                </SelectTrigger>
                <SelectContent>
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign}>{sign}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={calculateCompatibility} disabled={!sign2}>Calculate Compatibility</Button>
            {compatibility && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white mb-2">Compatibility Result:</h3>
                <p className="text-white">{compatibility}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CompatibilityCalculator