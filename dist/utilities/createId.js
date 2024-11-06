"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createId;
const uuid_1 = require("uuid");
function createId() {
    const id = (0, uuid_1.v4)();
    return id;
}
