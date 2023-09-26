const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: "us-east-1" }); // Replace with your AWS region

export const functionHandler = async (event) => {
  const email = event.email; // Get the email address from the event
  const params = {
    EmailAddress: email,
  };

  try {
    await ses.verifyEmailIdentity(params).promise();
    return {
      statusCode: 200,
      body: "Email verification initiated.",
    };
  } catch (error) {
    console.error("Error verifying email address:", error);
    return {
      statusCode: 500,
      body: "Error verifying email address.",
    };
  }
};
