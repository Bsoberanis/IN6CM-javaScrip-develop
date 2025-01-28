import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    window:15 * 60 * 1000, // 15 minutos
    max: 100
});

export default limiter;