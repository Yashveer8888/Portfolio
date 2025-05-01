import React from "react";
import { Row, Col } from "react-bootstrap";

function LeetCode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={12} className="text-center">
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong> on LeetCode
        </h1>
        <a
          href="https://leetcode.com/u/Yashveer8888/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://leetcard.jacoblin.cool/Yashveer8888?ext=heatmap&theme=dark"
            alt="LeetCode Activity Calendar"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </a>
      </Col>
    </Row>
  );
}

export default LeetCode;
