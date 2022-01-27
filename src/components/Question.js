import React, { useState } from "react";

import accdata from "../data/accdata";
import SingleQuestion from "./SingleQuestion";

const Question = ({ title, info }) => {
  const [questions, setQuestions] = useState(accdata);

  return (
    <section className="container">
      <div className=" question">
        <h3>questions and answers about login</h3>
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
