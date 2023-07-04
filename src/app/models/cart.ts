import { CartItem } from './cart-item';
import { Product } from './product';



export class Cart
{
  constructor(public cartItems : CartItem[]){}
  total() :number {
   return this.cartItems.reduce((total,item)=> total+ item.count*item.product.price,0)
  }
}
