import Icon1 from "../../Assets/images/upload-icon-1.svg";
import Icon2 from "../../Assets/images/upload-icon-2.svg";
import Icon3 from "../../Assets/images/upload-icon-3.svg";
import Icon4 from "../../Assets/images/upload-icon-4.svg";
const ContactProcess = () => {
  const Process = [
    {
      icon: Icon3,
      title: "업로드하기",
      describe: "필요한 계약서 파일을 업로드합니다.",
    },
    {
      icon: Icon2,
      title: "서명 요청하기",
      describe: "업로드한 계약서 파일에 서명 요청을 하세요.",
    },
    {
      icon: Icon3,
      title: "서명 입력하기",
      describe: "상대방이 간단한 절차를 통해 서명할 수 있습니다.",
    },
    {
      icon: Icon4,
      title: "계약 완료",
      describe: "언제 어디서든 5분 만에 계약 완료!",
    },
  ];
  return (
    <div className="contact-process">
      <div className="container">
        <h3 className="contact-process__heading">간단하게 끝내는 계약과정</h3>
        <p className="contact-process__paragraph">
          계약서 파일을 업로드하여 서명을 요청해 보세요. <br />
          상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수
          있습니다.
          <br /> 언제 어디서든 5분만에 계약을 체결해 보세요.
        </p>
        <div className="contact-process__step">
          {Process.map((step) => (
            <div className="contact-process__step--item">
              <img src={step.icon} className="contact-process__step--icon" />
              <h4 className="contact-process__step--title">{step.title}</h4>
              <p className="contact-process__step--describe">{step.describe}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactProcess;
