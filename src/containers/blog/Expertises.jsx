import React from 'react';
import Article from '../../components/article/Article';
import {expp02, expp03, expp04, expp05 } from './imports';
import './expertises.css';

const Expertises = () => (
  <div className="ij__exp section__padding" id="expertises">
    <div className="ij__exp-heading">
      <h1 className="gradient__text">Explore our expert works</h1>
    </div>
    <div className="ij__exp-container">
    
      <div className="ij__exp-container_groupB">
        <Article imgUrl={expp02}  text="Organization is Our Team" />
        <Article imgUrl={expp03}  text="Service Beyond Expectations" />
        <Article imgUrl={expp04}  text="Client-centric and Innovative" />
        <Article imgUrl={expp05}  text="Tech Experts" />
      </div>
    </div>
  </div>
);

export default Expertises;
