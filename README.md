# vue-vaporwave

> A Vue-powered Bandcamp-like website for music playing and information related to Vaporwave

# Features:

## Hidden music player that runs across the router

![alt text](https://raw.githubusercontent.com/phiboi/vue-vaporwave/master/git/001.jpg)

![alt text](https://raw.githubusercontent.com/phiboi/vue-vaporwave/master/git/002.jpg)

~ Music playing remains absolute throughout the router

~ Has a progress bar that responds to time update

~ Can jump to next and previous song, skip progress and jump to random songs

~ A click on the song's description will create a new tab to the corresponding artist's bandcamp

## Respond to viewport change - does not break on mobile or tablet view

## A music catalog that respond to the music player via two-way binding and vice-versa

![alt text](https://raw.githubusercontent.com/phiboi/vue-vaporwave/master/git/005.jpg)

![alt text](https://raw.githubusercontent.com/phiboi/vue-vaporwave/master/git/006.jpg)

~ Respond two-way to the music player and the "now playing" bar

~ Each song responds to mouse clicks, highlight song will pause if clicked again

~ Has a search bar

## An automatic loop-based display system for songs that responds to library update

~ Use javascript file as databanks for easy content addition or removal

# Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build output file and run with http-server on localhost:8080
npm install http-server -g
npm run build
cd dist
http-server

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# vue-vaporwave
