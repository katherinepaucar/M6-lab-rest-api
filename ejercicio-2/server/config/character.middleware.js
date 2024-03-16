const CharacterCollectionMiddleware = (req, res, next) =>{
    if(req.method === 'POST'){
        req.body = {
            ...req.body,
            image: '/thumbnails/poster.jpg',
        }
    }
    next();
}
module.exports =( req, res, next) =>{
    if(req.path === '/charactersCollection'){
        CharacterCollectionMiddleware(req, res, next);
    }else{
        next();
    }
}