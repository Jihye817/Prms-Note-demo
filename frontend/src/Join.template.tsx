import { Form } from "react-router-dom";
import { styled } from "styled-components";
import oc from "open-color";
import MussgImage from "./assets/mussg.svg";

export type JoinTemplateProps = {
  onSubmit: (data: { email: string; password: string }) => Promise<void>;
};

export const JoinTemplate: React.FC<JoinTemplateProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    onSubmit({ email, password });
  };

  return (
    <Container>
      <MussgImage />
      <AppTitle>회원가입</AppTitle>

      <AppDescription>
        <Form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="이메일" required />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            required
          />
          <button type="submit">가입하기</button>
        </Form>
      </AppDescription>

      <Footer>© 2023 Grepp Co.</Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 72px 24px;
  text-align: center;
`;

const AppTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px;
`;

const AppDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 36px;
`;

const Footer = styled.footer`
  font-size: 14px;
  font-weight: 400;
  color: ${oc.gray[6]};
`;
