import React, { useState } from "react";
import accdata from "../data/accdata";
import SingleQuestion from "./SingleQuestion";
import "../styles/accordion.css";

const Question = () => {
  const [questions, setQuestions] = useState(accdata);

  return (
    <section className="accordion">
      <div className="container">
        <div className="title">
          <h2>Accordion</h2>
          <div className="underline"></div>
        </div>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Question;
