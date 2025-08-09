'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CountdownTimerProps {
  initialMinutes?: number;
}

export function CountdownTimer({ initialMinutes = 30 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // Time in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 bg-fitable-green text-fitable-white text-center shadow-inner"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Hurry 🏃🏼‍♀️ Book an appointment!
        </h2>
        <div className="text-4xl md:text-5xl font-extrabold mb-4">
          {timeLeft > 0 ? (
            <span>{formatTime(minutes)}:{formatTime(seconds)}</span>
          ) : (
            <span>Time's Up!</span>
          )}
        </div>
        <Link href="/book">
          <Button variant="outline" className="bg-fitable-white text-fitable-green hover:bg-fitable-green-100 hover:text-fitable-green-800 border-fitable-white transition-colors duration-300">
            Book Your Slot Now!
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
