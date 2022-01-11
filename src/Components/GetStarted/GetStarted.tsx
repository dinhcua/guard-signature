import ArrowIcon from "../../Assets/images/arrow-icon-1.svg";
const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="container">
        <p className="get-started__paragraph">지금 바로 시작하세요!</p>
        <h3 className="get-started__heading">
          설명이 필요 없는 간단한 계약 과정,
          <br /> 직접 경험해보세요!
        </h3>
        <div className="get-started__button">
          <span>더 살펴보기</span>
          <img src={ArrowIcon} />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
