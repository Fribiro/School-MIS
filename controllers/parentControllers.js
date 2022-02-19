const db = require("../config/db.config");

module.exports = {
  async getParents(req, res) {
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
  async getParent(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async createParent(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async updateParent(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async deleteParent(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
};
