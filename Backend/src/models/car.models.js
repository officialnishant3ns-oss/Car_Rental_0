import mongoose from "mongoose"
const carSchema = new mongoose.Schema({
    carname: {
        type: String,
        required: true,
        trim: true,
    },

    brand: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ["sedan", "suv", "hatchback", "luxury", "van"]
    },

    fuelType: {
        type: String,
        enum: ["petrol", "diesel", "electric", "hybrid"]
    },

    seats: {
        type: Number
    },

    pricePerDay: {
        type: Number,
        required: true
    },
    images: {
        type: [String]
    },
    status: {
        type: String,
        enum: ["available", "booked", "maintenance"],
        default: "available"
    },

    location: {
        city: String,
        branch: String
    }
},
{
    timestamps:true
}
)

const Car = mongoose.model('Car', carSchema)
export default Car