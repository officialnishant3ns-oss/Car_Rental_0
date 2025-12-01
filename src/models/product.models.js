import moongoose from "moongoose"
const productSchema = new moongoose.Schema({
    productname: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    productimage: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: true
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

},
    {
        timestamps: true
    }
)
export default moongoose.model("Product", productSchema)