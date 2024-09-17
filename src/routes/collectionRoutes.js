const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// Create a new collection
router.post('/create', collectionController.createCollection);

// Add a recommendation to a collection
router.post('/add', collectionController.addRecommendationToCollection);

// Remove a recommendation from a collection
router.delete('/remove', collectionController.removeRecommendationFromCollection);

// View all collections for a user
router.get('/:userId', collectionController.viewCollections);

// Delete a collection
router.delete('/:collectionId', collectionController.deleteCollection);

module.exports = router;
