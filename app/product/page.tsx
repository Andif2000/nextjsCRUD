import { PrismaClient } from '@prisma/client'
import AddProduct from './addProduct'
const prisma = new PrismaClient()

const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      brandId: true,
      brand: true,
    },
  })
  return res
}

const getBrands = async () => {
  const res = await prisma.brand.findMany()
  return res
}

const Product = async () => {
  const [products, brands] = await Promise.all([getProducts(), getBrands()])

  return (
    <div>
      <div className="mb-2">
        <AddProduct brands={brands} />
      </div>
      <table className="table w-full">
        <thead>
          <tr className="bg-zinc-300 text-black">
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products, index) => (
            <tr key={products.id}>
              <td>{index + 1}</td>
              <td>{products.title}</td>
              <td>{products.price}</td>
              <td>{products.brand.name}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Product
