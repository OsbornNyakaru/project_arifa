"use client"

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from "@/components/Profile";
import toast from 'react-hot-toast';

const MyProfile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    try {
      setLoading(true);

      router.push(`/update-prompt?id=${post._id}`)
    } catch (error) { 
      toast.error("Failed to update prompt", error);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("This action cannot be undone. Are you sure?");

    if (hasConfirmed) {
      try {
        setLoading(true);
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE'
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        toast.success("Prompt deleted successfully");

        router.refresh();
        setPosts(filteredPosts);
      } catch (error) {
        toast.error("Failed to delete prompt", error);
      } finally{
        setLoading(false);
        setOpen(false);
      }
    }
  }

  return (
    <>
      <Profile 
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default MyProfile