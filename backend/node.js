import AWS from 'aws-sdk';
const ses = new AWS.SES({ region: 'us-east-1' });

export const handler = async (event) => {
  const body = JSON.parse(event.body);
  const params = {
    Destination: { ToAddresses: [body.to] },
    Message: {
      Body: { Text: { Data: body.message } },
      Subject: { Data: body.subject },
    },
    Source: "youremail@example.com",
  };
  await ses.sendEmail(params).promise();
  return { statusCode: 200, body: 'Email sent' };
};
  