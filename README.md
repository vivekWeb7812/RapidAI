# **QuickAI**

QuickAI is a **Software as a Service (SaaS)** platform powered by AI, offering tools for content creation, image editing, and professional document review — all in one place.

## 🚀 Features
- **Blog Title Generation** – Get catchy and SEO-friendly blog titles.
- **Article Generation** – Create high-quality, AI-generated articles in seconds.
- **Image Generation** – Generate images from text prompts.
- **Background Removal** – Remove image backgrounds instantly.
- **Object Removal** – Erase unwanted objects from images.
- **Resume Review** – AI-powered resume suggestions for better job opportunities.

## 🛠 Tech Stack
- **Frontend:** React.js
- **Backend:** Express.js (Node.js)
- **Database:** PostgreSQL
- **AI Models:** OpenAI API & other ML services
- **Hosting:** Vercel (Frontend) & Render/other (Backend)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/vivekWeb7812/RapidAI.git

# Go into the project folder
cd RapidAI

# Install dependencies for client
cd client
npm install

# Install dependencies for server
cd ../server
npm install
```

## ⚙️ Environment Variables
Create a `.env` file in the `server` folder and add:

```
PORT=5000
DATABASE_URL=your_postgresql_url
OPENAI_API_KEY=your_openai_api_key
```

## ▶️ Usage
```bash
# Start backend
cd server
npm start

# Start frontend
cd ../client
npm start
```

Access the app at: `http://localhost:3000`

## 📜 License
This project is licensed under the **MIT License** – you are free to use, modify, and distribute it.
