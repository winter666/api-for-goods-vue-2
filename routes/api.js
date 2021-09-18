const {Router} = require('express')
const router = Router()

const Good = require('../models/good');


/**
 * @GET goods
 */
 router.get('/goods/list', async (req, res) => {
    const goodM = new Good;
    let goods = await goodM.getData();
    res.send(goods);
})


/**
 * @GET goods relationship
 */
router.get('/goods/names', async (req, res) => {
    const goodM = new Good;
    let goods = await goodM.getNames();
    res.send(goods);
})

module.exports = router;