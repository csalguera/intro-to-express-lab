import { songsArr } from "../../data/songs-data.js";

const index = (req, res) => {
  res.render('songs/index', {
    songs: songsArr
  })
}

export {
  index
}