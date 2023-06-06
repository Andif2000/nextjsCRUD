'use client'
import { useState, SyntheticEvent } from 'react'
import type { Brand } from '@prisma/client'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type Product = {
  id: number
  title: string
  price: number
  brandId: number
}

const UpdateProduct = ({
  brands,
  product,
}: {
  brands: Brand[]
  product: Product
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [brand, setBrand] = useState(product.brandId)

  const router = useRouter()

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault()
    await axios.patch(`/api/product/${product.id}`, {
      title: title,
      price: Number(price),
      brandId: Number(brand),
    })
    router.refresh()
    setIsOpen(false)
  }

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Edit
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-large">Update {product.title}</h3>
          <form onSubmit={handleUpdate}>
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
                  setPrice(Number(e.target.value))
                }}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Product Brand</label>
              <select
                value={brand}
                onChange={(e) => {
                  setBrand(Number(e.target.value))
                }}
                className="select select-bordered"
              >
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct
