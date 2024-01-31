import Navbar from '@/components/Navbar/Navbar';
import AddProduct from './addProduct';
import DeleteProduct from './deleteProduct';
import UpdateProduct from './updateProduct';
import DetailProduct from './detailProduct';

async function getProduct() {
  const res = await fetch('http://localhost:5000/product', { cache: 'no-store' });
  const data = await res.json(); // Note the addition of 'await' here
  // Logging the data for debugging purposes
  return data;
}

export default async function ProductList() {
  try {
    const products = await getProduct();
    return (
      <div className=" ">
        <Navbar />
        <div className="py-10 px-10">
          <div className="py-2 ">
            <AddProduct />
          </div>
          <table className="table table-xl">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td className="flex flex-row gap-2">
                    <DeleteProduct {...product} />
                    <UpdateProduct {...product} />
                    <DetailProduct {...product} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching product data:', error);
    return (
      <div className="bg-red">
        <p>Error fetching product data</p>
      </div>
    );
  }
}
