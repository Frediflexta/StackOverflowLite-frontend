import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './Questions.scss';

const Questions = (props) => {
  const {
    question
  } = props;

  return (
    <div className="content-container">
      <div className="votes">
        {/* <div className="v-counts">
          <span>
            {question.voteCount}
          </span>
        </div>
        <div className="quote">vote(s)</div> */}
      </div>
      <div className="answers">
        <div className="ans-counts">
          <span>
            {question.totalanswers}
          </span>
        </div>
        <div className="quote">answers</div>
      </div>
      <div className="ques-details">
        <h3><Link to={`/questions/${question.id}`}>
          {question.questitle}
        </Link></h3>
        <p>{question.quesbody}</p>
      </div>
    </div>
  );
};

Questions.propTypes = {
  question: propTypes.object,
};


export default Questions;
