const express = require('express');
const router = express.Router();
const{
    setuser,
    getuser
} = require('../services/auth.js');
const admin_mod = require("../models/admin.js");
const Report = require("../models/report.js");


router.get('/', async (req, res) => {
    try {
        const token = req.cookies.admintoken;
        if (!token) return res.redirect('/adminlogin');

        const admin = getuser(token);
        if (!admin) return res.redirect('/adminlogin');
        const myadmin = await admin_mod.findById(admin.id);
        // console.log('Admin accessed dashboard:', myadmin);

        // 1. Fetch all reports
        const reports = await Report.find({map_me_dikhana:true}).sort({ createdAt: -1 }).limit(30);

        // 2. Key stats
        const totalReports = await Report.countDocuments({map_me_dikhana: true});
        const openReports = await Report.countDocuments({ status: "Pending", map_me_dikhana: true });
        const resolvedReports = await Report.countDocuments({ status: "Resolved", map_me_dikhana: true });
        const escalatedReports = await Report.countDocuments({ status: "Escalated", map_me_dikhana: true });

        // 3. Alerts: urgent problems (high priority, pending, created within last 15 days), sorted by likes
        const fifteenDaysAgo = new Date();
        const now = new Date();
        fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

        const urgentReports = await Report.find({
            status: "Pending",
            createdAt: { $gte: fifteenDaysAgo,
                            $lte: now
             },
             map_me_dikhana: true
        })
        .sort({ likes: -1 })   // highest likes first
        .limit(5);



        
        res.render('admin_dashboard', {
            admin: myadmin,
            reports,
            stats: {
                total: totalReports,
                open: openReports,
                resolved: resolvedReports,
                escalated: escalatedReports
            },
            urgentReports
        });
    } catch (err) {
        console.error("Error loading admin dashboard:", err);
        res.status(500).send("Server Error");
    }
});

router.get('/map-public-admin', async (req, res) => {
    const reports = await Report.find(); // get all reports
    // console.log(reports);
  res.render('map_view_admin', { reports }); // send to EJS template
});

router.post('/create', async (req, res) => 
{
    const existingAdmin = await admin.findOne({ email: req.body.email });
    if (existingAdmin) {
        return res.status(400).send('Admin with this email already exists');
    }
    const existingName = await admin.findOne({ name: req.body.name });
    if (existingName) {
        return res.status(400).send('Admin with this name already exists');
    }
    console.log('Admin creation request body:', req.body);
    // Logic to create a new admin
    console.log('Creating new admin:', req.body);
    const { name, email, password, main_admin } = req.body;
    const { salt, hash } = hashPassword(password);
    const newAdmin = new admin({ name, email, password: hash, salt, main_admin });
    newAdmin.save()
    .then(() => console.log('Admin created successfully'))
    .catch(err => console.error('Error creating admin:', err));
    res.send('Admin Created');
});

router.get('/view_full_map', (req, res) => {
    res.send('Full Map View Page - Under Construction');
});

router.get('/analytical_overview', (req, res) => {
    res.json({ message: 'Analytical Overview Data - Under Construction' });
});

router.get('/detailed_analytics', (req, res) => {
    res.send('Detailed Analytics - Under Construction');
});

router.get('/reports', (req, res) => {
    res.send('Reports - Under Construction');
});

router.get('/profile', (req, res) => {
    res.send('Profile - Under Construction');
});

router.get('/community', (req, res) => {
    res.send('Community management for admin - Under Construction');
});

router.get('/departments', (req, res) => {
    res.send('DEpartment management for admin - Under Construction');
});

router.get('/subadmin', (req, res) => {
    res.send('SubAdmin management for admin - Under Construction');
});

router.get('/sendnotification', (req, res) => {
    res.send('Notification management for admin - Under Construction');
});

router.get('/feedbacks', (req, res) => {
    res.send('Feedback management for admin - Under Construction');
});

router.get('/users', (req, res) => {
    res.send('Users management for admin - Under Construction');
});

router.get('/actions', (req, res) => {
    res.send('Actions page for admin - Under Construction');
});

module.exports = router;