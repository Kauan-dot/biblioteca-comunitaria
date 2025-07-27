import bookControllers from "../controller/book.controllers.js";
import { Router } from "express";
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { validate, validateBookId } from '../middlewares/validation.middlewares.js'
import { bookSchema } from '../schema/book.schema.js';

const router = Router();

router.use(authMiddleware);
router.get("/books", bookControllers.findAllBooksController);
router.post(
    "/books", 
    validate(bookSchema), 
    bookControllers.createBooksController
);

router.get("/books/search", bookControllers.searchBooksController)
router.get("/books/:id", validateBookId, bookControllers.findBookByIdController)
router.patch("/books/:id", validateBookId, bookControllers.updateBookController)
router.delete("/books/:id", validateBookId, bookControllers.deleteBookrController)

export default router