const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || 'mongodb+srv://vadym_harmash:03042003@cluster0.ufxegfn.mongodb.net/market?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to DB')
    } catch (error) {
        console.error('DB connection error:', error)
    }
}

module.exports = connectDB
