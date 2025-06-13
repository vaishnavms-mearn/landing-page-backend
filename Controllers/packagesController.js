const Package = require('../Models/packagesSchema');

exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
};

exports.getTopSellingPackages = async (req, res) => {
  try {
    const packages = await Package.find().sort({ sales: -1 }).limit(6);
    res.status(200).json(packages);
  } catch (error) {
    console.error('Error fetching top-selling packages:', error);
    res.status(500).json({ error: 'Failed to fetch top-selling packages' });
  }
};
