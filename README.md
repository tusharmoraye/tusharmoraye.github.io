# Portfolio

This is a portfolio website live on [https://www.tusharmoraye.com](https://www.tusharmoraye.com)

## Prerequisite

Create `.env.local` file in root with following credentials.

```bash
VITE_MEASUREMENT_ID="G-X53.." # Google analytics measurment id
VITE_GOOGLE_SCRIPT="https://script.google.com/macros/..." # Google script url for contact form submit
```

## Developing

Once you've cloned the project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
