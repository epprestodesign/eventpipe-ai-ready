/**
 * Type shim for process.env.NODE_ENV.
 * tsup replaces this at build time. TypeScript needs the declaration.
 */
declare const process: {
  env: {
    NODE_ENV: string;
  };
};
