# Career Agents - AWS Hackathon Project Report

## 1. Team Information
**Team Name:** Booger Warriors  
**Team Members:**  
- Narasimha Sainikhil Marisetty  
- Adam Absa  
- Ayman Mohammad  

---

## 2. Problem Statement
UTD students often struggle to plan their careers effectively due to fragmented information sources. They need to understand which courses, skills, and projects align with their desired job roles, but currently there’s no intelligent, personalized system to guide them.  

The challenge is to build an **autonomous multi-agent AI platform** that integrates job market data, course catalogs, and student resumes to deliver actionable, data-driven career recommendations.

---

## 3. Solution Overview
**Career Agents** is an autonomous multi-agent AI platform hosted on **AWS Bedrock AgentCore** that helps UTD students plan their careers through intelligent coordination of specialized agents.  

These agents analyze live job market trends, UTD course catalogs, and student transcripts/resumes to create personalized learning and career paths.

The system combines:
- **Amazon Bedrock** (for reasoning and orchestration)
- **AWS Lambda** (for function hosting)
- **Amazon Textract** (to extract data from resumes and transcripts)
- **Amazon Comprehend** (to interpret and classify text)

All agents are coordinated under **one unified Bedrock agent** that powers the **Career Agents web app**.

---

## 4. Technology Stack
**Frontend:** React, Tailwind CSS, Framer Motion  
**Backend:** FastAPI, AWS Lambda  
**AI and Data:** AWS Bedrock AgentCore, Amazon Textract, Amazon Comprehend, Amazon S3, Amazon CloudWatch  
**Deployment:** Vercel (Frontend), AWS (Agents + Backend)

---

## 5. System Architecture
1. User uploads resume and transcript on the frontend.  
2. Files are stored in an **Amazon S3** bucket.  
3. **AWS Lambda** triggers **Textract** to extract structured text from the uploaded documents.  
4. **Amazon Comprehend** analyzes the extracted data to identify **skills, education, and experience**.  
5. **Bedrock Agent** processes this information and matches it with **job trends and UTD course data**.  
6. Results are sent back to the frontend as a **personalized career plan**.

---

## 6. Agent Descriptions
- **Job Market Agent:** Gathers live job data from LinkedIn and Indeed to extract skills and salary trends.  
- **Course Catalog Agent:** Retrieves and processes UTD course data using the Nebula API.  
- **Career Matching Agent:** Maps required job skills to relevant UTD courses.  
- **Project Advisor Agent:** Suggests projects for missing skills.  
- **Coordinator Agent:** Manages agent interactions and compiles results into unified responses.

---

## 7. Key Features
- Resume and transcript upload with **Textract + Comprehend** integration  
- Skill-to-course mapping with **AI reasoning**  
- Real-time **job trend analysis**  
- Personalized **course and project recommendations**  
- Unified **JSON output** for frontend display  

---

## 8. Challenges and Learnings
We faced challenges in setting up **IAM permissions** for Bedrock and managing **multi-agent communication** through AWS Lambda.  

Integrating **Textract** and **Comprehend** for resume parsing required careful fine-tuning to ensure accurate skill extraction.  

This project taught us how to **orchestrate multiple AWS AI services** into a cohesive, autonomous system.


