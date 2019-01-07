import express from 'express';
import path from 'path';

const router = express.Router();
router.get('*', (req, res) => {
	const route = path.join(__dirname, '..', '..', 'dist', 'index.html');
	res.sendFile(route);
});

module.exports = router;