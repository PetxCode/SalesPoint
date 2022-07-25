import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";

const TableUser = ({ props }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .post(`http://localhost:2331/api/user/${props._id}`)
      .then((res) => {
        setData(res.data.data);
        console.log(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header key={props._id}>
        <Name>{props.name}</Name>
        <Name>Address</Name>
        <Name>phone Numb.</Name>
        <Name>order Numb</Name>
        <Name>order Numb</Name>
        <Name nn>Seen</Name>
        <Name>delivered</Name>
      </Header>
    </div>
  );
};

export default TableUser;

const Name = styled.div`
  margin: 10px;
  width: ${({ nn }) => (nn ? "50px" : "100px")};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
`;

const Header = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
`;
