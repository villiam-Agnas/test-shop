import { useState } from "react"

export const AddToShop = () => {

  const [addToShop, setAddToShop] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("")

  return(
    <div className="bg-white">
      <label htmlFor="add-item">what should we add to our store?</label>
      <input
        id="add-item"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Write something..."
      />

      <button onClick={() => setAddToShop([...addToShop, newItem])}>
        Add
      </button>

      {addToShop.map((items) => (
        <p key={items}>{items}</p>
      ))}

    </div>
  )
}