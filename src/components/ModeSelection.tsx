import { useMemo } from "react";
import { questions } from "../data";

type ModeSelectionProps = {
  onNumberSelect: (num: number) => void;
};

export const ModeSelection = ({ onNumberSelect }: ModeSelectionProps) => {
  const modes = [25, 50, 80];
  const totalQuestions = questions.length;

  const availableModes = useMemo(() => {
    const newAvailableModes = modes.filter((m) => totalQuestions >= m);

    // Always add "ALL" option
    if (totalQuestions > 0) {
      newAvailableModes.push(totalQuestions);
    }

    return [...new Set(newAvailableModes)].sort((a, b) => a - b);
  }, [totalQuestions]);

  return (
    <div className="space-y-6 text-center max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold my-3">🌍 Modo: Todas las Señales</h1>
        <p className="text-lg text-purple-300">
          Practica con todas las señales mezcladas aleatoriamente
        </p>
        <p className="text-sm text-purple-200 mt-1">
          Vicente López - Provincia de Buenos Aires
        </p>
      </div>

      {/* How it works section - COMPACT STYLING */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30">
          <h2 className="text-xl font-semibold mb-3 text-blue-200 flex items-center justify-center gap-2">
            <span className="text-2xl">📋</span>
            ¿Cómo funciona?
          </h2>
          <div className="space-y-2">
            {[
              {
                icon: "🖼️",
                text: "Se muestra la imagen de una señal de tránsito",
              },
              {
                icon: "✅",
                text: "Selecciona la respuesta correcta entre 3 opciones",
              },
              { icon: "⏱️", text: "Tienes 2 minutos por pregunta" },
              {
                icon: "🔀",
                text: "Las preguntas se seleccionan aleatoriamente",
              },
              {
                icon: "📊",
                text: "Al final verás tu puntuación y las respuestas incorrectas",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-left">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span className="text-blue-100 leading-snug text-sm">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30">
          <h2 className="text-xl font-semibold mb-3 text-purple-200 flex items-center justify-center gap-2">
            <span className="text-2xl">💡</span>
            Consejos para el examen
          </h2>
          <div className="space-y-2">
            {[
              { icon: "🎨", text: "Estudia la forma y color de cada señal" },
              {
                icon: "🔄",
                text: "Practica con diferentes cantidades de preguntas",
              },
              { icon: "📝", text: "Repasa las señales que te equivoques" },
              {
                icon: "👀",
                text: "En el examen real, lee cada opción cuidadosamente",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-left">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span className="text-purple-100 leading-snug text-sm">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Database info - COMPACT STYLING */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm p-3 rounded-xl border border-green-500/40">
        <p className="text-green-200 font-semibold flex items-center justify-center gap-2">
          <span className="text-xl">📚</span>
          Base de datos: {totalQuestions} señales de tránsito disponibles
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Elige la cantidad de preguntas:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center max-w-5xl mx-auto">
          {availableModes.map((num) => {
            const isAll = num === totalQuestions;

            return (
              <button
                key={num}
                onClick={() => onNumberSelect(num)}
                className={`px-6 py-6 ${
                  isAll
                    ? "bg-gradient-to-br from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                    : "bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                } rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20`}
              >
                <div className="text-3xl mb-2">
                  {isAll && "🎓"}
                  {num === 25 && "🎯"}
                  {num === 50 && "🚀"}
                  {num === 80 && "🏆"}
                </div>
                <div className="text-xl mb-1">
                  {isAll ? "TODAS" : num} {isAll ? "" : "Preguntas"}
                </div>
                <div className="text-xs opacity-80">
                  {isAll && "Examen Completo"}
                  {num === 25 && "Quiz Rápido"}
                  {num === 50 && "Quiz Estándar"}
                  {num === 80 && "Quiz Completo"}
                </div>
                <div className="text-xs opacity-60 mt-1">
                  ≈ {Math.ceil((num * 2) / 60)} minutos
                </div>
              </button>
            );
          })}
        </div>

        {availableModes.length === 0 && (
          <div className="bg-red-600/20 p-4 rounded-lg border border-red-500">
            <p className="text-red-300">
              ⚠️ No hay suficientes señales de tránsito disponibles
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-8 bg-gradient-to-r from-blue-700/30 to-green-700/30 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30">
          <h3 className="text-lg font-semibold mb-2 text-blue-200">
            🌍 Modo "Todas las Señales"
          </h3>
          <p className="text-blue-100 text-sm">
            En este modo, las señales se mezclan aleatoriamente de todos los
            tipos disponibles. Las opciones de respuesta pueden ser de
            diferentes categorías, simulando un examen real. Si eliges "TODAS",
            no se aleatorizan sino que se mezclan para asegurar que practiques
            con cada señal.
          </p>
        </div>
      </div>
    </div>
  );
};
