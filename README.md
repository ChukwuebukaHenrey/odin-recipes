# Odin Recipes

A single-page recipe site built with vanilla JavaScript and Webpack. Every tab is rendered by JavaScript modules into one HTML page.

**Live site:** https://<username>.github.io/odin-recipes/

## Built with

- JavaScript (ES modules)
- Webpack 5 (html-webpack-plugin, style-loader, css-loader, html-loader)
- HTML and CSS

## How it works

- `src/index.js` holds the tab-switching logic.
- Each tab (home and five recipes) lives in its own module.
- Recipe pages share one builder function and only supply data.

## Run locally

    npm install
    npx webpack serve

## Build

    npx webpack

## Credits

Part of The Odin Project's JavaScript course (Restaurant Page project).
