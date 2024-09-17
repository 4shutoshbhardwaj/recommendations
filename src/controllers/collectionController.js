const collectionModel = require('../models/collectionModel');
const recommendationModel = require('../models/recommendationModel');

const createCollection = async (req, res) => {
  try {
    const { userId, name, description } = req.body;
    const collection = await collectionModel.createCollection(userId, name, description);
    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addRecommendationToCollection = async (req, res) => {
  try {
    const { collectionId, recommendationId, userId } = req.body;
    
    const recommendations = await recommendationModel.getRecommendationsByUser(userId);
    const userRecommendations = recommendations.map(r => r.id);
    
    if (!userRecommendations.includes(recommendationId)) {
      return res.status(403).json({ error: "Recommendation doesn't belong to the user." });
    }

    const recommendation = await collectionModel.addRecommendationToCollection(collectionId, recommendationId);
    res.status(200).json(recommendation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeRecommendationFromCollection = async (req, res) => {
  try {
    const { collectionId, recommendationId } = req.body;
    const success = await collectionModel.removeRecommendationFromCollection(collectionId, recommendationId);

    if (success) {
      res.status(200).json({ message: 'Recommendation removed from collection.' });
    } else {
      res.status(404).json({ error: 'Recommendation not found in the collection.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const viewCollections = async (req, res) => {
  try {
    const { userId } = req.params;
    const collections = await collectionModel.getCollectionsByUser(userId);
    
    if (collections.length === 0) {
      return res.status(404).json({ error: 'No collections found for the user.' });
    }
    
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCollection = async (req, res) => {
  try {
    const { collectionId } = req.params;
    const success = await collectionModel.deleteCollection(collectionId);

    if (success) {
      res.status(200).json({ message: 'Collection deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Collection not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCollection,
  addRecommendationToCollection,
  removeRecommendationFromCollection,
  viewCollections,
  deleteCollection,
};
