import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Todo extends Model {
  public id!: number;
  public title!: string;
  public completed!: boolean;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    sequelize,
    tableName: "todos",
  }
);

export default Todo;
