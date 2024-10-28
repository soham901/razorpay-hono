import { Hono } from "hono";
import { Top } from "./page";
import { items } from "../data";

const router = new Hono();

router.get("/", async (c) => {
  return c.html(<Top items={items} />);
});

export default router;
