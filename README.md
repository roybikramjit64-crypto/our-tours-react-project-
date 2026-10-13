# ✈ Discover India - Tour Booking Platform

A modern, responsive, single-page React application built with **Vite** that showcases 10 iconic travel destinations across India. The application features live asynchronous data fetching, dynamic state management, interactive "Read More / Show Less" description toggles, and seamless tour removals.

------

## 🌟 Key Features

- 🚀 **Fast Performance:** Built using **Vite + React** for lighning-fast HMR and optimized builds.
- 🌐 **Live Data Fetching:** Utilizes `async/await` and the `fetch` API to load real-time tour data hosted on a Github Gist backend.
- 🖼 **Cloudinary Image Hosting:** Hight-resolution, optimized images hosted on Cloudinary for instant loading.
- 📖 **Read More / Show Less:** Full destination descriptions (300+ words) truncated cleanly with an interactive toggle for better UX.
- ❌ **Not Interested Feature:** Allows users to remove tours they aren't interested in from the current view.
- 🔃 **Refresh Tours State:** A quick "Refresh All Tours" button appears when all tour cards have been dismissed.
- ⏳ **Loading & Error Handling:** Built-in state handling for asynchronous network fetch delays and potential API failures.

------


## 🛠 Tech Stack & Tools

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** CSS3 (CSS Grid, Flexbox, Custom Neon Glow Animations)
- **API / Backend:** Github Gist (Raw JSON endpoint)
- **Media Storage:** Cloudinary CDN
- **Linter:** [Oxlint](https://oxc.rs/)

## Live Demo
Coming soon!

-------

## 🛠 Getting Started Locally

### Prerequisites

Ensure you have **Node.js** (v20+ recommended) installed on your machine.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/my-username/my-repo-name.git
    cd my-repo-name

2. **Install dependencies:**
    ```bash
    npm install

3. **Start the development server:**
    ```bash
    npm run dev

4. **Open in browser:**
    Navigate to http://localhost:5173 to see the app running live.

------

### 🌐 Live API Endpoint

The raw JSON payload is fetched asynchronously from the following auto-updating Github Gist live URL:
https://gist.githubusercontent.com/roybikramjit2026-max/bc8add6d6a068cb55cf60f89929f3906/raw/tours.json

### 👨‍💻 Author

Created as a React frontend project showcasing async API integration, state management, and modern component design.