import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'

const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

const compatibilityMatrix: { [key: string]: { [key: string]: number } } = {
  Aries: { Aries: 70, Taurus: 60, Gemini: 85, Cancer: 65, Leo: 90, Virgo: 55, Libra: 75, Scorpio: 80, Sagittarius: 95, Capricorn: 50, Aquarius: 70, Pisces: 65 },
  Taurus: { Aries: 60, Taurus: 90, Gemini: 55, Cancer: 85, Leo: 70, Virgo: 95, Libra: 80, Scorpio: 90, Sagittarius: 50, Capricorn: 95, Aquarius: 60, Pisces: 85 },
  Gemini: { Aries: 85, Taurus: 55, Gemini: 75, Cancer: 60, Leo: 85, Virgo: 75, Libra: 90, Scorpio: 60, Sagittarius: 85, Capricorn: 50, Aquarius: 95, Pisces: 70 },
  Cancer: { Aries: 65, Taurus: 85, Gemini: 60, Cancer: 90, Leo: 65, Virgo: 80, Libra: 70, Scorpio: 95, Sagittarius: 55, Capricorn: 80, Aquarius: 60, Pisces: 95 },
  Leo: { Aries: 90, Taurus: 70, Gemini: 85, Cancer: 65, Leo: 80, Virgo: 60, Libra: 90, Scorpio: 75, Sagittarius: 95, Capricorn: 55, Aquarius: 70, Pisces: 65 },
  Virgo: { Aries: 55, Taurus: 95, Gemini: 75, Cancer: 80, Leo: 60, Virgo: 85, Libra: 75, Scorpio: 90, Sagittarius: 65, Capricorn: 95, Aquarius: 70, Pisces: 80 },
  Libra: { Aries: 75, Taurus: 80, Gemini: 90, Cancer: 70, Leo: 90, Virgo: 75, Libra: 80, Scorpio: 65, Sagittarius: 85, Capricorn: 70, Aquarius: 95, Pisces: 75 },
  Scorpio: { Aries: 80, Taurus: 90, Gemini: 60, Cancer: 95, Leo: 75, Virgo: 90, Libra: 65, Scorpio: 90, Sagittarius: 60, Capricorn: 85, Aquarius: 55, Pisces: 95 },
  Sagittarius: { Aries: 95, Taurus: 50, Gemini: 85, Cancer: 55, Leo: 95, Virgo: 65, Libra: 85, Scorpio: 60, Sagittarius: 90, Capricorn: 65, Aquarius: 90, Pisces: 70 },
  Capricorn: { Aries: 50, Taurus: 95, Gemini: 50, Cancer: 80, Leo: 55, Virgo: 95, Libra: 70, Scorpio: 85, Sagittarius: 65, Capricorn: 90, Aquarius: 60, Pisces: 85 },
  Aquarius: { Aries: 70, Taurus: 60, Gemini: 95, Cancer: 60, Leo: 70, Virgo: 70, Libra: 95, Scorpio: 55, Sagittarius: 90, Capricorn: 60, Aquarius: 85, Pisces: 80 },
  Pisces: { Aries: 65, Taurus: 85, Gemini: 70, Cancer: 95, Leo: 65, Virgo: 80, Libra: 75, Scorpio: 95, Sagittarius: 70, Capricorn: 85, Aquarius: 80, Pisces: 90 }
}

const ZodiacCompatibility: React.FC = () => {
  const [sign1, setSign1] = useState<string>('')
  const [sign2, setSign2] = useState<string>('')
  const [compatibility, setCompatibility] = useState<number | null>(null)

  const calculateCompatibility = () => {
    if (sign1 && sign2) {
      setCompatibility(compatibilityMatrix[sign1][sign2])
    }
  }

  const getCompatibilityDescription = (score: number): string => {
    if (score >= 90) return "Excellent match! You two have a natural affinity and understanding."
    if (score >= 80) return "Great compatibility! You complement each other well."
    if (score >= 70) return "Good potential! With some effort, you can have a harmonious relationship."
    if (score >= 60) return "Average compatibility. You may need to work on understanding each other better."
    if (score >= 50) return "Challenging but not impossible. This relationship will require effort and compromise."
    return "This pairing may face significant challenges. Open communication is key."
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Zodiac Compatibility</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <Select value={sign1} onValueChange={setSign1}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select first sign" />
                </SelectTrigger>
                <SelectContent>
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign}>{sign}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="text-2xl">❤️</span>
              <Select value={sign2} onValueChange={setSign2}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select second sign" />
                </SelectTrigger>
                <SelectContent>
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign}>{sign}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={calculateCompatibility} disabled={!sign1 || !sign2}>Calculate Compatibility</Button>
            {compatibility !== null && (
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Compatibility Score</h3>
                <p className="text-4xl font-bold text-primary mb-4">{compatibility}%</p>
                <p className="text-white text-opacity-80">{getCompatibilityDescription(compatibility)}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ZodiacCompatibility