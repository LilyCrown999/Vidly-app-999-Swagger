


/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - genreId
 *         - writer
 *         - isReleased
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         title:
 *           type: string
 *           description: The name of the Genre 
 *         writer:
 *           type: Array
 *           description: The writer of the movie 
 *         genreId:
 *           type: String
 *           description: The id of the genre get @get:/api/genres where genreId = id
 *         isReleased:
 *           type: boolean
 *           description: The object that determine if a movie is released or not
 *         releaseDate:
 *           type: Date
 *           default: null 
 *           description: The movies release date ( set to null )
 *       example:
 *         title: Rick and Morty Se4
 *         genreId: 61412fb4b6964843806109cf
 *         writer: [Justin roiland,Seth rogen]
 *         isReleased: true
 */


 /**
  * @swagger
  * tags:
  *   name: Movies
  *   description: The movies managing API
  */

 /**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Returns the list of all the Movies
 *     tags: [Movies]
 *     description: Get all movies
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
 * /api/movies/{id}:
 *    get:
 *     summary: Get the movie by the given id
 *     tags: [Movies]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The movies id
 *     responses:
 *       200:
 *         description: Successful 😁😘
 *       500:
 *         description: Something went wrong
 * 
 */


/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     parameters:
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Get this by taking the token in the header when create new user at post:/api/user then  login the user at post:/api/auth...
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The Movie was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 *       401:
 *         description: You are not an admin only admin(s) are allowed to create a Movie 
 */

 
/**
 * @swagger
 * /api/movies/{id}:
 *  put:
 *    summary: Update the movie by the id
 *    tags: [Movies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The movie's id
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Get this by taking the token in the header when create new user at post:/api/user then  login the user at post:/api/auth...
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Movie'
 *    responses:
 *      200:
 *        description: The movie was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movie'
 *      404:
 *        description: The movie with the given id was not found
 *      500:
 *        description: Some error occurred
 */


/**
 * @swagger
 * /api/movies/{id}:
 *    delete:
 *     summary: delete the movie by the given id
 *     tags: [Movies]
 *     parameters:
 *      - in: header
 *        name: x-auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Get this by taking the token in the header when create new user at post:/api/user then  login the user at post:/api/auth...
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The movies id
 *     responses:
 *       200:
 *         description: Successfully deleted 😁😘
 *       500:
 *         description: Something went wrong
 * 
 */