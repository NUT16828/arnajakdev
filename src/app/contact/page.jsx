import Form from "../components/Form"

function contactPage() {
  return (
    <div className="flex flex-col h-dvh flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <div className="flex items-center justify-center py-1"></div>
      <div className="flex items-center justify-center h-dvh">
        <Form />
      </div>
      <div className="flex items-center justify-center bg-gradient-to-r from-amber-50 to-amber-50 py-3"></div>
    </div>
  )
}

export default contactPage
