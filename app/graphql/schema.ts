import graphql = require("graphql");

let c = graphql.buildSchema(`
    type RootQuery {
        hello: String
    }

    schema {
        query: RootQuery
    }
`);
export { c };
