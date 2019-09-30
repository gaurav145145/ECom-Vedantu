const { client } = require('./model');

function addUser(req, res) {
    let name = req.body.name;
    console.log(req.body.name);
    client.query(`INSERT INTO accounts (name) VALUES ('${name}');`, (err, data) => { // Adding user in db
        // console.log(err, data);
        if (!err) {
            res.json({
                status: 200,
                message: "User Added"
            });
        } else {
            res.json({
                status: 400,
                message: "Failed"
            });
        }


    });
}

module.exports = {
    addUser
};