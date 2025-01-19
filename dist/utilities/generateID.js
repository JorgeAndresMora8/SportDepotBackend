"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generateID;
// Importing the `v4` function from the `uuid` library
const uuid_1 = require("uuid");
function generateID() {
    const id = (0, uuid_1.v4)();
    return id;
}
