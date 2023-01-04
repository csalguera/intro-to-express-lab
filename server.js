import express from 'express'
import { songsArr } from './data/songs-data.js'

const app = express()

// Configuure app

app.set('view engine', 'ejs')

// Mount Middleware

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home.ejs', function(req, res) {
  res.redirect('/home')
})

app.get('/home/home.ejs', function(req, res) {
  res.redirect('/home')
})

app.get('/songs.ejs', function(req, res) {
  res.redirect('/songs')
})

app.get('/songs/songs.ejs', function(req, res) {
  res.redirect('/songs')
})

app.use('/public', express.static('public'))

// Mount Routes

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/songs', function(req, res) {
  res.render('songs/songs', {
    songs: songsArr
  })
})

// Tell app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
})