import { Router } from 'express';

const router = Router();
import { getInventory, addItem, deleteItem, editItem, getItem } from '../controllers/inventoryController.js';

router.get('/', getInventory);
router.post('/', addItem);
router.delete('/:id', deleteItem);
router.put('/:id', editItem);
router.get('/:id', getItem);

export default router;