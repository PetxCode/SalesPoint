import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import pix from "./bread.jpg";

const mainURL = "http://localhost:2331";

const AdminScreen = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      title: yup.string().required(),
      description: yup.string().required(),
      type: yup.string().required(),
      price: yup.number().required(),
    })
    .required("All field should be filled");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const url = `${mainURL}/api/user/signinUser`;

    await axios.post(url, data).then((res) => {
      console.log(res.data.data);
      console.log("Hello");

      navigate("/");
    });
  });

  return (
    <div>
      <Container>
        <Wrapper>
          <Card onSubmit={onSubmit}>
            <Image src={pix} />
            <ImageInput />
            <ImageLabel>Upload Bread Image</ImageLabel>

            <Input placeholder="title" {...register("title")} />
            <Input placeholder="type" {...register("type")} />
            <Input placeholder="price" {...register("price")} />
            <Input placeholder="description" {...register("description")} />

            <Button type="submit">Create</Button>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminScreen;

const ImageLabel = styled.label`
  font-size: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: darkorange;
  color: white;
  font-weight: bolder;
  outline: none;
  border: 0;
  height: 30px;
  border-radius: 30px;
  transition: all 350ms;
  padding: 10px 10px;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;
const ImageInput = styled.input`
  display: none;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Span = styled(Link)`
  margin-left: 5px;
  color: blue;
  transition: all 350ms;
  font-weight: 700;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    font-weight: 900;
  }
`;

const Text = styled.div`
  font-size: 8px;
  font-weight: 500;
  display: flex;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Button = styled.button`
  font-size: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: darkorange;
  color: white;
  font-weight: bolder;
  outline: none;
  border: 0;
  height: 30px;
  width: 300px;
  border-radius: 3px;
  transition: all 350ms;
  padding: 0 10px;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const Input = styled.input`
  margin: 10px 0;
  height: 30px;
  width: 300px;
  border-radius: 3px;
  outline: none;
  border: 1px solid silver;
  padding: 0 10px;
`;

const Card = styled.form`
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  min-height: 200px;
  display: flex;
  align-items: center;
  padding: 30px 0;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
