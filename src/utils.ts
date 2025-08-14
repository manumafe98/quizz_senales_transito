import type { Question, SignalType } from "./data";

export const generateOptions = (
  allQuestions: Question[],
  correctAnswer: string,
  currentQuestionType?: SignalType
): string[] => {
  // If we have a specific type, try to get options from the same type first
  if (currentQuestionType) {
    const sameTypeQuestions = allQuestions.filter(
      (q) => q.type === currentQuestionType && q.answer !== correctAnswer
    );

    // If we have enough same-type questions, use only those
    if (sameTypeQuestions.length >= 2) {
      const shuffled = [...sameTypeQuestions].sort(() => Math.random() - 0.5);
      const incorrectOptions = shuffled.slice(0, 2).map((q) => q.answer);

      // Combine correct answer with incorrect options
      const options = [correctAnswer, ...incorrectOptions];

      // Shuffle the final options array
      return options.sort(() => Math.random() - 0.5);
    }
  }

  // Fallback to original logic if not enough same-type questions
  // Get all other answers except the correct one
  const otherAnswers = allQuestions
    .filter((q) => q.answer !== correctAnswer)
    .map((q) => q.answer);

  // Shuffle and take 2 random incorrect answers
  const shuffled = [...otherAnswers].sort(() => Math.random() - 0.5);
  const incorrectOptions = shuffled.slice(0, 2);

  // Combine correct answer with incorrect options
  const options = [correctAnswer, ...incorrectOptions];

  // Shuffle the final options array
  return options.sort(() => Math.random() - 0.5);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
