const admin = require("../models/admin.js");
const{setuser,
    getuser}=require("../services/auth");
const {
  hashPassword,
  verifyPassword
} = require("../services/password_encryption.js");

async function handleadminlogin(req, res) {
    // console.log("Admin Login Request Body:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        return res.render('adminLogin', { error: 'Email and password are required' });
    }
    try {

        const adminUser = await admin.findOne({ email: email });
        if (!adminUser) {
            return res.render('adminLogin', { error: 'Admin does not exists.' });
        }
        const isPasswordValid =  verifyPassword(password, adminUser.salt, adminUser.password);
        if (!isPasswordValid) {
            return res.render('adminLogin', { error: 'Invalid password' });
        }
        // console.log("Admin user authenticated:", adminUser);
        const token = setuser(adminUser);
        res.cookie('admintoken', token); // 1 day
        return res.redirect('/admin');
    } catch (error) {
        console.error("Error during admin login:", error);
        return res.render('adminLogin', { error: 'An error occurred. Please try again.' });
    }
    // res.json({ message: "Admin login handler" });
}
module.exports = { handleadminlogin }; 