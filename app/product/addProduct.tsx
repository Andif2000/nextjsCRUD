'use client'
import { useState } from 'react'
import type { Brand } from '@prisma/client'

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <button className="btn bg-green-500 text-white" onClick={handleModal}>
        Add New
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-large">Add New Product</h3>
          <form>
            <div className="form-control w-full">
              <label className="label font-bold">Product Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Product Name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Product Price</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Product Price"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Product Brand</label>
              <select className="select select-bordered">
                <option value="" disabled>
                  Select a Brand
                </option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              <button type="submit" className="btn bg-sky-700">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
