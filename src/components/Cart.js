import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
// import crypto from "crypto";

const CartScreen = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get("http://localhost:2331/api/product").then((res) => {
      setData(res.data.data);
      console.log(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Holder>
          <TotalCost>Total Quantity: {0}</TotalCost>
          <TotalCost>Total Cost: {0}</TotalCost>

          <Button>Check-Out</Button>
        </Holder>
        <Card>
          {data?.map((props) => (
            <MainCard key={props._id}>
              <Image src={props.image} />
              <Name>{props.title}</Name>
              <br />
              <Holder>
                <Cost>
                  <span>COST:</span> #{props.price}
                </Cost>
                <Button>Add to Cart</Button>
              </Holder>
            </MainCard>
          ))}
        </Card>
      </Wrapper>
    </Container>
  );
};

export default CartScreen;

const TotalCost = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Cost = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  span {
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 0px;
`;

const LikeCount = styled.div`
  font-size: 10px;
  font-weight: 700;
`;

const Like = styled.div`
  background-color: darkorange;
  color: white;
  padding: 5px 20px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 350ms;
  margin: 0 10px;
  border-radius: 30px;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const LikeHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-weight: 900;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  background-color: darkorange;
  height: 160px;
  width: 100%;
  object-fit: cover;
`;

const MainCard = styled.div`
  overflow: hidden;
  margin: 8px;
  width: 350px;
  min-height: 230px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Card = styled.div`
  margin-top: 50px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  background-color: darkorange;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 350ms;
  margin-bottom: 10px;
  font-size: 10px;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  margin: 5px;
`;
const Text = styled.div``;

const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
