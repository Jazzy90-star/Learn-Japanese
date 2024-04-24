import React, { useState } from "react";
import Hiragana from "../utility/hiragana";
import Container from "react-bootstrap/Container";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [messages, setMessages] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const quizData = Hiragana.map((character) => {
    const answers = [
      { text: character.Romanji, correct: true },
      {
        text: Hiragana.at(getRandomNumber(character)).Romanji,
        correct: false,
      },
      {
        text: Hiragana.at(getRandomNumber(character)).Romanji,
        correct: false,
      },
    ];
    shuffleArray(answers);
    return {
      question: `What is the Romanji for ${character.character}?`,
      answers,
    };
  });

  function getRandomNumber(character) {
    var id = Math.random(1) * 46;
    while (id == character.id) {
      id = Math.random(1) * 46;
    }
    return id;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleAnswer = (answer, index) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 1);
      setMessages((prevMessages) => ({ ...prevMessages, [index]: "Correct!" }));
    } else {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [index]: "Incorrect!",
      }));
    }
  };

  return (
    <Container>
      <h1> Hiragana Quiz </h1>
      <div className="quiz-grid">
        {quizData.map((question, index) => (
          <div key={index}>
            <h4>{question.question}</h4>
            {question.answers.map((answer, answerIndex) => (
              <button
                key={answerIndex}
                onClick={() => handleAnswer(answer, index)}
                style={{
                  backgroundColor: selectedAnswer === answer ? "green" : "",
                  color: selectedAnswer === answer ? "white" : "",
                }}
              >
                {answer.text}
              </button>
            ))}
            {messages[index] && <p>{messages[index]}</p>}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Quiz;
