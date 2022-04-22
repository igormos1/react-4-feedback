import React from 'react';
import propTypes from 'prop-types';
//import styles from './Statistics.module.css';

const Statistics = ({feedbacks}) => {    
        const estimates = Object.values(feedbacks);  
        const countTotalFeedback = () => { return estimates.reduce(
          (total, estimate) => total+estimate, 0
        )};
        const countPositiveFeedbackPercentage =Math.round(estimates[0] / countTotalFeedback() * 100);
      
        return(
            <div>
                
                {Object.keys(feedbacks).map((estimate) => {
                  return(
                      <p 
                      key = {estimate}>{estimate}:{feedbacks[estimate]}</p>
                  )
              })}
              <p>Total: {countTotalFeedback()}</p>
              <p>{estimates[0]?`Positive feedback: ${countPositiveFeedbackPercentage}%`:'No positive feedback'}</p>
            </div>
        )
    
}

Statistics.propTypes = {
  feedbacks: propTypes.objectOf(propTypes.number).isRequired
}

export default Statistics;