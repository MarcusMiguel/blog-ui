type DraftsProps = {
  drafts: string[]
  edit: (path: string, toEdit: string) => Promise<void>
  remove: (toRemove: string) => Promise<void>
}

export default function Drafts(props : DraftsProps) {
  const { drafts, edit, remove } = props

  if (drafts.length === 0) return <></>

  return (
    <ul className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label className="block text-gray-700 font-bold mb-5 text-center"><code>%draft</code>s</label>
      { drafts.map((bind: string, i) => (
        <li key={i} className="flex mb-3 text-xs">
          <div className="text-left flex-1 my-auto truncate">
            <code>{bind}</code>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white p-2 rounded mr-3 disabled:opacity-50"
              onClick={() => edit('/draft', bind)}
            >
              <code>%edit</code>
            </button>
            <button 
              className="bg-red-500 hover:bg-red-700 text-white p-2 rounded disabled:opacity-50"
              onClick={() => remove(bind)}
            >
              <code>%delete</code>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}