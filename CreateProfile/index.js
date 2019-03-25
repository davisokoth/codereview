module.exports = async function (context, req) {

    var neo4j = require('neo4j-driver').v1;
    
    var dbPath = process.env['Neo4JPath'];
    var dbUser = process.env['Neo4JUser'];
    var dbPass = process.env['Neo4JPass'];
    var driver = neo4j.driver(dbPath, neo4j.auth.basic(dbUser, dbPass));
    var session = driver.session(neo4j.session.WRITE);

    // if (req.body && req.body.name && req.body.email && req.body.id) {
    if (req) {
        const cypher = "CREATE (p:Person {name: {name}, emial: {email}, id: {id}}) RETURN count(p) AS count";
        // const params = { name: req.body.name, email: req.body.email, id: req.body.id};
        const params = { name: 'dpapa', email: 'davisokoth@gmail.com', id: 'lulusmo-09090-sdeo'};
        session.run(cypher, params).then(result => {
            context.res = {
                status: 200,
                body: result
            }
        })
        .catch(error => {
            context.log(error);
        });
    } else {
        context.res = {
            status: 400,
            body: "Missing required fields"
        };
    }
};