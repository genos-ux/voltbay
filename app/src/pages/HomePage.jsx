import React, { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { PlusCircleIcon, RefreshCwIcon } from 'lucide-react';

function HomePage() {
  const {products, loading, error, fetchProducts} = useProductStore();

  useEffect(() => {
    fetchProducts()
  },[fetchProducts])

  return (
    <main className=' mx-auto px-4 py-8 max-w-6xl'>

      <div className="flex justify-between items-center mb-8">
        <button className='btn btn-primary'>
          <PlusCircleIcon className='size-5 mr-2'/>
          Add Product
        </button>
        <button className='btn btn-ghost btn-circle' onClick={fetchProducts}>
          <RefreshCwIcon className='size-5' />
        </button>
      </div>


    </main>
  )
}

export default HomePage
