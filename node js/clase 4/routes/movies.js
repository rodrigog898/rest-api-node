import { Router } from 'express'

import { MovieControllers } from "../controllers/movies.js";

export const MoviesRouter = Router()



MoviesRouter.get("/", MovieControllers.getAll)
MoviesRouter.get("/:id", MovieControllers.getById)
MoviesRouter.post("/" ,MovieControllers.postby)
MoviesRouter.delete("/:id", MovieControllers.delete)
MoviesRouter.patch("/:id", MovieControllers.update)