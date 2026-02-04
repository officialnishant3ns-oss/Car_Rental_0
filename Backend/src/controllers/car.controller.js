import Car from "../models/car.models.js"

const AddCar = async (req, res) => {
    try {
        const { carname, brand, category, fuelType, seats, pricePerDay, status, location } = req.body

        if (!carname || !brand || !category || !fuelType || !seats || !pricePerDay || !location) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be provided"
            })
        }
        const existingCar = await Car.findOne({ carname, brand })
        if (existingCar) {
            return res.status(409).json({
                success: false,
                message: "Car already exists"
            })
        }
        //images >>cloudinary setup

        const car = await Car.create({
            carname,
            brand,
            category,
            fuelType,
            seats,
            pricePerDay,
            status,
            location

        })
        return res.status(201).json({ status: true, message: "Car added succesfully", data: car })

    } catch (error) {
        console.error("Register Error::", error)
        return res.status(500).json({ message: "Something went wrong while adding car" })

    }
}
const updateCar = async (req, res) => {
    try {
        const { id } = req.params
        // const {} = req.body

        const updateCar = await Car.findByIdAndUpdate(id,
            req.body, //>>>>>>> we take also there by upper method 
            {
                new: true,
                runValidators: true
            }
        )
        if (!updateCar) {
            return res.status(404).json({ success: true, message: "Car not found" })
        }
        return res.status(200).json({
            success: true,
            message: "Car updated successfully",
            data: updateCar
        })

    } catch (error) {
        console.error("Update car error", error)
        return res.status(500).json({ message: "Something went wrong while Updating car" })
    }
}

export { AddCar ,updateCar}