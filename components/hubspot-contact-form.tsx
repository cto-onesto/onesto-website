"use client"

import HubspotForm from "react-hubspot-form"

export function HubspotContactForm() {
  return (
    <HubspotForm
      portalId="6439070"
      formId="b7c3bd65-0da1-41a9-80ef-42151ae772c9"
      onSubmit={() => console.log("Submit!")}
      onReady={(form) => console.log("Form ready!")}
      loading={<div>Loading...</div>}
    />
  )
}
