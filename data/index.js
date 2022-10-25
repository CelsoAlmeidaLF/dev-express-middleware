
const sqlite3 = require('sqlite3').verbose();
const {open} = require('sqlite');

exports.Data = class {

   open(){
        return open({
            filename: './data/database.db',
            driver: sqlite3.Database
        });
    }

    getall(sql, params){
        return this.open().then(db => {
            return db.all(sql, params).then();
        });
    }

    run(sql, params){
        this.open().then(db => {
            db.run(sql, params);
        });
    }

    exec(sql){
        this.open().then(db => {
            db.exec(sql);
        });
    }
}