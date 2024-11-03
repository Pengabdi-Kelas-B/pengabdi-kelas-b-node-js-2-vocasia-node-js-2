const model = require('../models');
const ResponseHelper = require('../utils/response');

class BookController {
  static async getAll(req, res) {
    try {
      const items = await model.Book.find().populate('categoryId', 'name description').populate('authorId', 'name bio');
      return ResponseHelper.success(res, items, 'suskes mengambil data buku');
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const items = await model.Book.findById(req.params.id).populate('categoryId', 'name description').populate('authorId', 'name bio');
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async create(req, res) {
    try {
      const items = await model.Book.create(req.body)
      return ResponseHelper.success(res, items, 201);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async update(req, res) {
    try {

      if(!req.params.id) {
        return ResponseHelper.error(res, 'ID not provided!', 400);
      }

      const items = await model.Book.findByIdAndUpdate(req.params.id, req.body);
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async delete(req, res) {
    try {

      if(!req.params.id) {
        return ResponseHelper.error(res, 'ID not provided!', 400);
      }

      const items = await model.Book.findByIdAndDelete(req.params.id);
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async uploadImage(req, res) {
    try {

      if(!req.body.id) {
        return ResponseHelper.error(res, 'ID not provided!', 400);
      }

      const item = await model.Book.findById(req.body.id);
      
      item.coverUrl = req.body.coverUrl

      await item.save()

      return ResponseHelper.success(res, item);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }
}

module.exports = BookController