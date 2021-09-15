
/**
 * @swagger
 * components:
 *   schemas:
 *      Auth:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The email of the user (*unique)
 *         password:
 *           type: string
 *           description: The password required for the user to login 
 *       example:
 *         email: ahmedbolu@gmail.com
 *         password: password
 */
/**
  * @swagger
  * tags:
  *   name: Auth
  *   description: The Authentication managing API
  */

 /**
 * @swagger
 * /api/auth:
 *   get:
 *     summary: Returns the list of all the Users with complete info...
 *     tags: [Auth]
 *     description: Get all users with complete info ..
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
 * /api/auth:
 *   post:
 *     summary: Login user ( Get x-auth-token )
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     description: Get authentication token
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       500:
 *         description: Some server error 
 */