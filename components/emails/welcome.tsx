import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface WelcomeEmailProps {
  email?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const WelcomeEmail = ({ email }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Onesto's One Member Benefits</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo.png`}
          width="48"
          height="48"
          alt="Onesto"
        />
        <Text style={title}>
          Welcome to <strong>One Member Benefits</strong>
        </Text>
        <Section style={section}>
          <Text style={text}>
            Hi <strong>{email}</strong>,
          </Text>
          <Text style={text}>
            Thank you for purchasing the annual package of One Member Benefits.
            You can download our app from the App Store or Google Play Store to
            get started.
          </Text>
          <div style={buttonContainer}>
            <Button
              style={button}
              href="https://apps.apple.com/au/app/onesto/id1607653339"
            >
              <Img
                src={`${baseUrl}/appstore.png`}
                width="120"
                height="40"
                alt="App Store"
              />
            </Button>
            <Button
              style={button}
              href="https://play.google.com/store/apps/details?id=co.onesto.app"
            >
              <Img
                src={`${baseUrl}/gplay.png`}
                width="120"
                height="40"
                alt="Google Play"
              />
            </Button>
          </div>
        </Section>
        <Text style={text}>
          Once you have downloaded the app, you will need to create a new
          account using this same email address. When prompted, please select
          'Annual Subscription' from the drop-down menu and enter the same date
          of birth and postcode you provided previously.
        </Text>
        <Text style={text}>
          You will be required to upload an ID. This is to ensure we comply with
          KYC/AML laws as we will be creating new PAYID-enabled digital bank
          accounts for you.
        </Text>
        <Text style={text}>
          For more information, please contact our support team at{" "}
          <a href="mailto:aussupport@onesto.co">aussupport@onesto.co</a>.
        </Text>
        <Text style={text}>
          This is an automated email, please do not respond to this message.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
}

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,20,20,0.05)",
  padding: "20px",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
}

const title = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  marginBottom: "20px",
}

const section = {
  marginBottom: "20px",
}

const text = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#333",
}

const buttonContainer = {
  display: "flex",
  gap: "10px",
  marginTop: "20px",
}

const button = {
  textDecoration: "none",
}
