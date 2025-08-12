import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

interface EmailParams {
  to: string;
  subject: string;
  htmlBody: string;
  cc?: string[];
}

// Helper to send subscription form data to Dhruv and cc
interface SubscriptionFormData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  postcode: string;
  phone?: string;
  [key: string]: any;
}

export async function sendSubscriptionFormEmail(formData: SubscriptionFormData) {
  const to = "naduni.jayasundara@onesto.co";
  const cc = ["dhruv.oberoi@onesto.co"];
  const subject = "New Subscription Form Submission";
  // Format form data as HTML table
  const htmlBody = `
    <h2>New Subscription Form Submission</h2>
    <table border="1" cellpadding="5" cellspacing="0">
      ${Object.entries(formData)
        .map(
          ([key, value]) =>
            `<tr><td><strong>${key}</strong></td><td>${value ?? ""}</td></tr>`
        )
        .join("")}
    </table>
  `;

  const params = {
    Source: process.env.SES_FROM_ADDRESS!,
    Destination: {
      ToAddresses: [to],
      CcAddresses: cc,
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Html: {
          Data: htmlBody,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const data = await sesClient.send(command);
    console.log("Subscription form email sent:", data.MessageId);
    return data;
  } catch (error) {
    console.error("Error sending subscription form email:", error);
    throw error;
  }
}

export async function sendEmail({ to, subject, htmlBody }: EmailParams) {
  const params = {
    Source: process.env.SES_FROM_ADDRESS!,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Html: {
          Data: htmlBody,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const data = await sesClient.send(command);
    console.log("Email sent:", data.MessageId);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
