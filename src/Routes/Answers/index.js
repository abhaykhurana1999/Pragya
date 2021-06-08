const {Router}=require('express')

const route=Router()

const {showAllAnswers,createNewA}=require('../../controllers/Answers')

route.get('/', async (req,res)=>{
    const ans=await showAllAnswers()
    res.status(200).send(ans)
})

route.post('/',async(req,res)=>{
    const {id,body}=req.body
    if((!id)||(!body))
    {
        res.status(400).send({ error:'Need Userid Title and body to create the Answer.'})
    }
    const ans=await createNewA(id,body)

    res.status(201).send(ans)
})


module.exports={AnsRoute:route}