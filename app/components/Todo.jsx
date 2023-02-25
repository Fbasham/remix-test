function Todo({props}) {
  return (
    <div className="flex flex-col border rounded">
        <p className="capitalize">{props.title}</p>
        <p className={`${props.completed ? 'text-green-700' : 'text-red-700'}`}>status: {props.completed ? 'completed' : 'in progress'}</p>
    </div>
  )
}

export default Todo