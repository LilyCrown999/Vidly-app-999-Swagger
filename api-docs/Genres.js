


/**
 * @swagger
 * components:
 *   schemas:
 *     Genre:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the genre
 *         name:
 *           type: string
 *           description: The name of the Genre 
 *       example:
 *         name: Horror
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
 * /api/genres/{id}:
 *    get:
 *     summary: Delete the genre by the id
 *     tags: [Genres]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The genre's id
 *     responses:
 *       200:
 *         description: Successful 😁😘
 *       500:
 *         description: Something went wrong
 * 
 */


/**
 * @swagger
 * /api/genres:
 *   post:
 *     summary: Create a new genre
 *     tags: [Genres]
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
 *       401:
 *         description: You are not an admin only admin(s) are allowed to create a genre 
 */

/**
 * @swagger
 * /api/genres/{id}:
 *  put:
 *    summary: Update the genre by the id
 *    tags: [Genres]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The genre's id
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
 *            $ref: '#/components/schemas/Genre'
 *    responses:
 *      200:
 *        description: The genre was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Genre'
 *      404:
 *        description: The genre with the given id was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /api/genres/{id}:
 *   delete:
 *     summary: Delete the genre by the id
 *     tags: [Genres]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The genre's id
 *     responses:
 *       200:
 *         description: Successfully deleted 😁😘
 *       500:
 *         description: Something went wrong
 * 
 */

