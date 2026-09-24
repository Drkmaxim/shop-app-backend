/*
let orders = []
let orderId = 1;

function createOrder({name, address, totalprice}) {
    let order = {
        name,
        address,
        totalprice,
        orderId: `$orderId`
    };

    orders.push(order);
}

orderId += 1;

module.exports = createOrder;
*/

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    address: {
        fullName: {type: String, required: true},
        phone: {type: String, required: true},
        addressLine1: {type: String, required: true},
        addressLine2: {type: String},
        city: {type: String, required: true},
        state: {type: String, required: true},
        pincode: {type: String, required: true}
    },
    
    items: [{
            id: {type: String, required: true},
            name: {type: String, required: true},
            price: {type: Number, required: true},
            quantity: {type: Number, required:true}
        
    }],

    totalPrice: {type: Number, required:true},
    status: {type: String, default: "Placed"},
    },
    { timestamps: true, });

module.exports = mongoose.model("Orders", orderSchema);