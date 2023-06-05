'use client'
import { useState, SyntheticEvent } from 'react'
import type { Brand } from '@prisma/client'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')

  const router = useRouter()

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await axios.post('/api/product', {
      title: title,
      price: Number(price),
      brandId: Number(brand),
    })
    setTitle('')
    setPrice('')
    setBrand('')
    router.refresh()
    setIsOpen(false)
  }

  return (
    <div>
      <button className="btn bg-green-500 text-white" onClick={handleModal}>
        Add New
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-large">Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold">Product Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Product Name"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Product Price</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Product Price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Product Brand</label>
              <select
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value)
                }}
                className="select select-bordered"
              >
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
