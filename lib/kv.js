import { VercelKV } from '@vercel/kv';

const kv = new VercelKV({
  token: process.env.VERCEL_KV_TOKEN,
});

export default kv;
