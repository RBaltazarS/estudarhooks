import Link from "next/link"

export default function UseRefPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="flex flex-col items-center justify-center">Use Ref</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-gray-800 text-justify">
            O "useRef" é um hook do React que permite criar uma referência mutável que pode ser
            utilizada para armazenar valores ou referenciar elementos do DOM. Ao contrário do
            estado do componente, o `useRef` não causa uma nova renderização quando o valor é
            atualizado. Ele é útil para acessar ou modificar diretamente elementos do DOM, como
            obter o valor de um campo de formulário ou alterar o foco de um elemento.
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-800">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </div>
  )
}