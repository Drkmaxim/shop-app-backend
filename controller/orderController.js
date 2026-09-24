const Orders = require("../data/order");

const orderController = async (req, res) => {
    try {
        const { address, items, totalPrice } = req.body;

        if (!address || !items || items.length === 0 || !totalPrice || totalPrice === undefined) {
            return res.status(400).json("Address, price and items missing");
        }

        const order = await Orders.create({
            address: {
                fullName: address.fullName,
                phone: address.phone,
                addressLine1: address.addressLine1,
                addressLine2: address.addressLine2 || "",
                city: address.city,
                state: address.state,
                pincode: address.pincode
            },

            items: items.map((item) => ({
                id: String(item.id),
                name: item.name,
                price: Number(item.price),
                quantity: Number(item.quantity)
            })),

            totalPrice: Number(totalPrice),
            status: "Placed"
        });
        res.status(200).json("Order placed successfully", order);
        console.log("Placed order data", order);
        
    } catch(error) {
        console.error(error);
        return res.status(500).json({message: "Failed to place order", error: error.message});
    }
}



module.exports = orderController;