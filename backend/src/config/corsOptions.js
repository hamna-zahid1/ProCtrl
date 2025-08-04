// const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];
const allowedOrigins = [
  'http://localhost:3000', 
  'https://proctrl.vercel.app'
];

const corsOptions = {
  origin: (origin, callback) => {
    console.log("Incoming origin:", origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;