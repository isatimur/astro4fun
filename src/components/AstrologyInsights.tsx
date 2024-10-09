import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const insights = [
  "The position of Mars in your chart can indicate how you assert yourself and handle conflicts.",
  "Venus in your natal chart reveals your approach to love, beauty, and personal values.",
  "The Moon&apos;s placement offers insights into your emotional nature and subconscious mind.",
  "Jupiter&apos;s position can show where you might experience growth and expansion in life.",
  "Saturn&apos;s placement often indicates areas of life where you may face challenges but also gain valuable lessons.",
  "The house where your Sun is located can reveal the life areas where you shine brightest.",
  "Mercury&apos;s position in your chart influences your communication style and thought processes.",
  "Uranus in your chart can indicate where you might experience sudden changes or unconventional approaches.",
  "Neptune&apos;s placement can reveal areas of life where you might experience inspiration or confusion.",
  "Pluto in your chart often points to areas of profound transformation and regeneration."
]

const AstrologyInsights: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Astrology Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {insights.map((insight, index) => (
              <li key={index} className="text-white text-opacity-80">
                <span className="text-primary font-semibold">✨</span> {insight}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default AstrologyInsights