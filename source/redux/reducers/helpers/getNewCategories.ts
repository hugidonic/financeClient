import { CategoryType } from "../../reduxTypes";

const getNewCategories = (
  newChoosenCategory: CategoryType,
  categories: CategoryType[]
) => {
  let itemIdx = categories.findIndex(
    (cat) => cat.name == newChoosenCategory.name
  );
	
  // if (itemIdx > 7) {
    return [
      categories[itemIdx],
      ...categories.slice(1, itemIdx),
      ...categories.slice(itemIdx + 1),
    ];
  // } else {
  //   return categories
  // }
};

export default getNewCategories;
