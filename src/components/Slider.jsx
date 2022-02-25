import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex: 1;
`;

const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  witdth: 100vw;
  height: 100vh;
  position: relative;
`;
const ImgContainer = styled.div`
  witdth: 100vh;
  height: 100vh;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 60px;
  font-style: italic;
  text-align: right;
`;
const Description = styled.p`
  font-size: 40px;
  letter-spacing: 0.2em;
  padding-left: 190px;
  transform: translateX(0.1em);
  text-align: right;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: white;
  font-size: 18px;
  border-radius: 4px;
  padding: 12px 20px;
  border: 1px solid transparent;
  justify-content: between;
  margin: 10px 45px;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s;
    border: 1px solid white;
  }
`;

const CardButton = styled.div`
  width: 50%;
  display: flex;
  margin-top: 40px;
  display: flex;
  align-items: center;
  outline: none !important;
  justify-content: center;
`;

const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Img
              src="https://www.ovsfashion.com/on/demandware.static/-/Sites/default/dwf894888e/08022022/HP-SALDI-DSK-TAGLI_01_1766.00567ac4.webp"
              alt=""
            />
          </ImgContainer>
          <InfoContainer>
            <Title>NEW COLLECTION</Title>
            <Description>SPRING 2022</Description>
            <CardButton>
              <Button>NEW WOMEN'S ITEMS</Button>
              <Button>NEW MEN'S ITEMS</Button>
            </CardButton>
          </InfoContainer>
        </Slide>
        {/* <Slide>
          <ImgContainer>
            <Img
              src="https://www.ovsfashion.com/on/demandware.static/-/Sites/default/dwbb86c778/08022022/HP-SALDI-DSK-TAGLI_03_1920.d809a3a1.webp"
              alt=""
            />
          </ImgContainer>
          <InfoContainer>
            <Title>SPRING FUN</Title>
            <Description>NEW KIDS</Description>
            <Description>COLLECTION</Description>
            <CardButton>
              <Button>TEEN GIRLS 10-15 YEARS</Button>
              <Button>TEEN BOYS 10-15 YEARS</Button>
            </CardButton>
          </InfoContainer>
        </Slide> */}
      </Wrapper>
    </Container>
  );
};

export default Slider;
