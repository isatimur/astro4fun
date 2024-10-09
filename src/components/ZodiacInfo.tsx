import React from 'react'
import { motion } from 'framer-motion'
import { ZodiacSign } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface ZodiacInfoProps {
  sign: ZodiacSign
}

const zodiacInfo: Record<ZodiacSign, {
  element: string;
  quality: string;
  ruler: string;
  symbol: string;
  strengths: string[];
  weaknesses: string[];
  likes: string[];
  dislikes: string[];
}> = {
  Aries: {
    element: 'Fire',
    quality: 'Cardinal',
    ruler: 'Mars',
    symbol: 'Ram',
    strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Honest', 'Passionate'],
    weaknesses: ['Impatient', 'Moody', 'Short-tempered', 'Impulsive', 'Aggressive'],
    likes: ['Comfortable clothes', 'Taking on leadership roles', 'Physical challenges', 'Individual sports'],
    dislikes: ['Inactivity', 'Delays', 'Work that does not use one&apos;s talents']
  },
  Taurus: {
    element: 'Earth',
    quality: 'Fixed',
    ruler: 'Venus',
    symbol: 'Bull',
    strengths: ['Reliable', 'Patient', 'Determined', 'Devoted', 'Responsible', 'Stable'],
    weaknesses: ['Stubborn', 'Possessive', 'Uncompromising'],
    likes: ['Gardening', 'Cooking', 'Music', 'Romance', 'High quality clothes', 'Working with hands'],
    dislikes: ['Sudden changes', 'Complications', 'Insecurity of any kind', 'Synthetic fabrics']
  },
  Gemini: {
    element: 'Air',
    quality: 'Mutable',
    ruler: 'Mercury',
    symbol: 'Twins',
    strengths: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Ability to learn quickly and exchange ideas'],
    weaknesses: ['Nervous', 'Inconsistent', 'Indecisive'],
    likes: ['Music', 'Books', 'Magazines', 'Chats with nearly anyone', 'Short trips around the town'],
    dislikes: ['Being alone', 'Being confined', 'Repetition and routine']
  },
  Cancer: {
    element: 'Water',
    quality: 'Cardinal',
    ruler: 'Moon',
    symbol: 'Crab',
    strengths: ['Tenacious', 'Highly imaginative', 'Loyal', 'Emotional', 'Sympathetic', 'Persuasive'],
    weaknesses: ['Moody', 'Pessimistic', 'Suspicious', 'Manipulative', 'Insecure'],
    likes: ['Art', 'Home-based hobbies', 'Relaxing near or in water', 'Helping loved ones', 'A good meal with friends'],
    dislikes: ['Strangers', 'Any criticism of Mom', 'Revealing of personal life']
  },
  Leo: {
    element: 'Fire',
    quality: 'Fixed',
    ruler: 'Sun',
    symbol: 'Lion',
    strengths: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful', 'Humorous'],
    weaknesses: ['Arrogant', 'Stubborn', 'Self-centered', 'Lazy', 'Inflexible'],
    likes: ['Theater', 'Taking holidays', 'Being admired', 'Expensive things', 'Bright colors', 'Fun with friends'],
    dislikes: ['Being ignored', 'Facing difficult reality', 'Not being treated like a king or queen']
  },
  Virgo: {
    element: 'Earth',
    quality: 'Mutable',
    ruler: 'Mercury',
    symbol: 'Virgin',
    strengths: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
    weaknesses: ['Shyness', 'Worry', 'Overly critical of self and others', 'All work and no play'],
    likes: ['Animals', 'Healthy food', 'Books', 'Nature', 'Cleanliness'],
    dislikes: ['Rudeness', 'Asking for help', 'Taking center stage']
  },
  Libra: {
    element: 'Air',
    quality: 'Cardinal',
    ruler: 'Venus',
    symbol: 'Scales',
    strengths: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social'],
    weaknesses: ['Indecisive', 'Avoids confrontations', 'Will carry a grudge', 'Self-pity'],
    likes: ['Harmony', 'Gentleness', 'Sharing with others', 'The outdoors'],
    dislikes: ['Violence', 'Injustice', 'Loudmouths', 'Conformity']
  },
  Scorpio: {
    element: 'Water',
    quality: 'Fixed',
    ruler: 'Pluto',
    symbol: 'Scorpion',
    strengths: ['Resourceful', 'Brave', 'Passionate', 'Stubborn', 'A true friend'],
    weaknesses: ['Distrusting', 'Jealous', 'Secretive', 'Violent'],
    likes: ['Truth', 'Facts', 'Being right', 'Longtime friends', 'Teasing', 'Passion'],
    dislikes: ['Dishonesty', 'Revealing secrets', 'Passive people']
  },
  Sagittarius: {
    element: 'Fire',
    quality: 'Mutable',
    ruler: 'Jupiter',
    symbol: 'Archer',
    strengths: ['Generous', 'Idealistic', 'Great sense of humor'],
    weaknesses: ['Promises more than can deliver', 'Very impatient', 'Will say anything no matter how undiplomatic'],
    likes: ['Freedom', 'Travel', 'Philosophy', 'Being outdoors'],
    dislikes: ['Clingy people', 'Being constrained', 'Off-the-wall theories', 'Details']
  },
  Capricorn: {
    element: 'Earth',
    quality: 'Cardinal',
    ruler: 'Saturn',
    symbol: 'Sea-Goat',
    strengths: ['Responsible', 'Disciplined', 'Self-control', 'Good managers'],
    weaknesses: ['Know-it-all', 'Unforgiving', 'Condescending', 'Expecting the worst'],
    likes: ['Family', 'Tradition', 'Music', 'Quality craftsmanship', 'Understated status'],
    dislikes: ['Almost everything at some point']
  },
  Aquarius: {
    element: 'Air',
    quality: 'Fixed',
    ruler: 'Uranus',
    symbol: 'Water Bearer',
    strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
    weaknesses: ['Runs from emotional expression', 'Temperamental', 'Uncompromising', 'Aloof'],
    likes: ['Fun with friends', 'Helping others', 'Fighting for causes', 'Intellectual conversation', 'A good listener'],
    dislikes: ['Limitations', 'Broken promises', 'Being lonely', 'Dull or boring situations', 'People who disagree with them']
  },
  Pisces: {
    element: 'Water',
    quality: 'Mutable',
    ruler: 'Neptune',
    symbol: 'Fish',
    strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise', 'Musical'],
    weaknesses: ['Fearful', 'Overly trusting', 'Sad', 'Desire to escape reality', 'Can be a victim or a martyr'],
    likes: ['Being alone', 'Sleeping', 'Music', 'Romance', 'Visual media', 'Swimming', 'Spiritual themes'],
    dislikes: ['Know-it-all', 'Being criticized', 'The past coming back to haunt', 'Cruelty of any kind']
  }
}

const ZodiacInfo: React.FC<ZodiacInfoProps> = ({ sign }) => {
  const info = zodiacInfo[sign]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">About {sign}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/5 p-2 rounded">
              <span className="font-semibold text-primary">Element:</span> {info.element}
            </div>
            <div className="bg-white/5 p-2 rounded">
              <span className="font-semibold text-primary">Quality:</span> {info.quality}
            </div>
            <div className="bg-white/5 p-2 rounded">
              <span className="font-semibold text-primary">Ruler:</span> {info.ruler}
            </div>
            <div className="bg-white/5 p-2 rounded">
              <span className="font-semibold text-primary">Symbol:</span> {info.symbol}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-primary mb-2">Strengths:</h4>
            <ul className="list-disc list-inside">
              {info.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-primary mb-2">Weaknesses:</h4>
            <ul className="list-disc list-inside">
              {info.weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-primary mb-2">Likes:</h4>
            <ul className="list-disc list-inside">
              {info.likes.map((like, index) => (
                <li key={index}>{like}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-primary mb-2">Dislikes:</h4>
            <ul className="list-disc list-inside">
              {info.dislikes.map((dislike, index) => (
                <li key={index}>{dislike}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ZodiacInfo