import React from "react";
import { Col, Row } from "react-bootstrap";
import { BannerImg } from "../BannerImg/BannerImg.js";
import { BannerText } from "../BannerText/BannerText.js";

export const Body = ({ halfBanner }) => {
  return (
    <div className="container">
      <div className="top-banner">
        <Row>
          <Col xl={6}>
            <BannerText
              heading={"Looking to learn something "}
              highlitedWord={"New?"}
              subheading={"Do not worry, you found the right place!"}
            />
          </Col>
          <Col xl={6}>
            <BannerImg halfBanner={halfBanner} />
          </Col>
        </Row>
      </div>
      <hr />
    </div>
  );
};
