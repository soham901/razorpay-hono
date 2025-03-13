import { Hono } from "hono";

import { items } from "../data";
import { HomePage } from "../components/HomePage";

const router = new Hono();

router.get("/", async (c) => {
  return c.html(<HomePage items={items} />);
});

export default router;
