import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Item = new Schema({
    name: String,
    price: Number,
    image: String,
    quantity_left: Number,
    is_hide: Number,
}, {
    timestamps: true 
});

export default mongoose.model('Item', Item);