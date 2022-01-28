import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../styles/tabs.css";

const url = "https://course-api.com/react-tabs-project";

function Tabs() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="tabs">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="tabs-center">
        {/* btn container */}
        <div className="tabs-btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`tab-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* tab info */}
        <article className="tab-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="tab-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="tab-desc">
                <FaAngleDoubleRight className="tab-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn-tab">
        more info
      </button>
    </section>
  );
}

export default Tabs;
