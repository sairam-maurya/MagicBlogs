const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    title: String,
    category: String,
    description: String,
    coverimage: String,
    user: {type: Types.ObjectId, ref: 'user'},
    data: String,
    createdAt: Date,

});

module.exports = model('blog', myschema);