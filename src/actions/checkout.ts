'use server'

import { CartProduct } from '@/providers/cart'
import Stripe from 'stripe'

const createCheckout = async (products: CartProduct[], orderId: string) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  })

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: process.env.SUCCESS_URL,
    cancel_url: process.env.UNSUCCESS_URL,
    metadata: {
      orderId,
    },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: 'brl',
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      }
    }),
  })

  // Return a checkout
  return checkout
}

export default createCheckout
