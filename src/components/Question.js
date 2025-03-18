import React from 'react';

const Question = ({ question, answers, selectedAnswer, onAnswerSelect, onNext }) => {
    return (
        <div>
            <div className="question">{question}</div>
            <div className="answers">
                {answers.map((answer, index) => (
                    <div
                        key={index}
                        className={`answer-option ${selectedAnswer === answer ? 'selected' : ''}`}
                        onClick={() => onAnswerSelect(answer)}
                    >
                        {answer}
                    </div>
                ))}
            </div>
            <button onClick={onNext} disabled={!selectedAnswer}>
                Next
            </button>
        </div>
    );
};

export default Question;
