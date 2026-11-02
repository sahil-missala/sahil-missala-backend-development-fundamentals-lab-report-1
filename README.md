# Lab 1 — Node.js and Express Server

**Student:** Sahil Missala  
**Section:** CSE QE 2B  
**Lab:** 1

## Aim

To create and run a basic Node.js HTTP server and an Express.js server, define routes, and test the responses using a web browser and its developer tools.

## Requirements

- Node.js and npm
- Express.js
- A web browser (Zen Browser / Firefox)
- A code editor

## Project structure

```text
Lab 1/
├── server.js
├── express.js
├── package.json
├── package-lock.json
├── node_modules/       # installed dependencies (not committed)
├── screenshots/
│   ├── 01-project-setup.png
│   ├── 02-express-installation.png
│   ├── 03-localhost-browser.png
│   ├── 04-root-route-network.png
│   ├── 05-root-route-hello-welcome.png
│   ├── 06-time-route.png
│   ├── 07-about-route.png
│   └── 08-not-found-route.png
└── README.md
```

## Task 1 — Initialize the Node.js project and install Express

The project was initialized using:

```bash
npm init -y
npm install express
```

The `package.json` file stores the project metadata and dependency information. Express was installed using npm.

## Task 2 — Create a plain Node.js HTTP server

The built-in `http` module is used in `server.js`. The server sends the plain-text response `Hello` and listens on port `3000`.

Run this version with:

```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000) to test it.

## Task 3 — Create an Express server and routes

The Express implementation is in `express.js`. It defines the following endpoints:

| Route | Response |
|---|---|
| `GET /` | `Hello Welcome` |
| `GET /about` | JSON containing the name and section |
| `GET /time` | Current date and time |
| Any unmatched route | `404 - Page Not Found` with HTTP status 404 |

Run the Express server with:

```bash
node express.js
```

Visit the following URLs in your browser:

- [http://localhost:3000/](http://localhost:3000/)
- [http://localhost:3000/about](http://localhost:3000/about)
- [http://localhost:3000/time](http://localhost:3000/time)
- [http://localhost:3000/abc](http://localhost:3000/abc) — tests the 404 handler

> **Note:** `server.js` and `express.js` both use port 3000. Run only one server at a time. Stop the running server with `Ctrl + C` before starting the other.

## Screenshots / Evidence

### 1. Project setup and package initialization

![Project setup and package.json](screenshots/01-project-setup.png)

### 2. Express installation

![Express installation using npm](screenshots/02-express-installation.png)

### 3. Browser opened at localhost:3000

![Localhost browser](screenshots/03-localhost-browser.png)

### 4. Root route response in Developer Tools

![Root route network response](screenshots/04-root-route-network.png)

### 5. Express root route — Hello Welcome

![Root route Hello Welcome](screenshots/05-root-route-hello-welcome.png)

### 6. Time route response

![Time route JSON response](screenshots/06-time-route.png)

### 7. About route — JSON response and HTTP 200

![About route response and headers](screenshots/07-about-route.png)

### 8. Unmatched route — 404 Page Not Found

![404 page not found](screenshots/Screenshot%202026-11-02%20095909.png)

## Result

The plain Node.js HTTP server and the Express.js server were created and tested locally. The Express application responds on the specified routes and returns a 404 response for an unmatched path.

## AI Usage Declaration

AI was used **only to prepare and format this README.md file**. The implementation, project setup, execution, and testing of the lab tasks were completed by me.
