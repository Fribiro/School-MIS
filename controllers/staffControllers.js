const db = require("../config/db.config");

module.exports = {
  async getAllStaff(req, res) {
    try {
      let sql = "SELECT * FROM parents";
      let query = db.query(sql, async (err, results) => {
        if (err) throw err;
        else {
          res.send(results);
        }
      });
    } catch (error) {
      next(error);
    }
  },
  async getStaff(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async createStaff(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async updateStaff(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async deleteStaff(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
};
