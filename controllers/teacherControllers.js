const db = require("../config/db.config");

module.exports = {
  async getTeachers(req, res) {
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
  async getTeacher(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async createTeacher(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async updateTeacher(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async deleteTeacher(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
};
