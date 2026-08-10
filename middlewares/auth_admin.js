const{setuser,
    getuser
} = require("../services/auth.js"); 
const admin = require("../models/admin.js");
async function restrictoAdminuseronly(req,res,next){
    // console.log("Inside restrictoLoginuseronly");
    const token = req.cookies.admintoken;
    if(!token){
        return res.redirect("/adminlogin");
    }
    else//else is required here as without token defined get user will malfunction as invalid syntax would be passed there
        {
        const user = getuser(token);
        if(!user){
            return res.redirect("/adminlogin");
        }
        const adminUser = await admin.findById(user.id);
        if(!adminUser){
            return res.redirect("/adminlogin");
        }
        req.admin = user;
    }
    // console.log("exiting restrictoLoginuseronly");
    next();
}
module.exports = {
    restrictoAdminuseronly
};