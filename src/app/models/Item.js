import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Item = new Schema({
    name: String,
    price: Number,
    quantity_left: Number,
    image: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model('Item', Item);