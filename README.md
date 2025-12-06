# Tito Ride - Cloud Native Azure Infrastructure

> **Portfolio Project:** A demonstration of a secure, automated, and scalable PaaS architecture hosted on Microsoft Azure.

<img width="2816" height="1536" alt="tito-ride-architecture" src="https://github.com/user-attachments/assets/cd1392b1-0c01-4d35-94c0-95fed0bcee79" />


## 📖 Project Overview
While this application functions as a ride-sharing platform, the primary objective of this project was to design and implement a **cloud-native infrastructure** using Azure Platform-as-a-Service (PaaS) offerings. 

The architecture prioritizes **security (Zero Trust principles)**, **observability**, and **automated deployment strategies** over manual configuration.

---

## ☁️ Cloud Architecture & Infrastructure
The system is decoupled into a frontend-backend pattern, leveraging Azure's managed services to reduce operational overhead.

### 1. Frontend: Azure Static Web Apps
* **Hosting:** The React.js application is hosted on **Azure Static Web Apps**.
* **Why this service?** It provides global distribution of static content and simplifies the connection to the backend via managed API routes.
* **Connectivity:** Requests are sent to the backend via HTTPS/Axios.

### 2. Backend: Azure App Service
* **Compute:** The Node.js/Express API runs on **Azure App Service**.
* **Why this service?** It allows for auto-scaling capabilities and integrated security features without managing underlying VMs.

### 3. Database: Azure Cosmos DB (MongoDB API)
* **Data Layer:** A NoSQL database utilizing the **MongoDB API**.
* **Why this service?** Chosen for high availability, low latency, and the ability to handle unstructured data typical in ride-sharing schemas.

### 4. Observability: Azure Application Insights
* **Telemetry:** Connected to the App Service to ingest logs, metrics, and traces.
* **Usage:** Used to monitor API latency, detect failure rates, and visualize the application map for debugging.

---

## 🔐 Security & Identity Management
A key focus of this infrastructure is securing the connection between the Compute layer (App Service) and the Data layer (Cosmos DB) without managing secrets.

* **Managed Identity:** The architecture utilizes **System-Assigned Managed Identity**.
* **Implementation:** The App Service is granted RBAC (Role-Based Access Control) permissions to the Cosmos DB instance.
* **Benefit:** This eliminates the need to store connection strings or database passwords in the code or environment variables, significantly reducing the attack surface.

---

## 🚀 CI/CD & Automation
Deployment is fully automated using **GitHub Actions**, ensuring a consistent delivery pipeline from code commit to production.

| Component | Workflow |
| :--- | :--- |
| **Frontend** | Triggers on push to `main`. Builds the React app and deploys content to the Azure Static Web App instance. |
| **Backend** | Triggers on push to `main` (backend path). Builds the Node.js app and deploys the artifact to Azure App Service. |

---

## 🛠️ Tech Stack
* **Cloud Provider:** Microsoft Azure
* **Infrastructure Model:** PaaS (Platform as a Service)
* **CI/CD:** GitHub Actions (YAML)
* **Frontend:** React.js / Axios
* **Backend:** Node.js / Express
* **Database:** Azure Cosmos DB for MongoDB
* **Monitoring:** Azure Monitor / Application Insights

---
