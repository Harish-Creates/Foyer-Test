import React from 'react';
import Feature from '../../components/feature/Feature';
import './workprocess.css';

const workData = [
  {
    title: 'Internet Business Strategy',
    text: 'the strategy adopted by a business to go online and use web approach for marketing, communicating and engaging customers through a proprietary website.',
  },
  {
    title: 'Design Prototype Specification',
    text: 'few lines of text written next to a prototype and describing details that may be ambiguous in the design.',
  },
  {
    title: 'Software Production',
    text: 'Software implementation represents the manufacturing of a software product, while software replication represents the software production process',
  },
  {
    title: 'Software Testing',
    text: 'Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do.',
  },
];

const Workprocess = () => (
  <div className="ij__features section__padding" id="workprocess">
    <div className="ij__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="ij__features-container">
      {workData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Workprocess;
