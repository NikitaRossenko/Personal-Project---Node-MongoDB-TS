// import { Request, Response } from "express";
// import { CartModel } from "../../models/cartModel";
// import { UserModel } from "../../models/userModel";
// export const addItemToCart = async (req: Request, res: Response) => {
//   const { productId, quantity } = req.body;
//   const userId = req.user._id; // assuming authenticated user
//   try {
//     let user = await UserModel.findById(userId).populate('cart');
//     if (!user.cart) {
//       const cart = await CartModel.create({ user: userId });
//       user.cart = cart;
//       await user.save();
//       user = await UserModel.findById(userId).populate('cart');
//     }
//     const cartItemIndex = user.cart.items.findIndex(item => item.productId.equals(productId));
//     if (cartItemIndex > -1) {
//       user.cart.items[cartItemIndex].quantity += quantity;
//     } else {
//       user.cart.items.push({ productId, quantity });
//     }
//     await user.cart.save();
//     res.json(user.cart);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
