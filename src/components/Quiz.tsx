import { useState, useEffect, useMemo } from "react";
import { QuestionCard } from "./QuestionCard";
import { Result } from "./Result";
import { shuffleArray } from "../utils";
import { getQuestionsByType } from "../data";

import type { Question, SignalType } from "../data";
import type { Answered } from "./Result";
import type { GameMode } from "../App";

type QuizProps = {
  questions: Question[];
  onRestart: () => void;
  numberOfQuestions: number;
  gameMode: GameMode;
  selectedType: SignalType | null;
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

const normalizeString = (str: string | null | undefined): string => {
  return (str ?? "").toLowerCase().trim();
};

export const Quiz = ({
  questions: initialQuestions,
  onRestart,
  numberOfQuestions,
  gameMode,
  selectedType,
}: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [answered, setAnswered] = useState<Answered[]>([]);
  const [totalTime, setTotalTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const quizQuestions = useMemo(() => {
    if (gameMode === "specific" && selectedType) {
      // For specific mode, get all questions of the selected type and shuffle them
      const typeQuestions = getQuestionsByType(selectedType);
      return shuffleArray(typeQuestions);
    } else {
      // For "all" mode, use the existing logic
      if (numberOfQuestions >= initialQuestions.length) {
        // If asking for all questions, just shuffle without limiting
        return shuffleArray(initialQuestions);
      } else {
        // If asking for a subset, shuffle and take the requested amount
        return shuffleArray(initialQuestions).slice(0, numberOfQuestions);
      }
    }
  }, [initialQuestions, numberOfQuestions, gameMode, selectedType]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (currentIndex < quizQuestions.length) {
        setTotalTime((prevTime) => prevTime + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, quizQuestions.length, isPaused]);

  useEffect(() => {
    if (currentIndex >= quizQuestions.length || isPaused) return;
    if (selected) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t === 1) {
          handleNext();
          return 120;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentIndex, selected, quizQuestions, isPaused]);

  function handleNext() {
    if (currentIndex >= quizQuestions.length) return;

    const current = quizQuestions[currentIndex];
    if (normalizeString(selected) === normalizeString(current.answer)) {
      setScore((s) => s + 1);
    }
    setAnswered((prev) => [
      ...prev,
      { question: current, chosen: selected ?? "No answer" },
    ]);
    setSelected(null);
    setTimeLeft(120);
    setCurrentIndex((i) => i + 1);
  }

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  if (currentIndex >= quizQuestions.length) {
    return (
      <Result
        score={score}
        total={quizQuestions.length}
        answered={answered}
        onRestart={onRestart}
        totalTime={totalTime}
        gameMode={gameMode}
        selectedType={selectedType}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl space-y-4 mt-5">
      {/* Quiz Header with Mode Info */}
      <div className="bg-white/10 p-4 rounded-lg space-y-2">
        <div className="flex justify-between items-center text-lg font-mono">
          <div>
            Pregunta {currentIndex + 1} / {quizQuestions.length}
          </div>
          <div className="font-bold text-xl">
            <span>Tiempo Total: {formatTime(totalTime)}</span>
          </div>
        </div>

        {/* Mode indicator */}
        <div className="text-center">
          {gameMode === "specific" && selectedType ? (
            <div className="bg-purple-600/30 px-3 py-1 rounded-lg text-sm">
              📚 Modo: <span className="font-semibold">{selectedType}</span>
            </div>
          ) : (
            <div className="bg-green-600/30 px-3 py-1 rounded-lg text-sm">
              🌍 Modo: <span className="font-semibold">Todas las Señales</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={togglePause}
            className={`px-3 py-1 rounded-lg font-bold text-sm transition-colors ${
              isPaused
                ? "bg-green-600 hover:bg-green-700"
                : "bg-yellow-600 hover:bg-yellow-700"
            }`}
          >
            {isPaused ? "▶️ Resumir" : "⏸️ Pausar"}
          </button>
          <div
            className={`font-bold text-2xl ${
              isPaused ? "text-yellow-400" : ""
            }`}
          >
            ⏳ {timeLeft}s {isPaused && "(PAUSADO)"}
          </div>
        </div>
      </div>

      {isPaused && (
        <div className="bg-yellow-600/20 border border-yellow-500 p-4 rounded-lg text-center">
          <p className="text-yellow-200 font-semibold">
            ⏸️ El Quiz está pausado. Cliquea en Resumir para continuar.
          </p>
        </div>
      )}

      <div className={isPaused ? "opacity-50 pointer-events-none" : ""}>
        <QuestionCard
          question={quizQuestions[currentIndex]}
          allQuestions={quizQuestions}
          selected={selected}
          onSelect={(val) => setSelected(val)}
          gameMode={gameMode}
        />
      </div>

      <button
        onClick={handleNext}
        disabled={!selected || isPaused}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-500 disabled:cursor-not-allowed py-3 rounded-lg font-bold text-xl transition-all"
      >
        {currentIndex + 1 === quizQuestions.length ? "Finalizar" : "Siguiente"}
      </button>
    </div>
  );
};
