import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getExecutable
} from "./controller.ts";

const router = new Router();

router
  .get("/exe", getExecutable)

export default router;
