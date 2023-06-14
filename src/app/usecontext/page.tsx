import Link from "next/link"

export default function UseContextPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="flex flex-col items-center justify-center">Use Context</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-gray-800 text-justify">
            O "useContext" é um hook do React que permite acessar um contexto criado com o
            "createContext". O contexto é uma forma de compartilhar dados entre componentes
            sem precisar passar explicitamente como props. Ao utilizar o `useContext`, você
            pode acessar o valor do contexto dentro do componente em qualquer nível da árvore
            de componentes que esteja envolvida pelo `Provider` do contexto.
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-800">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </div>
  )
}