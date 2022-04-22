
import React, { useState } from 'react';
import Statistics from "./Statistics";
import FeedbackOptions from "./Feedback";
import Section from "./Section";
import Notification from "./Notification";

const App = () => { 

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

  const setEstimate = (estimate) => {
    switch (estimate) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        alert("Something is wrong");
    }
  }   

  const countFeedback = good + neutral +bad;

  const feedbacks = {good, neutral, bad};

  return(
          <>
            <Section text='Please leave feed back'>
              <FeedbackOptions 
                    feedbacks = {feedbacks} 
                    onLeaveFeedback={setEstimate}/>
            </Section>
            { countFeedback?
            <Section text='Statistics'>              
              <Statistics feedbacks = {feedbacks}  />
            </Section>:
            <Notification text='There is no feedback'/>
            } 
            </>
      )
      
      
      
  
}

export default App;