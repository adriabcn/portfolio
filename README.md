# 🌐 Personal Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS** — designed to showcase my skills, projects, and personal brand with style and performance in mind.

---

## 🚀 Features

- ⚡️ **Fast & Lightweight** using Vite + React
- 🎨 **Fully responsive** layout with smooth mobile navigation
- 🌗 **Dark/Light mode toggle** with system preference detection
- 📱 **Mobile menu** (hamburger navigation)
- ✨ **Reveal on scroll animations** for engaging transitions
- ⏳ **Loading screen** for smoother initial experience
- 🔗 **Smooth scroll navigation** with active link highlighting

---

## 🛠️ Built With

- [React](https://reactjs.org/) – UI Library
- [Vite](https://vitejs.dev/) – Build tool
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [react-scroll](https://www.npmjs.com/package/react-scroll) – Smooth scrolling
- [EmailJS](https://www.emailjs.com/) – For contact form integration *(if used)*
- [GSAP](https://gsap.com/) – Animations and motion effects
- [SplitType](https://www.npmjs.com/package/split-type) – Text splitting for animations

---

## 📁 Project Structure

<pre>
src/
├── components/
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── AnimatedText.jsx
│   ├── FlippingI.jsx
│   ├── LoadingScreen.jsx
│   ├── MobileMenu.jsx
│   ├── Navbar.jsx
│   ├── RevealOnScroll.jsx
│   └── ThemeToggle.jsx
├── App.jsx
├── App.css
├── main.jsx
├── index.css
</pre>

---

## 🔧 Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/adriabcn/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file with your EmailJS credentials**

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

4. **Start the development server**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```


---

## 🌍 Deployment

You can deploy the `dist/` folder to any static hosting provider like:

- **Hostinger**
- **Netlify**
- **Vercel**

If using **Hostinger**:

- Run `npm run build`
- Upload the contents of `/dist` to the `public_html` directory

---

## 📌 Best Practices

- Followed **Git branching model**: `main` (stable) + `dev` (development)
- Used **semantic commit messages**
- Modular and reusable **component structure**
- Clean **separation of concerns**
- Accessible **color contrasts** and **responsive layouts**

---

## 📬 Contact

Have feedback?  
Feel free to reach me via **[LinkedIn](https://www.linkedin.com/in/adri%C3%A0-aubanell-cabezas/)**

---

## 📝 License

This project is open-source and available under the **MIT License**.
