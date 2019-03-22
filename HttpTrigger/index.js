module.exports = async function (context, req) {

    var neo4j = require('neo4j-driver').v1;
    
    var dbPath = process.env['Neo4JPath'];
    var dbUser = process.env['Neo4JUser'];
    var dbPass = process.env['Neo4JPass'];
    var driver = neo4j.driver(dbPath, neo4j.auth.basic(dbUser, dbPass));
    var session = driver.session();
    
    session
    .run("MATCH (n) DELETE n")
    .then(function(result) {
        context.res = {
            status: 200,
            body: result
        }

        session.close();
    })
    .catch(function(error) {
        context.log(error);
    });

    /*
    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            status: 200,
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    */
};