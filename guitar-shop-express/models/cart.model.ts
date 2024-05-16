
import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database'; // Importing the Sequelize instance
import { allowedNodeEnvironmentFlags } from 'process';

export class Cart extends Model {
  public CartID!: number;  // Non-null assertion to satisfy TypeScript
  public UserID!: number;
  public GuitarID!: number;
  public Quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Cart.init({
  CartID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  UserID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    unique: true
    
  },
  GuitarID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    unique: true
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize, // Passing the sequelize instance here
  tableName: 'Carts',
  modelName: 'Cart' // Optional, defaults to the name of the class
});

