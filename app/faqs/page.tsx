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
  {
    question: "How often can I access my funds from Onesto?",
    answer: `<p>You can make multiple advances per day at any time you like – subject to your wages available amount.</p>
<p>&nbsp;</p>
<p><em>Note: Each wage advance to your nominated bank account costs you $5 including GST. Giftcards purchased with Wages will not cost any fee.</em></p>
<p>&nbsp;</p>
<p>To locate your Wages Available, just log on to your Onesto application and drag the page downwards:</p>
<p>&nbsp;</p>
<p>Your Wages Available will be shown on the header</p>
<p>&nbsp;</p>
<p>Your Wages Already Accessed will be below your Wages Available</p>
<p><em>*Your Wages Available will be updated based on your outstanding amounts with oNesto and is reset on your pay date.</em></p>`,
  },
  {
    question: "How is my Daily Wage Calculated?",
    answer: `<p><strong>How is my Daily Wage Calculated?</strong></p>
<p>&nbsp;</p>
<p>oNesto integrates with the payroll systems of your employer to pull your earnings and attendance historical data.</p>
<p>&nbsp;</p>
<p>oNesto uses your payroll information to make wages available to you based on a complex algorithm that is proprietary and takes into account risk, employment type, pay frequency and past period net pays amongst other variables.</p>
<p>&nbsp;</p>
<p>oNesto&nbsp;will only make a portion of your earned but unpaid wages available with a maximum available limit*</p>
<p>&nbsp;</p>
<p><strong>A day after your Period End Date,&nbsp;</strong>your hours and days accessible will be reset to reflect the transition into the new period.</p>
<p>&nbsp;</p>
<p><strong>A day after your Payment Date,&nbsp;</strong>oNesto will be expecting repayment of wages advanced by you from your payroll and based on the repayment of amounts outstanding your account will be enabled.</p>
<p>&nbsp;</p>
<p>Frequency of earning updates is contingent on the type of integration deployed ***</p>
<p>&nbsp;</p>
<div data-block="true" data-editor="954vl" data-offset-key="1lut7-0-0">&nbsp;<em>Note: Please note the calculation is not a representation of your actual wages.</em></div>
<p>&nbsp;</p>
<p>HELPFUL TIPS:</p>
<p>&nbsp;</p>
<p>Avoid relying on oNesto for large sums of payments the day after pay date.</p>
<p>&nbsp;</p>
<p>Do not use oNesto to buy products/services that you cannot afford on your typical pay.</p>
<p>&nbsp;</p>
<p>Practice safe budgeting</p>
<p>&nbsp;</p>
<p>* Be aware that your Payroll Provider/Employer may implement a different limit based on their agreement with oNesto Australia.</p>
<p>&nbsp;</p>
<p>**This predicted amount will be available to you given your employer/payroll provider has settled their due amounts with oNesto</p>
<p>&nbsp;</p>
<p>***API integrations allow for real-time earning data updates. Flat File exchanges allow for periodic earning data updates</p>
<p>&nbsp;</p>
<p>Please reach out to aussupport@onesto.co for any questions or use the&nbsp;<a href="https://www.onesto.co/" rel="noopener">Live Chat</a></p>`,
  },
  {
    question: "How does the repayment process work?",
    answer: `<p>oNesto&nbsp;Australia does not require you to repay any amount or fees that you advance. Any advances made are paid back by your employer on your pay date or the period after dependent on timing.</p>
<p>Figure 1 shows two separate pay cycles as an example of how this process works.</p>
<p>&nbsp;</p>
<p>How the process works:</p>
<p>&nbsp;</p>
<p>On any date of the pay cycle*, you can make an advance on your available wages as displayed on the oNesto application.</p>
<p>&nbsp;</p>
<p>On your pay day&nbsp;<em>(15th March)&nbsp;</em>your advances are accumulated and deducted from your payslip.</p>
<p>&nbsp;</p>
<p>Advances made from 16th March onward will be processed and deducted on your next pay day (30th March).</p>
<p>&nbsp;</p>
<p>*Pay Cycle will be different depending on your pay frequency (monthly, fortnightly, or daily).</p>`,
  },
  {
    question: "What Is My Available Limit?",
    answer: `<p>oNesto&nbsp;calculates your available wages for a given pay cycle based on factors listed below:</p>
<p>&nbsp;</p>
<p><strong>Wages earned to date</strong>&nbsp;– oNesto will make 50% of your earned wages available to you.</p>
<p>&nbsp;</p>
<p><strong>Wages advanced to date</strong>&nbsp;– oNesto will deduct all previous advances (advance amount + fee) made by you from your available wages</p>
<p>&nbsp;</p>
<p>Wages Available = Available Limit – Balance Due</p>
<p>&nbsp;</p>
<p>Example Given: If your available wages are $1000 and you advanced $200 for a $5 transaction fee then your available wages will show $795 i.e. $1000 – $200 – $5 = $795</p>
<p>&nbsp;</p>
<p><strong>Maximum Available Limit</strong>&nbsp;– oNesto will place a Maximum Available Limit * regardless of your total earnings in consultation with your employer</p>
<p>&nbsp;</p>
<p><strong>Earning Updates&nbsp;</strong>��� oNesto uses real time/flat file exchange procedures to pull your earnings data daily/real-time**</p>
<p>&nbsp;</p>
<p><strong>Overdue Accounts –&nbsp;&nbsp;</strong>oNesto&nbsp;will prevent you from accessing your wages if your payroll provider/employer has not repaid the due amount. ***</p>
<p>&nbsp;</p>
<p>*Be aware that your Payroll Provider/Employer may implement a different limit based on their agreement with oNesto Australia.</p>
<p>&nbsp;</p>
<p>**API integrations allow for real-time earning data updates. Flat File exchanges allow for periodic earning data updates</p>
<p>&nbsp;</p>
<p>***Please allow some time post pay day for repayment information to be updated on our server. Once repayment status is updated you should be able to start advancing.</p>`,
  },
  {
    question: "Why haven’t I received my funds yet?",
    answer: `<p>In most cases, given that fast payments networks (PayID/OSKO) are enabled within your account, you will receive your fund almost instantly. However, some accounts are not ready for fast payments; therefore, the expected time frame for receiving your advance is&nbsp;<strong>24 hours.</strong></p>
<p>&nbsp;</p>
<p>Tips if you have not received your funds immediately:</p>
<p>&nbsp;</p>
<p>Check your wallet details — make sure that you have entered your payment details correctly (i.e. Bank Name, BSB number, Account number, PayID number)</p>
<p>&nbsp;</p>
<p>Check with your bank if you have any holds, limits, or blocks associated with your account.</p>
<p>&nbsp;</p>
<p>Taking into consideration that sometimes delays may occur if you have not received your funds within the expected time frame:</p>
<p>&nbsp;</p>
<ol>
<li>Check your email inbox and junk mail/spam folder in case we have sent you a message that your request failed.</li>
</ol>
<p>&nbsp;</p>
<ol>
<li>If we have not reached out to you, please contact us by Live-Chat or Email at aussupport@oNesto.com.au.</li>
</ol>`,
  },
  {
    question: "How to add and use loyalty cards in Onesto?",
    answer: `<h3>How to add Loyalty Cards? (Step by Step)</h3>
<p>&nbsp;</p>
<p><strong>Step 1:&nbsp;</strong>Click&nbsp;<strong>Wallet&nbsp;</strong>on the navigation menu, at the bottom of the screen.</p>
<p>&nbsp;</p>
<p><strong>Step 2:</strong>&nbsp;Click&nbsp;<strong>Loyalty Cards&nbsp;</strong>and select the&nbsp;<strong>+&nbsp;</strong>Icon to add a loyalty card</p>
<p>&nbsp;</p>
<p><em>Note: You can choose to scan the physical loyalty card or you can enter it manually.</em></p>
<p>&nbsp;</p>
<p><strong>Step 3:&nbsp;</strong>Select the Loyalty Card you want to add to oNesto from the list below</p>
<p>&nbsp;</p>
<p><em>Note: Please ensure you select the correct retailer to successfully link it to your shopping page.</em></p>
<p>&nbsp;</p>
<p><strong>Step 4:&nbsp;</strong>Scan the barcode of your loyalty card as shown below and click&nbsp;<strong>Confirm</strong></p>
<p>&nbsp;</p>
<p><em>Note: You can also choose to enter the card number manually if you do not have the physical card available.</em></p>
<p>&nbsp;</p>
<p>Once confirmed you will get the below screen and will be automatically linked to the retailer for all future Shopping purchases at that retailer.</p>
<p>&nbsp;</p>
<h3>How to use Loyalty Cards when shopping?</h3>
<p>&nbsp;</p>
<p>If you have added a loyalty card successfully, the barcode will be available on the Shopping page for the related retailer. For instance, if you add a&nbsp;<strong>Woolworths Everyday Rewards&nbsp;</strong>loyalty card then it will be available on your Shopping page when you select&nbsp;<strong>Woolworths, BWS, BigW, or Caltex Woolworths</strong>.</p>
<p>&nbsp;</p>
<p>Simply click the barcode to enlarge and scan. Please ensure that you scan your loyalty card first and then enter your exact shopping amount.</p>
<p>&nbsp;</p>
<p>This will ensure that you save the maximum amount when shopping.</p>
<p>&nbsp;</p>
<p>Please reach out to aussupport@onesto.co for any questions or use the&nbsp;<a href="https://www.onesto.co/" rel="noopener">Live Chat</a></p>`,
  },
  {
    question: "How does Onesto Shop work?",
    answer: `<p>Onesto has partnered with over 80+major Australian retailers to offer you cashback of up to 10% when you shop with Onesto.</p>
<p>&nbsp;</p>
<p>Each time you make a purchase at an Onesto retailer, simply select the retailer, enter the total amount of your purchase, scan the barcode at the checkout, enter the pin and you’re done! <strong>Your cash savings are then instantly sent to your Shop Account.</strong></p>
<p>&nbsp;</p>
<p>You can deposit funds into your My Shopping Account for purchases&nbsp;<strong>OR&nbsp;</strong>you can use your&nbsp;<strong>earned wages to make a purchase – with no fees!</strong></p>
<p>&nbsp;</p>
<h3>Onesto Shopping (Step by Step)</h3>
<p>&nbsp;</p>
<p><strong>Step 1:</strong>&nbsp;&nbsp;Click&nbsp;<strong>Shop</strong>&nbsp;on the navigation menu, at the bottom of the screen.</p>
<p>&nbsp;</p>
<p><em><strong>Note:</strong>&nbsp;</em><em>This takes you to the Onesto Shop homepage where you can see your Saving Account balance. $500 is a savings goal, so you can track your savings as you shop and watch your Saving Account grow!&nbsp;</em></p>
<p>&nbsp;</p>
<p><strong>Step 2: Click Select Retailer&nbsp;</strong>to view the Onesto retailers and the % of your purchase price that will be sent back in cash to your Savings Account when you make a purchase.</p>
<p>&nbsp;</p>
<div>
<p><strong>Step 3:&nbsp;</strong>Select&nbsp;<strong>retailer</strong>, then&nbsp;<strong>enter the total amount of your purchase</strong>&nbsp;– eg: $250 at Woolworths.</p>
<p>&nbsp;</p>
<p><em>Note: The&nbsp;<strong>Cashback amount&nbsp;</strong>is displayed in real-time when entering the amount as shown below.</em></p>
<p>&nbsp;</p>
<p>Then&nbsp;<strong>select your payment method</strong>&nbsp;– your&nbsp;<strong>Wages Available</strong>&nbsp;or&nbsp;your&nbsp;<strong>My</strong>&nbsp;<strong>Shopping Account</strong>.</p>
<p>&nbsp;</p>
<p>Then click&nbsp;<strong>Continue.</strong></p>
<p>&nbsp;</p>
<p><strong>Step 4:&nbsp;</strong>Read and<strong>&nbsp;</strong>Agree with the&nbsp;<strong>Terms</strong>&nbsp;of the retailer and click&nbsp;<strong>Confirm &amp; Generate Barcode</strong>.</p>
<p>&nbsp;</p>
<p><em>Note: Giftcards are&nbsp;<strong>not refundable</strong>. Please&nbsp;ensure<strong>&nbsp;</strong>you read the terms of the retailer<strong>&nbsp;</strong>and check your purchase amount.</em></p>
<p>&nbsp;</p>
<p><em>Once you confirm your request, wait for the Giftcard to be generated. Please see&nbsp;<strong>Step 5</strong>&nbsp;for redemption details.&nbsp;</em></p>
<p>&nbsp;</p>
<p><strong>Step 5: &nbsp;</strong>Scan the barcode –&nbsp;either you or the cashier&nbsp;– then enter the&nbsp;<strong>PIN&nbsp;</strong>below the barcode.</p>
<p>&nbsp;</p>
<p><strong><em>Note: Please select Giftcard as your payment method when doing self-checkouts.</em></strong></p>
<p>&nbsp;</p>
<p><strong>Step 6:&nbsp;</strong>Click&nbsp;<strong>Confirm You Have Scanned the Barcode</strong>&nbsp;to check your updated<strong>&nbsp;Rainy Day Account balance</strong>.</p>
<p>&nbsp;</p>
<p>Please reach out to aussupport@onesto.co for any questions or use the&nbsp;<a href="https://www.onesto.co/" rel="noopener">Live Chat</a></p>
</div>`,
  },
  {
    question: "Managing Onesto Shopping and Saving Accounts",
    answer: `<p>Upon completion of onboarding and KYC verification, each Onesto customer is provided with full access to the platform and two accounts i.e. <strong>Onesto Shopping Account</strong> and <strong>Onesto Saving Account.</strong></p>
<p>&nbsp;</p>
<p>Both these accounts are linked with two unique PayID (email) which can be used to top-up balances and <strong>Onesto Shopping Account&nbsp;</strong>can be used as an alternate funding source compared to the Wages Available amounts for Onesto Shop.</p>
<p>&nbsp;</p>
<h3>Managing Onesto Shopping and Saving Account</h3>
<p>&nbsp;</p>
<p>Your <strong>Onesto Shopping Account</strong> and <strong>Onesto Saving Account&nbsp;</strong>can be found in the “Wallet” page in your Onesto Application.</p>
<p>&nbsp;</p>
<p><strong>Step 1:</strong>&nbsp;Click on “<strong>Wallet</strong>” in the navigation bar as shown in the image below.</p>
<p>&nbsp;</p>
<p>The&nbsp;<strong>Wallet</strong> page hosts both your Onesto Accounts i.e. <strong>Onesto Shopping Account</strong> and <strong>Onesto Saving Account</strong>.</p>
<p>&nbsp;</p>
<p><strong>Step 2:&nbsp;</strong>Click on “<strong>Shopping Account”&nbsp;</strong>to view details regarding the account i.e.&nbsp;<strong>PayID, BSB and ACCT No.&nbsp;</strong>and<strong>&nbsp;current balance</strong></p>
<p>&nbsp;</p>
<p><em>Note: The balance of both Shopping and Saving Accounts will also be visible on the “Wallet” page.&nbsp;</em></p>
<p>&nbsp;</p>
<h4>Earned Wages to Onesto Shopping/Saving Day Account</h4>
<p>&nbsp;</p>
<p>The <strong>Onesto Shopping Account</strong> is an alternate funding source for purchasing Giftcards in Onesto Application.</p>
<p>&nbsp;</p>
<p>The <strong>Onesto Shopping Account&nbsp;</strong>balance can be increased in one of two ways:</p>
<p>&nbsp;</p>
<p>Transfer your Earned Wages to Onesto Essential Account from the “<strong>Transfers</strong>” page as shown below.</p>
<p>&nbsp;</p>
<p>Enter the&nbsp;<strong>$ amount</strong>&nbsp;you want to transfer.</p>
<p>&nbsp;</p>
<p>Select&nbsp;<strong>Earned Wages&nbsp;</strong>as the payment source and Select&nbsp;<strong>Shopping Account&nbsp;</strong>as the transfer destination.</p>
<p>&nbsp;</p>
<p>Click&nbsp;<strong>“Transfer”&nbsp;</strong>once you have confirmed your inputs.</p>
<p>&nbsp;</p>
<p><em>Note: The current balance of the Shopping Account in the example is $2.56</em></p>
<p>&nbsp;</p>
<p>Click “<strong>Confirm</strong>” once you have read the declaration and agree with the terms of the transfer.</p>
<p>&nbsp;</p>
<p>Once confirmed you will be able to see the&nbsp;<strong>$11.59&nbsp;</strong>transferred in your <strong>Onesto Shopping Account</strong>&nbsp;as shown in the image below.</p>
<p>&nbsp;</p>
<p>Given the initial balance at time of transfer was&nbsp;<strong>$2.56</strong> and therefore after the transfer the Onesto Shopping Account as per the image above is&nbsp;<strong>$14.15&nbsp;</strong>($11.59 + $2.56).</p>
<p>&nbsp;</p>
<p>For instance, if the shopping balance&nbsp;<strong>$400&nbsp;</strong>and I&nbsp;<strong>nominate the Shopping Wallet&nbsp;</strong>as a&nbsp;<strong>funding source&nbsp;</strong>for the purchase at&nbsp;<strong>Woolworths for a Giftcard of $300&nbsp;</strong>the Onesto Essentials balance will be <strong>reduced by $300&nbsp;</strong>and the&nbsp;<strong>balance&nbsp;</strong>after the rendering of barcode will be&nbsp;<strong>$100</strong>.</p>
<p>&nbsp;</p>
<p><em>Note: All Earned Wage transfers to External bank accounts, Shopping and Saving Account will cost a flat fee of $5 including GST.&nbsp;</em></p>
<p>&nbsp;</p>
<p><em>Only when Earned Wages is used to pay for Giftcard purchases there is no cost associated with the t</em><em>ransaction and your cashback is directly deposited to your Saving Account as stated in the retail list page.</em></p>
<p>&nbsp;</p>
<p>To learn more about how to shop please check out this&nbsp;<a href="https://knowledge.onesto.co/en/knowledge/how-does-onesto-shopping-work" rel="noopener"><strong>article</strong></a>.</p>
<p>Please reach out to aussupport@onesto.co for any questions or use the&nbsp;<a href="https://www.onesto.co/" rel="noopener">Live Chat</a></p>`,
  },
  {
    question: "How to top up your Onesto Shopping and Saving Accounts?",
    answer: `<p>Upon completion of onboarding and KYC verification, each Onesto customer is provided with full access to the platform and two accounts i.e. <strong>Onesto Shopping Account</strong> and <strong>Onesto Savings Account.</strong></p>
<p>&nbsp;</p>
<p>Both these accounts are linked with two unique PayID (email) which can be used to top-up balances and <strong>Onesto Shopping Account&nbsp;</strong>can be used as an alternate funding source compared to the Wages Available amounts for Onesto Shop.</p>
<p>&nbsp;</p>
<h4>External Bank Transfer to Onesto Shopping Account</h4>
<p>&nbsp;</p>
<p>Transferring money from your external banking application to your <strong>Onesto Shopping Account</strong>&nbsp;is very simple. Simply follow the steps below:</p>
<p>&nbsp;</p>
<p><strong>Step 1:&nbsp;</strong>Go to your <strong>Onesto Shopping Account in Wallet page&nbsp;</strong>and click&nbsp;<strong>“Copy”&nbsp;</strong>next to your&nbsp;<strong>PayID.&nbsp;</strong>You will receive confirmation of the PayID being copied to your clipboard as shown in the image below.</p>
<p>&nbsp;</p>
<p><strong>Step 2:&nbsp;</strong>Log on to your external banking application and navigate to the Payments/Transfer area where you can pay an Email Address.</p>
<p>&nbsp;</p>
<p>Note: Please check your bank’s instructions on how to pay an email address. Topping up via your&nbsp;<strong>unique PayID&nbsp; is the fastest way to transfer money&nbsp;</strong>to your <strong>Onesto Shopping Account</strong></p>
<p><strong>Step 3:&nbsp;</strong>Please enter the PayID email address that you copied from the Onesto Application <strong>Shopping Account</strong>&nbsp;or&nbsp;<strong>Savings Account&nbsp;</strong>on&nbsp;<strong>Step 1&nbsp;</strong></p>
<p>&nbsp;</p>
<p><em>Note: Once you enter the PayID email address for either Shopping or Savings Account your external banking application should have the PayID logo showing the email being registered with Onesto Australia.&nbsp;</em></p>
<p>&nbsp;</p>
<p><strong>Step 4:&nbsp;</strong>Enter the&nbsp;<strong>$ amount&nbsp;</strong>you want to top your Shopping or Savings Account. The description and reference are optional for using PayID emails to top up your account.</p>
<p>&nbsp;</p>
<p><em>Note: In the example above $100 will be reflected on your Onesto Application under Shopping Account given you have used the PayID email from the Shopping Account on <strong>Wallet&nbsp;</strong>page.</em></p>
<p>&nbsp;</p>
<p><strong>Tips for Topping Up and Knowing your PayIDs</strong></p>
<p>&nbsp;</p>
<p>Your <strong>Onesto Saving Account&nbsp;</strong>PayID will consist of your your Phone number and will end with save</p>
<p>&nbsp;</p>
<p>Name: Ken Matsumoto, Phone: 0424463989</p>
<p>&nbsp;</p>
<p>0424463989save@onesto.co</p>
<p>&nbsp;</p>
<p>Your <strong>Onesto Shopping Account&nbsp;</strong>PayID will consist of your initials, then your Phone number and will end with shop</p>
<p>&nbsp;</p>
<p>Name: Ken Matsumoto, Phone: 0424463989</p>
<p>&nbsp;</p>
<p>0424463989shop@onesto.co</p>
<p>&nbsp;</p>
<p>PayID emails is the fastest way to top up your&nbsp;<strong>Shopping</strong>&nbsp;or&nbsp;<strong>Saving Account</strong></p>
<p>&nbsp;</p>
<p>Only your&nbsp;<strong>Shopping Account</strong>&nbsp;and&nbsp;<strong>Earned Wages</strong>&nbsp;can be used to purchase giftcards</p>
<p>&nbsp;</p>
<p>Your Saving Account is your primary account where all cashback amounts are deposited.&nbsp;<strong>Please note you cannot use Saving Account to shop in Onesto</strong></p>
<p>To learn more about how to shop please check out this&nbsp;<a href="https://knowledge.onesto.co/en/knowledge/how-does-onesto-shopping-work" rel="noopener"><strong>article</strong></a>.</p>
<p>Please reach out to aussupport@onesto.co for any questions or use the&nbsp;<a href="https://www.onesto.co/" rel="noopener">Live Chat</a></p>`,
  },
  {
    question: "ANZ - How to transfer to Onesto PayID",
    answer: `<p><strong>Step 1</strong> Go into Onesto App &gt; Wallet &gt; Onesto Accounts &gt; Select Shopping Account</p>
<p>&nbsp;</p>
<p>Copy the PayID &gt; You can see the copy button to the right.</p>
<p>&nbsp;</p>
<p><strong>Step 2</strong>&nbsp;Log into your ANZ account and select Pay &gt; Click on the “+” icon on the top right corner &gt; Select Email</p>
<p>&nbsp;</p>
<p><strong>Step 3</strong> Paste the email address in and that should allow you to then transfer directly to your Onesto shopping account and then click “Continue”.</p>
<p>&nbsp;</p>
<p>You can save the Onesto PayID email address to your phone contacts, so you do not have to copy from Onesto app again. If you do so, just click on “Select from Phone Contacts” and look for the Onesto email added to your phone contacts.</p>
<p>&nbsp;</p>
<p><strong>Step 4&nbsp;</strong>Fill in the Amount to transfer and then click “Pay” to finalize the transfer.</p>
<p>&nbsp;</p>
<p><strong>Note:</strong> If you have an offset account (No PayID), you can add the same Onesto account with BSB and Account Number + Reference from the Onesto screen, it’s under where you got your PayID.</p>`,
  },
  {
    question: "NAB - How to transfer to Onesto PayID",
    answer: `<p><strong>Step 1</strong> Go into Onesto App &gt; Wallet &gt; Onesto Accounts &gt; Select Shopping Account</p>
<p>&nbsp;</p>
<p>Copy the PayID &gt; You can see the copy button to the right.</p>
<p>&nbsp;</p>
<p><strong>Step 2&nbsp;</strong>Log into your NAB account and select Transfer and Pay &gt; Pay anyone &gt; Select Mobile/PayID &gt; Choose Email Address.</p>
<p>&nbsp;</p>
<p><strong>Step 3&nbsp;</strong>Paste the email address in and that should allow you to then transfer directly to your Onesto shopping account.</p>
<p>&nbsp;</p>
<p>Fill in the Amount to transfer and then click Next to finalize the transfer.</p>
<p>&nbsp;</p>
<p><strong>Note:</strong> If you have an offset account (No PayID), you can add the same Onesto account with BSB and Account Number + Reference from the Onesto screen, it’s under where you got your PayID.</p>`,
  },
  {
    question: "Australian Bank- How to transfer to Onesto PayID",
    answer: `<p><strong>Step 1</strong> Go into Onesto App &gt; Wallet &gt; Onesto Accounts &gt; Select Shopping Account</p>
<p>&nbsp;</p>
<p>Copy the PayID &gt; You can see the copy button to the right.</p>
<p>&nbsp;</p>
<p><strong>Step 2&nbsp;</strong>Log into your Australian Bank account and select Pay &gt; Pay Someone &gt; Select the “+” icon to add a new payee &gt; Choose PayID.</p>
<p>&nbsp;</p>
<p><strong>Step 3&nbsp;</strong>Paste the email address copied from Onesto and that should allow you to then transfer directly to your Onesto shopping account and click the blue arrow to continue.</p>
<p>&nbsp;</p>
<p><strong>Step 4&nbsp;</strong>The app gives you the option to save the PayID for a future payment. Activate the Save function and provide a nickname to the PayID just entered and click the blue arrow.</p>
<p>&nbsp;</p>
<p><strong>Step 5&nbsp;</strong>Fill in the Amount to transfer, a description and then click “Pay Now” to finalize the transfer.</p>
<p>&nbsp;</p>
<p><strong>Note:</strong> If you have an offset account (No PayID), you can add the same Onesto account with BSB and Account Number + Reference from the Onesto screen, it’s under where you got your PayID.</p>`,
  },
  {
    question: "Macquarie Bank- How to transfer to Onesto PayID",
    answer: `<p><strong>Step 1</strong> Go into Onesto App &gt; Wallet &gt; Onesto Accounts &gt; Select Shopping Account</p>
<p>&nbsp;</p>
<p>Copy the PayID &gt; You can see the copy button to the right.</p>
<p>&nbsp;</p>
<p><strong>Step 2&nbsp;</strong>Log into your Macquarie Bank account and select Pay &gt; Make a Payment &gt; Select the account where you are paying from &gt; Click on Add New Payee &gt; Select PayID.</p>
<p>&nbsp;</p>
<p><strong>Step 3&nbsp;</strong>Paste the email address copied from Onesto and that should allow you to then transfer directly to your Onesto shopping account. The app gives you the option to save this PayID for a future payment. Activate the Save function and click on “Use”.</p>
<p>&nbsp;</p>
<p><strong>Step 4&nbsp;</strong>Fill in the Amount to transfer, a description and then click “Next” to finalize the transfer.</p>
<p>&nbsp;</p>
<p><strong>Step 5&nbsp;</strong>Once you click on “Next”, the app will ask you to review the transfer and “Pay”.</p>
<p>&nbsp;</p>
<p>After Clicking on “Pay”, confirm the transfer by entering a code, which will be sent to the registered phone to verify the payment.</p>
<p>&nbsp;</p>
<p><strong>Note:</strong> If you have an offset account (No PayID), you can add the same Onesto account with BSB and Account Number + Reference from the Onesto screen, it’s under where you got your PayID.</p>`,
  },
  {
    question: "Westpac - How to transfer to Onesto PayID",
    answer: `<p><strong>Step 1</strong> Go into Onesto App &gt; Wallet &gt; Onesto Accounts &gt; Select Shopping Account</p>
<p>&nbsp;</p>
<p>Copy the PayID &gt; You can see the copy button to the right.</p>
<p>&nbsp;</p>
<p><strong>Step 2&nbsp;</strong>Log into your Westpac account and select Pay &gt; Add &gt; Select Other PayID &gt; Choose Email PayID.</p>
<p>&nbsp;</p>
<p><strong>Step 3&nbsp;</strong>Paste the email address in and that should allow you to then transfer directly to your Onesto shopping account and click “Next”.</p>
<p>&nbsp;</p>
<p><strong>Step 4&nbsp;</strong>Provide a name to the PayID just entered, so the Westpac app will remember it for a later transfer and click “Next”.</p>
<p>&nbsp;</p>
<p><strong>Step 5&nbsp;</strong>Fill in the Amount to transfer and then click “Pay” to finalize the transfer.</p>
<p>&nbsp;</p>
<p><strong>Note:</strong> If you have an offset account (No PayID), you can add the same Onesto account with BSB and Account Number + Reference from the Onesto screen, it’s under where you got your PayID.</p>`,
  },
  {
    question: "Commonwealth Bank - How to transfer to Onesto PayID",
    answer: `<p><strong>Step 1</strong> Go into Onesto App &gt; Wallet &gt; Onesto Accounts &gt; Select Shopping Account</p>
<p>&nbsp;</p>
<p>Copy the PayID &gt; You can see the copy button to the right.</p>
<p>&nbsp;</p>
<p><strong>Step 2&nbsp;</strong>Log into your CWB account and select Pay &gt; Pay Someone &gt; Click on the “+” icon on the top right corner &gt; Select More &gt; Finally select Email Address</p>
<p>&nbsp;</p>
<p><strong>Step 3&nbsp;</strong>Paste the email address in and that should allow you to then transfer directly to your Onesto shopping account and then click Next.</p>
<p>&nbsp;</p>
<p><strong>Step 4&nbsp;</strong>Once CWB validates that the input email is a PayID registered, click on “ok”, fill in the Amount to transfer and then click “Next” to finalize the transfer.</p>
<p>&nbsp;</p>
<p><strong>Note:</strong> If you have an offset account (No PayID), you can add the same Onesto account with BSB and Account Number + Reference from the Onesto screen, it’s under where you got your PayID.</p>`,
  },
  {
    question: "Why would I want to implement with Onesto?",
    answer: `<p>Employee retention, Employee productivity loss due to financial stress, helping your employees avoid payday loans, and helping your employees take charge of their cash-flow are just a few of the reasons to use an employee benefits solution like Onesto.</p>`,
  },
  {
    question: "How can I implement Onesto as an employee benefit?",
    answer: `<p>Onesto is incredibly easy to implement with almost no work needed by resources at your business.</p>`,
  },
  {
    question: "How long does it take for Onesto to implementing?",
    answer: `<p>We have partnered with Australia’s largest payroll providers. Implementation with these partners are pre-built and in most instances can take minutes. After the easy implementation, Onesto is completely out of sight and out of mind. We do however provide you with some pretty cool analytics on the use of the service.</p>`,
  },
  {
    question: "What is SISU and how to use it?",
    answer: `<p>SISU is an application developed by Onesto to securely transfer confidential information from B2B.</p>
<p>&nbsp;</p>
<p>SISU uses AES256 secure encryption between parties to ensure data is transferred electronically without disruption.</p>
<p>&nbsp;</p>
<p><strong>How to use SISU?</strong></p>
<p>&nbsp;</p>
<p>SISU can be used when transferring information from a client to Onesto and vice-versa.</p>
<p>&nbsp;</p>
<p>The following instructions are for sending secure information via SISU</p>
<p>&nbsp;</p>
<p>Navigate to the supplied link from your Onesto consultant</p>
<p>&nbsp;</p>
<p>Enter your specific secure note in the text field highlighted with “<em>Write your note here…”</em></p>
<p>&nbsp;</p>
<p>Hit “Create Note”</p>
<p>&nbsp;</p>
<p>The first field supplied is the URL you need to send to the recipient.</p>
<p>&nbsp;</p>
<p>The second field is the passphrase</p>
<p>&nbsp;</p>
<p>An Onesto consultant will provide you with the SISU link in the instance where the client wishes to share encrypted information.</p>`,
  },
  {
    question: "How do Onesto Deductions appear on your Employee’s Payslip in Xero?",
    answer: `<h3 aria-level="1">How are deductions posted on Xero by Onesto?</h3>
<p>&nbsp;</p>
<p>Onesto deductions are posted real time to the Employee’s account during the entire time payroll is closed for a pay period.</p>
<p>&nbsp;</p>
<p>Below is an example of a single employee’s PayRun who has in this period taken 2 advances ($100 each) with one at 21st of August and the other at 26th of August. Payroll was opened in draft mode for this employee (amongst others) on 25th of August. Therefore, the employee’s payslip only reflects $100. The rest $100 is pushed to the next pay period.</p>
<p>&nbsp;</p>
<p>Once the pay run is finalised the Xero Onesto Deduction Liability account is updated with aggregated deductions across all employees as a PD Journal entry for employees included in the pay run.</p>
<p>&nbsp;</p>
<p>Your XERO Onesto Deduction Liability Account will only have amounts as per Payroll Expense Journals for successful deduction posts made by Onesto onto your Employee endpoint as discussed in the above example.</p>
<p>&nbsp;</p>
<p style="text-align: left;">Below is an example of the Xero Onesto Deduction Liability account with a XERO client integrated with Onesto . Everytime pay is run, the liability account gets an automatic credit journal entry reflecting total Onesto Advances dispersed and successfully posted by Onesto for the pay period.</p>
<p>Once you pay the due invoice simply reflects the payment as a debit entry to your Xero Onesto Deduction Liability account as shown below when you assign the payment to the Onesto Deduction Account.</p>`,
  },
  {
    question: "Establishing a Connection with XERO",
    answer: `<p>Onesto and XERO need to have an integration to get started. This integration will allow your active employees to use Onesto Wages on Demand and Onesto Shop services amongst other Onesto suite of products/services.</p>
<p>&nbsp;</p>
<p>Once the connection&nbsp;is established&nbsp;and the set-up&nbsp;is&nbsp;completed:</p>
<p>&nbsp;</p>
<p>Your employees will be able to advance their earned but unpaid wages intra-pay cycle to either advance to their nominated bank account or use the unpaid wages to shop at one of Onesto’s 85 major retailers.</p>
<p>&nbsp;</p>
<p>Your employees will also have access to Onesto Uni, a Learning Management System maintained by Onesto to improve your employee’s financial well-being.</p>
<p>&nbsp;</p>
<p>The amount that was advanced will be automatically inserted as a deduction on the employee’s payslip for that pay period. No manual repayment is required from the employee.</p>
<p>&nbsp;</p>
<p>There is no upfront or ongoing cost associated to integrate your Xero account with Onesto .</p>
<h3 aria-level="2"></h3>
<h3 aria-level="2">Signing Up to Onesto (Employer)</h3>
<p>&nbsp;</p>
<p>As the first stage of the integration, you will need to sign up with your company information on Onesto-Xero landing page (<a href="https://connect.onesto.co/" target="_blank" rel="noopener">Get Started with Onesto</a>).</p>
<p>&nbsp;</p>
<p><strong>Step 1: Click “Start” and select “Xero” as the payroll provider&nbsp;</strong></p>
<p>&nbsp;</p>
<p><strong>Step 2: Fill in your Company details</strong></p>
<p>&nbsp;</p>
<p><strong>Step 3: Set up your User credentials for Onesto Partner Admin platform</strong></p>
<p>&nbsp;</p>
<p><em>Note: Please note down the password and email to ensure you have access to your Onesto Partner admin account for managing the integration</em></p>
<p>&nbsp;</p>
<p><strong>Step 4: Verify Email</strong></p>
<p>&nbsp;</p>
<p>After&nbsp;<strong>Step 3</strong>&nbsp;you will need to log in to the email specified in the Sign Up page and verify the email to continue the Partner onboarding process.</p>
<p>&nbsp;</p>
<p><strong>Step 5: Authorising Onesto for your Xero Account</strong></p>
<p>&nbsp;</p>
<p><strong>Accept Onesto’s Privacy Policy and Terms of Service </strong>and proceed to Xero log in where upon logging in a connection will be established between Onesto and your nominated Xero company.</p>
<p>&nbsp;</p>
<p>Select&nbsp;<strong>‘Allow access’&nbsp;</strong>to authorise Onesto application, as shown on&nbsp;<strong>Step 5</strong>. If you have more than one organisation under your XERO account, you have to onboard separately by going to Onesto-Xero landing page (<a href="https://connect.onesto.co/" target="_blank" rel="noopener">Get Started with Onesto</a>) and&nbsp;<strong>completing Step 1 through 5 of this article</strong>.</p>
<p>&nbsp;</p>
<p><strong>Step 6: Set Up time for Integration Meeting or&nbsp;<a href="https://knowledge.onesto.co/en/knowledge/setting-up-liability-and-deduction-in-xero" target="_blank" rel="noopener">Do-It-Yourself</a></strong></p>
<p>&nbsp;</p>
<p>Once completed you will be able to set up a time for the Integration meeting with Onesto as shown below.</p>
<p>&nbsp;</p>
<p>Integration Meeting Pre-requisites</p>
<p>&nbsp;</p>
<p>Please ensure you have access on Xero for Payroll and Setting up of Pay-Items on Xero</p>
<p>&nbsp;</p>
<p><em><strong>Note</strong>: The below process will be conducted via the above meeting request. However, you may choose not to take the meeting, if you feel confident with setting up Onesto Deductions pay item and Onesto Deduction Current Liability account as shown in this <a href="https://knowledge.onesto.co/en/knowledge/setting-up-liability-and-deduction-in-xero" target="_blank" rel="noopener"><strong>article</strong></a>.&nbsp;</em></p>`,
  },
  {
    question: "Setting up Liability and Deduction in Xero",
    answer: `<p><em>Note: The steps below will be covered during the Onesto integration meeting. However, you have the option to complete the steps yourself.&nbsp;</em></p>
<p>&nbsp;</p>
<p>Now that we have established a connection between Onesto and your Xero account, you will need to set up an Onesto liability account and link the account to the Onesto Deduction pay item.</p>
<p>&nbsp;</p>
<p>This will create a link between the advances requested by your employees via Onesto so that the repayment and reconciliation is a seamless process every time you run payroll.</p>
<h4 aria-level="3"></h4>
<h4 aria-level="3">Creating Onesto Liability Account</h4>
<p>&nbsp;</p>
<p>On your Xero organisation account, select&nbsp;<strong>‘Accounting’&nbsp;</strong>and then&nbsp;<strong>‘Chart of Account</strong><strong>s</strong><strong>’</strong></p>
<p>Select&nbsp;<strong>‘Add Account’</strong></p>
<p>A pop-up screen will open. Please fill in the field as seen in the image below. However, you will need to select the&nbsp;<strong>‘Code’&nbsp;</strong>number that is still available on your Xero account.&nbsp;After that, select&nbsp;<strong>‘Save’</strong>.</p>
<p>&nbsp;</p>
<p>Now that you have created the Onesto liability account. You need to link this account with the Onesto Deduction item. To do this, please follow the guide below.</p>
<h4 aria-level="3"></h4>
<h4 aria-level="3">Creating Onesto Deduction Account</h4>
<p>&nbsp;</p>
<p>Before doing this, you need to make sure that you have set up the Onesto to Liability Account.</p>
<p>&nbsp;</p>
<p>On your XERO organisation account, select your company name on the top left corner then select&nbsp;<strong>‘Settings’</strong>.</p>
<p>Now, select&nbsp;<strong>‘Payroll Setting</strong><strong>s</strong><strong>’</strong></p>
<p>Now, select&nbsp;<strong>‘Pay Items’</strong><strong>.</strong></p>
<p>Under ‘<strong>Pay Items’</strong>&nbsp;tab, select&nbsp;‘<strong>Deductions</strong>’ and then&nbsp;<strong>‘Add’,</strong>&nbsp;and then&nbsp;<strong>‘None’</strong>.</p>
<p>A pop-up window will open and please fill in the fields as shown in the image below. Note that the Account number must be exactly the same account number chosen upon creation of the Onesto Deduction Liability Account.</p>
<p>You have now finished creating the Onesto Deduction item, which you can see under the <strong>‘Pay Items’&nbsp;</strong>tab.</p>
<p>&nbsp;</p>
<p>Please reach out to aussupport@onesto.co for any questions or use the&nbsp;<a href="https://www.onesto.co/" rel="noopener">Live Chat</a></p>`,
  },
  {
    question: "What does the Onesto-Xero Integration do?",
    answer: `<p><strong>What does this integration do?</strong></p>
<p>&nbsp;</p>
<p>The User’s (XERO Subscriber/Payroll Admin/Accountant) selected organisation’s information will be sent to Onesto. This information will be stored under a Partner Account on Onesto. A separate Sign Up page for this organisation will be created.</p>
<p>&nbsp;</p>
<p>When an employee signs up, the employee information will be sent to Onesto to validate the employee. In addition, Onesto will use the Payroll Calendar information for the associated employee to set a pay frequency.</p>
<p>&nbsp;</p>
<p>Once the employee completes the onboarding process, Onesto will use Payrun and Payslip endpoints to create Earning records on Onesto which will then be used to show available wages for the Employee.</p>
<p>&nbsp;</p>
<p>Every time an employee requests an advance on Onesto’s application, Onesto will call the existing deduction lines for the employee.</p>
<p>&nbsp;</p>
<p>Once the advance is dispersed to the employee, Onesto will push the deduction amount requested back to the employee along with the data received from the previous step as long as payroll is closed.</p>
<p>&nbsp;</p>
<p>Onesto only retrieves or updates data on your Xero account based on triggers. This includes when payroll is opened, near pay end date, when repayment is made, when an employee logs in to the application, and when they request an advance. When the triggers take place, the data retrieval and update will happen in real-time.</p>
<p>&nbsp;</p>
<p>Onesto will send error notifications to your Onesto partner account in relation to the Xero + Onesto integration.</p>
<p>&nbsp;</p>
<p><strong>What this integration does not do?</strong></p>
<p>&nbsp;</p>
<p>Onesto does not modify any employee’s personal and earnings information.</p>
<p>&nbsp;</p>
<p>Onesto does not collect payroll information of employees that have not completed the onboarding process with Onesto.</p>
<p>&nbsp;</p>
<p>Onesto does not pull employee information without employee consent.</p>`,
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
