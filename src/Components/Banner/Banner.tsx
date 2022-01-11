import ArrowButton from "../../Assets/images/arrow-button.svg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h2 className="banner__heading">
          모든 계약을 쉽고 <br />
          간단하게, 빠르게 처리하세요.
        </h2>
        <p className="banner__paragraph">
          가드 시그니처를 이용하면 어떤 계약이든 <br />
          복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,
          <br />
          문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
        </p>

        <div className="banner__button">
          <span className="banner__button--text">지금 확인하기</span>
          <div>
            <img className="banner__button--icon" src={ArrowButton}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
