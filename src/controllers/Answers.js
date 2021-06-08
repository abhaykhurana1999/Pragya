const { Answers } = require('../db/models')

async function createNewA(id,body)
{
    const answer= await Answers.create({ id,body})

    return answer
}

async function showAllAnswers(query)
{
    // TODO::HANDLE QUERY PARAMS
    const a= await Answers.findAll()
    return a;
}

 

/*async function task()
{
    console.log( await createNewA(1,'Hello Answers'))
}

task()*/

module.exports={showAllAnswers,createNewA}