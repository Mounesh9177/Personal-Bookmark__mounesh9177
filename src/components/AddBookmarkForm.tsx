
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface AddBookmarkFormProps {
  addBookmark: (title: string, url: string, category: string) => void;
  categories: string[];
}

const AddBookmarkForm: React.FC<AddBookmarkFormProps> = ({ addBookmark, categories }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState(categories[0] || '');
  const { toast } = useToast();

  const isValidUrl = (urlString: string): boolean => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !url || !category) {
       toast({
        title: "Missing fields!",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidUrl(url)) {
       toast({
        title: "Invalid URL!",
        description: "Please enter a valid URL.",
        variant: "destructive",
      });
      return;
    }

    addBookmark(title, url, category);
    setTitle('');
    setUrl('');
    setCategory(categories[0] || ''); // Reset to the first category
     toast({
        title: "Bookmark added!",
        description: "Your bookmark has been saved.",
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Bookmark Title"
          required
        />
      </div>
      <div>
        <Label htmlFor="url">URL</Label>
        <Input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Add Bookmark</Button>
    </form>
  );
};

export default AddBookmarkForm;
