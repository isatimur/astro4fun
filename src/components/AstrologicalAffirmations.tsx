import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const affirmations = {
  Aries: [
    "I am confident and courageous in all my endeavors.",
    "I embrace new challenges with enthusiasm and determination.",
    "My energy and passion inspire those around me."
  ],
  Taurus: [
    "I am grounded and stable in all aspects of my life.",
    "I attract abundance and prosperity effortlessly.",
    "I appreciate the beauty and comfort in my surroundings."
  ],
  Gemini: [
    "My curiosity leads me to exciting new discoveries.",
    "I communicate my ideas clearly and effectively.",
    "I embrace the duality within me and find balance."
  ],
  Cancer: [
    "I nurture myself and others with compassion and care.",
    "My intuition guides me to make wise decisions.",
    "I create a safe and loving space wherever I go."
  ],
  Leo: [
    "I shine brightly and inspire others with my radiance.",
    "I lead with kindness, courage, and creativity.",
    "I am worthy of love, respect, and admiration."
  ],
  Virgo: [
    "I trust in my abilities and embrace my perfectionism positively.",
    "I find joy in serving others and improving the world around me.",
    "My attention to detail brings excellence to all I do."
  ],
  Libra: [
    "I create harmony and balance in all areas of my life.",
    "I make decisions with confidence and grace.",
    "I attract loving and supportive relationships."
  ],
  Scorpio: [
    "I embrace transformation and emerge stronger from every challenge.",
    "My passion and intensity are my greatest strengths.",
    "I trust my intuition and delve deep into life's mysteries."
  ],
  Sagittarius: [
    "I embrace adventure and expand my horizons fearlessly.",
    "My optimism and enthusiasm inspire those around me.",
    "I seek wisdom and share my knowledge generously."
  ],
  Capricorn: [
    "I am disciplined and persistent in achieving my goals.",
    "I build solid foundations for long-term success.",
    "My ambition drives me to reach new heights."
  ],
  Aquarius: [
    "I embrace my uniqueness and inspire others to do the same.",
    "My innovative ideas create positive change in the world.",
    "I connect with others on a deep, meaningful level."
  ],
  Pisces: [
    "I trust in the flow of life and go with the current.",
    "My imagination and creativity know no bounds.",
    "I am connected to my inner wisdom and the universe."
  ]
}

const AstrologicalAffirmations: React.FC<{ sign: string }> = ({ sign }) => {
  const [currentAffirmation, setCurrentAffirmation] = useState('')

  useEffect(() => {
    if (sign in affirmations) {
      setCurrentAffirmation(affirmations[sign as keyof typeof affirmations][0])
    }
  }, [sign])

  const getNewAffirmation = () => {
    if (sign in affirmations) {
      const signAffirmations = affirmations[sign as keyof typeof affirmations]
      const newAffirmation = signAffirmations[Math.floor(Math.random() * signAffirmations.length)]
      setCurrentAffirmation(newAffirmation)
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
          <CardTitle className="text-2xl font-bold text-white">Daily Affirmation for {sign}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-center text-white mb-4">{currentAffirmation}</p>
          <Button onClick={getNewAffirmation} className="w-full">New Affirmation</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default AstrologicalAffirmations