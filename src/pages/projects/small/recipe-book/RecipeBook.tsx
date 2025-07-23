import RecipeBook from '@/components/RecipeBook/RecipeBook';
import RecipeBookProvider from '@/context/RecipeBookContext';

const RecipeBookIndex = () => {
  return (
    <RecipeBookProvider>
      <RecipeBook />
    </RecipeBookProvider>
  );
};

export default RecipeBookIndex;
