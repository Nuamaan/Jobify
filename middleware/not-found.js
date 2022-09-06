const notFoundMiddleware = (req,res) => {
    // console.log('insde not found middleware.')
    res.status(404).send('Route does not exist')
    // next()
} 

export default notFoundMiddleware