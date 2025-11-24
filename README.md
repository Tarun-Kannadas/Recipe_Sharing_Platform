# 🍳 Recipe Sharing Platform

> **Note:** This project is an experiment in **AI-Assisted Development**. It is being built using **Cursor** (Claude 3.5 Sonnet / GPT-4) to evaluate the efficacy of LLM prompting in full-stack development.

A modern, community-driven application where food enthusiasts can share, browse, and save their favorite culinary creations. Built with Next.js 14 and Supabase.

![Project Status](https://img.shields.io/badge/Status-In%20Development-orange)
![AI Assisted](https://img.shields.io/badge/AI%20Model-Cursor%20(Claude%203.5)-purple)

## 🏗 Tech Stack

**Frontend**
* ![Next.js](https://img.shields.io/badge/Next.js-14-black) **Next.js** (App Router)
* ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) **TypeScript**
* ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3.8-cyan) **Tailwind CSS**

**Backend & Database**
* ![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green) **Supabase** (Auth, Database, Storage)
* **SQL** (RLS Policies & Schema Definitions)

---

## 🧪 The "Cursor AI" Experiment

This repository serves as a case study to determine how helpful AI coding assistants are when the developer has existing coding knowledge. The goal is to move beyond simple code generation and test **architectural understanding** and **debugging**.

### 📝 Prompt Engineering Log
*A record of what I asked the AI vs. what it delivered.*

| Task | Prompt Strategy Used | Result / Accuracy | Human Intervention Needed? |
| :--- | :--- | :--- | :--- |
| **Auth Setup** | "Create a reusable auth form component compatible with Supabase SSR." | ✅ **High** | Minimal. Needed to fix one import path. |
| **DB Schema** | "Generate a SQL schema for recipes with user relationships." | ✅ **High** | None. Logic was sound. |
| **Complex Query** | *[Example]* "Fetch recipes based on ingredients list." | ⏳ *Pending* | *To be determined* |
| **UI Styling** | *[Example]* "Make the recipe card responsive." | ⚠️ **Medium** | AI struggled with specific mobile breakpoints. |

---

## ✨ Features (Current & Planned)

- [x] **Project Initialization:** Next.js + TypeScript setup.
- [x] **Database Schema:** Defined in `supabase-schema.sql`.
- [x] **Authentication:** Login/Signup components integrated.
- [ ] **Recipe Creation:** Rich text editor for instructions.
- [ ] **Image Upload:** Drag-and-drop support for food photos.
- [ ] **Discovery Feed:** Browse latest and trending recipes.
- [ ] **Search:** Filter by ingredients or difficulty.

---
