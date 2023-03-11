import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const cat = useSelector((state) => state.categories);
  console.log(cat);
  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
      <p>{cat.categories}</p>
    </>
  );
};

export default Categories;
