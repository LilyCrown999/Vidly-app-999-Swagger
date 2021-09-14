
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Genre:
 *       type: object
 *       required:
 *         - name
 *         - x-auth-token
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The name of the Genre 
 *         x-auth-token:
 *            type: string
 *            description: The auth token only give to admin(s) login as a user using /api/auth to get then input at the header...
 *       example:
 *         id: 6140cb7ed820e013bc98f5d3
 *         name: Horror
 *         x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQwY2I3ZWQ4MjBlMDEzYmM5OGY1ZDMiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzE2MzY0ODF9.Ru0unKQ2T8HyeJNopeKxPI9__8VdqrIAGRinBj8ZEZk
 */

 /**
  * @swagger
  * tags:
  *   name: Genres
  *   description: The genres managing API
  */


/**
 * @swagger
 * /api/genres:
 *   get:
 *     summary: Returns the list of all the Genres
 *     tags: [Genres]
 *     description: Get all genres
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Genres not found
 *       500:
 *         description: Something went wrong
 * 
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/genres:
 *   post:
 *     summary: Create a new genre
 *     tags: [Genres]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genre'
 *     responses:
 *       200:
 *         description: The genre was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 *       500:
 *         description: Some server error
 */