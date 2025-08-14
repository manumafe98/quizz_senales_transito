import type { Question } from "../data";
import type { GameMode } from "../App";
import { generateOptions } from "../utils";
import { useMemo } from "react";

type QuestionProps = {
  question: Question;
  allQuestions: Question[];
  selected: string | null;
  onSelect: (val: string) => void;
  gameMode: GameMode;
};

export const QuestionCard = ({
  question,
  allQuestions,
  selected,
  onSelect,
  gameMode,
}: QuestionProps) => {
  const options = useMemo(() => {
    // For specific mode, pass the question type to generate options from same type
    const currentQuestionType =
      gameMode === "specific" ? question.type : undefined;
    return generateOptions(allQuestions, question.answer, currentQuestionType);
  }, [question.answer, question.type, allQuestions, gameMode]);

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg space-y-6 w-full">
      {/* Signal Type Badge */}
      {gameMode === "all" && (
        <div className="flex justify-center">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
            {question.type}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="flex justify-center">
        <div className="bg-white p-4 rounded-lg border-2 border-gray-300 shadow-inner">
          <img
            src={question.image}
            alt="Señal de Tránsito"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNSA2NUw1MCA0MEw2NSA2NUgzNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTQwIDcwSDYwVjc1SDQwVjcwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          ¿Qué señal de tránsito es esta?
        </h3>
        <p className="text-sm text-gray-600">Selecciona la opción correcta</p>
      </div>

      {/* Options */}
      <div className="grid gap-3">
        {options.map((option, index) => {
          const isSelected = selected === option;
          const isCorrect = option === question.answer;
          const hasAnswered = selected !== null;

          // Base styles that remain consistent - THIS FIXES THE MICRO-MOVEMENT
          const baseClasses =
            "text-left p-4 rounded-lg transition-colors duration-200 font-medium border-2 min-h-[60px] flex items-center";

          let variantClasses = "";
          let cursorClass = "";

          if (!hasAnswered) {
            // Before answering
            variantClasses = isSelected
              ? "bg-blue-100 border-blue-500 text-blue-900"
              : "bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-900";
            cursorClass = "cursor-pointer";
          } else {
            // After answering
            cursorClass = "cursor-not-allowed";
            if (isCorrect) {
              variantClasses = "bg-green-200 border-green-500 text-green-800";
            } else if (isSelected) {
              variantClasses = "bg-red-200 border-red-500 text-red-800";
            } else {
              variantClasses =
                "bg-gray-100 border-gray-300 text-gray-500 opacity-60";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !hasAnswered && onSelect(option)}
              className={`${baseClasses} ${variantClasses} ${cursorClass}`}
              disabled={hasAnswered}
            >
              <div className="flex items-center gap-3 w-full">
                <span className="w-8 h-8 rounded-full bg-white border-2 border-current flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
