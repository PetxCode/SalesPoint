import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderScreen = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Home>Home</Home>
          <Ending>
            <Cart to="/cart">cart: {0}</Cart>

            <Log>Log Out</Log>
          </Ending>
        </Wrapper>
      </Container>
    </div>
  );
};

export default HeaderScreen;

const Log = styled.div`
  color: white;
  background-color: darkorange;
  padding: 7px 10px;
  transition: all 350ms;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Cart = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0 10px;
  font-size: 10px;
  font-weight: 700;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Ending = styled.div`
  display: flex;
  align-items: center;
`;

const Home = styled.div`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: antiquewhite;
`;
