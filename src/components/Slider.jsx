import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.8;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  // witdth: 100vw;
  // height: 100vh;
  position: relative;
`;
const ImgContainer = styled.div`
  // witdth: 100vh;
  // height: 100vh;
`;
const InfoContainer = styled.div`
  color: white;
  position: absolute;
  top: 350px;
  left: 680px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-style: italic;
`;
const Description = styled.p`
  font-size: 40px;
  letter-spacing: 0.2em;
  padding-left: 190px;
  transform: translateX(0.1em);
`;
const Button = styled.button`
  cursor: pointer;
  background-color: white;
  font-size: 18px;
  border-radius: 4px;
  padding: 12px 20px;
  border: 1px solid transparent;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s;
    border: 1px solid white;
  }
`;

const CardButton = styled.div`
  display: flex;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none !important;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <img
              style={{ height: "100vh", width: "auto" }}
              src="https://www.ovsfashion.com/on/demandware.static/-/Sites/default/dwf894888e/08022022/HP-SALDI-DSK-TAGLI_01_1766.00567ac4.webp"
              alt=""
            />
          </ImgContainer>
          <InfoContainer>
            <Title>NEW COLLECTION</Title>
            <Description>SPRING 2022</Description>
            <CardButton>
              <Button>NEW MEN'S ITEMS</Button>
              <Button>NEW WOMEN'S ITEMS</Button>
            </CardButton>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
