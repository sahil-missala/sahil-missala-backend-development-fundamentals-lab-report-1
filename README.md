# Lab 1 — Node.js and Express Server

**Student:** Sahil Missala  
**Section:** CSE QE 2B  
**Lab:** 1

## Aim

To create and run a basic Node.js HTTP server and an Express.js server, define routes, and test their responses using a web browser and developer tools.

## Requirements

- Node.js and npm
- Express.js
- Zen Browser / Firefox
- Code editor

## Project Structure

```text
Lab 1/
├── node_modules/
├── screenshots/
│   ├── Screenshot 2026-11-02 093228.png
│   ├── Screenshot 2026-11-02 093508.png
│   ├── Screenshot 2026-11-02 093721.png
│   ├── Screenshot 2026-11-02 094148.png
│   ├── Screenshot 2026-11-02 095230.png
│   ├── Screenshot 2026-11-02 095246.png
│   ├── Screenshot 2026-11-02 095618.png
│   └── Screenshot 2026-11-02 095909.png
├── .gitignore
├── express.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Task 1 — Initialize the Node.js project and install Express

The project was initialized with npm and Express was installed using the following commands:

```bash
npm init -y
npm install express
```

The `package.json` file contains project information and dependency details.

### Screenshots

![Project initialization using npm](screenshots/Screenshot%202026-11-02%20093228.png)

![Installing Express](screenshots/Screenshot%202026-11-02%20093508.png)

## Task 2 — Create a plain Node.js HTTP server

The `server.js` file uses Node.js's built-in `http` module and `http.createServer()` to return the plain-text response `Hello`. The server listens on port `3000`.

Run the server:

```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

### Screenshot

![Plain Node.js server response](screenshots/Screenshot%202026-11-02%20093721.png)

## Task 3 — Create an Express server and routes

The Express server is implemented in `express.js`. It contains these routes:

| HTTP route | Response |
|---|---|
| `GET /` | `Hello Welcome` |
| `GET /about` | JSON object containing the name and section |
| `GET /time` | Current date and time |
| Unmatched route | `404 - Page Not Found` |

Start the Express server:

```bash
node express.js
```

Test the routes in the browser:

- [http://localhost:3000/](http://localhost:3000/)
- [http://localhost:3000/about](http://localhost:3000/about)
- [http://localhost:3000/time](http://localhost:3000/time)
- [http://localhost:3000/abc](http://localhost:3000/abc) — unmatched route

### Screenshots

**Root route response**

![Root route response](screenshots/Screenshot%202026-11-02%20094148.png)

**Root route in browser developer tools**

![Root route network response](screenshots/Screenshot%202026-11-02%20095230.png)

**Time route response**

![Time route response](screenshots/Screenshot%202026-11-02%20095246.png)

**About route response**

![About route response](screenshots/Screenshot%202026-11-02%20095618.png)

**404 route response**

![404 page not found response](screenshots/Screenshot%202026-11-02%20095909.png)

## How to Run

1. Open a terminal in the project folder.
2. Install dependencies if needed:

   ```bash
   npm install
   ```

3. Run either server:

   ```bash
   node server.js
   ```

   or:

   ```bash
   node express.js
   ```

   Both use port `3000`; stop the currently running server before starting the other.

## AI Usage Declaration

AI was used only to prepare and format this `README.md` file. The implementation, execution, and testing of the lab tasks were completed by me.
