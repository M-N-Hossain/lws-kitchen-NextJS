Here is the README file for the project:

```markdown
# LWS Kitchen - Food Blog and Recipes

LWS Kitchen is a modern food blog and recipe platform built with Next.js. This platform allows users to explore a variety of recipes, discover new categories, and get inspired for their next culinary adventure. It features custom data integration with `categories.json` and `recipes.json` to showcase recipes and categories dynamically.

## Features

- **Homepage Highlights**:
  - **Super Delicious**: Displays the top 3 highest-rated recipes.
  - **Popular Categories**: Highlights the categories with the most recipes.
  - **Hand-Picked Collection**: Specially curated recipes.
  - **Latest Recipes**: Shows the most recently published recipes.
  
- **Dynamic Navigation**:
  - Clicking on a recipe redirects to the detailed recipe page at `[category]/[recipe]`.
  - Clicking on a category shows all recipes within that category on a dedicated category page.

- **Recipe Details**:
  - Comprehensive recipe information, including title, description, author, cooking time, published date, and rating.
  - A thumbnail image for each recipe and category.
  - Options to share or save recipes.

## Data Structure

The project uses two custom data files:

### `categories.json`
Each category contains:
- `id`: Unique identifier for the category.
- `name`: The name of the category (e.g., "Seafood").
- `image`: Path to the category image.

Example:
```json
{
  "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "name": "Seafood",
  "image": "/category/Seafood.jpg"
}
```

### `recipes.json`
Each recipe includes:
- `title`: Recipe name.
- `description`: A short description of the recipe.
- `rating`: An object containing `rating_count` and `average_rating`.
- `category_id`: ID linking the recipe to its category.
- `thumbnail`: Thumbnail image for the recipe.
- `published_date`: Date the recipe was published.
- `cooking_time`: Time required to prepare the recipe.
- `author`: Name of the author.

Example:
```json
{
  "rating": {
    "rating_count": 32,
    "average_rating": 4.5
  },
  "category_id": "n4o5p6q7-r8s9-t0u1-v2w3-x4y5z6a7b8c9",
  "description": "Delicious vegan recipes for healthy living.",
  "title": "Top Vegan Recipes for Healthy Living",
  "published_date": "2024-09-01",
  "cooking_time": "35 minutes",
  "author": "Mia Cooper",
  "thumbnail": "thumb-6.jpg"
}
```

## Project Structure

The project follows a modular structure:

- `pages/index.js`: Homepage showcasing various sections like Super Delicious, Popular Categories, and Latest Recipes.
- `components/Recipe.js`: Component to render individual recipes.
- `components/Category.js`: Component to render individual categories.
- `pages/[category]/[recipe].js`: Dynamic page to display detailed recipe information.
- `pages/[category].js`: Dynamic page to display all recipes in a specific category.

## Core Code Examples

### Recipe Component
The `Recipe` component dynamically renders recipes and handles navigation:
```jsx
import Link from 'next/link';
import Image from 'next/image';

const Recipe = ({ recipe, getCategory }) => (
  <Link href={`/${getCategory(recipe.category_id)}/${recipe.title}`}>
    <Image
      src={`/assets/thumbs/${recipe.thumbnail}`}
      alt={recipe.title}
      className="recipe-thumbnail"
    />
    <h3>{recipe.title}</h3>
    <p>{recipe.description}</p>
  </Link>
);

export default Recipe;
```

### Category Component
The `Category` component dynamically renders categories:
```jsx
import Link from 'next/link';
import Image from 'next/image';

const Category = ({ category }) => (
  <Link href={`/${category.id}`}>
    <Image
      src={`/assets/categories/${category.image}`}
      alt={category.name}
      className="category-thumbnail"
    />
    <h2>{category.name}</h2>
  </Link>
);

export default Category;
```

## Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lws-kitchen.git
   ```

2. Install dependencies:
   ```bash
   cd lws-kitchen
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Deployment

Deploy the project on platforms like Vercel for a seamless production experience. Simply connect your GitHub repository and follow the platform's instructions.

## Live Demo

Explore the live version of LWS Kitchen: [LWS Kitchen - Live](https://lws-kitchen-next-js.vercel.app/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
```
