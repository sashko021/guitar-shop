
import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../database'; // Importing the Sequelize instance


export class Guitar extends Model {
  public GuitarID!: number;  // Non-null assertion to satisfy TypeScript
  public Brand!: string;
  public Model!: string;
  public Type!: string;
  public Price!: number;
  public Quantity!: number;
  public Description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Guitar.init({
  GuitarID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  Brand: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Model: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  Price: {
    type: DataTypes.DECIMAL,
    
  },
  Qunatity: {
    type:DataTypes.INTEGER
  },
  Description:{
    type: DataTypes.STRING
  }

}, {
  sequelize, 
  tableName: 'Guitars',
  modelName: 'Guitar' 
});

