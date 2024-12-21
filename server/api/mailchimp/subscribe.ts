import mailchimp from "~/server/utils/mailchimp";

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Parse the request body
  const { email, firstName, lastName } = body;

  try {
    const listId = process.env.MAILCHIMP_AUDIENCE_ID; // Store Audience ID in .env
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
      },
    });

    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.response?.body || error.message };
  }
});
