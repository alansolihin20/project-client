'use client';
import React from 'react';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';

const DetailProduct = (product) => {
  const [modal, setModal] = useState(false);

  //   const router = useRouter();

  function handleChange() {
    setModal(!modal);
  }

  //   async function handleDelete(productId) {
  //     setIsMutating(true);
  //     await fetch(`http://localhost:5000/product/${productId}`, {
  //       method: 'DELETE',
  //     });
  //     setIsMutating(false);

  //     router.refresh();
  //     setModal(false);
  //   }

  return (
    <div>
      <button className="btn btn-succes btn-xs" onClick={handleChange}>
        Details
      </button>
      <input checked={modal} onChange={handleChange} type="checkbox" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Detail Of {product.title}?</h3>
          <p className=" mt-3">Name Product : {product.title}</p>
          <p className="mt-2">Price : {product.price}</p>
          <div className="modal-action">
            <button className="btn " type="button" onClick={handleChange}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
