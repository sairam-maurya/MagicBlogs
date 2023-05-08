const { Schema, model } = require('../connection');

const myschema = new Schema({
    title: String,
    category: string,
    coverimage: String,
    data: String,
    createdAt: Date,

});

module.exports = model('blog', myschema);