'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UpdateProduct(product) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsMutating(true);
    await fetch(`http://localhost:5000/product/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        title: title,
        price: price,
      }),
    });
    setIsMutating(false);
    router.refresh();
    setModal(false);
  }

  return (
    <div>
      <button className="btn btn-info btn-xs" onClick={handleChange}>
        Edit
      </button>
      <input checked={modal} onChange={handleChange} type="checkbox" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Data {product.title}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="w-full text input input-bordered" placeholder="Product Name" />
            </div>
            <div className="form-control">
              <label className="label font-bold">Price</label>
              <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="w-full text input input-bordered" placeholder="Price" />
            </div>
            <div className="modal-action">
              <button className="btn " type="button" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button className="btn-warning" type="submit">
                  Save
                </button>
              ) : (
                <button className="btn loading" type="button">
                  Saving....
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
