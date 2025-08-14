import type { Question, SignalType } from "../data";
import type { GameMode } from "../App";

export type Answered = { question: Question; chosen: string };

type ResultProps = {
  score: number;
  total: number;
  answered: Answered[];
  onRestart: () => void;
  totalTime: number;
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

const getScoreMessage = (score: number, total: number) => {
  const percentage = (score / total) * 100;

  if (percentage >= 90) {
    return { message: "¡Excelente! 🎉", color: "text-green-400", emoji: "🏆" };
  } else if (percentage >= 75) {
    return { message: "¡Muy bien! 👍", color: "text-blue-400", emoji: "🎯" };
  } else if (percentage >= 60) {
    return {
      message: "Bien, pero puedes mejorar 📚",
      color: "text-yellow-400",
      emoji: "📖",
    };
  } else {
    return {
      message: "Necesitas estudiar más 💪",
      color: "text-orange-400",
      emoji: "📚",
    };
  }
};

const getModeSpecificMessage = (
  gameMode: GameMode,
  selectedType: SignalType | null,
  percentage: number
) => {
  if (gameMode === "specific" && selectedType) {
    if (percentage >= 90) {
      return `¡Dominas las señales de tipo "${selectedType}"! 🌟`;
    } else if (percentage >= 75) {
      return `¡Buen conocimiento de "${selectedType}"! 👏`;
    } else {
      return `Sigue practicando las señales "${selectedType}" 📖`;
    }
  } else {
    if (percentage >= 90) {
      return "¡Estás listo para el examen de manejo! 🚗";
    } else if (percentage >= 75) {
      return "¡Vas por buen camino! Sigue practicando 🛣️";
    } else {
      return "Practica más con diferentes tipos de señales 🚦";
    }
  }
};

export const Result = ({
  score,
  total,
  answered,
  onRestart,
  totalTime,
  gameMode,
  selectedType,
}: ResultProps) => {
  const incorrect = answered.filter((a) => a.chosen !== a.question.answer);
  const { message, color, emoji } = getScoreMessage(score, total);
  const percentage = Math.round((score / total) * 100);
  const modeSpecificMessage = getModeSpecificMessage(
    gameMode,
    selectedType,
    percentage
  );

  return (
    <div className="space-y-6 text-center max-w-4xl w-full mt-5">
      {/* Main Score Display */}
      <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className={`text-4xl font-bold ${color} mb-2`}>
          {score} / {total} ({percentage}%)
        </h2>
        <p className="text-2xl mb-2">{message}</p>
        <p className="text-lg text-purple-300 mb-4">{modeSpecificMessage}</p>
        <p className="text-xl text-purple-300">
          ⏱️ Tiempo total: {formatTime(totalTime)}
        </p>
      </div>

      {/* Mode Info */}
      <div className="bg-gradient-to-r from-blue-700/30 to-purple-700/30 p-4 rounded-xl border border-blue-500/30">
        <div className="flex items-center justify-center gap-2 text-lg font-semibold">
          {gameMode === "specific" && selectedType ? (
            <>
              <span className="text-2xl">🎯</span>
              <span>Modo Específico: {selectedType}</span>
            </>
          ) : (
            <>
              <span className="text-2xl">🌍</span>
              <span>Modo: Todas las Señales</span>
            </>
          )}
        </div>
        {gameMode === "specific" && (
          <p className="text-sm text-blue-200 mt-2">
            Las opciones fueron del mismo tipo de señal, haciendo el quiz más
            desafiante
          </p>
        )}
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-600/20 p-4 rounded-lg border border-green-500">
          <div className="text-2xl font-bold text-green-400">{score}</div>
          <div className="text-green-200">Correctas</div>
        </div>
        <div className="bg-red-600/20 p-4 rounded-lg border border-red-500">
          <div className="text-2xl font-bold text-red-400">
            {incorrect.length}
          </div>
          <div className="text-red-200">Incorrectas</div>
        </div>
        <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-500">
          <div className="text-2xl font-bold text-blue-400">{percentage}%</div>
          <div className="text-blue-200">Precisión</div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-xl font-bold transition-transform transform hover:scale-105 shadow-lg"
      >
        🏠 Volver al Menú Principal
      </button>

      {/* Review Incorrect Answers */}
      {incorrect.length > 0 && (
        <div className="text-left bg-white text-black p-6 rounded-xl mt-8 shadow-lg">
          <h3 className="font-bold text-2xl mb-6 text-center border-b pb-3 text-red-700">
            📚 Revisa tus Respuestas Incorrectas ({incorrect.length})
          </h3>

          <div className="space-y-6">
            {incorrect.map(({ question, chosen }, i) => (
              <div
                key={i}
                className="p-5 bg-gray-50 rounded-lg border-l-4 border-red-500"
              >
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  {/* Signal Image */}
                  <div className="flex-shrink-0">
                    <div className="bg-white p-3 rounded-lg border-2 border-gray-300 shadow-sm">
                      <img
                        src={question.image}
                        alt="Señal de Tránsito"
                        className="w-20 h-20 object-contain"
                        onError={(e) => {
                          e.currentTarget.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNSA2NUw1MCA0MEw2NSA2NUgzNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTQwIDcwSDYwVjc1SDQwVjcwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
                        }}
                      />
                    </div>
                  </div>

                  {/* Answer Details */}
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        Pregunta {i + 1}
                      </span>
                      <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {question.type}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 rounded bg-red-100 border-l-4 border-red-500">
                        <strong className="text-red-800">
                          ❌ Tu respuesta:
                        </strong>
                        <div className="text-red-700 mt-1">{chosen}</div>
                      </div>

                      <div className="p-3 rounded bg-green-100 border-l-4 border-green-500">
                        <strong className="text-green-800">
                          ✅ Respuesta correcta:
                        </strong>
                        <div className="text-green-700 mt-1 font-semibold">
                          {question.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-blue-800 font-semibold">
              💡 Consejo: Estudia estas señales antes del próximo intento
            </p>
          </div>
        </div>
      )}

      {/* Perfect Score Celebration */}
      {score === total && (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-yellow-900 p-6 rounded-xl font-bold text-lg">
          🎉 ¡PUNTUACIÓN PERFECTA! 🎉
          <br />
          {gameMode === "specific" && selectedType
            ? `¡Dominas completamente las señales "${selectedType}"!`
            : "¡Estás listo para el examen de manejo!"}
        </div>
      )}
    </div>
  );
};
