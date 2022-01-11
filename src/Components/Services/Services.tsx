import service1 from "../../Assets/images/service.png";
import service2 from "../../Assets/images/service-02.png";
import service3 from "../../Assets/images/service-03.png";
import service4 from "../../Assets/images/service-04.png";
const Services = () => {
  const services = [
    {
      number: "frist",
      cover: service1,
      title: "한 눈에 확인하는 계약 상태",
      describe:
        "계약이 진행되는 모든 과정을 실시간으로 추적해보세요. 진행 상태에 따라 내 서명 필요, 서명 대기중, 서명 완료, 취소, 거절 등이 조회됩니다. 상태 필터 기능을 통해 상태별로 문서를 나열하고 관리할 수도 있습니다.",
    },
    {
      number: "second",
      cover: service2,
      title: "사용하던 서명그대로",
      describe:
        "사용하던 사인과 도장을 PC와 모바일에서도 사용할 수 있습니다. 사인을 직접 그리거나, 다양한 서체의 디지털 도장을 만들 수 있습니다. 실제 도장을 카메라로 찍어서 업로드 하면 깔끔하게 보정되며, 가드 시그니처에서 만든 사인과 도장을 계약서에 바로 사용할 수 있습니다",
    },
    {
      number: "third",
      cover: service3,
      title: "간편한 본인인증",
      describe:
        "공인인증서와 OTP, Active X 등을 요구하지 않습니다. 간단하고 빠른 휴대폰 인증과 접근 암호 설정으로 본인인증을 요청할 수 있습니다. 본인인증 요청은 법적효력과 상관없이 선택적으로 이용 가능합니다.",
    },
    {
      number: "fourth",
      cover: service4,
      title: "텍스트 및체 크박스 입력",
      describe:
        "문서에 텍스트 박스와 체크박스를 입력해 보세요. 입력 위치, 크기, 글자체를 자유롭게 지정하고 필수입력 여부를 설정할 수 있습니다. 상대방에게 텍스트 입력을 요청할 수도 있습니다.",
    },
  ];
  return (
    <div className="service">
      {services.map((service) => (
        <div className="service__item">
          <img src={service.cover} className="service__cover--image"></img>

          <div className="service__decs">
            <span className="service__decs--number">{service.number}</span>
            <h3 className="service__decs--title">{service.title}</h3>
            <p className="service__decs--describe">{service.describe}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
