"use client";

import BlogForm from "@/components/BlogForm";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

const NewBlogPage = () => {
  const router = useRouter();

  const handleCreateBlog = (data: {
    title: string;
    content: string;
    thumbnail?: string;
    tags: string[];
    category: string;
    isFeatured: boolean;
  }) => {
    console.log("New blog created:", data);
    toast.success("Blog created successfully!");
    router.push("/dashboard/blog");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
      <Toaster position="top-right" />
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-5 sm:p-8 lg:p-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Create New Blog
        </h1>

        <div className="w-full">
          <BlogForm
            onSaved={handleCreateBlog}
            initial={{
              title: "",
              content: "",
              thumbnail: "",
              tags: [],
              category: "",
              isFeatured: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewBlogPage;
