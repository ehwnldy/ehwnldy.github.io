import "../styles/About.css"

const About = () => {
  return (
    <section className="about">
      <div className="section-container">
        <h2 className="section-title">소개</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder"></div>
          </div>
          <div className="about-text">
            <h3>저에 대해서</h3>
            <p>
              안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다. 사용자 경험을 향상시키는 직관적이고 효율적인 웹
              애플리케이션을 만드는 것을 좋아합니다.
            </p>
            <p>
              React, JavaScript, HTML, CSS 등의 기술을 활용하여 다양한 프로젝트를 진행해왔으며, 항상 새로운 기술을
              배우고 적용하는 것에 관심이 많습니다.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">이름:</span>
                <span className="detail-value">홍길동</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">이메일:</span>
                <span className="detail-value">example@email.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">위치:</span>
                <span className="detail-value">서울, 대한민국</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
