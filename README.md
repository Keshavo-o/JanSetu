# JanSetu

### Smart Civic Issue Reporting & Resolution Platform

> **JanSetu** is a Smart India Hackathon (SIH) 2025 project designed to bridge the gap between citizens and local authorities by providing a centralized platform for reporting, tracking, and managing civic issues.

The platform enables citizens to report problems in their surroundings, attach supporting media, provide location information, interact with reported issues, and track their resolution. Authorities and administrators can manage reported issues through dedicated administrative workflows.

---

##  Smart India Hackathon 2025

**Problem Statement:** Crowdsourced Civic Issue Reporting and Resolution System
**Problem ID:** 25031

JanSetu was developed as a solution to improve civic participation, transparency, and accountability by creating a structured communication channel between citizens and authorities.

The project focuses on transforming scattered civic complaints into a centralized, trackable, and manageable workflow.

---

## Problem Statement

Civic issues such as:

* Potholes and damaged roads
* Broken streetlights
* Garbage accumulation
* Water and drainage problems
* Damaged public infrastructure
* Traffic-related infrastructure issues
* Public-area maintenance problems

are often difficult to report and track efficiently.

Traditional complaint mechanisms can lack:

* Centralized reporting
* Proper location information
* Transparent status tracking
* Citizen feedback
* Administrative visibility
* Efficient issue management

**JanSetu aims to solve this by providing a digital civic issue management platform.**

---

## Solution

JanSetu provides a web-based ecosystem where citizens can:

1. Create an account
2. Authenticate securely
3. Report civic issues
4. Upload supporting images/media
5. Associate issues with locations
6. View publicly reported issues
7. Interact with posts through likes and comments
8. Track civic complaints
9. Receive communication through the platform

Administrators have a separate workflow for managing users and reported civic issues.

---

## Key Features

###  Citizen Module

* User registration and login
* OTP-based verification
* Cookie-based authentication
* Protected user routes
* User profile pages
* Civic issue reporting
* Multimedia/image uploads
* Public issue feed
* Issue details
* Comments
* Likes
* Location-based issue visualization
* User activity

### Location-Based Reporting

Reported issues can be associated with geographical information, allowing civic problems to be visualized geographically.

The public map functionality helps users understand where reported issues are concentrated.

### Civic Issue Posts

Users can create issue posts containing relevant information about the reported problem.

Posts can be publicly viewed and interacted with through:

* Likes
* Comments
* Issue details
* User information
* Uploaded media

### Authentication & Authorization

JanSetu implements separate authentication workflows for citizens and administrators.

The backend uses:

* JWT-based authentication
* HTTP cookies
* Authentication middleware
* Dedicated admin authorization middleware
* Protected user routes
* Protected administrative routes

### Admin Module

Administrators have dedicated routes and controllers for managing the platform.

The architecture separates administrative functionality from regular citizen functionality, allowing different permissions and workflows.

### OTP / Email Services

The backend includes an OTP verification workflow and email functionality using **Nodemailer**.

This provides a foundation for account verification and future notification systems.

### File Uploads

The application supports uploading media associated with civic issue reports using **Multer**.

Uploaded content is handled separately from the application's static frontend assets.

---

## Architecture

JanSetu follows a modular server-side architecture built around Express.js.

```text
JanSetu
│
├── Routers
│   ├── user.js
│   └── admin.js
│
├── Controllers
│   ├── Authentication
│   ├── User Management
│   ├── Posts
│   ├── Comments
│   ├── Likes
│   ├── Maps
│   └── OTP
│
├── Admin Controllers
│   └── Administrative Operations
│
├── Middlewares
│   ├── User Authentication
│   └── Admin Authorization
│
├── Models
│   └── MongoDB Data Models
│
├── Services
│   └── Supporting Backend Services
│
├── Views
│   └── EJS Templates
│
├── Public
│   └── Static Assets
│
├── Uploads
│   └── User-Submitted Media
│
└── index.js
    └── Express Application Entry Point
```

The repository currently separates **routers, controllers, admin controllers, middleware, models, services, views, public assets, and uploads**, providing a foundation for extending the application into a larger civic platform.

---

## 🛠️ Tech Stack

* **Node.js & Express.js** — RESTful backend and API architecture
* **MongoDB & Mongoose** — Data persistence and schema management
* **EJS** — Dynamic server-side rendering
* **JWT & Role-Based Authorization** — Secure citizen/admin access control
* **Leaflet.js + OpenStreetMap** — Interactive civic issue mapping
* **Geolocation & Nominatim API** — Location detection and reverse geocoding
* **Multer** — Multimedia/image upload handling
* **Nodemailer + OTP** — Email verification and authentication workflows
* **MVC Architecture** — Modular controllers, services, models, middleware and routes
* **Nodemon** — Development workflow

The project's current dependencies include Express 5, Mongoose 8, EJS, JWT, Multer, Nodemailer, cookie-parser, and Nodemon.

---

## Application Flow

