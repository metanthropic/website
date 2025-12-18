'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface TextToSpeechProps {
  text: string;
}

export default function TextToSpeech({ text }: TextToSpeechProps) {
  // State
  const [isPaused, setIsPaused] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Refs
  const chunksRef = useRef<string[]>([]);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isSwitchingSpeedRef = useRef(false);

  // Constants
  const CHARS_PER_SECOND = 16;
  const estimatedTotalSeconds = Math.ceil(text.length / CHARS_PER_SECOND);
  const speedOptions = [0.5, 1, 1.5, 2];

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSupported(true);
      synthRef.current = window.speechSynthesis;
      window.speechSynthesis.cancel();

      // FIX 1: Split text into smaller chunks (commas, colons, etc.) for smoother seeking
      chunksRef.current = splitTextIntoChunks(text);
    }
    return () => stopPlayback();
  }, [text]);

  // Timer Effect
  useEffect(() => {
    if (isSpeaking && !isPaused) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000 / playbackRate);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSpeaking, isPaused, playbackRate]);

  // FIX 1 (Helper): Aggressive splitting
  const splitTextIntoChunks = (fullText: string) => {
    // Split by punctuation: . ! ? : ; , and |
    // This ensures we restart from the nearest PHRASE, not just the start of the sentence.
    const regex = /[^.!?|:,;]+[.!?|:,;]+|[^.!?|:,;]+$/g;
    const result = fullText.match(regex) || [fullText];
    return result.map(chunk => chunk.trim()).filter(chunk => chunk.length > 0);
  };

  const speakChunk = (index: number, rateOverride?: number) => {
    if (!synthRef.current || index >= chunksRef.current.length) {
      stopPlayback();
      return;
    }

    // Cancel current phrase
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(chunksRef.current[index]);
    utterance.rate = rateOverride ?? playbackRate;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = () => {
      if (isSwitchingSpeedRef.current) return;
      setCurrentChunkIndex(index + 1);
      speakChunk(index + 1, rateOverride);
    };

    utterance.onerror = (e) => {
      // Ignore errors caused by manual interruption (switching speed)
      if (e.error === 'interrupted' || e.error === 'canceled') return;

      if (!isSwitchingSpeedRef.current) {
        console.error("TTS Chunk Error:", e);
        setCurrentChunkIndex(index + 1);
        speakChunk(index + 1, rateOverride);
      }
    };

    synthRef.current.speak(utterance);
  };

  const handlePlay = () => {
    if (!synthRef.current) return;
    if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
      setIsSpeaking(true);
    } else {
      setIsSpeaking(true);
      setIsPaused(false);
      speakChunk(currentChunkIndex);
    }
  };

  const handlePause = () => {
    if (!synthRef.current) return;
    synthRef.current.pause();
    setIsPaused(true);
  };

  const stopPlayback = () => {
    if (!synthRef.current) return;
    isSwitchingSpeedRef.current = true;
    synthRef.current.cancel();
    if (timerRef.current) clearInterval(timerRef.current);

    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentChunkIndex(0);
    setElapsedSeconds(0);

    setTimeout(() => { isSwitchingSpeedRef.current = false; }, 100);
  };

  const handleSpeedChange = (newRate: number) => {
    setPlaybackRate(newRate);
    if (isSpeaking && !isPaused) {
        isSwitchingSpeedRef.current = true;

        // Restart the current small phrase with new speed
        speakChunk(currentChunkIndex, newRate);

        // FIX 2: Recalculate estimated time based on progress
        // This keeps the timer in sync if it drifted
        const chunksPlayed = chunksRef.current.slice(0, currentChunkIndex).join(' ');
        const estimatedElapsed = Math.floor(chunksPlayed.length / CHARS_PER_SECOND);
        setElapsedSeconds(estimatedElapsed);

        setTimeout(() => { isSwitchingSpeedRef.current = false; }, 100);
    }
  };

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!supported) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-fit">
      {!isSpeaking || isPaused ? (
        <button
          onClick={handlePlay}
          className="text-white hover:text-gray-300 transition-transform hover:scale-105 active:scale-95"
          aria-label="Play"
        >
          <Play size={28} fill="white" className="text-white" />
        </button>
      ) : (
        <button
          onClick={handlePause}
          className="text-white hover:text-gray-300 transition-transform hover:scale-105 active:scale-95"
          aria-label="Pause"
        >
          <Pause size={28} fill="white" className="text-white" />
        </button>
      )}

      <div className="flex items-center gap-0 text-white px-2">
        <span className={`${isSpeaking ? "text-lg font-mono font-medium" : "text-xl font-bold"} tabular-nums min-w-[40px]`}>
           {isSpeaking ? formatTime(elapsedSeconds) : "Listen to article"}
        </span>

        <span className="text-gray-500 mx-4 text-2xl font-light">|</span>

        {isSpeaking ? (
            <div className="flex items-center gap-3">
                {speedOptions.map((rate) => (
                    <button
                        key={rate}
                        onClick={() => handleSpeedChange(rate)}
                        className={`text-sm font-bold transition-colors uppercase ${
                            playbackRate === rate
                            ? "text-white underline decoration-2 underline-offset-4"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                        {rate}x
                    </button>
                ))}
            </div>
        ) : (
            <span className="text-gray-400 text-xl tabular-nums font-medium">
                {formatTime(estimatedTotalSeconds)}
            </span>
        )}
      </div>

      <div className="flex items-center gap-4 pl-2 ml-1">
        <div className="flex items-center gap-[3px] h-5">
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    className={`w-1.5 bg-white rounded-none transition-all duration-300 ${
                        isSpeaking && !isPaused ? 'animate-music-bar' : 'h-1.5'
                    }`}
                    style={{
                        animationDelay: `${i * 0.15}s`,
                        height: isSpeaking && !isPaused ? '100%' : '6px'
                    }}
                />
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes music-bar {
            0%, 100% { height: 30%; opacity: 0.5; }
            50% { height: 100%; opacity: 1; }
        }
        .animate-music-bar {
            animation: music-bar 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
