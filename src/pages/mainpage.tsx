import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./mainpage.css";

// images
import appStore from "../images/app-store.png";
import appIcon from "../images/app_icon.png";
import icon from "../images/app_icon.svg";
import noiseSettingPageMockup from "../images/mockup_noise_settings.png";
import simulationPageMockup from "../images/mockup_simulation.png";
// import timetablePageMockup from '../images/mockup_timetable.png'; // not yet
import feedbackPageMockup from "../images/mockup_record.png";
import playStore from "../images/play-store.png";

function Mainpage(): JSX.Element {
  const isPc = useMediaQuery({
    query: "(min-width : 500px)",
  });

  const [showHeader, setShowHeader] = useState(false);
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);

  const changeHeader = (): void => {
    if (window.scrollY > 30) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }

    if (window.scrollY > 100) {
      setShowFirstSection(true);
    } else {
      setShowFirstSection(false);
    }

    if (window.scrollY > 600) {
      setShowSecondSection(true);
    } else {
      setShowSecondSection(false);
    }

    if (window.scrollY > 1100) {
      setShowThirdSection(true);
    } else {
      setShowThirdSection(false);
    }

    if (window.scrollY > 1600) {
      setShowFourthSection(true);
    } else {
      setShowFourthSection(false);
    }
  };

  window.addEventListener("scroll", changeHeader);

  if (isPc) {
    return (
      <div className="mainpage">
        <nav>
          <div
            className={
              showHeader ? "header-content-visible" : "header-content-invisible"
            }
          >
            <img className="logo" src={icon} />
            <div className="header-nav-btn-row">
              {/* buttons of header below */}
              {/* <button className="hader-nav-btn">다운로드</button>
              <button className="hader-nav-btn">설치</button>
              <button className="hader-nav-btn">이동</button>
              <button className="hader-nav-btn">문의</button> */}
            </div>
          </div>
        </nav>
        <main className="mainpage-main">
          <section>
            <div className="section-main-area">
              <h2>시험장의 변수때문에 1년의 노력이 헛되지 않게</h2>
              <div className="section-main-title">
                <img className="app-icon" src={appIcon} alt="app-icon" />
                <div className="download-button-row">
                  <h1>
                    실전 감각, <strong>실감</strong>
                  </h1>
                  <div className="store-btn-row">
                    <a href="https://play.google.com/store/apps/details?id=com.seunghyun.silgam">
                      <img
                        className="play-store-btn"
                        src={playStore}
                        alt="play-store-download-button"
                      />
                    </a>
                    <a href="https://apps.apple.com/us/app/실전-감각-실감/id1598576852">
                      <img
                        className="app-store-btn"
                        src={appStore}
                        alt="app-store-download-button"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-desc-area">
              <img
                className={
                  showFirstSection
                    ? "mockup-img-visible"
                    : "mockup-img-invisible"
                }
                src={simulationPageMockup}
                alt="mockup-simulation"
              />
              <div
                className={
                  showFirstSection
                    ? "description-area-right"
                    : "description-area-right-invisible"
                }
              >
                <h1>시험장 시뮬레이션</h1>
                <h4>
                  과목별 시험 시간에 맞춰 표시되는 아날로그 시계와, 실제
                  시험장과 동일한 타종 소리로 현장감을 극대화할 수 있습니다.
                </h4>
              </div>
            </div>
          </section>
          <section>
            <div className="section-desc-area">
              <div
                className={
                  showSecondSection
                    ? "description-area-left"
                    : "description-area-left-invisible"
                }
              >
                <h1>랜덤재생 소음 ASMR</h1>
                <h4>
                  글씨 쓰는 소리, 기침 소리, 다리 떠는 소리, 의자 움직이는
                  소리... 랜덤으로 재생되는 소음의 빈도를 조절하며 다양한
                  난이도로 실전 모의고사를 연습해보세요.
                </h4>
              </div>
              <img
                className={
                  showSecondSection
                    ? "mockup-img-visible"
                    : "mockup-img-invisible"
                }
                src={noiseSettingPageMockup}
                alt="mockup-noise"
              />
            </div>
          </section>
          <section>
            <div className="section-desc-area">
              <img
                className={
                  showThirdSection
                    ? "mockup-img-visible"
                    : "mockup-img-invisible"
                }
                src={simulationPageMockup}
                alt="mockup-timetable"
              />
              <div
                className={
                  showThirdSection
                    ? "description-area-right"
                    : "description-area-right-invisible"
                }
              >
                <h1>전과목 연속 응시</h1>
                <h4>
                  전과목 실전 모의고사를 한 번에 연습하는 날, 실감과 함께 하루
                  종일 실전과 같은 감각을 유지할 수 있습니다.
                </h4>
              </div>
            </div>
          </section>
          <section>
            <div className="section-desc-area">
              <div
                className={
                  showFourthSection
                    ? "description-area-left"
                    : "description-area-left-invisible"
                }
              >
                <h1>피드백과 통계</h1>
                <h4>
                  시험이 끝나면 모의고사에 대한 피드백을 바로 기록하고, 응시한
                  모의고사들에 대한 통계를 확인할 수 있어요.
                </h4>
              </div>
              <img
                className={
                  showFourthSection
                    ? "mockup-img-visible"
                    : "mockup-img-invisible"
                }
                src={feedbackPageMockup}
                alt="mockup-feedback"
              />
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return (
      <div className="mainpage">
        <nav>
          <div
            className={
              showHeader ? "header-content-visible" : "header-content-invisible"
            }
          >
            <img className="logo" src={icon} />
            <div className="header-nav-btn-row">
              {/* buttons of header below */}
              {/* <button className="hader-nav-btn">다운로드</button>
              <button className="hader-nav-btn">설치</button>
              <button className="hader-nav-btn">이동</button>
              <button className="hader-nav-btn">문의</button> */}
            </div>
          </div>
        </nav>
        <main className="mainpage-main">
          <section>
            <div className="section-main-area">
              <h2 className="sub-title">
                시험장의 변수때문에 1년의 노력이 헛되지 않게
              </h2>
              <h1 className="main-title">
                실전 감각, <strong>실감</strong>
              </h1>
              <div className="download-button-row">
                <img className="app-icon" src={appIcon} alt="app-icon" />
                <div className="store-btn-row">
                  <a href="https://play.google.com/store/apps/details?id=com.seunghyun.silgam">
                    <img
                      className="play-store-btn"
                      src={playStore}
                      alt="play-store-download-button"
                    />
                  </a>
                  <a href="https://apps.apple.com/us/app/실전-감각-실감/id1598576852">
                    <img
                      className="app-store-btn"
                      src={appStore}
                      alt="app-store-download-button"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-desc-area">
              <img
                className={
                  showFirstSection
                    ? "mockup-img-visible"
                    : "mockup-img-invisible"
                }
                src={simulationPageMockup}
                alt="mockup-simulation"
              />
              <div
                className={
                  showFirstSection
                    ? "description-area-right"
                    : "description-area-right-invisible"
                }
              >
                <h1>시험장 시뮬레이션</h1>
                <h4>
                  과목별 시험 시간에 맞춰 표시되는 아날로그 시계와, 실제
                  시험장과 동일한 타종 소리로 현장감을 극대화할 수 있습니다.
                </h4>
              </div>
            </div>
          </section>
          <section>
            <div className="section-desc-area">
              <div
                className={
                  showSecondSection
                    ? "description-area-left"
                    : "description-area-left-invisible"
                }
              >
                <img
                  className={
                    showSecondSection
                      ? "mockup-img-visible"
                      : "mockup-img-invisible"
                  }
                  src={noiseSettingPageMockup}
                  alt="mockup-noise"
                />
                <h1>랜덤재생 소음 ASMR</h1>
                <h4>
                  글씨 쓰는 소리, 기침 소리, 다리 떠는 소리, 의자 움직이는
                  소리... 랜덤으로 재생되는 소음의 빈도를 조절하며 다양한
                  난이도로 실전 모의고사를 연습해보세요.
                </h4>
              </div>
            </div>
          </section>
          <section>
            <div className="section-desc-area">
              <img
                className={
                  showThirdSection
                    ? "mockup-img-visible"
                    : "mockup-img-invisible"
                }
                src={simulationPageMockup}
                alt="mockup-timetable"
              />
              <div
                className={
                  showThirdSection
                    ? "description-area-right"
                    : "description-area-right-invisible"
                }
              >
                <h1>전과목 연속 응시</h1>
                <h4>
                  전과목 실전 모의고사를 한 번에 연습하는 날, 실감과 함께 하루
                  종일 실전과 같은 감각을 유지할 수 있습니다.
                </h4>
              </div>
            </div>
          </section>
          <section>
            <div className="section-desc-area">
              <div
                className={
                  showFourthSection
                    ? "description-area-left"
                    : "description-area-left-invisible"
                }
              >
                <img
                  className={
                    showFourthSection
                      ? "mockup-img-visible"
                      : "mockup-img-invisible"
                  }
                  src={feedbackPageMockup}
                  alt="mockup-feedback"
                />
                <h1>피드백과 통계</h1>
                <h4>
                  시험이 끝나면 모의고사에 대한 피드백을 바로 기록하고, 응시한
                  모의고사들에 대한 통계를 확인할 수 있어요.
                </h4>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Mainpage;
