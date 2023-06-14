import Link from "next/link"

export default function UseCustomPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="flex flex-col items-center justify-center">Use Custom Hooks</h1>
        <div className="bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-gray-800 text-justify">
            Custom Hooks são funções que permitem encapsular lógicas complexas e reutilizáveis
            em componentes React. Com os Custom Hooks, você pode extrair e compartilhar a lógica
            entre componentes diferentes, tornando o código mais modular e fácil de manter.
            Ao criar um Custom Hook, você pode utilizar outros Hooks existentes, como useState,
            useEffect, useContext, entre outros, para compor a funcionalidade desejada.
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-800">
          <Link href="/">Voltar</Link>
        </button>
      </div>
    </div>
  )
}