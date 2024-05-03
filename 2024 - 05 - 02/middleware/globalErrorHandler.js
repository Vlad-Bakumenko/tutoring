export function errorHandler(err,req,res,next) {
    res.status(err.status || 400).send({
        error:{
            message:err.message,
            status:err.status
        }
    })
}