import Link from "next/link"

export default function UseReducerPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="flex flex-col items-center justify-center">Use Reducer</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-gray-800 text-justify">
            O "useReducer" é um hook do React que permite gerenciar o estado de um componente
            utilizando o conceito de Reducer. Ele é útil quando o estado do componente é mais
            complexo e envolve múltiplos valores ou quando as atualizações do estado dependem do
            estado anterior. O `useReducer` recebe um reducer e um estado inicial, e retorna o
            estado atual e uma função dispatch para disparar as ações que modificam o estado.
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-800">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </div>
  )
}