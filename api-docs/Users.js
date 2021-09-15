


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
 *           description: The name of the Genre 
 *         email:
 *           type: string
 *           description: The email of the user
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

