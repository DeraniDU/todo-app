import { Sequelize } from "sequelize";

const sequelize = new Sequelize("todo_db", "root", "Git@123@@", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;