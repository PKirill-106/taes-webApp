# TAES WebApp 🚀

A high-performance, full-stack web application built with **Next.js 15** and **Strapi 5**. This project serves as a corporate platform featuring dynamic content management, multi-language support, and a fully containerized deployment pipeline.

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router) with Turbopack
- **State Management**: Redux Toolkit & RTK Query
- **Internationalization**: `next-intl` (Multi-language: RU, EN, UZ)
- **Styling**: Tailwind CSS & Shadcn UI
- **Components**: Swiper.js for advanced carousel logic

### Backend & Infrastructure
- **CMS**: Strapi 5 (Headless CMS)
- **Database**: PostgreSQL 16
- **Proxy**: Nginx (Reverse Proxy)
- **Containerization**: Docker & Docker Compose

---

## ✨ Key Features & UI Logic

- **Adaptive UI**: Components that dynamically switch layouts (Flex/Grid/Carousel) based on data volume.
- **Infinite Marquee**: Seamless horizontal auto-scroll with "pause on hover" for interactive elements.
- **Enhanced UX**: Custom slider controls with instant response and transition duration management.
- **Automated DevOps**: Production-ready Docker setup with Nginx reverse proxy and automated image cleanup.

---

## 📂 Project Structure

- **`src/app/[locale]`** — Localized App Router pages and routing logic.
- **`src/state`** — RTK Query API slices and Redux store configuration.
- **`src/components/ui`** — Reusable UI components (Partners, Sliders, Modals).
- **`docker/`** — Configuration files for Nginx and Docker services.

---

## 🖼 Media Demo
![Feb-27-2026 17-05-06](https://github.com/user-attachments/assets/2f04e51f-5735-4418-916a-56ad2a9ef3f3)


---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Docker & Docker Compose

### Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/PKirill-106/taes-webApp.git](https://github.com/PKirill-106/taes-webApp.git)
   cd taes-webApp
