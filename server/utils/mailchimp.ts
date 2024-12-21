import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY, // Store in .env file
  server: process.env.MAILCHIMP_SERVER_PREFIX, // E.g., 'us21'
});

export default mailchimp;
