# Temptations

Temptations is an app to manage tempting recipes.

<br>

## Table of Contents

- [Link to Live Site](https://github.com/shreyadarekar/temptations#link-to-live-site)
- [Description](https://github.com/shreyadarekar/temptations#description)
- [Getting Started](https://github.com/shreyadarekar/temptations#getting-started)
- [Technologies](https://github.com/shreyadarekar/temptations#technologies)
- [Features](https://github.com/shreyadarekar/temptations#features)
- [Screenshots](https://github.com/shreyadarekar/temptations#screenshots)

<br>

## Link to Live Site

[Temptations Live Site]()

<br>

## Description

Temptations is a website which will let users add their own recipes and provide reviews on recipes uploaded by other users. The application will also allow users to maintain their own cookbooks(collection of recipes). For every recipe, users can add pre-defined tags(vegan, gluten-free, nuts free etc) which can be useful to filter the recipes easily.

<br>

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/shreyadarekar/temptations.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a **.env** file based on the .env.example file with secret key of your choice. Recommendation to generate a strong secret: create a random string using `openssl` (a library that should already be installed in your Ubuntu/MacOS shell). Run `openssl rand -base64 10` to generate a random JWT secret.

4. Setup your Database by running the following command

   ```bash
   npm sequelize
   ```

5. Run backend

   ```bash
   npm start
   ```

6. To run the React App, go inside the `frontend` directory, `npm start`. This should open your browser automatically but if not, you may navigate to `localhost:8000` to access the application.

<br>
<br>

## Technologies

<br>
<p float="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" style="width:75px;" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" style="width:75px;"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" style="width:75px;" />
  &nbsp;
</p>

<br>

## Features

[Feature List](https://github.com/shreyadarekar/temptations/wiki/MVP-List)

<br>

## Screenshots

<img src="./images/homepage.png" style="width:600px;" />
<img src="./images/login.png" style="width:600px;" />
<img src="./images/signup.png" style="width:600px;" />
<img src="./images/new-spot.png" style="width:600px;" />
<img src="./images/single-spot.png" style="width:600px;" />
<img src="./images/manage-spots.png" style="width:600px;" />
