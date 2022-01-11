import Logo from "../../Assets/images/logo-icon-1.png";

const NavBar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src={Logo} className="navbar__logo"></img>
        <ul className="navbar__menu">
          <li className="navbar__menu--item active">
            <a href="/">서비스 소개</a>
          </li>
          <li className="navbar__menu--item">
            <a href="">활용 분야</a>
          </li>
          <li className="navbar__menu--item">
            <a href="">이용 혜택</a>
          </li>
          <li className="navbar__menu--item">
            <a href="">요금 안내</a>
          </li>
          <li className="navbar__menu--item">
            <a href="">고객센터</a>
          </li>
        </ul>
        <ul className="navbar__login">
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
