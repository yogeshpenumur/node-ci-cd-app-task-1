# 📦 Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)

## 📚 Bookstore Web Application

This is a simple Node.js-based bookstore web application. It serves static HTML with book data fetched from a JSON file and includes a basic frontend. The app is containerized using Docker and uses GitHub Actions for CI/CD.
## What I Did – Step by Step

1. **Created a Node.js Project**   
   - Created `app.js` to start an HTTP server on port 3000.  
   - Added routes to serve the homepage (`index.html`) and book data (`books.json`).

2. **Designed the Bookstore Website**  
   - Created `index.html` to display a list of books.  
   - Used JavaScript in the browser to call the `/books` endpoint.  
   - Created `style.css` for basic page styling.

3. **Added Sample Book Data**  
   - Added a `books.json` file with sample data (title, author, price).  
   - Modified the server to read and return this data at `/books`.

4. **Tested Locally**  
   - Ran `npm install` to install dependencies.  
   - Started the app with `npm start`.  
   - Opened `http://localhost:3000` to verify everything worked.

5. **Dockerized the App**  
   - Created a `Dockerfile` using Node.js 14 image.  
   - Copied all files and installed packages inside the image.  
   - Built the image with `docker build -t ${{ secrets.DOCKER_USERNAME }}/bookstore-node-app:latest .`  
   - Tested the container using `docker push ${{ secrets.DOCKER_USERNAME }}/bookstore-node-app:latest `.

6. **Set Up GitHub Repository**  
   - Created a GitHub repo and pushed all project files to the `master` branch.  
   - Added a CI/CD workflow in `.github/workflows/main.yml`.

7. **Configured GitHub Actions**  
   - The workflow:
     - Checks out the code  
     - Sets up Node.js  
     - Installs dependencies and runs tests  
     - Builds the Docker image  
     - Pushes the image to DockerHub

8. **Added DockerHub Secrets**  
   - Created two GitHub repository secrets:  
     - `DOCKER_USERNAME`  
     - `DOCKER_PASSWORD`  
   - Used them for DockerHub login during CI/CD.

9. **Tested the Full Pipeline**  
   - Pushed final changes to `master`.  
   - GitHub Actions ran automatically and pushed the image to DockerHub.
