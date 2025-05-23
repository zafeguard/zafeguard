"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  messages: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export function TypewriterEffect({
  messages,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetween = 2000,
}: TypewriterEffectProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // If we're waiting, do nothing until the wait is over
        if (isWaiting) {
          setIsWaiting(false)
          setIsDeleting(true)
          return
        }

        // Current message we're typing/deleting
        const currentMessage = messages[currentMessageIndex]

        if (isDeleting) {
          // Deleting text
          setCurrentText(currentMessage.substring(0, currentText.length - 1))

          // If we've deleted everything, move to the next message
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentMessageIndex((currentMessageIndex + 1) % messages.length)
          }
        } else {
          // Typing text
          setCurrentText(currentMessage.substring(0, currentText.length + 1))

          // If we've typed the full message, wait before deleting
          if (currentText.length === currentMessage.length) {
            setIsWaiting(true)
          }
        }
      },
      isWaiting ? delayBetween : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentMessageIndex, currentText, isDeleting, isWaiting, messages, typingSpeed, deletingSpeed, delayBetween])

  return (
    <div className="h-[60px] md:h-[48px] flex items-center justify-center">
      <p className="text-lg md:text-xl text-gray-300">
        {currentText}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  )
}
