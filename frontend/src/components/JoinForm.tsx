import React from "react";
import { styled } from "styled-components";

export interface JoinFormProps {
  onSubmit?(e: { email: string; password: string }): void;
}

export const JoinForm: React.FC<JoinFormProps> = (props) => {
  return (
    <>
      <Container>
        <Title>회원가입</Title>
        <Form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            if (password !== passwordConfirm) {
            }
            props.onSubmit?.({ email, password });
          }}
        >
          <InputContainer></InputContainer>
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 72px 24px;
  text-align: center;
`;

const Title = styled.div``;

const Form = styled.div``;
const InputContainer = styled.div``;
