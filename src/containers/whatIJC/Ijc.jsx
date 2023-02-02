import React from 'react';
import Feature from '../../components/feature/Feature';
import './ijc.css';

const Ijc = () => (
  <div className="ij__ijc section__margin" id="wijc">
    <div className="ij__ijc-feature">
      <Feature title="What is IJC ?" text="Since our inception, our only aim was to provide top-notch IT solutions to firms that may lack behind in coping with Technological advancements." />
    </div>
    <div className="ij__ijc-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore more &gt;&gt;</p>
    </div>
    <div className="ij__ijc-container">
      <Feature title="Why Choose Us?" text="We work in the most synchronous manner so that there is no communication gap between the client and us." />
      <Feature title="Experience" text="45+ Years Experience, it assures that your day-to-day sales and business performance enhance your revenue." />
      <Feature title="Quality Assurance" text="Expert Technicians and delivery methods are adopted to deliver excellent performing solutions within the budget of the client and on time, every time." />
    </div>
  </div>
);

export default Ijc;
