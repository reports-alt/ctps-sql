
const functions = require("firebase-functions");
const mysql = require('mysql2/promise');

// Create a connection pool to the database
const pool = mysql.createPool({
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_NAME,
 host: process.env.DB_HOST,
 connectionLimit: 10,
});

// Test the database connection
pool.getConnection()
 .then(connection => {
 console.log('Successfully connected to the database pool.');
 connection.release();
 })
 .catch(err => {
 console.error('Error connecting to the database pool:', err);
 });

// Placeholder for a function to be called
const getUser = async (data, context) => {
    // Example: const { text } = data;
    console.log("Executing GetUser with data:", data, context);
    // You can interact with the database here using the pool
    // const [rows] = await pool.query('SELECT * FROM your_table');
    return { result: "sampleFunctionOne executed successfully." };
};

// Placeholder for another function
const sampleFunctionTwo = async (data, context) => {
    console.log("Executing sampleFunctionTwo with data:", data);
    return { result: "sampleFunctionTwo executed successfully." };
};

// A map of method names to the functions they should trigger
const availableFunctions = {
    getUser,
    'sampleTwo': sampleFunctionTwo,
};

exports.api = functions.https.onCall(async (data, context) => {
    const { method, ...payload } = data;

    if (!method || !availableFunctions[method]) {
        throw new functions.https.HttpsError('not-found', `The method "${method}" is not a valid method.`);
    }

    try {
        return await availableFunctions[method](payload, context);
    } catch (error) {
        console.error(`Error executing method "${method}":`, error);
        throw new functions.https.HttpsError('internal', 'An internal error occurred while executing the method.');
    }
});
