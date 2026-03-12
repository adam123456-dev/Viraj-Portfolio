/*
    File: uniqueid.js
    Author: Viraj
    Copyright: 2023 - Viraj https://edpark.space
    Version: 1.0
*/

let uniqueId = 0;

export default function getUniqueId(prefix = 'id') {
    uniqueId++;
    return `${prefix}${uniqueId}`;
}