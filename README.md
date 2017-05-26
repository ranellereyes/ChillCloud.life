# README

[Current Live][site]

[site]: chillcloud.herokuapp.com

ChillCloud is a web application modeled after SoundCloud and produced within a two-week timeline. It mainly utilizes Ruby on Rails, React/Redux, PostgreSQL database, and Amazon Web Services S3 storage.

## Features

* __Secure user logins and authentication__

* __Fully functional Song and User CRUD__

* __Continuous audio playback__

* __Modal usage for minimal routing__

* __Uploading and management of AWS Simple Storage Service__

## Product Design

### Continuous Audio Playback

![image of audio playback](app/assets/images/screenshot2.png)


ChillCloud allows for continuous play while navigating throughout the entire website. The Audio Player operates with it's own separate slice of state that holds an array of song objects. Due to this separate slice of state and separate front-end redux/react loop, the user is able to add songs to the queue or immediately play and interrupt a currently playing song without losing what is currently in the queue, regardless of what current webpage they are on.

### Navigation Bar

Along with the Audio Playback, the Navigation Bar is rendered with every single page of the application. Notably, the navigation bar holds and renders almost every user form within the entire site and correctly re-renders the correct page after successful reload, regardless of what page the user is currently on. This allows for only 4 necessary routes for the entire site: the splash, song-view, user-view, and index page.

## Future Plans/Improvements

* Infinite Scroll

* User interactions in the form of follows and likes

* Ability to save and upload playlists

* Search bar functionality that searches all forms of data (song title, artists name, playlist names, playlist with certain songs in, etc.)

* Waveforms

* Custom made audio player

* Timed comments
