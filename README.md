# the concert diaries
Phase 5 Flatiron SWE Project

This app allows a user to keep track of the concerts they’ve attended. A user can:

- View all concerts
- update the image or highlights of a concert
- create a new concert
- delete a concert
- view all artist
- add a new artist
- view all venues
- add a new venue
- create an account


# github repo
https://github.com/nadia4206/concert-diaries

# domain model/erd
![Screen Shot 2023-03-13 at 12 10 47 PM](https://user-images.githubusercontent.com/118000976/224796588-da2fcb93-302b-4b4a-955e-e58a3ff543bd.png)

# wireframe
![Screen Shot 2023-03-13 at 12 02 40 PM](https://user-images.githubusercontent.com/118000976/224797509-9e0faf01-9a19-42b2-9de4-f099ed73a5c9.png)
![Screen Shot 2023-03-13 at 12 03 41 PM](https://user-images.githubusercontent.com/118000976/224797527-399af3e2-6e6c-4601-84c9-7f12e6127a42.png)
![Screen Shot 2023-03-13 at 12 03 49 PM](https://user-images.githubusercontent.com/118000976/224797541-52fe2936-7514-4646-a340-3763d214d20f.png)
![Screen Shot 2023-03-13 at 12 03 57 PM](https://user-images.githubusercontent.com/118000976/224797548-e5c8dc97-173e-417d-a0fa-1d065c8b9021.png)
![Screen Shot 2023-03-13 at 12 04 03 PM](https://user-images.githubusercontent.com/118000976/224797551-c3d95829-7452-468f-a58e-2aeed58e30ab.png)
![Screen Shot 2023-03-13 at 12 04 08 PM](https://user-images.githubusercontent.com/118000976/224797562-c9197a85-0670-495f-a14f-60f10ac22362.png)
![Screen Shot 2023-03-13 at 12 04 18 PM](https://user-images.githubusercontent.com/118000976/224797613-1ca0d979-a9c1-49d7-acb8-fd529087b039.png)
![Screen Shot 2023-03-13 at 12 04 27 PM](https://user-images.githubusercontent.com/118000976/224797626-0330f913-0ff7-43c2-b9f6-72be200541e6.png)
![Screen Shot 2023-03-13 at 12 04 33 PM](https://user-images.githubusercontent.com/118000976/224797649-8808e1ec-0c9d-4238-986b-738d8e43dbf7.png)
![Screen Shot 2023-03-13 at 12 04 41 PM](https://user-images.githubusercontent.com/118000976/224797667-9b571392-9f55-4430-8476-a30abdd7d7de.png)

# validations
- Uniqueness of
    - username
    - artist_name
    - venue_name
- artist must have:
    - name
    - genre
- venue must have:
    - name
    - city
    - state


# routes/apis
![Screen Shot 2023-03-13 at 2 28 43 PM](https://user-images.githubusercontent.com/118000976/224797876-24d6b75c-60b9-4d4b-b8ad-15720dd9cdf6.png)

# seeds data example
![Screen Shot 2023-03-13 at 2 00 34 PM](https://user-images.githubusercontent.com/118000976/224797936-335e120c-0d48-4e76-a39f-6294b1b4f7ee.png)
![Screen Shot 2023-03-13 at 2 00 48 PM](https://user-images.githubusercontent.com/118000976/224797922-74e15680-f06a-41ab-9e20-fda8b241183c.png)

# REACT components diagram
![Screen Shot 2023-03-13 at 2 51 22 PM](https://user-images.githubusercontent.com/118000976/224801111-bf82ea5c-dd0b-4f61-b460-30e77ab50a8a.png)

# misc. questions

- Which components will interact with a complex API?
  - Login/Signup
  - My concerts
    - Add new show
    - update show
  - Artists
    - add new artist
  - Venues
    - add new venue
  - Edit Profile
 
- Which components will interact with Redux/useContext and why?
  - currently unsure if I'll be using Redux/useContext

- What components will handle auth flow?
  - Login and Signup
  
- CSS
  - I will be using Tailwind CSS


# Project Presentation

- Review proposal docs
    - ERD
    - Components Diagram
    - Wireframe
- Demo App
- What was the biggest challenge?
- What did I have the most fun doing?
- What did I learn?
- Q&A

# Stretch Goals

- Simultaneously create artist, venue, and show (currently an artist and a venue must exist to create a show)
- Detailed individual concert view
    - more images
    - who did you go with?
    - what was your favorite song that was played?
    - who was the opening act?
- spotify integration to play music

# Kanban Board
https://trello.com/b/enJELd5j/phase-5-project

