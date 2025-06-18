import { queryOptions, useQuery } from '@tanstack/react-query';
import { Select } from 'antd';

// type SearchParams = {
//   amount: number;
//   category: number;
//   difficulty: string;
//   type: string;
// };

function categoryQueryOptions() {
  return queryOptions({
    queryKey: ['categories'],
    queryFn: () => {
      return fetchCategories();
    },
    refetchOnWindowFocus: false,
  });
}

export default function TriviaApp() {
  const { data, isFetching } = useQuery(categoryQueryOptions());

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  const handleCategorySelect = (value: string) => {
    console.log('value', value);
  };

  return (
    <div className="text-left">
      <h1>Trivia</h1>
      <h2>Select your trivia options</h2>
      <Select
        showSearch
        style={{ width: 500 }}
        size="large"
        className="mb-2!"
        placeholder="Search to Select"
        fieldNames={{ label: 'name', value: 'id' }}
        optionFilterProp="name"
        filterSort={(optionA, optionB) =>
          (optionA?.name ?? '')
            .toLowerCase()
            .localeCompare((optionB?.name ?? '').toLowerCase())
        }
        onChange={handleCategorySelect}
        options={data.trivia_categories}
      />

      <Select
        style={{ width: 500 }}
        size="large"
        defaultValue="Any Difficulty"
        placeholder="Select Difficulty"
        options={[]}
      />
      {/* {data.trivia_categories.map((category: Category) => {
        return <p key={category.id}>{category.name}</p>;
      })}
      <Button type="primary">Button</Button> */}
    </div>
  );
}

const fetchCategories = async (): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch('https://opentdb.com/api_category.php');

  return await response.json();
};

export type CategoriesResponse = {
  trivia_categories: Category[];
};

export type Category = {
  id: number;
  name: string;
};
