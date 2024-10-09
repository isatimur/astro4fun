import { ZodiacSign } from '../types'

interface Horoscope {
  dailyHoroscope: string
  weeklyHoroscope: string
  monthlyHoroscope: string
  luckyStar: string
  luckyNumber: number
  compatibility: string
}

const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const horoscopeTemplates = [
  "Today, the stars align in your favor. {positive} However, be cautious of {negative}. Remember, {advice}.",
  "The cosmic energy is strong for you today. {positive} Keep an eye out for {negative}, but don't let it deter you. {advice}.",
  "Your ruling planet brings exciting opportunities. {positive} Stay alert to avoid {negative}. Above all, {advice}.",
  "The universe has a surprise in store for you. {positive} While you might encounter {negative}, stay positive. {advice}.",
  "Today's celestial configuration benefits you greatly. {positive} Though {negative} may occur, don't worry. {advice}."
]

const weeklyHoroscopeTemplates = [
  "This week brings a mix of challenges and opportunities. {positive} Be prepared for {negative}, but remember that growth often comes from adversity. {advice}",
  "The stars indicate a period of personal growth and self-discovery. {positive} You may face {negative}, but these experiences will ultimately strengthen you. {advice}",
  "Expect the unexpected this week. {positive} While {negative} might catch you off guard, your adaptability will see you through. {advice}",
  "This week emphasizes relationships and communication. {positive} Be mindful of {negative} in your interactions, and remember that honesty and empathy go a long way. {advice}",
  "The cosmic energy this week supports your ambitions. {positive} Don't let {negative} discourage you from pursuing your goals. {advice}"
]

const monthlyHoroscopeTemplates = [
  "This month brings significant changes and opportunities for growth. {positive} While you may encounter {negative}, remember that these challenges are stepping stones to your success. {advice}",
  "The stars align to support your long-term goals this month. {positive} Be prepared for {negative}, but don't lose sight of the bigger picture. {advice}",
  "This month emphasizes personal relationships and emotional connections. {positive} Navigate through {negative} with compassion and understanding. {advice}",
  "Expect a month of spiritual and intellectual growth. {positive} Don't let {negative} deter you from exploring new ideas and perspectives. {advice}",
  "Financial matters take center stage this month. {positive} Be cautious of {negative} in your financial decisions, and remember that patience often leads to prosperity. {advice}"
]

const positiveEvents = [
  "unexpected financial gains are likely",
  "a new romantic interest may appear",
  "your creativity will be at its peak",
  "professional success is on the horizon",
  "a long-awaited goal may finally be achieved"
]

const negativeEvents = [
  "minor misunderstandings in relationships",
  "temporary setbacks in your projects",
  "moments of self-doubt",
  "small obstacles in your daily routine",
  "energy fluctuations throughout the day"
]

const advice = [
  "trust your intuition and follow your heart",
  "take time for self-reflection and meditation",
  "communicate openly with those around you",
  "embrace change and be adaptable",
  "focus on personal growth and learning"
]

const stars = ["Venus", "Mars", "Jupiter", "Saturn", "Mercury"]
const compatibleSigns: Record<ZodiacSign, ZodiacSign[]> = {
  Aries: ['Leo', 'Sagittarius', 'Gemini'],
  Taurus: ['Virgo', 'Capricorn', 'Cancer'],
  Gemini: ['Libra', 'Aquarius', 'Aries'],
  Cancer: ['Scorpio', 'Pisces', 'Taurus'],
  Leo: ['Aries', 'Sagittarius', 'Gemini'],
  Virgo: ['Taurus', 'Capricorn', 'Cancer'],
  Libra: ['Gemini', 'Aquarius', 'Leo'],
  Scorpio: ['Cancer', 'Pisces', 'Virgo'],
  Sagittarius: ['Aries', 'Leo', 'Aquarius'],
  Capricorn: ['Taurus', 'Virgo', 'Pisces'],
  Aquarius: ['Gemini', 'Libra', 'Sagittarius'],
  Pisces: ['Cancer', 'Scorpio', 'Capricorn']
}

export const getHoroscope = (sign: ZodiacSign): Horoscope => {
  const dailyTemplate = getRandomElement(horoscopeTemplates)
  const weeklyTemplate = getRandomElement(weeklyHoroscopeTemplates)
  const monthlyTemplate = getRandomElement(monthlyHoroscopeTemplates)
  const positive = getRandomElement(positiveEvents)
  const negative = getRandomElement(negativeEvents)
  const dailyAdvice = getRandomElement(advice)

  const dailyHoroscope = dailyTemplate
    .replace('{positive}', positive)
    .replace('{negative}', negative)
    .replace('{advice}', dailyAdvice)

  const weeklyHoroscope = weeklyTemplate
    .replace('{positive}', getRandomElement(positiveEvents))
    .replace('{negative}', getRandomElement(negativeEvents))
    .replace('{advice}', getRandomElement(advice))

  const monthlyHoroscope = monthlyTemplate
    .replace('{positive}', getRandomElement(positiveEvents))
    .replace('{negative}', getRandomElement(negativeEvents))
    .replace('{advice}', getRandomElement(advice))

  return {
    dailyHoroscope,
    weeklyHoroscope,
    monthlyHoroscope,
    luckyStar: getRandomElement(stars),
    luckyNumber: Math.floor(Math.random() * 100) + 1,
    compatibility: getRandomElement(compatibleSigns[sign])
  }
}