'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsMutating(true);
    await fetch('http://localhost:5000/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        title: title,
        price: price,
      }),
    });
    setIsMutating(false);
    setTitle('');
    setPrice('');
    router.refresh();
    setModal(false);
  }

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Add New
      </button>
      <input checked={modal} onChange={handleChange} type="checkbox" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add product</h3>
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