```text
Citizen
   │
   ▼
Register / Login
   │
   ▼
Authentication
   │
   ▼
Report Civic Issue
   │
   ├── Issue Details
   ├── Location
   └── Supporting Media
   │
   ▼
MongoDB
   │
   ▼
Public Issue Feed
   │
   ├── Like
   ├── Comment
   └── View Location
   │
   ▼
Administrative Management
   │
   ▼
Issue Resolution
```

---

##  Security Model

JanSetu separates citizen and administrative access through dedicated middleware.

### User Authentication

Protected user routes require successful authentication before access is granted.

### Admin Authorization

Administrative routes are protected separately using dedicated admin authorization middleware.

This separation allows the system to support different privileges for:

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB

### 1. Clone the repository

```bash
git clone https://github.com/Keshavo-o/JanSetu.git
cd JanSetu
```

### 2. Install dependencies

```bash
npm install
```

### 3. Don't forget to make a sensitive_data.json in the directory

```bash
{
    "email_key": <Your email key>
}
```

### 4. Start MongoDB

Make sure your local MongoDB server is running.

The current application is configured to connect to:

```text
mongodb://localhost:27017/JanSetu
```

### 5. Start the development server

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The application runs on:

```text
http://localhost:3000
```

---

## Future Implementations

JanSetu can be expanded into a production-scale civic technology platform.


### 1. AI-Based Issue Classification

Integrate machine learning or LLM-based classification to automatically categorize submitted complaints.

For example:

```text
User Report
     ↓
AI Classification
     ↓
┌──────────────┐
│ Road Damage  │
│ Garbage      │
│ Streetlight  │
│ Drainage     │
└──────────────┘
     ↓
Relevant Department
```

This can reduce manual categorization and improve issue routing.

### 2. Automatic Location Detection

Use browser geolocation and mapping services to automatically capture the user's location when submitting a complaint.

Future versions could integrate:

* Google Maps
* OpenStreetMap
* Mapbox
* Geospatial MongoDB queries

### Real-Time Status Updates

Introduce WebSockets or Socket.IO to provide real-time updates when an issue changes state.

Example:

```text
Reported
   ↓
Under Review
   ↓
Assigned
   ↓
In Progress
   ↓
Resolved
```

Citizens could receive updates without refreshing the page.

### 3. Notification System

Introduce multi-channel notifications through:

* Email
* Browser notifications
* SMS
* In-app notifications

Users could be notified whenever their complaint changes status.

### Duplicate Issue Detection

AI and geospatial analysis could identify multiple reports describing the same civic issue.

```text
Report A ─┐
Report B ─┼──► Duplicate Detection ──► Single Issue
Report C ─┘
```

This would help prevent authorities from processing the same problem repeatedly.

### 4. Analytics Dashboard

A more advanced administrative dashboard could provide:

* Total complaints
* Resolved complaints
* Pending complaints
* Department-wise distribution
* Average resolution time
* Geographic issue density
* Complaint trends
* User participation metrics

### Cloud Storage

Replace local file storage with scalable cloud object storage such as:

* AWS S3
* Cloudinary
* Azure Blob Storage

This would make media handling more suitable for production deployments.

### 5. Civic Issue Heatmaps

Geospatial analytics could visualize areas with high concentrations of civic complaints.

```text
Low Density ───────► High Density
    🟢       🟡       🟠       🔴
```

This could help authorities prioritize areas requiring immediate attention.

###  Department-Based Routing

Future versions could automatically route complaints to the appropriate municipal department.

```text
Complaint
    │
    ▼
Classification
    │
    ├── Roads ───────► PWD
    ├── Garbage ─────► Sanitation
    ├── Lighting ────► Electrical
    └── Water ───────► Water Department
```

### 6. Progressive Web App

Convert JanSetu into a PWA to provide:

* Mobile-first experience
* Offline support
* Push notifications
* Installable application
* Camera integration for instant reporting

---

## Future Architecture

A production-scale version could evolve from the current monolithic Express architecture into a more scalable system:

```text
                    ┌──────────────┐
                    │   Frontend   │
                    │ Web / PWA    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ API Gateway  │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
   Authentication      Issue Service    Notification
      Service             Service          Service
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                    ┌──────────────┐
                    │   MongoDB    │
                    └──────────────┘
                           │
                    ┌──────┴───────┐
                    ▼              ▼
                Redis          Cloud Storage
```

This architecture would allow individual services to scale independently as platform usage increases.

---

## Impact

JanSetu is built around the idea of making civic participation more accessible and transparent.

The platform aims to:

* Encourage citizen participation
* Improve complaint visibility
* Reduce communication gaps
* Increase accountability
* Centralize civic issue reporting
* Help authorities prioritize problems
* Create a data-driven approach to civic management

---

## Hackathon Context

JanSetu was developed as part of **Smart India Hackathon 2025**, addressing the crowdsourced civic issue reporting and resolution problem statement.

The project represents an attempt to apply full-stack web technologies to a real-world governance problem rather than building a purely demonstrative application.

---

## Project

**JanSetu — Smart Civic Issue Reporting & Resolution Platform**

Built using:

`Node.js` · `Express.js` · `MongoDB` · `Mongoose` · `EJS` · `JWT` · `Multer` · `Nodemailer`


