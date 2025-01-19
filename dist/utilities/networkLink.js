"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const networkLink = (network) => {
    let link;
    if (network === 'mastercard')
        link = 'https://th.bing.com/th/id/OIP.MZnfDm0dqmsgpVw55gCW2AHaEK?rs=1&pid=ImgDetMain';
    if (network === 'visa')
        link = 'https://th.bing.com/th/id/OIP.I4lFSlJ8cya1IcaUsqJhUAHaC0?w=1024&h=389&rs=1&pid=ImgDetMain';
    if (network === 'americanExpress')
        link = 'https://th.bing.com/th/id/OIP.EIhzFNexhZiiyqCA_INMGgHaFj?rs=1&pid=ImgDetMain';
    if (network === 'cabal')
        link = 'https://th.bing.com/th/id/OIP.qU_ghLl22wfAhEbt47F23QHaH4?rs=1&pid=ImgDetMain';
    return link;
};
exports.default = networkLink;
