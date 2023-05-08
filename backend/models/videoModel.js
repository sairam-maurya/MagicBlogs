const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    filename: String,
    name: String,
    user: { type: Types.ObjectId, ref: 'user' },
    createdAt: Date,
    transcription: { type: String, default: '' },

});

module.exports = model('video', myschema);