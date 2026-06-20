import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!);

async function fetchProducts() {
  try {
    const productsList = await stripe.products.list({ limit: 10 });

    const productsArray = productsList.data;
    return productsArray;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function fetchPrice(productId: string) {
  const prices = await stripe.prices.list({
    product: productId,
    active: true,
  });

  return prices.data[0];
}

export default function useStripe() {
  return { stripe, fetchProducts, fetchPrice };
}
