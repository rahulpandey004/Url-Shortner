# 🔗 URL Shortener API

A simple Node.js + Express API that shortens long URLs, stores them in MongoDB, and redirects users when the short URL is visited.

---

## 🚀 Features

- ✅ Generate short URLs for any valid link
- 🔁 Redirect to original URL using short code
- 📊 Track click counts
- 🧩 Built using Node.js, Express, MongoDB (with Mongoose)
- 🧪 Easily testable with Postman

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- nanoid
- dotenv

---

## 📁 Project Structure

url-shortner/
│
├── index.js # Main server entry
├── .env # Environment variables (not pushed to GitHub)
├── .gitignore # Ignores node_modules and .env
├── package.json # Project config and dependencies
│
├── models/
│ └── Url.js # Mongoose schema
│
├── routes/
│ └── urlRoutes.js # Express routes
│
└── README.md # You're reading it!

yaml
Copy code

---

## 📦 Installation & Setup

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/url-shortener.git

Install Dependencies
bash
Copy code
npm install
 Create .env File
env
Copy code
MONGO_URI=mongodb://localhost:27017/urlShortener
 Create .env File
env
Copy code
MONGO_URI=mongodb://localhost:27017/urlShortener
 Run the Server
bash
Copy code
node index.js
 API Usage
🔹 POST /shorten
Description: Shortens a long URL

Method: POST

Body: JSON

json
Copy code
{
  "url": "https://www.example.com/super/long/path"
}
Response:

json
Copy code
{
  "shortUrl": "http://localhost:3000/abc123"
}
🔹 GET /:shortCode
Description: Redirects to the original long URL

Example:
Visiting http://localhost:3000/abc123 will redirect you to the original long URL.
Example Testing with Postman
POST to http://localhost:3000/shorten with body:

json
Copy code
{
  "url": "https://www.google.com"
}
Visit the shortUrl in browser → should redirect.

🙈 .gitignore
Make sure you have this in your .gitignore:

bash
Copy code
node_modules/
.env
👨‍💻 Author
Rahul Pandey
PSIT Kanpur 