import { useState } from 'react';
import './App.css';

// images
import icon from './Images/app_icon.svg'
import appIcon from './Images/app_icon.png'
import appStore from './Images/app-store.png'
import playStore from './Images/play-store.png'
import firstMockup from './Images/mockup_simulation.png'
import secondMockup from './Images/mockup_simulation.png'


function App() {
  const [scrollNum, setScrollNum] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);

  const changeHeader = () => {
    setScrollNum(window.scrollY);
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
   
    if (window.scrollY > 480) {
      setShowSecondSection(true);      
    } else {
      setShowSecondSection(false);      
    }
  };

  window.addEventListener('scroll', changeHeader);

  return (
    <div className="web">
      <nav>
        <div className={showHeader ? "header-content-visible" : "header-content-invisible"}>
          <img className='logo' src={icon} />
          {scrollNum}
          <div className="header-nav-btn-row">
            <button className='hader-nav-btn'>다운로드</button>
            <button className='hader-nav-btn'>설치</button>
            <button className='hader-nav-btn'>이동</button>
            <button className='hader-nav-btn'>문의</button>
          </div>
        </div>
      </nav>
      <main>
        <section>
          <div className="section-main-area">
            <h2>시험장의 변수때문에 1년의 노력이 헛되지 않게</h2>
            <h1>실전 감각, <strong>실감</strong></h1>
            <div className='download-bu의ton-row'>
              <img className='app-icon' src={appIcon} alt="app-icon" />
              <div className='store-btn-row'>
                <img className='play-store-btn'src={playStore} alt="play-store-download-button" />
                <img className='app-store-btn' src={appStore} alt="app-store-download-button" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section-desc-area">
            <img className={showFirstSection ? 'mockup-img-visible' : 'mockup-img-invisible'} src={firstMockup} alt="first" />
            <div className={showFirstSection ? 'description-area-right' : 'description-area-right-invisible'}>
              <h1>시험장 시뮬레이션</h1>
              <h4>과목별 시험 시간에 맞춰 표시되는 아날로그 시계와, 실제 시험장과 동일한 타종 소리로 현장감을 극대화할 수 있습니다.</h4>
            </div>
          </div>
        </section>
        <section>
          <div className="section-desc-area">
            <div className={showSecondSection ? 'description-area-left' : 'description-area-left-invisible'}>
              <h2>랜덤재생 소음 ASMR</h2>
              <h4>글씨 쓰는 소리, 기침 소리, 다리 떠는 소리, 의자 움직이는 소리... 랜덤으로 재생되는 소음의 빈도를 조절하며 다양한 난이도로 실전 모의고사를 연습해보세요.</h4>
            </div>
            <img className={showSecondSection ? 'mockup-img-visible' : 'mockup-img-invisible'} src={secondMockup} alt="first" />
          </div>
        </section>
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
