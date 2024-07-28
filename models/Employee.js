const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    course: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
    },
    employeeId: {
        type: String,
        unique: true,
    },
    createdAt: { 
        type: Date,
        default: Date.now 
    }
});

employeeSchema.pre('save', async function(next) {
    // Generate a unique 4-digit employee ID
    if (this.isNew) {
        let unique = false;
        while (!unique) {
            const randomId = Math.floor(1000 + Math.random()*9000).toString();
            const existingEmployee = await mongoose.models.Employee.findOne({ employeeId: randomId });
            if (!existingEmployee) {
                this.employeeId = randomId;
                unique = true;
            }
        }
    }
    next();
});


module.exports = mongoose.model('Employee', employeeSchema);
