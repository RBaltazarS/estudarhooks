import Link from "next/link"

export default function UseCallbackPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="flex flex-col items-center justify-center">Use Callback</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-gray-800 text-justify">
            O "useCallback" é um hook do React que permite memoizar uma função. Ele é útil para
            evitar a criação de novas funções em cada renderização de um componente, especialmente
            quando essa função é passada como prop para componentes filhos. Ao envolver uma função
            com o `useCallback`, o React irá memoizá-la e retornar a mesma instância sempre que
            as dependências fornecidas permanecerem iguais.
          </p>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </div>
  )
}