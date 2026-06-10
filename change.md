# Portfolio Customization Guide

This guide explains how to update and customize your portfolio details, including profile images, experience, projects, tech stack, and links.

All configuration files are located in the `src/config/` directory.

---

## 1. Profile Picture
* **File to replace**: `public/photos/profile.jpg`
* **How to update**:
  - Replace the existing `profile.jpg` file in the `public/photos/` folder with your new image.
  - Keep the name as `profile.jpg` so you don't need to change any code.
  - If you use a different format (like `.png`), you will need to edit `src/components/profile.vue` on line 19:
    ```html
    <img src="/photos/profile.png" :alt="profile.name" />
    ```

---

## 2. Job Title, Name, and Company Link
* **File to edit**: `src/config/profile.json`
* **How to update**: Edit the JSON values in this file:
  ```json
  {
    "name": "Mohd Yousuf Parvez",
    "designation": "AI Engineer <br/> Full-Stack Engineer <br/> Performance Engineer <br/> DevOps Engineer <br/> QA / Quality Assurance",
    "address": "@Charles Hudson Technology Solutions (Nagarro), India",
    "url": "https://www.nagarro.com",
    "github": "Yousufpz"
  }
  ```
  *Note: You can use `<br/>` in the `"designation"` field to separate multiple job titles onto new lines.*

---

## 3. Resume / CV File
* **File to replace**: `public/resume/M_Yousuf_CV_2026_3_5_YoE.pdf`
* **How to update**:
  - Place your new PDF in the `public/resume/` folder.
  - If the filename is different, update the link in `src/components/profile.vue` on line 34:
    ```html
    <a href="/resume/YOUR_NEW_RESUME_NAME.pdf" target="_blank" download>
    ```

---

## 4. Featured Projects (Title, Demo Links, Description, Tags)
* **File to edit**: `src/config/projects.json`
* **How to update**: Add, remove, or modify items in this JSON array.
  * **Add Project Banner Images**: Save project banners/screenshots in the `public/projects/` folder (e.g. `public/projects/myproject.png`) and set `"banner"` to `"/projects/myproject.png"`.
  ```json
  [
    {
      "title": "Project Title",
      "subtitle": "Short Tagline",
      "banner": "/projects/resolvepal.png",
      "url": "https://live-demo-link.com",
      "github": "https://github.com/Yousufpz/repo-name",
      "tags": ["spring boot", "react", "docker"],
      "description": "Longer project description..."
    }
  ]
  ```

---

## 5. GitHub Repository Cards (GitHub OpenGraph Previews)
* **File to edit**: `src/config/misc.json`
* **How to update**: Add your GitHub repository URLs in this file. It automatically generates preview cards using GitHub's OpenGraph engine.
  ```json
  {
    "github": {
      "repositories": [
        {
          "url": "https://github.com/Yousufpz/ResolvePal",
          "banner": "https://opengraph.githubassets.com/1/Yousufpz/ResolvePal?v=1"
        }
      ]
    }
  }
  ```
  *Tip: The `?v=1` at the end of the banner URL acts as a cache-buster if you rename your repository or change its description.*

---

## 6. Work Experience (Companies, Tenures, Achievements)
* **File to edit**: `src/config/experience.json`
* **How to update**:
  - To change total years of experience, modify `"joining"` (your starting year).
  - To change total projects or clients count on the home page, update `"projects"` and `"client"`.
  - To update companies, edit the `"companies"` array:
  ```json
  {
    "client": 5,
    "joining": 2022,
    "projects": 6,
    "companies": [
      {
        "name": "Company Name",
        "tenure": "Start Date - End Date",
        "url": "Company Website URL",
        "details": "HTML allowed here: <b>Role</b>, achievements, etc."
      }
    ]
  }
  ```

---

## 7. Tech Stack & Skills
* **File to edit**: `src/config/tools.json`
* **How to update**: Modify the skills list. The icons are loaded from FontAwesome v6.
  ```json
  [
    {
      "name": "Skill Name",
      "detail": "Sub-title or description",
      "icon": "fab fa-python", 
      "color": "#3776ab",
      "url": "Link to documentation or homepage"
    }
  ]
  ```
  *To search for icons, visit [FontAwesome Icons](https://fontawesome.com/icons) (use classes like `fab fa-java`, `fas fa-leaf`, etc.).*

---

## 8. Contact Information & Social Profiles
* **File to edit**: `src/config/socials.json`
* **How to update**: Customize your communication channels.
  ```json
  {
    "email": {
      "title": "Email",
      "icon": "email",
      "url": "mailto:mohdyousufparvez@gmail.com"
    },
    "github": {
      "title": "GitHub",
      "icon": "github",
      "url": "https://github.com/Yousufpz"
    },
    "linkedin": {
      "title": "Linkedin",
      "icon": "linkedin",
      "url": "https://linkedin.com/in/mohd-yousuf-parvez"
    }
  }
  ```
  *Note: Valid icon values for `"icon"` are `email`, `github`, `linkedin`, `twitter`, `stackoverflow`, and `medium` (SVG files located in `public/icons/`).*

---

## 9. Frequently Asked Questions (FAQ)
* **File to edit**: `src/config/faq.json`
* **How to update**: Add or change Q&A entries.
  ```json
  [
    {
      "question": "Your Question Here?",
      "answer": "HTML allowed: <b>Your answer.</b>"
    }
  ]
  ```
