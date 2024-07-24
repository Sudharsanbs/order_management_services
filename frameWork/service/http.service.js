module.exports=async(res, data)=>{
    res.setHeader('Content-Type', 'application/json')
    res.json({'apiStatus': 200 ,"data":data})
    }
  