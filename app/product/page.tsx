import { PrismaClient } from '@prisma/client'
import AddProduct from './addProduct'
import DeleteProduct from './deleteProduct'
import UpdateProduct from './updateProduct'
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
            <th>Products Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.brand.name}</td>
              <td className="flex flex-row justify-center space-x-2">
                <UpdateProduct brands={brands} product={product} />
                <DeleteProduct product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Product
