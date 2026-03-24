This project uses Bootstrap Datepicker (Apache License 2.0):  
https://github.com/uxsolutions/bootstrap-datepicker  

This is a gym management web application with user authentication. Users can input their data into the system, which calculates their recommended daily calorie intake based on their fitness goals.
Superusers (admins) can create personalized gym plans and diet plans for each user.
The application also includes real-time communication features, allowing users to interact via group chat or direct messages. This is implemented using WebSockets and Django Channels.
All data is stored in a PostgreSQL database. Redis is planned for caching, and Daphne will be used in production.
The JavaScript code inside `templates/nutricao.html` is currently not scalable but fulfills its purpose for now. It will be improved in future iterations.
This is a personal project that I continuously update and improve as I grow and learn.

