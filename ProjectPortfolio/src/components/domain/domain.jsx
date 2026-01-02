import React from 'react'
import './domain.css'

const Services = () => {
  return (
    <>
   <div id="service">
     <div className="services">
        <button className="servicebtn">Domains</button>
        <h1 className="service">Domain expertise</h1>
    </div>
    <section className="sectionsGrid">
        <div className="webDesign">
          <h1>01</h1><br/>
          <h3>Web Design</h3>
          <p>I build websites that work beautifully on every device. Using modern tools like React and CSS Grid, I create fast, accessible designs that look great and are easy to use.</p>
        </div>
        <div className="development">
           <h1>02</h1><br/>
          <h3>End-to-End Web Architecture</h3>
          <p>Designing and building complete web applications from frontend UI to backend API, database structure, and deployment infrastructure.</p>
        </div>
        <div className="seoMarketing">
           <h1>03</h1><br/>
          <h3>Scalable Application Development</h3>
          <p>Creating systems that grow efficiently with user demand, implementing performance optimization, caching strategies, and database indexing.</p>
        </div>
        <div className="webDesign1">
           <h1>04</h1><br/>
          <h3>API-First Development</h3>
          <p>Building robust RESTful/GraphQL APIs that serve multiple clients (web, mobile, third-party integrations) with proper authentication, documentation, and versioning.</p>
        </div>
        <div className="development1">
           <h1>05</h1><br/>
          <h3>Database Design & Optimization</h3>
          <p>Structuring relational and NoSQL databases for efficiency, implementing data modeling, query optimization, and migration strategies.</p>
        </div>
        <div className="seoMarketing1">
           <h1>06</h1><br/>
          <h3>DevOps & Deployment Pipelines</h3>
          <p>Setting up CI/CD workflows, containerization (Docker), cloud deployment (AWS/Vercel/Azure), and monitoring for production applications.</p>
        </div>
    </section>
   </div>
    </>
  )
}

export default Services