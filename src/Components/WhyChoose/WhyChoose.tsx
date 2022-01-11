import WhyChooseImage from "../../Assets/images/why-choose.png";
import ArrowIcon from "../../Assets/images/arrow-icon-1.svg";
import icon1 from "../../Assets/images/-e-reason_icon_1.svg";
import icon2 from "../../Assets/images/-e-reason_icon_2.svg";
import icon3 from "../../Assets/images/-e-reason_icon_3.svg";
import icon4 from "../../Assets/images/-e-reason_icon_4.svg";
import icon5 from "../../Assets/images/-e-reason_icon_5.svg";
import icon6 from "../../Assets/images/-e-reason_icon_6.svg";
const WhyChoose = () => {
  const reasones = [
    {
      icon: icon1,
      title: "쉽고 편리하게",
      describe: "번거로운 절차 없이 누구나 빠르게 계약을 체결할 수 있습니다.",
    },

    {
      icon: icon3,
      title: "안전한 보안",
      describe: "데이터는 암호화되어 전송되고 안전한 곳에 저장됩니다.",
    },
    {
      icon: icon5,
      title: "다양한 파일형식",
      describe: "한글, 오피스부터 PDF, JPG와 같은 이미지 파일도 변환없이 지원",
    },
    {
      icon: icon2,
      title: "간단한 본인인증",
      describe: "공인인증서와 ActiveX없이도 본인인증을 할 수 있습니다.",
    },
    {
      icon: icon4,
      title: "효율적인 작업",
      describe: "자주 사용하는 문서들을 저장하고 불러와 작업할 수 있습니다.",
    },

    {
      icon: icon6,
      title: "계약서 관리",
      describe:
        "관리가 필요한 문서를 한 눈에 보고 체계적으로 관리할 수 있습니다.",
    },
  ];
  return (
    <div className="why-choose">
      <div className="container">
        <h3 className="why-choose__heading">가드 시그니처를 선택하는 이유</h3>
        <p className="why-choose__paragraph">
          많은 기업들이 가드 시그니처를 선택하는 이유,
          <br />
          아래 버튼을 눌러 상세한 정보를 알아보세요.
        </p>
        <div className="why-choose__reason">
          <div className="why-choose__reason--list">
            {reasones
              .filter((reason, idx) => idx < 3)
              .map((reason) => {
                return (
                  <div className="why-choose__reason--item">
                    <img
                      src={reason.icon}
                      className="why-choose__reason--icon"
                    />
                    <h4 className="why-choose__reason--title">
                      {reason.title}
                    </h4>
                    <p className="why-choose__reason--describe">
                      {reason.describe}
                    </p>
                  </div>
                );
              })}
          </div>
          <img src={WhyChooseImage} className="why-choose__reason--image" />
          <div className="why-choose__reason--item">
            <div className="why-choose__reason--list right">
              {reasones
                .filter((reason, idx) => idx > 2)
                .map((reason) => {
                  return (
                    <div className="why-choose__reason--item">
                      <img
                        src={reason.icon}
                        className="why-choose__reason--icon"
                      />
                      <h4 className="why-choose__reason--title">
                        {reason.title}
                      </h4>
                      <p className="why-choose__reason--describe">
                        {reason.describe}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="get-started__button">
        <span>가이드 다운로드</span>
        <img src={ArrowIcon} />
      </div>
    </div>
  );
};

export default WhyChoose;
