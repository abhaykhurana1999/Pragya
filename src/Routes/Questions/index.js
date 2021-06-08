const {Router}=require('express')
const{showAll,createNewQ}=require('../../controllers/Questions')

const route=Router()

route.get('/', async (req,res)=>{
    const que=await showAll()
    res.status(200).send(que)
})

route.post('/',async(req,res)=>{
    const {id,body}=req.body
    if((!id)||(!body))
    {
        res.status(400).send({ error:'Need Userid Title and body to create the Answer.'})
    }
    const que=await createNewQ(id,body)

    res.status(201).send(que)
})

module.exports={QueRoute:route}