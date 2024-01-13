// Endpoint for querying the fibonacci numbers

import {Request, Response} from 'express';
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
