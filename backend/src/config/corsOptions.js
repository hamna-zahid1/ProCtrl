const allowedOrigins = [
  'http://localhost:3000',
  'https://proctrl.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("CORS check origin:", origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // 🔥 Required to support withCredentials
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
