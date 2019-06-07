import React from "react";
import {Link} from 'react-router-dom';
import ErrorDir from '../image/ErrorDir2.jpg'


export default function PageNotFound() {
  return (
    <div>
      <img
        src={ErrorDir}
        style={{
          width: 950,
          height: 600,
          display: "block",
          margin: "auto",
          position: "relative"
        }}
      />
      <center>
        <Link to="/" className="btn btn-primary mt-4">
          Return to Home Page
        </Link>
      </center>
    </div>
  );
}
