import Link from "next/link"

//Icons.
import { FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center  bg-gray-400 pb-4 pt-4">
      <div className="flex gap-2 mt-1 mb-2 items-center justify-center w-full ">
        <Link target="_blank" href="https://wa.me/5571992781219?text=Ol%C3%A1%2C+Quero+criar+um+site%2C+poderia+me+ajudar%3F...">
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><FaWhatsapp /></button>
        </Link>
        <Link target="_blank" href="https://github.com/RBaltazarS">
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><FaGithub /></button>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/rodolpho-baltazar-47000b38/">
          <button className="px-4 py-2 bg-gray-700 text-white rounded"><FaLinkedin /></button>
        </Link>
      </div>
    </footer>
  )
}