import Link from "next/link"

//Icons.

type User = {
  avatar_url: string;
  blog: string;
  location: string;
  bio: string;
}

//Chamada Da API GITHUB.
async function getData(): Promise<User> {
  const res = await fetch("https://api.github.com/users/rbaltazars")
  return res.json()
}

export default async function MainHeader() {

  const user = await getData()


  return (
    <header className="w-full flex flex-col items-center justify-center  bg-gray-400 pb-4 pt-4">
      <div className="flex items-center gap-4   w-full flex-col  justify-center">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-medium text-lg">{user.blog} - <span className="text-white">{user.location}</span></h3>
          <p className="text-gray-600">{user.bio}</p>
        </div>
      </div>
    </header>
  )
}