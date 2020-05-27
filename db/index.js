const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;

    }
    getAllAuctions() {

        return this.connection.query("SELECT * FROM auctions");
    }
}
module.exports = new DB(connection);