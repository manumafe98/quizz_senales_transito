import { useState } from "react";
import { Quiz } from "./components/Quiz";
import { ModeSelection } from "./components/ModeSelection";
import { GameModeSelection } from "./components/GameModeSelection";
import { TypeSelection } from "./components/TypeSelection";
import { Header } from "./components/Header";
import { questions } from "./data";
import type { SignalType } from "./data";

export type GameMode = "all" | "specific";

export const App = () => {
  const [appState, setAppState] = useState<
    "game_mode_selection" | "mode_selection" | "type_selection" | "quiz"
  >("game_mode_selection");
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [gameMode, setGameMode] = useState<GameMode>("all");
  const [selectedType, setSelectedType] = useState<SignalType | null>(null);

  const handleGameModeSelect = (mode: GameMode) => {
    setGameMode(mode);
    if (mode === "all") {
      setAppState("mode_selection");
    } else {
      setAppState("type_selection");
    }
  };

  const handleTypeSelect = (type: SignalType) => {
    setSelectedType(type);
    setAppState("quiz");
  };

  const handleNumberSelect = (num: number) => {
    setSelectedCount(num);
    setAppState("quiz");
  };

  const handleRestart = () => {
    setAppState("game_mode_selection");
    setSelectedCount(0);
    setGameMode("all");
    setSelectedType(null);
  };

  const renderContent = () => {
    switch (appState) {
      case "game_mode_selection":
        return <GameModeSelection onGameModeSelect={handleGameModeSelect} />;
      case "mode_selection":
        return <ModeSelection onNumberSelect={handleNumberSelect} />;
      case "type_selection":
        return <TypeSelection onTypeSelect={handleTypeSelect} />;
      case "quiz":
        return (
          <Quiz
            questions={questions}
            numberOfQuestions={selectedCount}
            gameMode={gameMode}
            selectedType={selectedType}
            onRestart={handleRestart}
          />
        );
      default:
        return <GameModeSelection onGameModeSelect={handleGameModeSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <Header onHomeClick={handleRestart} />
      <main className="flex flex-col items-center justify-center p-6 pt-24">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
