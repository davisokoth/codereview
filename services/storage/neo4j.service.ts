import { injectable } from 'tsyringe';
import * as neo4j from 'neo4j-driver';

@injectable()
class Neo4JService {

    dbPath = process.env['Neo4JPath'];
    dbUser = process.env['Neo4JUser'];
    dbPass = process.env['Neo4JPass'];

    getConnection() {
        let session: any;
        if(this.dbPath === undefined || this.dbPass === undefined || this.dbUser === undefined) {
            // don't proceed!
        } else {
            const driver = neo4j.v1.driver(this.dbPath, neo4j.v1.auth.basic(this.dbUser, this.dbPass));
            session = driver.session(neo4j.v1.session.WRITE);
        }
        return session;
    }

    insertEntity<T>(TableName: string, Model: T, callback:Function) {
        const session = this.getConnection(); 
        console.log(JSON.stringify(Model).replace(/"(\w+)"\s*:/g, '$1:'));
        const cypher = "CREATE (p:" + TableName + " " + JSON.stringify(Model).replace(/"(\w+)"\s*:/g, '$1:') + ") RETURN p";
        const params = {TableName, Model};
        session.run(cypher, params)
        .then(result => {
            const entities = [];
            result.records.map(record => {
                entities.push(record._fields[0].properties);
            })
            callback(entities);
        })
        .then(() => session.close());
    };

    getEntities<T>(TableName: string, callback:Function) {
        const session = this.getConnection(); 
        const cypher = "MATCH (p: " + TableName + ") RETURN p";
        const params = {TableName};
        session.run(cypher, params)
        .then(result => {
            const entities = [];
            result.records.map(record => {
                entities.push(record._fields[0].properties);
            })
            callback(entities);
        })
        .then(() => session.close());
    };

    queryEntities<T>(TableName: string, model: T, callback:Function) {
        const session = this.getConnection(); 
        const cypher = 'MATCH (p: ' + TableName + '{' + JSON.stringify(model) + '}) RETURN p';
        const params = {TableName, model};
        session.run(cypher, params)
        .then(result => {
            const entities = [];
            result.records.map(record => {
                entities.push(record._fields[0].properties);
            })
            callback(entities);
        })
        .then(() => session.close());
    };
}

export {Neo4JService};