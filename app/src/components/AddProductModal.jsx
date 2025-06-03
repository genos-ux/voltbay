import React from 'react'
import { useProductStore } from '../store/useProductStore'

const AddProductModal = () => {
    const {addProduct} = useProductStore()
  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box">
        {/* CLOSE BUTTON */}
        <form>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            X
          </button>
        </form>

        {/* MODAL HEADER */}
        <h3 className="font-bold text-xl mb-8">Add New Product</h3>

        <form
          onSubmit={addProduct}
          className="space-y-6"
          
        >
            <div className="grid gap-6">
                {/* PRODUCT NAME INPUT */}
            </div>
        </form>
      </div>
    </dialog>
  );
}

export default AddProductModal
