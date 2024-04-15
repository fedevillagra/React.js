import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {categoryId ? `${categoryId}` : (
            <>
              Explore Our Best Products
            </>
          )}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <ItemList/>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;
