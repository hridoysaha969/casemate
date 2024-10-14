/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// export const GET = handleAuth();

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
  methods: ["GET", "POST", "HEAD"], // Allowed methods
  origin: "*", // Adjust the origin based on your requirements (set '*' to allow all)
});

// Helper function to wait for a middleware to execute before continuing
function runMiddleware(
  req: Request,
  res: Response,
  fn: Function
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req, { setHeader: () => {} }, (result: any) => {
      // Use a dummy `res` here
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export const GET = async (req: Request, res: Response) => {
  await runMiddleware(req, res, cors); // Apply CORS middleware
  return handleAuth()(req, res); // Proceed with authentication handling
};
