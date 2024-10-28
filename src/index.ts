import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import orderRouter from "./order/routes";
import purchaseRouter from "./purchase/routes";

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.route("/orders", orderRouter);
app.route("/purchase", purchaseRouter);

const port = Number(process.env.PORT) || 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
	fetch: app.fetch,
	port,
});
