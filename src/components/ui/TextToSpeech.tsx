'use client';

import { useState, useEffect, useRef } from 'react';
import { PlayCircle, PauseCircle, Square } from 'lucide-react';

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
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Constants
  const CHARS_PER_SECOND = 16;
  const estimatedTotalSeconds = Math.ceil(text.length / CHARS_PER_SECOND);
  const speedOptions = [0.5, 1, 1.5, 2];

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSupported(true);
      synthRef.current = window.speechSynthesis;
      window.speechSynthesis.cancel();
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

  const splitTextIntoChunks = (fullText: string) => {
    const result = fullText.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [fullText];
    return result.map(chunk => chunk.trim()).filter(chunk => chunk.length > 0);
  };

  const speakChunk = (index: number) => {
    if (!synthRef.current || index >= chunksRef.current.length) {
      stopPlayback();
      return;
    }

    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(chunksRef.current[index]);
    utterance.rate = playbackRate;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = () => {
      setCurrentChunkIndex(index + 1);
      speakChunk(index + 1);
    };

    utterance.onerror = (e) => {
      console.error("TTS Chunk Error:", e);
      setCurrentChunkIndex(index + 1);
      speakChunk(index + 1);
    };

    utteranceRef.current = utterance;
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
    synthRef.current.cancel();
    if (timerRef.current) clearInterval(timerRef.current);
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentChunkIndex(0);
    setElapsedSeconds(0);
  };

  const handleSpeedChange = (newRate: number) => {
    setPlaybackRate(newRate);
    if (isSpeaking && !isPaused) {
        synthRef.current?.cancel();
        setTimeout(() => speakChunk(currentChunkIndex), 50);
    }
  };

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!supported) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/5 border border-white/10 rounded-full py-2 px-4 pl-3 backdrop-blur-sm transition-all hover:bg-white/10 w-fit">

      {/* 1. Play/Pause Button */}
      {!isSpeaking || isPaused ? (
        <button
          onClick={handlePlay}
          className="text-white hover:text-[#3B82F6] transition-colors p-1"
          aria-label="Play"
        >
          <PlayCircle size={32} fill="currentColor" className="text-white/20" />
        </button>
      ) : (
        <button
          onClick={handlePause}
          className="text-[#3B82F6] hover:text-white transition-colors p-1"
          aria-label="Pause"
        >
          <PauseCircle size={32} fill="currentColor" className="text-[#3B82F6]/20" />
        </button>
      )}

      {/* 2. Info Area */}
      <div className="flex items-center gap-0 text-sm font-medium text-white px-2">
        {/* Label: Current Time (Playing) OR "Listen to article" (Idle) */}
        <span className="tabular-nums min-w-[40px]">
           {isSpeaking ? formatTime(elapsedSeconds) : "Listen to article"}
        </span>

        {/* Grey Pipe Separator */}
        <span className="text-gray-500 mx-3">|</span>

        {/* Dynamic Right Side: Speed Options (Playing) OR Total Duration (Idle) */}
        {isSpeaking ? (
            <div className="flex items-center gap-3">
                {speedOptions.map((rate) => (
                    <button
                        key={rate}
                        onClick={() => handleSpeedChange(rate)}
                        className={`text-[11px] font-bold transition-colors uppercase ${
                            playbackRate === rate
                            ? "text-white"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                        {rate}x
                    </button>
                ))}
            </div>
        ) : (
            <span className="text-gray-400 tabular-nums">
                {formatTime(estimatedTotalSeconds)}
            </span>
        )}
      </div>

      {/* 3. Right Side Controls (Visualizer + Stop) */}
      <div className="flex items-center gap-3 pl-3 border-l border-white/10 ml-1">

        {/* Waveform Visualizer */}
        <div className="flex items-center gap-[2px] h-3">
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    className={`w-1 bg-[#3B82F6] rounded-full transition-all duration-300 ${
                        isSpeaking && !isPaused ? 'animate-music-bar' : 'h-1'
                    }`}
                    style={{
                        animationDelay: `${i * 0.15}s`,
                        height: isSpeaking && !isPaused ? '100%' : '4px'
                    }}
                />
            ))}
        </div>

        {/* Stop Button (Only visible when speaking) */}
        {isSpeaking && (
            <button
                onClick={stopPlayback}
                className="text-gray-500 hover:text-red-400 transition-colors ml-1"
                aria-label="Stop"
            >
                <Square size={12} fill="currentColor" />
            </button>
        )}
      </div>

      <style jsx>{`
        @keyframes music-bar {
            0%, 100% { height: 30%; opacity: 0.6; }
            50% { height: 100%; opacity: 1; }
        }
        .animate-music-bar {
            animation: music-bar 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
