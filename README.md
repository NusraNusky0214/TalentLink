# TalentLink – Freelancer Platform

TalentLink is a web-based freelancer platform developed to connect **freelancers and clients** through a centralized digital marketplace. The system allows freelancers to create portfolios, showcase their skills, discover suitable projects, submit bids, and receive ratings and feedback. Clients can post projects, review freelancer profiles, compare bids, negotiate project details, and select suitable freelancers.

The platform was developed as a **Final Year Software Engineering Project** using the MERN stack.

---

## 🚀 Features

### 👤 User Management

* User registration and login
* Google authentication
* Forgot password functionality
* OTP-based password reset
* User profile management
* Role-based access for freelancers, clients, and administrators

### 💼 Freelancer Features

* Create and manage freelancer profiles
* Add skills and professional information
* Create and manage portfolios
* Browse available projects
* Search for suitable projects
* Submit project bids
* Negotiate project budgets with clients
* Receive ratings and reviews
* View feedback and comments

### 🏢 Client Features

* Create and publish projects
* Specify project requirements and skills
* View freelancer profiles
* View freelancer portfolios
* Review submitted bids
* Discuss and negotiate project amounts
* Select suitable freelancers
* Provide ratings and feedback

### ⭐ Rating & Review System

* Clients can rate freelancers
* Written feedback and comments
* Ratings can help users evaluate freelancer performance

### 🔐 Admin Features

* Manage users
* Manage projects
* Edit system information
* Manage portfolios and platform content
* Monitor user activity

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* React Router

### Backend

* Node.js
* Express.js
* REST API
* CORS
* dotenv

### Database

* MongoDB
* Mongoose
* MongoDB Atlas / MongoDB Server

### Authentication

* Google Authentication
* OTP-based password recovery

### Development Tools

* Visual Studio Code
* MongoDB Compass
* Thunder Client
* Git
* GitHub
* npm

---

## 📂 Project Structure

```text
TalentLink/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   ├── package.json
│   └── README.md
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/TalentLink.git
```

Move into the project directory:

```bash
cd TalentLink
```

---

## 🔧 Backend Setup

Open the backend folder:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm start
```

The backend should run on:

```text
http://localhost:5000
```

You should see:

```text
Server running on port 5000
MongoDB Connected
```

---

## 💻 Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will normally be available at:

```text
http://localhost:3000
```

---

## 🔗 API Endpoints

The TalentLink backend provides REST API endpoints for managing projects, reviews, and other system operations.

### Projects

```text
GET     /api/projects
POST    /api/projects
GET     /api/projects/:id
PUT     /api/projects/:id
DELETE  /api/projects/:id
```

### Reviews

```text
GET     /api/reviews
POST    /api/reviews
GET     /api/reviews/:id
PUT     /api/reviews/:id
DELETE  /api/reviews/:id
```

> Additional endpoints may be available depending on the implemented modules.

---

## 🗄️ Database

TalentLink uses **MongoDB** as its database.

The database stores information related to:

* Users
* Freelancer profiles
* Client profiles
* Projects
* Bids
* Portfolios
* Skills
* Reviews
* Ratings
* Project interactions

Mongoose is used to define schemas and communicate with MongoDB.

---

## 🧪 API Testing

The backend APIs were tested using **Thunder Client**.

Testing included:

* GET requests
* POST requests
* PUT requests
* DELETE requests
* Request validation
* Response status codes
* Database operations
* Error handling

---

## 🔄 System Workflow

```text
                 ┌──────────────┐
                 │     User     │
                 └──────┬───────┘
                        │
              ┌─────────┴─────────┐
              │                   │
        ┌─────▼─────┐       ┌─────▼─────┐
        │ Freelancer│       │   Client  │
        └─────┬─────┘       └─────┬─────┘
              │                   │
        Create Portfolio      Post Project
              │                   │
        Browse Projects       Receive Bids
              │                   │
          Submit Bid          Review Bids
              │                   │
              └─────────┬─────────┘
                        │
                   Negotiation
                        │
                 Select Freelancer
                        │
                 Project Completion
                        │
                  Rating & Review
```

---

## 🎯 Project Objectives

The main objectives of TalentLink are to:

1. Provide freelancers with a platform to showcase their skills and portfolios.
2. Help freelancers discover relevant project opportunities.
3. Allow clients to find suitable freelancers efficiently.
4. Reduce the difficulties associated with manual freelancer searching.
5. Provide a structured bidding and negotiation process.
6. Support transparent ratings and reviews.
7. Improve communication between freelancers and clients.

---

## 🌟 Key Benefits

### For Freelancers

* Increased visibility
* Portfolio showcasing
* Access to project opportunities
* Skill-based project discovery
* Bidding opportunities
* Client feedback and ratings

### For Clients

* Easier freelancer discovery
* Portfolio-based evaluation
* Project bidding
* Budget negotiation
* Freelancer comparison
* Ratings and reviews

---

## 🔒 Security

The application includes security-related practices such as:

* Environment variables for sensitive configuration
* Password authentication
* Authentication mechanisms
* Input validation
* CORS configuration
* Protected application functionality
* Secure database connection configuration

Sensitive credentials and environment variables should **not** be committed to GitHub.

---

## 📸 Screenshots

Add screenshots of the main TalentLink interfaces here.

Recommended screenshots:

* Login / Registration
* Home Page
* Freelancer Dashboard
* Client Dashboard
* Freelancer Profile
* Portfolio
* Project Listing
* Project Details
* Bidding Page
* Negotiation
* Ratings & Reviews
* Admin Dashboard

Example:

```text
screenshots/
├── login.png
├── home.png
├── freelancer-dashboard.png
├── client-dashboard.png
├── projects.png
├── portfolio.png
└── reviews.png
```

---

## 🚧 Future Enhancements

Future versions of TalentLink could include:

* Secure online payment integration
* Advanced semantic skill matching
* AI-powered freelancer recommendations
* Advanced project filtering
* Portfolio verification
* Real-time messaging
* Email and push notifications
* Improved review quality analysis
* Enhanced accessibility
* Advanced security monitoring
* Automated testing and deployment
* Performance monitoring and analytics

---

## 👩‍💻 Development

TalentLink was developed as a Final Year Software Engineering Project to demonstrate practical application of:

* Full-stack web development
* Database management
* REST API development
* Authentication
* UI/UX design
* Software engineering principles
* API testing
* Version control
* Agile development practices

---

## 📄 License

This project was developed for academic and educational purposes.

---

## 🙏 Acknowledgement

This project was developed as part of the undergraduate Software Engineering program and demonstrates the design and implementation of a web-based freelancer marketplace.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
# TalentLink
