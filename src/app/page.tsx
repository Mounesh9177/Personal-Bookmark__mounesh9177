
"use client";

import React, { useState, useEffect } from 'react';
import BookmarkList from '@/components/BookmarkList';
import AddBookmarkForm from '@/components/AddBookmarkForm';
import BookmarkFilter from '@/components/BookmarkFilter';
import ThemeToggle from '@/components/ThemeToggle';
import { Bookmark } from '@/types/bookmark';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Toaster } from '@/components/ui/toaster';

const CATEGORIES = ['All', 'Technology', 'Design', 'Personal', 'Reading'];

export default function Home() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState<Bookmark[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Load bookmarks from localStorage
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    // Save bookmarks to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    handleCategoryChange(selectedCategory); // Apply initial filter
  }, [bookmarks]);

  const addBookmark = (title: string, url: string, category: string) => {
    const newBookmark: Bookmark = {
      id: uuidv4(),
      title,
      url,
      category,
      createdAt: new Date(),
    };
    setBookmarks([...bookmarks, newBookmark]);
  };

  const deleteBookmark = (id: string) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredBookmarks(bookmarks);
    } else {
      setFilteredBookmarks(
        bookmarks.filter((bookmark) => bookmark.category === category)
      );
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Bookmark Butler</CardTitle>
          <ThemeToggle />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4">
            <BookmarkFilter
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Bookmark
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Bookmark</DialogTitle>
                  <DialogDescription>
                    Fill in the details below to save a new bookmark.
                  </DialogDescription>
                </DialogHeader>
                <AddBookmarkForm addBookmark={addBookmark} categories={CATEGORIES.slice(1)}/>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      <BookmarkList bookmarks={filteredBookmarks} deleteBookmark={deleteBookmark} />
      <Toaster />
    </div>
  );
}
