"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`py-24 sm:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const faqs = [
  {
    question: "What is Onesto?",
    answer: "Onesto is an application that helps you improve your financial fitness.",
  },
  {
    question: "Who can use Onesto?",
    answer: "Onesto works for Australian residents who are part of our payroll network. Not sure if that’s you? Just ask your HR department, or contact us.",
  },
  {
    question: "How much does Onesto cost for me?",
    answer: "Onesto is absolutely free with no hidden cost (only Early wage access is flat rate transaction fee)",
  },
  {
    question: "How do I payback the advance?",
    answer: "Any advances made are paid back by your employer at pay day or the period after dependent on timing.",
  },
  {
    question: "Why do we need your bank info?",
    answer: "We need your banking information so we can pay you! If you have any difficulty locating your banking information, shoot us an email or give us a call, we can help!",
  },
  {
    question: "Is Onesto safe?",
    answer: "We make security a priority at Onesto. Our website uses 256-bit encryption to protect the privacy and security of your information.",
  },
  {
    question: "How long does it take to verify my account?",
    answer: "Most accounts are verified instantly. For others, it may take up to 2 business days. Once verified you will receive an email from Onesto with a link to set up your wallet and make your first advance.",
  },
  {
    question: "What if I created an Advance by accident?",
    answer: "Mistakes happen! Maybe you got excited with how simple the process to access your money was and accidentally clicked submit? No worries. Contact our support staff and we can work on reversing the advance.",
  },
  {
    question: "Why Onesto?",
    answer: "Onesto is free and safe, we are helping employees that need to access their early wages and we also provide free learning courses for the user to manage their financial wellness.",
  },
  {
    question: "What Is My Available Limit?",
    answer: `Onesto calculates your available wages for a given pay cycle based on factors listed below:
    <ul>
      <li><strong>Wages earned to date</strong> – Onesto will make 50% of your earned wages available to you.</li>
      <li><strong>Wages advanced to date</strong> – Onesto will deduct all previous advances (advance amount + fee) made by you from your available wages
        <ul>
          <li>Wages Available = Available Limit – Balance Due</li>
          <li>Example Given: If your available wages are $1000 and you advanced $200 for a $5 transaction fee then your available wages will show $795 i.e. $1000 – $200 – $5 = $795</li>
        </ul>
      </li>
      <li><strong>Maximum Available Limit</strong> – Onesto will place a Maximum Available Limit * regardless of your total earnings in consultation with your employer</li>
      <li><strong>Earning Updates&nbsp;</strong>– Onesto uses real time/flat file exchange procedures to pull your earnings data daily/real-time**</li>
      <li><strong>Overdue Accounts – </strong>Onesto will prevent you from accessing your wages if your payroll provider/employer has not repaid the due amount. ***</li>
    </ul>
    <p>*Be aware that your Payroll Provider/Employer may implement a different limit based on their agreement with Onesto Australia.</p>
    <p>**API integrations allow for real-time earning data updates. Flat File exchanges allow for periodic earning data updates</p>
    <p>***Please allow some time post pay day for repayment information to be updated on our server. Once repayment status is updated you should be able to start advancing.</p>`,
  },
  {
    question: "How do I sign up to Onesto?",
    answer: `Please note Onesto is only offered as a financial service to employees of partnered organisations.

    If you have received correspondence that your employer has partnered with Onesto, you will be able to sign up once you have downloaded the app from:

    <ul>
      <li>Google’s <a href="https://play.google.com/store/apps/details?id=com.onesto" rel="noopener" target="_blank"><strong>Play Store</strong></a></li>
      <li>Apple’s <a href="https://apps.apple.com/au/app/onesto/id1582583482" rel="noopener" target="_blank"><strong>App Store</strong></a></li>
    </ul>

    <strong><em>Note: In order to activate your account you have complete the below steps</em></strong>

    <h3>Step 1: Account Registration</h3>

    <ul>
      <li>Click on “Sign Up” button shown in the image below</li>
    </ul>

    <ul>
      <li>Enter your Name, E-mail and Phone Number</li>
    </ul>

    <ul>
      <li>Verify your email address by entering the code sent from Onesto</li>
    </ul>

    <ul>
      <li>Verify your phone number by entering the SMS code sent from Onesto</li>
    </ul>

    <ul>
      <li>Once you have verified your Email and Phone you will directed to the employer verification page</li>
    </ul>

    <h3>Step 2: Employer Nomination and Verification</h3>

    <p>Enter your details as it appears on your payroll</p>

    <p>Ensure you have nominated the correct employer to speed up verification process</p>

    <p>Ensure you enter your name as it appears on payroll.</p>

    <p><em>If your full name is <strong>David Earl Frederick Gerald Hubert Irvin</strong> please enter <strong>First Name: </strong></em></p>

    <p><em><strong>David </strong>and<strong> Last Name:&nbsp;</strong><strong>Irvin</strong></em></p>

    <p>If Employee ID is one of the required fields please ensure to enter your employee code as it appears on your payslip</p>

    <p><em><strong>Hint:&nbsp;</strong>7 digits code mentioned in your payslip is the correct code and not the code shown in your Employer ID card</em></p>

    <p>Ensure your&nbsp;<strong>Date of Birth</strong>&nbsp;and&nbsp;<strong>Post Code</strong>&nbsp;is entered as it appears on your&nbsp;<strong>payroll/payslip</strong></p>

    <h3>Step 3: Government ID Verification/KYC Check</h3>

    <p>Upload your Photographic Government Issued Identity Document</p>

    <p>Upload a Selfie</p>

    <p>This ensures that only you have access to your account and pay.</p>

    <p><em>-Hint: Make sure the pictures uploaded are clear and visible</em></p>

    <h3>Step 4: Add a Bank Account</h3>

    <ul>
      <li>Add a Bank Account:</li>
    </ul>

    <ul>
      <li>Enter the BSB, ACCT No. and provide a Reference Name</li>
    </ul>

    <p>For further details on how to add a wallet please refer to this <a href="https://knowledge.onesto.co/en/knowledge/how-to-set-up-my-wallet" target="_blank" rel="noopener"><strong>article</strong></a></p>

    <p>Please note we<strong> cannot completely verify your account till you complete the above 4 steps.</strong></p>

    <p>For further information on onboarding and how to use Onesto application please see the <a href="https://knowledge.onesto.co/en/knowledge/getting-started" target="_blank" rel="nofollow noopener noreferrer">Knowledge Base Articles</a>&nbsp;or reach out to us on our&nbsp;<a href="https://www.onesto.co/" target="_blank" rel="nofollow noopener noreferrer">Live Chat</a>.</p>`,
  },
  {
    question: "How to set up my wallet in Onesto?",
    answer: `In order for you to make your first advance, you need to set up the wallet on your Onesto account by following the steps below.

    Please note Onesto will not be able to verify your account until at least one bank account is registered to your account.

    <strong>Step 1: Click on “Pocket” in the navigation pane at the bottom</strong>

    <strong>Step 2: Click on “External Bank Accounts” and click the “+ Icon” to&nbsp;</strong><strong>add a new Bank Account</strong>

    <strong>Step 3: Adding BSB &amp; Account Number&nbsp;</strong>

    <p>Please fill out your BSB (Must be a 6 digit number)</p>

    <p>Please fill out your Account Number as specified by your Bank</p>

    <p>Please fill out your My reference for the Bank Account (This is the name the wallet will be displayed as in the Wages section)</p>

    <p>Then select if this is your account or someone else’s to colour code the bank accordingly on Pockets page</p>
    <p>Then select&nbsp;<strong><em>Confirm</em></strong></p>
    <p>You can set up multiple bank accounts in your Pockets.</p>

    <p><em>Please note: The pockets page also hosts your two Onesto Accounts i.e. Onesto Essentials Wallet and Onesto Rainy Day Wallet.&nbsp;</em></p>

    <p>Please reach out to aussupport@onesto.co for any questions or use the&nbsp;<a href="https://www.onesto.co/" rel="noopener" target="_blank">Live Chat</a></p>`,
  },
  {
    question: "Managing your Onesto Account",
    answer: `<h3>Account Management</h3>

    <p>To make changes to your <strong>Onesto account</strong>&nbsp;please&nbsp;<strong>click&nbsp;</strong>the&nbsp;<strong>hamburger menu&nbsp;</strong>icon on the&nbsp;<strong>top right corner</strong> of the Onesto application. Clicking this will bring out the the menu as per the image below:</p>

    <p>Click on&nbsp;<strong>Settings&nbsp;</strong>to navigate to&nbsp;<strong>Account Security&nbsp;</strong>(Account Detail changes)<strong>&nbsp;</strong>or&nbsp;<strong>About&nbsp;</strong>(T&amp;Cs and Version Checks) as shown below:</p>

    <h3>Account Security</h3>

    <p>Under Account Security you will be able to:</p>

    <p>Change your <em>Phone Number&nbsp;</em>linked with your Onesto Account</p>

    <p>Enter your&nbsp;<strong>new phone number</strong></p>

    <h4>Change your&nbsp;<em>Email Address&nbsp;</em>linked with your Onesto Account</h4>

    <p>Enter your&nbsp;<strong>new/preferred email address</strong></p>

    <p><em>Please note to enter the email address correctly as incorrect/erroneous inputs could mean someone else will be able to access your account.</em></p>

    <h4>Change your&nbsp;<em>Password&nbsp;</em>for your Onesto Account</h4>

    <p>Please&nbsp;<strong>enter your current password</strong></p>

    <p>Then&nbsp;<strong>enter a new password twice to confirm</strong></p>

    <p>Please note if you do not remember your original password please log out and select forgot password in the log-in page of the Onesto application as shown below:</p>

    <h4>Cancel your oNesto Account</h4>

    <p>Select “<strong>Yes, I do</strong>” if you want to cancel your account.</p>

    <p>Please note this is permanent and an oNesto support specialist will walk you through the cancellation process.</p>

    <h3>About</h3>

    <p>Under&nbsp;<strong>Version Check&nbsp;</strong>you will be able to:</p>

    <p>Check the current version of the oNesto application that you are running.</p>

    <p>Clicking on Update Check will check for any updates required to run the latest version of the oNesto appplication.</p>

    <p><em>Note: oNesto believes in continuous innovation and development, therefore be sure to check if you are running the latest version of the application.</em></p>

    <p>Under&nbsp;<strong>Terms and Conditions&nbsp;</strong>and&nbsp;<strong>Privacy Policy&nbsp;</strong>you will be able to:</p>

    <p>View the Terms of Service for the oNesto Application and its services</p>

    <p>View the Privacy Policy as it relates to your data on the oNesto Application and how it is protected, secured and used to provide you with a unique experience.</p>`,
  },
  {
    question: "How do I contact Onesto support?",
    answer: `Onesto&nbsp;Australia offers support via:

    <a href="https://www.onesto.co/" rel="noopener" target="_blank">Live Chat</a>

    Email: aussupport@onesto.co

    Onesto&nbsp;Australia does not offer support via phone.`,
  },
  {
    question: "How to get my ID verified?",
    answer: `<strong>How to get my ID verified?</strong>

    <p>Once you have downloaded the app, signed up, and nominated your employer, you will have to submit your ID for verification.</p>

    <p>At this stage, please upload or take a photo of your license.</p>

    <p>You will also be required to take a selfie, to ensure your selfie matches your ID.</p>

    <p>To have your ID verified as quickly as possible, please ensure that you have uploaded either one of the listed documents:</p>

    <p>Driver’s license</p>

    <p>Passport</p>

    <p>Proof of age</p>

    <p>Please ensure that you take a clear picture of the ID, to ensure no delays occur. If an image is not readable by our support team oNesto will request you upload another photo.</p>

    <p>Please ensure at least one bank account has been registered in the oNesto app.</p>

    <p>* In the event that your ID is not verified immediately, you will be notified, and this process can take 12 to 24 hours. You will receive an email after the ID verification has been successful.</p>

    <p><em>Pay Me Now Please Pty Ltd (oNesto Australia) is an AUSTRAC registered entity, which legally allows oNesto to collect, record, and verify your ID against the government databases for compliance with KYC AML/CTF Legislation as per AML/CTF Act 2006.</em></p>`,
  },
];

const FAQsPage = () => {
  return (
    <div className="bg-transparent text-gray-800">
      {/* Hero Section */}
      <Section className="bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-3xl mx-auto text-xl text-gray-600"
          >
            Find answers to common questions about Onesto and how it can help you improve your financial fitness.
          </motion.p>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <details className="group bg-white p-6 rounded-lg shadow-md cursor-pointer border border-gray-100">
                  <summary className="flex justify-between items-center font-semibold text-lg text-gray-900">
                    {faq.question}
                    <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-90 text-primary" />
                  </summary>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-4 text-gray-700 overflow-hidden"
                  >
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </motion.div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FAQsPage;
