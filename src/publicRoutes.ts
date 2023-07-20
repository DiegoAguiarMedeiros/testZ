import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(200).send("oi");
  } catch (err) {
    return res.status(400).json({
      message: err.message || "Unexpected error.",
    });
  }
});

export default router;
