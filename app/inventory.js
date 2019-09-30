// import model for DB Connection 
const { client } = require('./model');

function addProduct(req, res) {
    let amount = req.body.amount;
    let count = req.body.count;
    let name = req.body.name;
    // Insert query for adding product
    client.query(`INSERT INTO inventory (amount,count,name) VALUES ('${amount}','${count}','${name}');`, (err, data) => {
        // console.log(err, data);
        if (!err) {
            // sucess reponse 
            res.json({
                status: 200,
                message: "Product added"
            });
        } else {
            // error response
            res.json({
                status: 400,
                message: "Failed"
            });
        }

    });
}
// exporting
module.exports = {
    addProduct
};