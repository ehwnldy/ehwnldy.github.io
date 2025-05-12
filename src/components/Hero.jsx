import "../styles/Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          안녕하세요, 저는 <span className="highlight">개발자</span>입니다
        </h1>
        <p>창의적인 솔루션을 제공하는 웹 개발자입니다</p>
        <button className="cta-button">자세히 보기</button>
      </div>
    </section>
  )
}

export default Hero
