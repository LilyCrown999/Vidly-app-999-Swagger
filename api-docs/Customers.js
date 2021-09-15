

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       required:
 *         - name
 *         - isGold
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the customer
 *         name:
 *           type: string
 *           description: The name of the Customer 
 *         isGold:
 *           type: boolean
 *           description: To Ascertain if user is a Gold Customer
 *         phone: 
 *           type: string
 *           description: The phone number of the customer
 *       example:
 *         name: Ahmed Boluwatife
 *         isGold: false
 *         phone: +234-7016313521
 *         
 */

 /**
  * @swagger
  * tags:
  *   name: Customers
  *   description: The customer managing API
  */

 /**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Returns the list of all the Customers
 *     tags: [Customers]
 *     description: Get all customers
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Customers not found 
 *       500:
 *         description: Something went wrong
 * 
 */



/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: The genre was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       500:
 *         description: Some server error
 */


 /**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Returns the User with the given id
 *     tags: [Customers]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Take the id from the user @get:/api/customers
 *     description: Get customer with given id
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Customer with the given id was not founds
 *       500:
 *         description: Something went wrong
 * 
 */

  /**
  * @swagger
  * /api/customers/{id}:
  *   put:
  *     summary: Update an existing customer
  *     tags: [Customers]
  *     parameters:
  *      - in: path
  *        name: id
  *        schema:
  *          type: string
  *        required: true
  *        description: Take the id from the user @get:/api/customers    
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Customer'
  *     responses:
  *       200:
  *         description: The user was successfully created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Customer'
  *       500:
  *         description: Some server error 
  */

   
/**
 * @swagger
 * /api/customers/{id}:
 *    delete:
 *     summary: Delete the genre by the id
 *     tags: [Customers]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The customer's id
 *     responses:
 *       200:
 *         description: Successfully Deleted 😁😘...
 *       500:
 *         description: Something went wrong
 * 
 */