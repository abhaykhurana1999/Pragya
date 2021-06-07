const { Questions } = require('../db/models')

async function createNewQ(id,body)
{
    const question= await Questions.create({ id,body})

    return question
}

async function showAll(query)
{
    // TODO::HANDLE QUERY PARAMS
    const q= await Questions.findAll()
    return q;
}

/* Testing 

async function task()
{
    console.log( await createNewQ(1,'Hello questions'))
}

task()*/
