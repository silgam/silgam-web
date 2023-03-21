// CSS
import './privacy.css';

function Privacy (): JSX.Element {
  window.scrollTo(0, 0);

  return (
    <div className="privacy">
      <header><h1>개인정보 처리방침</h1></header>
      <main className="privacy-main">
        개인정보 처리방침이 들어갈 페이지
      </main>
    </div>
  );
}

export default Privacy;
