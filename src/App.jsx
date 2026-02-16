
import { useState } from 'react'
import './App.css'
import profilePic from './assets/mwpic.jpg'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <img src={profilePic} alt="Mahogany Wallis" className="profile-img" />
          <h1>Mahogany Wallis</h1>
          <p>
            Children Service Worker II with extensive experience and a proven ability to manage cross-functional teams. 
            A dedicated professional connecting well with diverse groups and individuals to support organizational goals.
          </p>
          <div className="contact-bar">
            <div className="contact-item">📞 573.795.3611</div>
            <div className="contact-item">✉️ mahoganywallis@gmail.com</div>
            <div className="contact-item">📍 Hannibal, MO 63401</div>
            <a href="https://www.linkedin.com/in/mahogany-wallis-2838473a9/" target="_blank" rel="noopener noreferrer" className="contact-item linkedin-link">
              🔗 LinkedIn Profile
            </a>
          </div>
          <button className="cta-button" onClick={toggleModal}>Get In Touch</button>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>&times;</button>
            <h2>Contact Mahogany Wallis</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can I help you?" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">A Journey of Purpose</h2>
          
          <div className="about-timeline">
            
            <div className="timeline-item">
              <div className="timeline-dot">🏠</div>
              <div className="timeline-text">
                <p className="lead-para">
                  As a human services leader with over <strong>20 years of experience</strong> in case management—including 17 years dedicated to supporting individuals with developmental disabilities—my evolution into the field of psychology has been both professional and deeply personal.
                </p>
                <p>
                  As a <strong>mother of four</strong>, I developed a natural intuition for human behavior and the critical importance of a supportive environment. This life experience, combined with my Master's degree, fueled my transition into professional advocacy. Today, I am known for a <strong>collaborative, solutions-focused approach</strong> to supervision and program coordination, valuing clear communication, strong documentation practices, and person-centered outcomes.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">🏛️</div>
              <div className="timeline-text">
                <p>
                  One of my most impactful roles involved <strong>spearheading growth and structure within the Marion County Department of Mental Health</strong>. I recognized a need for clarity, so I took the initiative to create detailed job descriptions and implement effective communication channels. I bring extensive experience in <strong>regulatory compliance, crisis response, and staff support</strong>, ensuring quality services by navigating complex systems with ease.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">👥</div>
              <div className="timeline-text">
                <p>
                  I am particularly passionate about <strong>fostering a healthy workplace culture</strong>. I led initiatives to bring case managers together, creating a collaborative team environment where <strong>workloads were shared strategically</strong> to prevent burnout. By ensuring that responsibilities were balanced with each individual's ability to handle them, I successfully increased staff engagement and morale. This person-centered approach to leadership resulted in <strong>more detailed, professional outcomes</strong> and a consistently high standard of service for individuals and families.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">☕</div>
              <div className="timeline-text">
                <p>
                  My commitment to community extends into the <strong>PTA</strong> and my children’s extracurricular activities, roles that have deepened my natural <strong>compassion and empathy</strong>. Currently, I am seeking <strong>fully remote opportunities</strong> where my leadership, compliance oversight, and case management expertise can continue to drive meaningful impact.
                </p>
                <p style={{ marginTop: '2rem', fontStyle: 'italic', opacity: 0.9 }}>
                  When I’m not advocating for others, you can find me finding peace in a complex <strong>puzzle</strong>, lost in a <strong>good book</strong>, or enjoying a perfectly brewed <strong>cup of coffee</strong>—the simple rituals that fuel my dedication to my work and family.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Core Expertise</h2>
          <div className="skills-grid">
            <div className="skill-tag">Program & Operations Leadership</div>
            <div className="skill-tag">Regulatory Compliance & QA</div>
            <div className="skill-tag">Staff Supervision & Development</div>
            <div className="skill-tag">Cross-Agency Collaboration</div>
            <div className="skill-tag">Person-Centered Planning</div>
            <div className="skill-tag">Crisis Management & Risk Mitigation</div>
            <div className="skill-tag">Documentation & Audit Readiness</div>
            <div className="skill-tag">Budget & Resource Coordination</div>
            <div className="skill-tag">Process Improvement Initiatives</div>
            <div className="skill-tag">Remote Monitoring Implementation</div>
            <div className="skill-tag">CARF Accreditation Support</div>
            <div className="skill-tag">MO State Databases (CIMOR, MOEDWeb)</div>
          </div>
        </div>
      </section>

      {/* Leadership Scope Section */}
      <section className="leadership-scope">
        <div className="container">
          <h2 className="section-title">Leadership Scope</h2>
          <div className="scope-grid">
            <div className="scope-card">
              <h3>300+</h3>
              <p>Active Clients Supported County-wide</p>
            </div>
            <div className="scope-card">
              <h3>14</h3>
              <p>Member Professional Team Supervised</p>
            </div>
            <div className="scope-card">
              <h3>100+</h3>
              <p>Cross-sector Professional Collaborations</p>
            </div>
            <div className="scope-card">
              <h3>Audit Lead</h3>
              <p>Regulatory Compliance & Quality Oversight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="job-title">Support Coordinator Supervisor</h3>
                  <div className="company">Marion County Services for the Developmentally Disabled (MCSDD)</div>
                </div>
                <div className="date">2008 – Present</div>
              </div>
              <p className="job-summary">
                Provide strategic oversight and leadership for case management services, ensuring compliance with Missouri DMH regulations and waiver requirements while strengthening staff performance and service coordination.
              </p>
              
              <h4 className="sub-heading">Key Contributions & Impact</h4>
              <ul className="experience-details">
                <li><strong>Department Architecture:</strong> Built the county case management department from inception, scaling from a single coordinator to a 14-member professional team.</li>
                <li><strong>Operational Restructuring:</strong> Utilized audit and performance metrics to guide restructuring, significantly improving program quality and reducing documentation errors.</li>
                <li><strong>Remote Innovation:</strong> Led implementation of remote monitoring initiatives to modernize service delivery.</li>
                <li><strong>Staff Advocacy:</strong> Championed employee benefit discussions regarding retirement access and initiated student loan awareness efforts.</li>
                <li><strong>Role Clarity:</strong> Spearheaded development of internal roles that improved workflow efficiency and strengthened team accountability.</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="job-title">Service Coordinator / Case Manager</h3>
                  <div className="company">Missouri Children's Division</div>
                </div>
                <div className="date">2005 – 2008</div>
              </div>
              <ul className="experience-details">
                <li>Managed child welfare and family service caseloads, conducting assessments and coordinating intervention plans.</li>
                <li>Collaborated with courts, schools, and community agencies to secure resources for at-risk children.</li>
                <li>Maintained detailed compliance documentation and reporting for state reviews.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Board & Committee Involvement */}
      <section className="board-section" style={{ background: 'var(--latte)', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title">Board & Committee Leadership</h2>
          <div className="scope-grid">
            <div className="scope-card">
              <h3>Utilization Review</h3>
              <p>Committee Member</p>
            </div>
            <div className="scope-card">
              <h3>Kids in Motion</h3>
              <p>Board Member</p>
            </div>
            <div className="scope-card">
              <h3>Human Rights</h3>
              <p>Committee Contributor</p>
            </div>
            <div className="scope-card">
              <h3>Due Process</h3>
              <p>Committee Participant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="edu-grid">
            <div className="edu-card">
              <h3>Master of Psychology</h3>
              <p>University of Phoenix, St. Louis</p>
              <div className="date">May 2007</div>
            </div>
            <div className="edu-card">
              <h3>B.S. in Law: Criminal Justice</h3>
              <p>Hannibal-Lagrange College, Hannibal, MO</p>
              <div className="date">May 2004</div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#888', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} Mahogany Wallis. Professional Portfolio.
      </footer>
    </div>
  )
}

export default App
