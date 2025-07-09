"use client"

import HubspotForm from "react-hubspot-form"

export default function ReportBugsPage() {
  return (
    <section className="container py-12 sm:py-20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Hey!
            </h1>
            <p className="text-lg text-gray-600">
              Looks like you may have found something we need to know about.
            </p>
            <p className="text-lg text-gray-600">
              We appreciate you taking the time to let us know. Please fill out
              the form so we can crush this bug ASAP.
            </p>
            <p className="text-lg text-gray-600">
              Please provide as much information as possible so we can stop this
              bug quickly! Things to ask yourself when filling out this form:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              <li>Where did you run into the bug?</li>
              <li>What happened? (Summarize the bug for us)</li>
              <li>Any specifics you think we should know?</li>
            </ul>
          </div>
          <div>
            <HubspotForm
              portalId="6439070"
              formId="b7c3bd65-0da1-41a9-80ef-42151ae772c9"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
