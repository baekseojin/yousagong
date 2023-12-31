import Header from "../../Header/Header";
import "./EducationSection.css";

export default function EducationSection() {
  return (
    <div>
      <Header />
      <div className="EducationSection">
        <div className="EducationSection-title">
          <h2>추천하는 학습 사이트</h2>
        </div>
        <hr className="line" />
        <div className="box1-container">
          <div className="education-box1">
            <div className="box1-title">
              <h3>인터넷 강의</h3>
            </div>
            <ul>
              <li className="box1-content">
                <a href="https://www.ebs.co.kr/main?NaPm=ct%3Dhf2bview%7Cci%3D0Gy1001FZzHfpCO600-M%7Ctr%3Dsa%7Cet%3Dhf3rbd2w%7Cba%3D1%2E0%7Caa%3D1%2E0%7Chk%3Db03c9555b13a8cdb2e0c58e6759281a4efcd510d">
                  EBS
                </a>
                : 교육 전문 공영방송.
              </li>
              <br />
              <li>
                <a href="https://www.inflearn.com/">inflearn</a>: IT 전문 온라인
                교육 플랫폼.
              </li>
            </ul>
          </div>
          <div className="education-box1">
            <div className="box1-title">
              <h3>PPT 툴</h3>
            </div>
            <ul>
              <li>
                <a href="https://www.canva.com/">Canva</a>
                : 시각 콘텐츠를 만들기 위해 사용되는
                <br /> 디자인 플랫폼.
              </li>
              <br></br>
              <li>
                <a href="https://www.miricanvas.com/ko">미리캔버스</a>: 다양한
                무료 템플릿을 사용할 수 <br></br>있는 서비스.
              </li>
            </ul>
          </div>
          <div className="education-box1">
            <div className="box1-title">
              <h3>챌린지</h3>
            </div>
            <ul>
              <li>
                <a href="https://pi.tgclab.com/">열정 품은 타이머</a> : 공부는
                마라톤, 열품타에서 함께해요.
              </li>
              <br />
              <li>
                <a href="https://www.todomate.net/">todomate</a> : todolist로
                일정 정리하기.
              </li>
              <br />
            </ul>
            <br />
          </div>
        </div>
        <div className="EducationSection-subtitle">
          <h2>기타</h2>
        </div>
        <hr className="line"></hr>
      </div>
    </div>
  );
}
