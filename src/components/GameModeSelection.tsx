import type { GameMode } from "../App";

type GameModeSelectionProps = {
  onGameModeSelect: (mode: GameMode) => void;
};

export const GameModeSelection = ({
  onGameModeSelect,
}: GameModeSelectionProps) => {
  return (
    <div className="space-y-6 text-center max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-bold my-3">
          🚦 Quiz de Señales de Tránsito
        </h1>
        <p className="text-lg text-purple-300">
          Practica para tu examen de licencia de conducir en Argentina
        </p>
        <p className="text-sm text-purple-200 mt-1">
          Vicente López - Provincia de Buenos Aires
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">
          Selecciona el modo de juego:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* All Signals Mode */}
          <button
            onClick={() => onGameModeSelect("all")}
            className="p-8 bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
          >
            <div className="text-5xl mb-4">🌍</div>
            <div className="text-2xl mb-3">Modo Todas las Señales</div>
            <div className="text-sm opacity-90 leading-relaxed">
              Practica con todas las señales disponibles mezcladas
              aleatoriamente. Perfecto para el repaso general y preparación
              completa del examen.
            </div>
            <div className="mt-4 text-xs opacity-75 bg-white/20 rounded-lg p-2">
              📚 Incluye todos los tipos de señales
            </div>
          </button>

          {/* Specific Type Mode */}
          <button
            onClick={() => onGameModeSelect("specific")}
            className="p-8 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
          >
            <div className="text-5xl mb-4">🎯</div>
            <div className="text-2xl mb-3">Modo Tipo Específico</div>
            <div className="text-sm opacity-90 leading-relaxed">
              Enfócate en un tipo específico de señales. Ideal para estudiar
              categorías particulares y reforzar conocimientos débiles.
            </div>
            <div className="mt-4 text-xs opacity-75 bg-white/20 rounded-lg p-2">
              🔍 Estudia por categorías específicas
            </div>
          </button>
        </div>

        {/* Mode Comparison */}
        <div className="mt-10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-semibold mb-6 text-center text-white">
            💡 ¿Cuál elegir?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
              <div className="font-bold text-green-300 mb-3 text-base flex items-center gap-2">
                <span className="text-xl">🌍</span>
                Todas las Señales
              </div>
              <ul className="space-y-2 text-green-100">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Simulación real del examen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Repaso general completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Opciones mezcladas de diferentes tipos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Ideal para evaluación final</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
              <div className="font-bold text-purple-300 mb-3 text-base flex items-center gap-2">
                <span className="text-xl">🎯</span>
                Tipo Específico
              </div>
              <ul className="space-y-2 text-purple-100">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Estudio focalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Refuerza áreas específicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Opciones del mismo tipo (más difícil)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Perfecto para aprendizaje progresivo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
