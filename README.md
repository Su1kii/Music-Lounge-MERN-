# 🎵 Music Lounge – A Full-Stack Spotify Clone

Music Lounge is a modern, full-stack music streaming platform inspired by Spotify. Built with the MERN stack, real-time messaging via Socket.IO, and styled beautifully with **ShadCN UI**, this app provides a smooth and interactive user experience.

---

## 🚀 Tech Stack

- **Frontend**
  - React
  - TypeScript
  - Vite
  - Zustand (state management)
  - ShadCN UI (UI components)
  - Tailwind CSS
  - Clerk (Authentication)
  - Axios

- **Backend**
  - Node.js
  - Express.js
  - MongoDB + Mongoose
  - Socket.IO (Real-time messaging)
  - Cloudinary (Image & audio upload)
  - Express-Fileupload
  - dotenv

- **Other Tools**
  - Vercel (Frontend deployment)
  - Render / Railway (Backend deployment)
  - Toast Notifications (react-hot-toast)
  - REST API

---

## ✨ Features

### 🎧 Music Experience
- Upload songs with audio and artwork
- Browse albums, featured songs, trending, and "Made for You"
- Stream music with responsive design
- Manage songs and albums (Admin Dashboard)

### 💬 Real-Time Chat
- One-on-one messaging powered by Socket.IO
- Shows online status and user activity
- Real-time delivery and receipt of messages
- Persistent message history

### 🔐 Authentication
- Clerk-based login and signup
- Protected admin and user routes
- Role-based permissions

### 🛠️ Admin Tools
- Add/delete songs and albums
- View user stats (total songs, users, albums, artists)
- Dashboard analytics 

---

## 📸 Screenshots

> _You can add screenshots here using:_

---

## 🧪 Run Locally

### Prerequisites
- Node.js
- MongoDB Atlas or local MongoDB
- Cloudinary account

### Clone & Setup

```bash
git clone https://github.com/yourusername/music-lounge.git
cd music-lounge
Install Frontend
bash

cd frontend
npm install
npm run dev
Install Backend

cd backend
npm install
npm run dev
.env files
Frontend (.env)
ini

VITE_CLERK_PUBLISHABLE_KEY=your_key
Backend (.env)

MONGO_URI=your_mongo_uri
CLERK_SECRET_KEY=your_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```
⚙️ Folder Structure 

music-lounge/
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── index.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── stores/
│   ├── lib/
│   └── main.tsx

🙌 Acknowledgements
ShadCN UI
Socket.IO
Clerk.dev
Cloudinary
MongoDB Atlas


