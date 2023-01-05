import { Router } from "express";
import { songsArr } from "../../data/songs-data.js";

const router = Router()

router.get('/', (req, res) => {
  res.render('songs/index', {
    songs: songsArr
  })
})

export {
  router
}