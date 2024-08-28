import { getCategories } from "@/db/API";
import List from "./List";

const Categories = async () => {
  const categories = await getCategories();
  console.log("categories===>", categories);

  return (
    <div className="container">
      <List data={categories} />
    </div>
  );
};

export default Categories;
