What I Did Step by Step
Created a Node.js Project

Initialized a new Node.js project using npm init.

Created an app.js file that starts a simple HTTP server on port 3000.

Added basic routing to serve a homepage and a JSON file with book data.

Designed the Bookstore Website

Created an index.html file with a simple structure to show a list of books.

Used JavaScript in the browser to fetch book data from the server using /books endpoint.

Created a style.css file to apply basic styling to the webpage.

Added Sample Book Data

Created a books.json file containing sample books with title, author, and price.

Made sure the server reads and returns this data when /books is requested.

Tested Locally

Installed dependencies using npm install.

Ran the server with npm start.

Opened http://localhost:3000 to make sure the bookstore UI and data were working correctly.

Dockerized the App

Wrote a Dockerfile to containerize the app using Node.js 14 image.

Made sure it copied all necessary files and ran npm install.

Built the Docker image using docker build.

Tested the Docker container with docker run -p 3000:3000.

Set Up GitHub Repository

Created a new GitHub repository and pushed the project files.

Added .github/workflows/main.yml to define a CI/CD pipeline using GitHub Actions.

Configured GitHub Actions for CI/CD

Wrote a workflow file that:

Checks out the code

Sets up Node.js

Installs dependencies and runs tests

Builds a Docker image

Pushes the image to DockerHub

Added DockerHub credentials as GitHub Secrets:

DOCKER_USERNAME

DOCKER_PASSWORD

Tested the Full Pipeline

Committed and pushed changes to the master branch.

Verified that GitHub Actions automatically built and pushed the Docker image to DockerHub
