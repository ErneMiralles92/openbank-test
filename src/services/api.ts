const PRUEBA_KO = 'pruebaKO123'

type Response = { status: number }
const RESPONSE_OK = { status: 200 }
const RESPONSE_KO = { status: 401 }

const submitForm = (pass: string): Promise<Response> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)),
      3000
    )
  )

export { submitForm }
