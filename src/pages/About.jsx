import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr style={{ marginBottom: "20px" }} />
      <div>
        <Link
          style={{
            margin: "20px",
            textDecoration: "none",
            color: "#fff",
          }}
          to="employee"
        >
          Employee
        </Link>
        <Link
          style={{ margin: "20px", textDecoration: "none", color: "#fff" }}
          to="company"
        >
          Company
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export default About;
