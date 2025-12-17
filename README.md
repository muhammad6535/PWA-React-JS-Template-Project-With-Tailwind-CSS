# PWA-React-JS-Template-Project-With-Tailwind-CSS

## Overview

This is a public template for building Progressive Web Apps (PWAs) using React.js and styling with Tailwind CSS. You can use this template as a starting point for your web app projects.

### Features

- **React.js:** Create dynamic and responsive user interfaces with React.
- **Tailwind CSS:** Easily style your app with a utility-first CSS framework.

## Getting Started

To use this template, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/YOUR-USERNAME/PWA-React-JS-Template-Project-With-Tailwind-CSS.git
   ```

2. Change into the project directory:

   ```bash
   cd PWA-React-JS-Template-Project-With-Tailwind-CSS
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

Your PWA will be running at `http://localhost:3000`. Open your browser and navigate to this URL to view the project in action.

## Building and Deployment (on-premise option)

To create a production-ready build of your project, run:

```bash
npm run build
```

This will generate a `build` directory containing optimized files that you can deploy to your hosting provider of choice.

## Contributing

This is a public repository, but you can still make improvements and customizations for your specific projects. Feel free to modify the template to suit your needs.

---

Thank you for using this PWA React.js template with Tailwind CSS. Happy coding!


## Building and runnin (Docker option)

You can run it on docker!

If you are familiar with (make)[https://en.wikipedia.org/wiki/Make_(software)] this Makefile will make your life easier:

```
--- Makefile for PWA React with Tailwind ---
Commands available:

  build   : Builds the Docker image .
  run     : Starts the application containers. (Accessible at http://localhost:3000)
  stop    : Stops the running containers.
  clean   : Stops containers, removes volumes, and deletes the built image.

  help    : Shows this help message.
```

All make commands are simple `docker compose` calls, just read `Makefile` to understand under the hood.

