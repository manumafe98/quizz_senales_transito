import { useMemo } from "react";
import { getAvailableTypes, getQuestionsByType } from "../data";
import type { SignalType } from "../data";

type TypeSelectionProps = {
  onTypeSelect: (type: SignalType) => void;
};

const getTypeIcon = (type: SignalType): string => {
  switch (type) {
    case "Preventivas":
      return "⚠️";
    case "Reglamentarias o Prescriptivas (Prohibicion)":
      return "🚫";
    case "Informativas":
      return "ℹ️";
    case "Reglamentarias o Prescriptivas (Restriccion)":
      return "⛔";
    case "Caracteristicas de la via":
      return "🛣️";
    case "Fin de la prescripcion":
      return "🏁";
    case "Fin de la prevencion":
      return "✅";
    case "Prioridad":
      return "🔴";
    case "Advertencia de maximo peligro":
      return "⚡";
    case "Nomenclatura vial y urbana":
      return "🏘️";
    case "Transitorias":
      return "🚧";
    default:
      return "📋";
  }
};

const getTypeDescription = (type: SignalType): string => {
  switch (type) {
    case "Preventivas":
      return "Señales que advierten sobre peligros, obstáculos o cambios en la vía.";
    case "Reglamentarias o Prescriptivas (Prohibicion)":
      return "Señales que prohíben o restringen determinadas acciones o movimientos.";
    case "Informativas":
      return "Señales que brindan información sobre servicios y puntos de interés.";
    case "Reglamentarias o Prescriptivas (Restriccion)":
      return "Señales que indican limitaciones y prescripciones de tránsito.";
    case "Caracteristicas de la via":
      return "Señales que indican las características y condiciones de la vía.";
    case "Fin de la prescripcion":
      return "Señales que marcan el final de una restricción anteriormente indicada.";
    case "Fin de la prevencion":
      return "Señales que indican el fin de una zona de prevención o peligro.";
    case "Prioridad":
      return "Señales que establecen el derecho de paso y prioridades de tránsito.";
    case "Advertencia de maximo peligro":
      return "Señales que advierten sobre situaciones de máximo peligro.";
    case "Nomenclatura vial y urbana":
      return "Señales de identificación de rutas, calles y orientación vial.";
    case "Transitorias":
      return "Señales temporales utilizadas durante obras y situaciones especiales.";
    default:
      return "Categoría de señales de tránsito.";
  }
};

export const TypeSelection = ({ onTypeSelect }: TypeSelectionProps) => {
  const availableTypes = useMemo(() => getAvailableTypes(), []);

  return (
    <div className="space-y-6 text-center max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold my-3">
          🎯 Selecciona el Tipo de Señales
        </h1>
        <p className="text-lg text-purple-300">
          Estudia una categoría específica de señales de tránsito
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-gradient-to-r from-blue-800/40 to-blue-900/40 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30 mb-8">
        <h3 className="text-lg font-semibold mb-2 text-blue-200">
          📖 Modo Tipo Específico
        </h3>
        <p className="text-blue-100 text-sm">
          En este modo estudiarás únicamente señales de la categoría
          seleccionada. Las opciones de respuesta también serán del mismo tipo,
          haciendo el quiz más desafiante y ayudándote a distinguir mejor entre
          señales similares.
        </p>
      </div>

      {/* Type Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableTypes.map((type) => {
          const questionsCount = getQuestionsByType(type).length;

          return (
            <button
              key={type}
              onClick={() => onTypeSelect(type)}
              className="p-4 bg-gradient-to-br from-purple-600/80 to-blue-600/80 hover:from-purple-700/90 hover:to-blue-700/90 rounded-xl text-left transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">
                  {getTypeIcon(type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm mb-1 leading-tight">
                    {type}
                  </div>
                  <div className="text-xs opacity-80 mb-2 line-clamp-2">
                    {getTypeDescription(type)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">
                      {questionsCount} señales
                    </span>
                    <span className="text-xs opacity-60">
                      ≈ {Math.ceil((questionsCount * 2) / 60)} min
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Study Tips */}
      <div className="bg-gradient-to-r from-emerald-700/30 to-green-700/30 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/40 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-emerald-200 flex items-center justify-center gap-2">
          <span>💡</span> Consejo de Estudio
        </h3>
        <p className="text-emerald-100 text-sm">
          Te recomendamos estudiar por categorías para un aprendizaje más
          efectivo. Comienza con las señales preventivas e informativas, luego
          avanza hacia las reglamentarias que suelen ser más complejas. ¡Las
          señales del mismo tipo pueden ser muy similares, presta atención a los
          detalles!
        </p>
      </div>
    </div>
  );
};
