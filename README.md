# 🌐 VercApp – React Portfolio with Weather App

A modern multi-page React application built using **Vite**.
This project demonstrates routing, API integration, component-based architecture, and a clean UI design.

---

## 🚀 Features

* 🔗 Multi-page navigation using React Router
* 🏠 Home page with interactive counter (useState)
* 📞 Contact page with dummy details
* 🎓 Education timeline view
* 💻 Skills page with API data fetching
* 🌦️ Weather app using OpenWeather API
* 🎨 Minimal and clean UI with responsive layout
* 📌 Sticky footer layout

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Routing:** react-router-dom
* **API:** OpenWeather API
* **Styling:** CSS (custom minimal design)

---

## 📁 Project Structure

```
VercApp/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   └── Weather.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── .env (not included in repo)
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/Inferno-0/VercApp.git
cd VercApp
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Add environment variable

Create a `.env` file in the root directory:

```
VITE_WEATHER_KEY=your_api_key_here
```

> ⚠️ Do not commit your `.env` file.

---

### 4. Run the app

```
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🌦️ Weather API

This project uses the **OpenWeather API** to fetch real-time weather data.

* Endpoint: `https://api.openweathermap.org/data/2.5/weather`
* Requires an API key

---

## ✨ Key Concepts Used

* React Hooks (`useState`, `useEffect`)
* Component-based architecture
* Client-side routing
* API integration using `fetch`
* Environment variables in Vite
* Conditional rendering
* Clean UI design principles

---

## 📌 Notes

* `.env` is excluded from Git for security
* API key must be added manually to run the project
* Weather data depends on API availability

---

## 📷 Screenshots (Optional)

You can add screenshots here later for better presentation.

---

## 🚀 Future Improvements

* 🌙 Dark mode toggle
* 📱 Fully responsive mobile design
* ⏳ Loading spinner for API calls
* 📍 Auto-detect location weather
* 🎨 UI enhancements (animations, cards)

---

## 👨‍💻 Author

**Inferno**
B.Tech Student

---

## 📄 License

This project is for educational purposes.
