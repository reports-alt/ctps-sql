/* eslint-disable */
const functions = require("firebase-functions");
const mysql = require('mysql2');

// Create a connection pool to the database
const pool = mysql
  .createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  socketPath : `/cloudsql/${process.env.DB_INSTANCE_CONNECTION_NAME}`,
  //host : process.env.DB_HOST,
  multipleStatements: true,
  dateStrings: true,
  decimalNumbers: true,
   //connectionLimit: 10,
  //dateStrings: ["DATE", "DATETIME","TIMESTAMP"],
})
  .promise();



// Placeholder for a function to be called
const getUser = async (data, context) => {
  // Example: const { text } = data;
  console.log("Executing GetUser with data:", data, context);
  // You can interact with the database here using the pool
  // const [rows] = await pool.query('SELECT * FROM your_table');
  return { result: "GetUser executed successfully." , data, context};
};

// Placeholder for another function
const sampleFunctionTwo = async (data, context) => {
  console.log("Executing sampleFunctionTwo with data:", data);
  return { result: "sampleFunctionTwo executed successfully." };
};

// A map of method names to the functions they should trigger
const availableFunctions = {
  getUser,
  "sampleTwo": sampleFunctionTwo,
};

exports.api = functions.https.onCall(async (data, context) => {
  const { method, ...payload } = data;

  if (!method || !availableFunctions[method]) {
    throw new functions.https
      .HttpsError("not-found",
        `The method "${method}" is not a valid method.`);
  }

  try {
    return await availableFunctions[method](payload, context);
  } catch (error) {
    console.error(`Error executing method "${method}":`, error);
    throw new functions.https
      .HttpsError("internal",
        "An internal error occurred while executing the method.");
  }
});


/*

    // Your Firebase Function or other code using the pool
    exports.myFunctionName = functions.https.onCall(async (data, context) => {
      let connection;
      try {
        connection = await pool.getConnection();
        // Your database operations here
        const [rows, fields] = await connection.execute('SELECT 1 + 1 AS solution');
        console.log('The solution is: ', rows[0].solution);
        return { result: 'Success' };
      } catch (err) {
        console.error('Error connecting to the database pool:', err);
        throw new functions.https.HttpsError('internal', 'Unable to connect to the database.');
      } finally {
        if (connection) {
          connection.release(); // Release the connection back to the pool
        }
      }
    });

    */