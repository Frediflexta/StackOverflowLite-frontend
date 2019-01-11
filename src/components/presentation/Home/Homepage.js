import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h1 className="title">
              Welcome to StackOverFlow-Lite
            </h1>
            {/* <h2 className="subtitle">
                        $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
            </h2> */}
            <div className="field is-grouped is-centered">
              <Link className="button is-info" to="/questions">
                    View Recent Questions
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Homepage;
