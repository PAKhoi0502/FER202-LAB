import React, { useState } from 'react';
import Question from '../components/Question';
import Result from '../components/Result';
import '../CSS/Quiz.css'; // Import file CSS

const quizData = [
    {
        question: "What is ReactJS?",
        answers: [
            "A JavaScript library for building user interfaces",
            "A programming language",
            "A database management system"
        ],
        correctAnswer: "A JavaScript library for building user interfaces",
    },
    {
        question: "What is JSX?",
        answers: [
            "A programming language",
            "A file format",
            "A syntax extension for JavaScript"
        ],
        correctAnswer: "A syntax extension for JavaScript",
    },
    // Thêm các câu hỏi khác vào đây
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        setSelectedAnswer("");
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className="quiz-container">
            {currentQuestionIndex < quizData.length ? (
                <Question
                    question={quizData[currentQuestionIndex].question}
                    answers={quizData[currentQuestionIndex].answers}
                    selectedAnswer={selectedAnswer}
                    onAnswerSelect={handleAnswerSelection}
                    onNext={handleNextQuestion}
                />
            ) : (
                <Result score={score} total={quizData.length} />
            )}
        </div>
    );
};

export default Quiz;
