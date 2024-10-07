import React from 'react';
import './Education.css';
function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-content">
        <h1>Education</h1>
        

        <div className="education-item">
          <h1></h1>
        <break></break>
          <h2>B.Tech-Aritificial Intelligence and Data Science</h2>
          <p>Sri Krishna College of Technology,Coimbatore on 2023-2027 aggeregate with 7.63 %.</p>
        </div>

        <div className="education-item">
          <h2>HSC</h2>
          <p>Govt Higher Secondary School, Mallanginar, Virudhunagar on 2023 aggeregate with 89.6 %.</p>
          {/* <p>Brief description or honors/achievements.</p> */}
        </div>

        <div className="education-item">
          <h2>Certifications</h2>
          <ul>
            <li>DRONE CODING AND SIMULATION - Workshop Certificate on 2024.</li>
            <li>Speech Contest Certificate at School on 2018-2019.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
