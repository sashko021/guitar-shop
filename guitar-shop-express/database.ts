import { Sequelize } from "sequelize";
import { User } from "./models/users.model";
export const sequelize = new Sequelize({
    
       
        username: 'root',     
        password: '1234',     
        database: 'guitar_db',   
        host: 'localhost',     
        dialect: 'mysql',
          port: 3307  
        
  });

  async function testConnection() {   
    try {     
          await sequelize.authenticate();
         await sequelize.sync({force: false})
          console.log('Database connected succefully');
    } catch (error) {
          //ensure you created the database 
          //check database credentials
          console.error('Unable to connect to the database:', error);
       }
    }
    testConnection();