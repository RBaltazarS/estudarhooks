import Link from "next/link"

export default function UseStatePage() {

  return (
    <div className="bg-slate-400">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="flex flex-col items-center justify-center">Use Effect</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-gray-800 text-justify">
            O "useState" é um hook do React que permite adicionar estado a um componente funcional.
            Ele retorna um array com duas posições: o estado atual e uma função para atualizá-lo.
            Utilize o estado para armazenar valores que podem mudar ao longo do tempo, como dados
            recebidos de uma API, estado de formulários ou informações de interação do usuário.
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-800">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </div>
  )
}

