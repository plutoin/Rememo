import { useNavigate } from "react-router-dom";

import { ButtonFill } from "../../styles/styles";
import { Container } from "./ErrorPage.styles";

import errorImg from "../../assets/errorImg.png";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="error__img">
        <img src={errorImg} alt="pageNotFound" />
      </div>
      <div className="error__text">
        <h1>404</h1>
        <div>Page Not Found</div>
        <ButtonFill onClick={() => navigate("/")}>
          <span>메인 페이지로 돌아가기</span>
        </ButtonFill>
      </div>
    </Container>
  );
}
