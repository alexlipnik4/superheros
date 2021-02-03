const express = require('express');
const superHerosRouter = express.Router();
const fetch = require("node-fetch");

const searches = [];
const api = 'https://superheroapi.com/api/10221208984991820';

superHerosRouter.get('/getData/:superHeroName/:type', async (req, res) => {
    if(!searches.includes(req.params.superHeroName)){
        searches.push(req.params.superHeroName)
    }

    try{
        const response = await fetch(`${api}/search/${req.params.superHeroName}`);
        const superHeroData = await response.json();
        const dataArray = [];
        
        if(req.params.type === 'all') {
            return res.send(JSON.stringify(superHeroData))
        } 
        superHeroData.results.forEach(data => {
            dataArray.push(data[req.params.type])
        })

        return res.send(JSON.stringify(dataArray));
    } catch (e) {
        console.log(e);
        return res.send({status: 500, massage: e});
    }
})

superHerosRouter.get('/getSearches', (req, res) => {
    return res.send(JSON.stringify(searches))
})

module.exports = superHerosRouter;
