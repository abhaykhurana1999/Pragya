const Sequelize=require('sequelize')

const db=new Sequelize({

    dialect:'mysql',
    database:'Pragya',
    username:'admin',
    password:'Abhay11@ak'
})

const Questions =db.define('questions',{

    id:{  type:Sequelize.DataTypes.INTEGER,
          allowNull:false,
          primaryKey:true,
          autoIncrement:true
       },

    body:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false
    }
})


const Answers =db.define('answers',{

    id:{  type:Sequelize.DataTypes.INTEGER,
          allowNull:false,
          primaryKey:true,
          autoIncrement:true
       },

    body:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false
    }
})

module.exports={

      db,Questions,Answers
}