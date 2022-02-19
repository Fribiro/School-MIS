const db = require("../config/db.config");

module.exports = {
  async getStudents(req, res) {
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
  async getStudent(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async createStudent(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async updateStudent(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
  async deleteStudent(req, res) {
    try {
      res.json(s);
    } catch (error) {
      next(error);
    }
  },
};
