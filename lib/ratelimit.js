import { kv } from '@vercel/kv'
import { Ratelimit } from '@upstash/ratelimit';

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(3, '3600 s'), // 3 requests per hour
});

export default ratelimit;
