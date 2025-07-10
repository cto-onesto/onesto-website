"use client"

import HubspotForm from "react-hubspot-form"

export function HubspotContactForm() {
  return (
    <HubspotForm
      portalId="6439070"
      formId="f1bd4e93-4778-48b9-a280-b6f739a62919"
      onSubmit={() => console.log("Submit!")}
      onReady={(form) => console.log("Form ready!")}
      loading={<div>Loading...</div>}
    />
  )
}
