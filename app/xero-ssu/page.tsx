import Redirect from "@/components/redirect"

export default function Page() {
  return <Redirect to="https://login.xero.com/identity/connect/authorize?response_type=code&client_id=E394E97553384C52B61D2668A4C7A9CB&redirect_uri=https://connect.onesto.co/payroll&scope=openid%20email%20profile%20accounting.settings.read&state=12345" />
}
