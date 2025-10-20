"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import BlogForm from "@/components/BlogForm";
import { toast, Toaster } from "react-hot-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface BlogFormData {
  title: string;
  content: string;
  thumbnail?: string;
  tags: string[];
  category: string;
  isFeatured: boolean;
}

const EditBlogPage = () => {
  const router = useRouter();
  const params = useParams();
  const blogId = params?.id as string;

  const [blog, setBlog] = useState<BlogFormData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch existing blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get<{ data: BlogFormData }>(
          `https://portfolio-backend-production.up.railway.app/api/blogs/${blogId}`
        );

        setBlog({
          title: data.data.title,
          content: data.data.content || "",
          thumbnail: data.data.thumbnail || "",
          tags: data.data.tags || [],
          category: data.data.category || "",
          isFeatured: data.data.isFeatured || false,
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to load blog details.");
      } finally {
        setLoading(false);
      }
    };

    if (blogId) fetchBlog();
  }, [blogId]);

  // Handle blog update
  const handleUpdate = async (data: BlogFormData) => {
    try {
      await axios.put(
        `https://portfolio-backend-production.up.railway.app/api/blogs/${blogId}`,
        data
      );
      toast.success("Blog updated successfully!");
      router.push("/dashboard/blog");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update blog.");
    }
  };

  // Loading and error states
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-base sm:text-lg">Loading blog details...</p>
      </div>
    );

  if (!blog)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-base sm:text-lg">
          Blog not found or failed to load.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
      <Toaster position="top-right" />

      <Card className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center sm:text-left">
            Edit Blog
          </CardTitle>
        </CardHeader>

        <CardContent>
          <BlogForm
            initialData={blog}
            onSubmit={handleUpdate}
            buttonText="Update Blog"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBlogPage;
