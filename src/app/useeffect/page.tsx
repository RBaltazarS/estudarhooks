import Link from "next/link"

export default function UseEffectPage() {

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="flex flex-col items-center justify-center">Use Effect</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-gray-800 text-justify">
            O "useEffect" é um hook do React que permite executar código em momentos específicos
            do ciclo de vida do componente funcional. Quando você passa uma função como argumento
            para o `useEffect`, essa função é executada após o componente ser montado. Você também
            pode retornar uma função de limpeza para cancelar qualquer efeito quando o componente
            for desmontado. O array de dependências vazio ("[]") indica que o efeito só deve ser
            executado uma vez, assim que o componente for montado.
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-800">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </div>
  )
}

