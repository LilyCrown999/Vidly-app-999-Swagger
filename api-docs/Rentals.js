


/**
 * @swagger
 * components:
 *   schemas:
 *     Rental:
 *       type: object
 *       required:
 *         - movieId
 *         - customerId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         customerId:
 *           type: String
 *           description: The id of the genre get @get:/api/customers where customerId = id
 *         movieId:
 *           type: String
 *           description: The id of the genre get @get:/api/customers where movieId = id
 *       example:
 *         customerId: 6141f7d10bad624c842cb194
 *         genreId: 60ff231ea4aa140004c20d17
 */


 /**
  * @swagger
  * tags:
  *   name: Rentals
  *   description: The rentals managing API
  */

 
 /**
 * @swagger
 * /api/rentals:
 *   get:
 *     summary: Returns the list of all the Rentals
 *     tags: [Rentals]
 *     description: Make a new rent history
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Rentals history not found
 *       500:
 *         description: Something went wrong
 * 
 */

  
 /**
 * @swagger
 * /api/rentals/{id}:
 *   get:
 *     summary: Returns the rental with the given id
 *     tags: [Rentals]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The rental's id
 *     description: Get rental with stated id get@get:/api/rentals
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Rentals history with the given id was not found
 *       500:
 *         description: Something went wrong
 * 
 */

 
 /**
 * @swagger
 * /api/rentals:
 *   post:
 *     summary: Create a new Rental history
 *     tags: [Rentals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rental'
 *     description: Rent a movie.
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Rentals history not found
 *       500:
 *         description: Something went wrong
 * 
 */

