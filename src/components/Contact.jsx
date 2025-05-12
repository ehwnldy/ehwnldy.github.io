"use client"

import { useState } from "react"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // 여기에 폼 제출 로직 추가
    alert("메시지가 전송되었습니다!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="contact">
      <div className="section-container">
        <h2 className="section-title">연락처</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>연락 정보</h3>
            <div className="info-item">
              <span className="info-label">이메일:</span>
              <span className="info-value">example@email.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">전화번호:</span>
              <span className="info-value">010-1234-5678</span>
            </div>
            <div className="info-item">
              <span className="info-label">위치:</span>
              <span className="info-value">서울, 대한민국</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                GitHub
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h3>메시지 보내기</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">메시지</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
