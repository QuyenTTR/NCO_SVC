import Item from '../models/Item.js';
import { mongoosesToObject } from '../../util/mongoose.js';

class ItemsController {
    index(req, res, next) {
        Item.find({})
            .then(items => {
                res.render('items', { items : mongoosesToObject(items) });
            })
            .catch(next);
    }
}

export default new ItemsController();
