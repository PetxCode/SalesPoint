import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const mainURL = "http://localhost:2331";
const SignUp = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      userName: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required(),
      confirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "Please enter a matching password"),
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
    const { userName, email, password } = data;

    const url = `${mainURL}/api/user/create`;
    await axios.post(url, { userName, email, password }).then((res) => {
      console.log(res.data.data);
      console.log("Hello");

      navigate("/signin");
    });
  });

  return (
    <div>
      <Container>
        <Wrapper>
          <Card onSubmit={onSubmit}>
            <Input placeholder="UserName" {...register("userName")} />
            <Input placeholder="email" {...register("email")} />
            <Input placeholder="password" {...register("password")} />
            <Input placeholder="confirm" {...register("confirm")} />

            <Button type="submit">Sign up</Button>

            <Text>
              Already have an Account, Link here to{" "}
              <Span to="/signin">Sign in</Span>
            </Text>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignUp;
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
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
