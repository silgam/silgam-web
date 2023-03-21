// CSS
import './terms.css';

function Terms (): JSX.Element {
  window.scrollTo(0, 0);

  return (
    <div className="terms">
      <header><h1>서비스 이용 약관</h1></header>
      <main className='terms-main'>
        이용약관이 들어갈 페이지
      </main>
    </div>
  );
}

export default Terms;
