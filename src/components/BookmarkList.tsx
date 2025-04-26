
import React from 'react';
import { Bookmark } from '@/types/bookmark';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface BookmarkListProps {
  bookmarks: Bookmark[];
  deleteBookmark: (id: string) => void;
}

const BookmarkList: React.FC<BookmarkListProps> = ({ bookmarks, deleteBookmark }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bookmarks.map((bookmark) => (
        <Card key={bookmark.id}>
          <CardHeader>
            <CardTitle>
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {bookmark.title}
              </a>
            </CardTitle>
            <CardDescription>
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:underline truncate"
              >
                {bookmark.url}
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Category: {bookmark.category}</p>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="destructive" size="sm" onClick={() => deleteBookmark(bookmark.id)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
       {bookmarks.length === 0 && (
        <div className="col-span-full text-center text-muted-foreground">
          No bookmarks found. Add some!
        </div>
      )}
    </div>
  );
};

export default BookmarkList;
