import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="top">
          <p className="title">TITLE HERE</p>
        </div>
        <p className="desc">
          This is the description of this card.
          <br />
          You can enter anything here.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 290px;
    height: 404px;
    background: linear-gradient(
      10deg,
      rgba(38, 146, 255, 1) 0%,
      rgba(0, 63, 255, 1) 100%
    );
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .top {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 290px;
    height: 300px;
  }

  .top .title {
    color: #fff;
    font-weight: bolder;
    font-size: x-large;
    margin-left: 10px;
    margin-top: 90%;
  }

  .card .desc {
    color: #fff;
    opacity: 75%;
    font-size: small;
    font-weight: lighter;
    margin-left: 10px;
    margin-top: 2%;
  }
`;

export default Card;
