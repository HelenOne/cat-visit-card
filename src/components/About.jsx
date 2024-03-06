import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <img src={"/assets/avatar.jpeg"} alt="John Doe" className="about-image"/>

        <h2>Джон Доу</h2>
        <p>Программист из фантастического мира</p>
        <p>Люблю путешествия во времени и разгадывать загадки космоса</p>
    </div>  

  );
}

export default About;

