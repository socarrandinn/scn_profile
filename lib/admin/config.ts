const config = {
  env: {
    resendToken: process.env.NEXT_PUBLIC_RESEND_API_KEY!,
    emailFrom: process.env.NEXT_PUBLIC_EMAIL_FROM!,
    emailAdmin: process.env.NEXT_PUBLIC_EMAIL_ADMIN!,
  },
};

export default config;
