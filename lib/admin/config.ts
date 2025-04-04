const config = {
  env: {
    resendToken: process.env.NEXT_PUBLIC_RESEND_API_KEY!,
    emailFrom: process.env.NEXT_PUBLIC_EMAIL_FROM!,
    emailAdmin: process.env.NEXT_PUBLIC_EMAIL_ADMIN!,

    //metadata
    appUrl: process.env.NEXT_PUBLIC_APP_URL! || "http://localhost:3000",
  },
};

export default config;
