import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <main className="row_align main">
        <div>
          <h2>Self-drive vehicle rental in Mumbai</h2>
          <button className="book_btn">
            <Link to="/booking" className="link">
              <div className="row_align">
                <span>BOOK NOW </span>
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </Link>
          </button>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
