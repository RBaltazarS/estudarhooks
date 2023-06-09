import Link from "next/link"

export default function UseMemoPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="flex flex-col items-center justify-center">Use Memo</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-gray-800 text-justify">
            O "useMemo" é um hook do React que permite memorizar o resultado de uma função
            computacionalmente custosa. Ele aceita uma função de cálculo e uma lista de
            dependências. O resultado do cálculo será armazenado em cache e só será recalculado
            se alguma das dependências mudar. Isso pode melhorar o desempenho, evitando
            cálculos desnecessários em cada renderização do componente.
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </div>
  )
}