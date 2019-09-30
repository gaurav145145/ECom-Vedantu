const { client } = require('./model');

function placeOrder(req, res) {
    let user_id = req.body.user_id;
    let product_id = req.body.product_id; // List of all products
    let count = req.body.count;

    client.query(`SELECT * FROM accounts WHERE id='${user_id}';`, (err, data) => {
        console.log(err, data);
        if (!err) {
            //  verifying user's existance 
            if (data.rows.length == 1) {
                //  verifying products's existance 
                client.query(`SELECT * FROM inventory WHERE id='${product_id}';`, (err, data) => {
                    console.log(err, data);
                    if (!err) {
                        if (data.rows.length == 1) {
                            let availavle = data.rows[0].count;
                            //  verifying products's availibility
                            if (availavle >= count) {
                                let left = availavle - count;
                                // add order details entry
                                client.query(`INSERT INTO orders (product_id, user_id, count) VALUES ('${product_id}','${user_id}','${count}');`, (err, data) => {
                                    if (!err) {
                                        // update remaining
                                        client.query(`UPDATE inventory SET count='${left}';`, (err, data) => {
                                            if (!err) {
                                                res.json({
                                                    status: 200,
                                                    message: "Order Placed"
                                                });
                                            } else {
                                                res.json({
                                                    status: 400,
                                                    message: "Failed"
                                                });
                                            }

                                        });
                                    } else {
                                        res.json({
                                            status: 400,
                                            message: "Failed"
                                        });
                                    }
                                });


                            } else {
                                res.json({
                                    status: 400,
                                    message: `Only ${availavle} units left`
                                });
                            }
                        } else {
                            res.json({
                                status: 400,
                                message: "Product does not exist"
                            });
                        }
                    } else {
                        res.json({
                            status: 400,
                            message: "Failed"
                        });
                    }


                });

            } else {
                res.json({
                    status: 400,
                    message: "User does not exist"
                });
            }

        } else {
            res.json({
                status: 400,
                message: "Failed"
            });
        }
    });

}

module.exports = {
    placeOrder
};