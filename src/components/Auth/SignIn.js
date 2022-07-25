import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const mainURL = "http://localhost:2331";

const SignIn = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup.string().required(),
      password: yup.string().required(),
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
            <Input placeholder="email" {...register("email")} />
            <Input placeholder="password" {...register("password")} />

            <Button type="submit">Sign in</Button>

            <Text>
              Already have an Account, Link here to{" "}
              <Span to="/signup">Sign up</Span>
            </Text>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignIn;

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
