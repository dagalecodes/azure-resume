# ☁️ Azure Cloud Resume Challenge

## 🌐 Live Site
👉 https://cloudstoragecd.z23.web.core.windows.net

## 📋 About
This is my submission for the **Azure Cloud Resume Challenge** — a project that demonstrates real-world cloud skills by building and deploying a fully functional resume on Microsoft Azure.

## 🏗️ Architecture
```
User Browser
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
| CI/CD | GitHub Actions |
| Version Control | Git & GitHub |
| Language | JavaScript, HTML, CSS |

## ✨ Features
- 📄 Fully responsive resume website
- 👁️ Real-time visitor counter
- ⚡ Serverless backend with Azure Functions
- 🗄️ NoSQL database with Cosmos DB
- 🔄 Automated deployments via GitHub Actions CI/CD
- 🔒 Secure configuration using environment variables

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
│   └── style.css                 # Styling
└── README.md
```

## 🚀 How It Works
1. Resume is hosted as a **static website** on Azure Blob Storage
2. When a visitor loads the page, JavaScript calls an **Azure Function**
3. The Azure Function reads and increments the counter in **Cosmos DB**
4. The updated count is returned and displayed on the page
5. Any push to `frontend/` automatically deploys via **GitHub Actions**

## 📜 Certifications
- ✅ AZ-900: Microsoft Azure Fundamentals (2025)
- ✅ AZ-104: Microsoft Azure Administrator (2025)

## 👤 Author
**Christian Dagale**
- 📧 dagale.codes@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/ChristianDagale)
- 🐙 [GitHub](https://github.com/dagalecodes)

## 🙏 Reference
- [Azure Cloud Resume Challenge](https://cloudresumechallenge.dev)
