const pool = require('../config/db');

const createCollection = async (userId, name, description) => {
  const result = await pool.query(
    'INSERT INTO collections (user_id, name, description) VALUES ($1, $2, $3) RETURNING *',
    [userId, name, description]
  );
  return result.rows[0];
};

const addRecommendationToCollection = async (collectionId, recommendationId) => {
  const result = await pool.query(
    'INSERT INTO collection_recommendations (collection_id, recommendation_id) VALUES ($1, $2) RETURNING *',
    [collectionId, recommendationId]
  );
  return result.rows[0];
};

const removeRecommendationFromCollection = async (collectionId, recommendationId) => {
  const result = await pool.query(
    'DELETE FROM collection_recommendations WHERE collection_id = $1 AND recommendation_id = $2 RETURNING *',
    [collectionId, recommendationId]
  );
  return result.rowCount > 0;
};

const getCollectionsByUser = async (userId) => {
  const result = await pool.query(
    `SELECT c.*, array_agg(r.*) as recommendations 
     FROM collections c 
     LEFT JOIN collection_recommendations cr ON c.id = cr.collection_id 
     LEFT JOIN recommendations r ON r.id = cr.recommendation_id 
     WHERE c.user_id = $1 
     GROUP BY c.id`, 
    [userId]
  );
  return result.rows;
};

const deleteCollection = async (collectionId) => {
  const result = await pool.query(
    'DELETE FROM collections WHERE id = $1 RETURNING *',
    [collectionId]
  );
  return result.rowCount > 0;
};

module.exports = {
  createCollection,
  addRecommendationToCollection,
  removeRecommendationFromCollection,
  getCollectionsByUser,
  deleteCollection,
};
