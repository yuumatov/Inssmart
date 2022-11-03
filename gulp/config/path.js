import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/main.scss`,
    js: `${srcFolder}/js/main.js`,
    img: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,svg,gif}`, `!${srcFolder}/img/sprite/**/*.*`],
    sprite: `${srcFolder}/img/sprite/*.svg`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    img: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,svg,gif}`, `!${srcFolder}/img/sprite/**/*.*`],
    sprite: `${srcFolder}/img/sprite/*.svg`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  buildFolder: buildFolder,
  rootFolder: rootFolder,
  ftp: `/portfolio/`,
};
