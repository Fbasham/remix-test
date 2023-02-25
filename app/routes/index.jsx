import { useLoaderData } from "@remix-run/react"
import Todo from "../components/Todo"

export default function Index() {
  let data = useLoaderData()
  return <>
    <h1 className="text-xl">Remix Test</h1>
    <form action="" className="flex flex-col max-w-md mx-auto gap-2">
      <label htmlFor="count">Get Todos</label>
      <input type='number' id='count' name='count' min={0} max={20} className='border outline rounded'></input>
      <button className="rounded bg-indigo-800 text-white w-1/4 mx-auto hover:bg-indigo-900">submit</button>
    </form>
    <ul className="max-w-md mx-auto">{data.map(e=><li key={e.id}><Todo props={e}/></li>)}</ul>
  </>
}

export async function loader({request}){
  let count = new URL(request.url).searchParams.get('count')
  let data = await (await fetch(`https://jsonplaceholder.typicode.com/users/1/todos?_limit=${count}`)).json()
  return data
}