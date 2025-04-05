// Define the type for a TreeNode with a generic type K for the key and V for the value
type TreeNode = {
  name: string;                // Node has a `name` property
  subcategories?: TreeNode[]; // Optional `subcategories` for recursive structure
};

// Recursive function to process the tree and print each node with indentation
function recursiveCategory(
  list: TreeNode[], index = 0, level = 0, result: string[] = []
): string[] {
  if (index >= list.length) {
    return result; // No more siblings
  }

  const category = list[index];
  const indent = '   '.repeat(level); // Indentation for levels

  result.push(`${indent}${category.name}`); // Add the current category's name

  // Process subcategories if they exist
  if (category.subcategories) {
    recursiveCategory(category.subcategories, 0, level + 1, result); // Increase level for subcategories
  }

  // Process next sibling
  return recursiveCategory(list, index + 1, level, result);
}

export default recursiveCategory;