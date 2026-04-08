This project uses Bootstrap Datepicker (Apache License 2.0):  
https://github.com/uxsolutions/bootstrap-datepicker  

This is a gym management web application with user authentication. Users can input their data into the system, which calculates their recommended daily calorie intake based on their fitness goals.
Superusers (admins) can create personalized gym plans and diet plans for each user.
The application also includes real-time communication features, allowing users to interact via group chat or direct messages. This is implemented using WebSockets and Django Channels.
All data is stored in a PostgreSQL database. Redis is planned for caching, and Daphne will be used in production.
The JavaScript code inside `templates/nutricao.html` is currently not scalable but fulfills its purpose for now. It will be improved in future iterations.
This is a personal project that I continuously update and improve as I grow and learn.




# 🏋️ Gym Management Web App

A full-stack web application for managing fitness goals, personalized workout plans, and real-time communication between users and admins.

---

## 🚀 Overview

This project was initially built 2 years ago and has been continuously improved as part of my learning journey in backend development and real-time systems.

It allows users to track their fitness progress while enabling admins to create customized gym and diet plans.

---

## ✨ Features

- 🔐 User authentication system  
- 📊 Daily calorie calculation based on fitness goals  
- 🏋️ Personalized workout plans (admin-controlled)  
- 🥗 Diet plan management  
- 💬 Real-time chat (group & direct messaging)  
- 👥 Role-based access (users & admins)  

---

## 🛠 Tech Stack

- **Backend:** Django, Django Channels  
- **Frontend:** HTML, CSS, JavaScript  
- **Database:** PostgreSQL  
- **Real-time:** WebSockets  
- **Planned improvements:** Redis (caching), Daphne (production server)

---

## ⚙️ How It Works

1. Users sign up and input personal fitness data  
2. The system calculates recommended daily calorie intake  
3. Admins create personalized workout and diet plans  
4. Users can communicate in real-time via chat  

---

## 📸 Demo


https://www.linkedin.com/posts/alfredo-ussivane-058229257_i-started-building-a-gym-management-web-activity-7447654277919088640-DV21?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD83JwQBvoU-bmxiTRcTwbStzFA6pNArkCI

---

## 🧠 What I Learned

- Building real-time systems using WebSockets and Django Channels  
- Designing role-based application logic  
- Structuring backend systems for scalability  
- Managing relational data with PostgreSQL  

---

## 🔄 Future Improvements

- Refactor frontend for better scalability and maintainability  
- Implement Redis for caching  
- Deploy using Daphne  
- Improve UI/UX  

---

## 📌 Notes

This project reflects my growth as a developer.  
If I rebuilt it today, I would redesign parts of the frontend architecture for better scalability.

---

## 🤝 Feedback

Feedback, suggestions, and contributions are welcome!

