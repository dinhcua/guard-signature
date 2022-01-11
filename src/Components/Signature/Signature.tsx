import Icon2 from "../../Assets/images/upload-icon-2.svg";
import Icon3 from "../../Assets/images/upload-icon-3.svg";
import Icon4 from "../../Assets/images/upload-icon-4.svg";
const Signature = () => {
  const signatures = [
    {
      image: Icon2,
      heading: "모두 시그니처만의 효과적인 기능",
      title1: "템플릿 저장 및 불러오기",
      describe1:
        "자주 사용하는 문서를 저장하고 필요할 때 마다 템플릿을 불러와 빠르게 작업할 수 있습니다.",
      title2: "폴더 설정",
      describe2:
        "별도로 관리가 필요한 문서들은 폴더 설정을 통해 보다 체계적으로 관리할 수 있습니다.",
      title3: "텍스트 및 체크박스 입력",
      describe3:
        "텍스트, 체크박스를 설정하여 문서에 텍스트를 자유롭게 입력하고 상대방의 동의 여부를 확인할 수 있습니다.",
      title4: "다양한 파일형식 지원",
      describe4:
        "한글, 오피스 계열(Word, PPT, Excel), PDF부터 JPG, PNG, GIF, BMP와 같은 이미지 파일까지 변환없이 업로드하고 사용할 수 있습니다.",
    },
    {
      image: Icon3,
      heading: "계약을 쉽고 빠르게 체결하는 방법!",
      title1: "공인인증서 없는 본인인증",
      describe1:
        "공인인증서와 ActiveX가 필요 없습니다. 이메일 인증, 휴대폰 인증, 암호인증 설정으로 간편하게 본인인증 해 보세요.",
      title2: "카카오톡으로 서명 요청하기",
      describe2:
        "카카오톡으로 상대방에게 서명을 요청해보세요. 상대방은 PC, 모바일 언제 어디에서나 계약서에 서명할 수 있습니다.",
      title3: "계약 체결과 보안",
      describe3:
        "누구나 이용하기 쉬운 직관적인 흐름으로 빠르고 신속하게 계약을 체결하고, 이후에도 지속적으로 관리할 수 있습니다.",
      title4: "가입 없이 즉시 서명",
      describe4:
        "계약 상대방은 번거로운 회원가입 절차 없이 간편인증 후 즉시 서명할 수 있습니다.",
    },
    {
      image: Icon4,
      heading: "수월하게 계약을 완료하세요",
      title1: "감사추적인증서를 통한 증명",
      describe1:
        "계약완료시 원본과 함께 발급되는 ‘감사추적인증서’로 계약 당사자의 행위를 쉽게 증명할 수 있습니다.",
      title2: "혼자 서명하기",
      describe2:
        "동의서, 영수증 같이 본인만 서명하는 문서에도 빠르게 서명할 수 있습니다.",
      title3: "다양한 드라이브 업로드 지원",
      describe3:
        "Google Drive, Dropbox, Box, One Drive에 저장되어 있 문서를 변환 없이 바로 업로드하여 이용하세요.",
      title4: "계약 문서 관리",
      describe4:
        "내문서함에서 계약 문서별로 내용 확인하기, 계약서 다운로드, 공유하기, 삭제하기가 가능합니다.",
    },
  ];
  return (
    <div className="signature">
      {signatures.map((signature) => (
        <div className="signature__item">
          <div className="signature__image">
            <img src={signature.image} className="signature__item--image" />
          </div>
          <div className="signature__describe">
            <h3 className="signature__describe--heading">
              {signature.heading}
            </h3>
            <p className="signature__describe--title">{signature.title1}</p>
            <p className="signature__describe--describe">
              {signature.describe1}
            </p>
            <p className="signature__describe--title">{signature.title2}</p>
            <p className="signature__describe--describe">
              {signature.describe2}
            </p>
            <p className="signature__describe--title">{signature.title3}</p>
            <p className="signature__describe--describe">
              {signature.describe3}
            </p>
            <p className="signature__describe--title">{signature.title4}</p>
            <p className="signature__describe--describe">
              {signature.describe4}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Signature;
