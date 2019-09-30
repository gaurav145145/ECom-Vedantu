const { Pool, Client } = require('pg');


const user =  "gaurav";
const host =  "localhost";
const database =  "vedantu";
const password =  "gaurav";
const port =  5432;


const connectionString = `postgressql://${user}:${password}@${host}:${port}/${database}`;

const client = new Client({
    connectionString: connectionString
});

client.connect();

module.exports = {
    client
}