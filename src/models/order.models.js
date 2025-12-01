import moongoose from "moongoose"
const orderitemschema = new moongoose.Schema({
    productId: {
        type: moongoose.Schema.Types.ObjectId,
    },
    quantity: {
        type: Number,
        required: true,
    }

})
const orderschema = new moongoose.Schema({
    Orderprice: {
        type: Number,
        reqired: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    Orderitems: {
        type: [orderitemschema]
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ["pending", "cancelled", "delevered"],
        default: "pending",
    }


},
    {
        timestamps: true
    }
)
export default moongoose.model("Order", orderschema)    