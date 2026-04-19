# ☁️ Azure Cloud Resume Challenge

![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

## 🌐 Live Site
👉 **[https://www.christiandagale.com](https://www.christiandagale.com)**

## 📋 About
This is my submission for the **Azure Cloud Resume Challenge** — a project that demonstrates real-world cloud skills by building and deploying a fully functional resume on Microsoft Azure.

## 🏗️ Architecture
```
User Browser
    ↓
Cloudflare (CDN + HTTPS + Custom Domain)
    ↓
Azure Static Website (Blob Storage)
    ↓
Azure Function (HTTP Trigger - Node.js)
    ↓
Azure Cosmos DB (Visitor Counter)
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend Hosting | Azure Blob Storage (Static Website) |
| Backend API | Azure Functions (Node.js) |
| Database | Azure Cosmos DB (NoSQL) |
| CDN + DNS | Cloudflare (Free tier) |
| SSL/HTTPS | Cloudflare SSL (Full mode) |
| CI/CD | GitHub Actions |
| Version Control | Git & GitHub |
| Language | JavaScript, HTML, CSS |

## ✨ Features
- 📄 Fully responsive resume website
- 👁️ Real-time visitor counter
- ⚡ Serverless backend with Azure Functions
- 🗄️ NoSQL database with Cosmos DB
- 🌐 Custom domain via Cloudflare
- 🔒 Free HTTPS/SSL via Cloudflare
- 🚀 Global CDN via Cloudflare
- 🔄 Automated deployments via GitHub Actions CI/CD
- 🔐 Secure configuration using Azure environment variables

## 📁 Project Structure
```
azure-resume/
├── .github/
│   └── workflows/
│       └── deploy-frontend.yml   # CI/CD pipeline
├── api/
│   └── VisitorCounter/
│       ├── index.js              # Azure Function code
│       └── function.json         # Function bindings
│   ├── host.json
│   └── package.json
├── frontend/
│   ├── index.html                # Resume webpage
│   ├── main.js                   # Visitor counter fetch
│   ├── style.css                 # Styling
│   └── profile.jpg               # Profile photo
└── README.md
```

## 🚀 How It Works
1. Resume is hosted as a **static website** on Azure Blob Storage
2. **Cloudflare** handles CDN, HTTPS, and custom domain routing
3. When a visitor loads the page, JavaScript calls an **Azure Function**
4. The Azure Function reads and increments the counter in **Cosmos DB**
5. The updated count is returned and displayed on the page
6. Any push to `frontend/` automatically deploys via **GitHub Actions**

## 📜 Certifications
- ✅ AZ-900: Microsoft Azure Fundamentals (2022)
- ✅ AZ-104: Microsoft Azure Administrator (2023)
- ✅ HashiCorp Terraform Associate (2024)

## 👤 Author
**Christian Dagale**
- 🌐 [www.christiandagale.com](https://www.christiandagale.com)
- 📧 [dagale.codes@gmail.com](mailto:dagale.codes@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/ChristianDagale)
- 🐙 [GitHub](https://github.com/dagalecodes)

## 🙏 Reference
- [Azure Cloud Resume Challenge](https://cloudresumechallenge.dev)
