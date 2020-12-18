export const endpoints = {
  calculator: {
    async sum(a: number, b: number) {
      return a + b;
    },
    async sub(a: number, b: number) {
      return a - b;
    },
    async mul(a: number, b: number) {
      return a * b;
    },
    async div(a: number, b: number) {
      if (b == 0) {
        throw new Error("Division by zero");
      }

      return a / b;
    },
  },
};

export type TServer = typeof endpoints;