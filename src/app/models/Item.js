import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Item = new Schema({
    name: String,
    price: Number,
    image: String,
    quantity_left: Number,
    is_hide: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model('Item', Item);