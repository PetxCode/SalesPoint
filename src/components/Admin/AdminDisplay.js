import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import TableUser from "./TableUser";

const AdminDisplay = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.post("http://localhost:2331/api/user/order").then((res) => {
      setData(res.data.data);
      console.log(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          <Card>
            <Header bc>
              <Name>Name</Name>
              <Name>Address</Name>
              <Name>phone Numb.</Name>
              <Name>order Numb</Name>
              <Name>order Numb</Name>
              <Name nn>Seen</Name>
              <Name bw>delivered</Name>
            </Header>

            {data?.map((props) => (
              <div>
                {/* {props.user.} */}

                <Header key={props._id}>
                  <Name>{props.user.name}</Name>
                  <Name>Address</Name>
                  <Name>phone Numb.</Name>
                  <Name>order Numb</Name>
                  <Name>order Numb</Name>
                  <Name nn>Seen</Name>
                  <Name bw>delivered</Name>
                </Header>
              </div>
            ))}
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminDisplay;

const Name = styled.div`
  margin: 10px;
  width: ${({ nn }) => (nn ? "50px" : "100px")};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  border-right: solid;
  border-color: silver;
  border-width: ${({ bw }) => (bw ? "0px" : "1px")};

  :hover {
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: flex;
  background-color: ${({ bc }) =>
    bc ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.03)"};
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  transition: all 350ms;
  border-bottom: 1px solid silver;

  :hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  min-height: 300px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Container = styled.div``;
