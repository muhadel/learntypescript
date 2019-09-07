"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql = require("graphql");
var c = graphql.buildSchema("\n    type RootQuery {\n        hello: String\n    }\n\n    schema {\n        query: RootQuery\n    }\n");
exports.c = c;
