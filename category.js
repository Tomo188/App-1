import "./style.scss";
import Category from "../components/components-category.js";

const CategoriesC = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((e) => {
        return <Category key={e.id} category={e} />;
      })}
    </div>
  );
};
export default CategoriesC;
