import bookControllers from "../controller/book.controllers.js";
import { Router } from "express";
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { validate, validateBookId } from '../middlewares/validation.middlewares.js'
import { bookSchema } from '../schema/book.schema.js';

const router = Router();

router.use(authMiddleware);
router.get("/", bookControllers.findAllBooksController);
router.post(
    "/", 
    validate(bookSchema), 
    bookControllers.createBooksController
);

router.get("/search", bookControllers.searchBooksController)
router.get("/:id", validateBookId, bookControllers.findBookByIdController)
router.patch("/:id", validateBookId, bookControllers.updateBookController)
router.delete("/:id", validateBookId, bookControllers.deleteBookrController)

export default router