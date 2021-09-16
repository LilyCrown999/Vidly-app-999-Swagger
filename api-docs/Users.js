


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the User
 *         email:
 *           type: string
 *           description: The email of the user (*unique)
 *         password:
 *           type: string
 *           description: The password required for the user to login 
 *       example:
 *         name: Ahmed Boluwatife
 *         email: ahmedbolu@gmail.com
 *         password: password
 */


 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: The users managing API
  */

 /**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [Users]
 *     description: Get all users
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
 * /api/users/{id}:
 *   get:
 *     summary: Returns the User with the given id
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Take the id from the user @get:/api/users
 *     description: Get user with given id
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Genres with the given id was not found
 *       500:
 *         description: Something went wrong
 * 
 */



/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error 
 */


/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Create a new user
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Take the id from the user @get:/api/users     
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error 
 */


 /**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Returns the User with the given id
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Take the id from the user @get:/api/users
 *     description: Get user with given id
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Genres with the given id was not found
 *       500:
 *         description: Something went wrong
 * 
 */
