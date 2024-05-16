
import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database'; // Importing the Sequelize instance

export class User extends Model {
  public userID!: number;  // Non-null assertion to satisfy TypeScript
  public email!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  userID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  sequelize, // Passing the sequelize instance here
  tableName: 'Users',
  modelName: 'User' // Optional, defaults to the name of the class
});

