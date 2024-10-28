import { Hono } from "hono";
import { createHmac } from "node:crypto";
import { getById } from "../data";
import { razorpay } from "../configs/razorpay";

import { PurchasePage } from "../components/PurchasePage";

const router = new Hono();

router
  .get("/:id", async (c) => {
    const { id } = c.req.param();
    const item = getById(id as string);

    if (!item) {
      return c.text("Item not found", 404);
    }

    return c.html(<PurchasePage item={item} id={id} />);
  })
  .post("/:id", async (c) => {
    const { id } = c.req.param();

    if (!id) {
      return c.text("Id is required", 400);
    }

    const item = getById(id as string);

    if (!item) {
      return c.text("Item not found", 404);
    }

    const options = {
      amount: item.amount * 100,
      currency: item.currency,
      receipt: `Receipt_${item.id}`,
    };

    try {
      const order = await razorpay.orders.create(options);
      return c.json(order);
    } catch (err) {
      console.log("Error", err);

      return c.text("Something went wrong", 500);
    }
  })
  .post("/verify", async (c) => {
    const body = await c.req.parseBody();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET as string;

    const hmac = createHmac("sha256", secret);

    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const generatedSignature = hmac.digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return c.json({ message: "Invalid signature sent!" }, 400);
    }

    return c.json({ message: "Payment verified" });
  });

export default router;
