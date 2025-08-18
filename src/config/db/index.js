import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/NCO_GRS');
        console.log('Connected to MongoDB successfully');
        
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

export default { connect };
