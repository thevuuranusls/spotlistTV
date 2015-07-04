#!/usr/bin/env node

/*
 * Spotitube.
 * WebApp to convert Spotify Playlists to Youtube Playlists.
 * Powered by NodeJS and Express.js.
 *
 * Copyright (c) 2015 Alfred Gutierrez alfg.co.
 *
 * Project home:
 *   https://github.com/alfg/spotitube
 */

// Import application and set port.
var app = require('./app/app');
var port = process.env.PORT || 3000; // set our port

// Start server.
app.listen(port);
console.log('starting on port ' + port);