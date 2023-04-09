import { useNavigate } from "react-router-dom";

// CSS
import "./footer.css";

// Image
import instagramLogo from "../images/sns_instagram.svg";
import kakaotalkLogo from "../images/sns_kakaotalk.svg";
import supportLogo from "../images/sns_support.svg";

function Footer(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="logo-row">
        <a
          href="http://pf.kakao.com/_Vmxjxbxj"
          target="_blank"
          rel="noreferrer"
        >
          <img src={supportLogo} alt="support-logo" />
        </a>
        <a
          href="https://open.kakao.com/o/gS4s3HFe"
          target="_blank"
          rel="noreferrer"
        >
          <img src={kakaotalkLogo} alt="kakaotalk-logo" />
        </a>
        <a
          href="https://www.instagram.com/silgam.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramLogo} alt="instagram-logo" />
        </a>
      </div>
      <h6>
        <span
          onClick={() => {
            navigate("/terms");
          }}
        >
          서비스 이용약관
        </span>{" "}
        |{" "}
        <span
          onClick={() => {
            navigate("/privacy");
          }}
        >
          개인정보 처리방침
        </span>
      </h6>
      <h6>
        상호: 실감 | 대표: 민승현 | 전화번호: 0502-1932-3147 | 이메일:
        contact@silgam.app
      </h6>
      <h6>주소: 강원도 속초시 미시령로3337번길 20</h6>
      <h6>사업자등록번호 101-79-00366</h6>
    </div>
  );
}

export default Footer;
