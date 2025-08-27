# 🌿 Virtual Herbal Garden

An AI-powered herbal information assistant that provides contextual insights on medicinal plants using a fine-tuned Gemini API model. Users can explore detailed information including uses, benefits, care tips, and growing conditions of 100+ herbs via an intuitive web interface.

---

## 🚀 Project Overview

**Virtual Herbal Garden** is a full-stack application developed using **React.js** (frontend) and **Spring Boot Microservices** (backend). It integrates a fine-tuned **Gemini AI** model trained on curated prompts to deliver accurate herbal guidance. 

The system queries structured herb data and natural language responses from AI, helping users understand medicinal plant properties and applications.

---

## 🧠 Key Features

- 🌱 **Herbal AI Assistant**: Fine-tuned Gemini API for intelligent herb insights.
- 🔍 **Search & Query**: Ask about 100+ medicinal plants and get structured answers.
- 📊 **Detailed Information**: Get plant uses, benefits, growing tips, and conditions.
- 📦 **Microservices Architecture**: Separate services for AI processing, data management, and user interaction.
- ⚡ **Responsive UI**: Built with Tailwind CSS for clean and mobile-friendly design.

---

## 🛠️ Technologies Used

| Layer        | Stack                                                                 |
|--------------|------------------------------------------------------------------------|
| Frontend     | React.js, Tailwind CSS, Axios                                          |
| Backend      | Spring Boot (Microservices), REST APIs                                 |
| AI Model     | Gemini API (fine-tuned with 20+ contextual herb examples)              |
| Database     | Google Firebase Firestore (NoSQL)                                      |

---

## 🧪 How It Works

1. **User Interaction**: Users visit the web UI and input queries about a herb.
2. **API Request**: The query is sent to the backend service via Axios.
3. **AI Processing**: The Spring Boot backend routes the request to the Gemini API with a curated prompt template.
4. **Data Handling**: Responses are either generated live or fetched from Firebase if previously queried.
5. **UI Rendering**: The frontend displays structured insights with categories like:
   - Uses
   - Benefits
   - Growing Conditions
   - Precautions (if applicable)

---


## 🔮 Future Improvements

- 🗣️ Voice query support using Web Speech API
- 🌍 Multilingual response generation
- 📱 Mobile app version with React Native

---

## 🧑‍💻 Contributors

- [Anurag Jangid](https://github.com/Anuragjangid-Git)
---

## 🙌 Acknowledgements

- [Google Gemini API](https://deepmind.google/technologies/gemini/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Tailwind CSS](https://tailwindcss.com/)
