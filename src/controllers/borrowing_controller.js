const mongoose = require('mongoose');
const model = require('../models');
const ResponseHelper = require('../utils/response');

class BorrowingController {
  static async getAll(req, res) {
    try {

      const filter = {}
      
      console.log(req.query);

      if(req.query.status) {
        filter.status = req.query.status
      }
      
      const items = await model.Borrowing.find(filter).populate('bookId', 'title description').populate('borrowerId', 'membershipId name');
      return ResponseHelper.success(res, items, 'suskes mengambil data peminjaman');
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const items = await model.Borrowing.findById(req.params.id);
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async create(req, res) {
    const session = await mongoose.startSession()

    try {

      session.startTransaction()

      const book = await model.Book.findById(req.body.bookId);
      const borrower = await model.Borrower.findById(req.body.borrowerId);

      if(!book || !borrower) {
        return ResponseHelper.error(res, 'Book or Borrower Not Found!', 400);
      }

      const createdData = await model.Borrowing.create(req.body);

      borrower.borrowHistory.push(createdData._id)

      await borrower.save();

      await session.commitTransaction()

      return ResponseHelper.success(res, createdData, 201);
    } catch (error) {
    await session.abortTransaction()
      return ResponseHelper.error(res, error.message);
    } finally {
    await session.endSession()
    }
  }

  static async update(req, res) {
    try {

      if(!req.params.id) {
        return ResponseHelper.error(res, 'ID not provided!', 400);
      }

      const items = await model.Borrowing.findByIdAndUpdate(req.params.id, req.body);
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

      const items = await model.Borrowing.findByIdAndDelete(req.params.id);
      return ResponseHelper.success(res, items);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }

  static async return(req, res) {
    try {

      if(!req.body.id) {
        return ResponseHelper.error(res, 'ID not provided!', 400);
      }

      const item = await model.Borrowing.findById(req.body.id);

      item.status = 'RETURNED'
      item.returnDate = new Date()

      await item.save()

      return ResponseHelper.success(res, item);
    } catch (error) {
      return ResponseHelper.error(res, error.message);
    }
  }
}

module.exports = BorrowingController