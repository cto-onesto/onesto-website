import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MDPage() {
  const content: string = `
  Thank you for visiting our MyPlayDough Application (‘Application’). This Application is owned and operated by Pay Me Now Please Pty Ltd trading as ‘Onesto Australia’ (ABN 53 631 534 766) (‘Onesto Australia’). By accessing and/or using this Application and related services, you agree to these Application Terms and Conditions, which include our Privacy Policy (available at https://www.onesto.co/privacy-policy/) (Application Terms). You should review our Privacy Policy and these Application Terms carefully and immediately cease using our Application if you do not agree to these Application Terms.

In these Application Terms, ‘us’, ‘we’ and ‘our’ means Onesto Australia and our related bodies corporate.

**1.Registration**

You may need to be a registered member to access our products or certain features of our Application.

When you register and activate your account, you will provide us with personal information such as your name, email address, telephone number or other information collected. You must ensure that this information is accurate and current. We will handle all personal information we collect in accordance with our Privacy Policy https://www.onesto.co/privacy-policy/.

When you register and activate your account, we will provide you with a user name and password. You are responsible for keeping this user name and password secure and are responsible for all use and activity carried out under this user name.

You may not use the Application or accept these Application Terms, if (a) you are not at least 18 years of age; (b) you are not legally capable of entering into binding contracts, or you do not have legal capacity to do so; (c) you are prohibited by law from receiving or using the Onesto Application; (d) you are not an Australian resident; or (e) you do not have a valid and verifiable email address and Australian mobile phone number.

**2\. Collection Notice**

We collect personal information about you in order to provide you with Onesto’s services, including Shop to Save and the provision of our Advanced Wages Service, to respond to your enquiries, and to provide you full access to the Application and for purposes otherwise set out in our Privacy Policy at privacy@onesto.co.

We may disclose that information to third parties that help us deliver our services (including information technology suppliers, communication suppliers and our business partners) or as required by law. If you do not provide this information, we may not be able to provide all of our services or products to you.

Our Privacy Policy explains: (i) how we store and use, and how you may access and correct your personal information; (ii) how you can lodge a complaint regarding the handling of your personal information; and (iii) how we will handle any complaint. If you would like any further information about our privacy policies or practices, please contact us at

Email – privacy@onesto.co

Unit 1/60 Toorak Rd,

South Yarra VIC 3141

By providing your personal information to us, you consent to the collection, use, storage and disclosure of that information as described in the Privacy Policy and these Application Terms.

**3\. Accuracy, completeness and timeliness of information**

The information on our Application is not comprehensive and is intended to provide a summary of the subject matter covered. While we use all reasonable attempts to ensure the accuracy and completeness of the information on our Application, to the extent permitted by law, including the Australian Consumer Law, we make no warranty regarding the information on this Application. You should monitor any changes to the information contained on this Application.

We are not liable to you or anyone else if interference with or damage to your computer systems occurs in connection with the use of this Application or a linked Application. You must take your own precautions to ensure that whatever you select for your use from our Application is free of viruses or anything else (such as worms or Trojan horses) that may interfere with or damage the operations of your computer systems.

We may, from time to time and without notice, change or add to the Application (including the Terms) or the information, products or services described in it. However, we do not undertake to keep the Application updated. We are not liable to you or anyone else if errors occur in the information on the Application or if that information is not up-to-date.

**4\. Purchases**

IN AUSTRALIA, OUR GOODS AND SERVICES COME WITH GUARANTEES THAT CANNOT BE EXCLUDED UNDER THE AUSTRALIAN CONSUMER LAW. NOTHING IN THESE APPLICATION TERMS AND CONDITIONS PURPORTS TO MODIFY OR EXCLUDE THE CONDITIONS, WARRANTIES AND UNDERTAKINGS, AND OTHER LEGAL RIGHTS, UNDER THE AUSTRALIAN COMPETITION AND CONSUMER ACT AND OTHER LAWS. ANY AND ALL OTHER WARRANTIES OR CONDITIONS WHICH ARE NOT GUARANTEED BY THE AUSTRALIAN CONSUMER LAW OR THE COMPETITION AND CONSUMER REGULATION 2010 ARE EXPRESSLY EXCLUDED WHERE PERMITTED, INCLUDING LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES CAUSED BY BREACH OF ANY EXPRESS OR IMPLIED WARRANTY OR CONDITION.

**5\. Linked Sites**

Our Application may contain links to Applications operated by third parties. Those links are provided for convenience and may not remain current or be maintained. Unless expressly stated otherwise, we do not endorse and are not responsible for the content on those linked Applications and have no control over or rights in those linked Applications.

**6\. Intellectual Property Rights**

Unless otherwise indicated, we own or license from third parties all rights, title and interest (including copyright, designs, patents, trademarks and other intellectual property rights) in this Application and in all of the material (including all text, graphics, logos, audio and software) made available on this Application (Content).

Your use of this Application and use of and access to any Content does not grant or transfer any rights, title or interest to you in relation to this Application or the Content. However, we do grant you a licence to access the Application and view the Content on the terms and conditions set out in this Agreement and, where applicable, as expressly authorised by us and/or our third party licensors.

Any reproduction or redistribution of this Application or the Content is prohibited and may result in civil and criminal penalties. In addition, you must not copy the Content to any other server, location or support for publication, reproduction or distribution is expressly prohibited.

All other use, copying or reproduction of this Application, the Content or any part of it is prohibited, except to the extent permitted by law.

**7\. No Commercial Use**

This Application is for your personal, non-commercial use only. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, commercially exploit, create derivative works from, transfer, or sell any Content, software, products or services contained within this Application. You may not use this Application, or any of its Content, to further any commercial purpose, including any advertising or advertising revenue generation activity on your own Application.

**8\. Unacceptable Activity**

You must not do any act that we would deem to be inappropriate, is unlawful or is prohibited by any laws applicable to our Application, including but not limited to:

* *   any act that would constitute a breach of either the privacy (including uploading private or personal information without an individual’s consent) or any other of the legal rights of individuals;
* *   using this Application to defame or libel us, our employees or other individuals;
* *   uploading files that contain viruses that may cause damage to our property or the property of other individuals;
* *   posting or transmitting to this Application any non-authorised material including, but not limited to, material that is, in our opinion, likely to cause annoyance, or which is defamatory, racist, obscene, threatening, pornographic or otherwise or which is detrimental to or in violation of our systems or a third party’s systems or network security.

If we allow you to post any information to our Application, we have the right to take down this information at our sole discretion and without notice.

**9\. Warranties and Disclaimers**

To the maximum extent permitted by law, including the Australian Consumer Law, we make no warranties or representations about this Application or the Content, including but not limited to warranties or representations that they will be complete, accurate or up-to-date, that access will be uninterrupted or error-free or free from viruses, or that this Application will be secure.

We reserve the right to restrict, suspend or terminate without notice your access to this Application, any Content, or any feature of this Application at any time without notice and we will not be responsible for any loss, cost, damage or liability that may arise as a result.

**10\. Liability**

To the maximum extent permitted by law, including the Australian Consumer Law, in no event shall we be liable for any direct and indirect loss, damage or expense – irrespective of the manner in which it occurs – which may be suffered due to your use of our Application and/or the information or materials contained on it, or as a result of the inaccessibility of this Application and/or the fact that certain information or materials contained on it are incorrect, incomplete or not up-to-date.

**11\. Jurisdiction and Governing Law**

Your use of the Application and these Application Terms are governed by the law of Victoria, Australia and you submit to the non-exclusive jurisdiction of the courts exercising jurisdiction in Victoria, Australia.
`;
  return (

    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My PlayDough Educators – Terms and Conditions</h1>
      </header>

      {/* Content */}
      <div className="prose lg:prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
