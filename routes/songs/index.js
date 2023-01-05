import { Router } from "express";
import * as songsCtrl from "../../controllers/songs/index.js"

const router = Router()

router.get('/', songsCtrl.index)

export {
  router
}