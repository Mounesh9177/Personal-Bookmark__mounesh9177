
import React from 'react';
import { Button } from '@/components/ui/button';

interface BookmarkFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BookmarkFilter: React.FC<BookmarkFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default BookmarkFilter;
