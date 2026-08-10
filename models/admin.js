const mongoose = require("mongoose");
const admin_schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    main_admin: { type: Boolean, default: false}
}
, { timestamps: true});
const admin = mongoose.model("admin", admin_schema);
module.exports = admin;