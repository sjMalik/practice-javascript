const errorHandler = (err, req, res, next)=> {
    if(res.headerSent){
        return next(err);
    }

    res.status(500).json({
        success: false,
        error: err.message | 'Server Error',
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
    })
}