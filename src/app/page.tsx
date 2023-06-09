import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300">
      <h1 className="text-4xl font-bold mb-8 mt-8 items-center justify-center">Hello DEV, Vamos Estudar Hooks!</h1>
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Lista Hooks[EXEMPLOS]</h2>
        <div className="flex flex-col gap-2">
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><Link href="/customhooks">Custom Hooks</Link></button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><Link href="/usecallback">Use Callback</Link></button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><Link href="/usecontext">Use Context</Link></button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><Link href="/usereducer">Use Reducer</Link></button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><Link href="/useref">Use Ref</Link></button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><Link href="/useeffect">Use Effect</Link></button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><Link href="/usememo">Use Memo</Link></button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><Link href="/usestate">Use State</Link></button>
        </div>
      </div>
    </div>

  )
}
