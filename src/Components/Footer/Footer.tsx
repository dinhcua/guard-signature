import icon1 from "../../Assets/images/-e-sns_icon_1.svg";
import icon2 from "../../Assets/images/-e-sns_icon_2.svg";
import icon3 from "../../Assets/images/-e-sns_icon_3.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <ul className="footer__list">
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>고객센터</li>
        </ul>
        <p className="footer--text">
          (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000
          <br />
          이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000
          <br />
          서울특별시 강남구 도산대로 8길 17 3층 <br /> <br />
          Copyright© GUARDSIGNATURE All rights reserved.
        </p>
      </div>
      <ul className="footer__list">
        <li>
          <img src={icon1} />
        </li>
        <li>
          <img src={icon2} />
        </li>
        <li>
          <img src={icon3} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
