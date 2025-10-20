"use client";

import BlogForm from "@/components/BlogForm";
import Loading from "@/components/shared/Loading";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

type BlogFormData = {
  title: string;
  content: string;
  thumbnail?: string;
  tags: string[];
  category: string;
  isFeatured: boolean;
};

interface Blog extends BlogFormData {
  id: string;
}

const BlogManagementPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  // get all blog with pagination
  const [page, setPage] = useState(1);

  const axiosPublic = useAxiosPublic();

  const { data: blogs, refetch, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs?page=${page}&limit=4`);
      return res?.data?.data?.data;
    },
  });

  const totalPageArr = Array.from(
    { length: blogs?.meta?.totalPage },
    (_, i) => i + 1
  );

  console.log("blogs ", blogs);

  const handlePage = async (pageNumber) => {
    if (pageNumber < 1 || pageNumber > blogs?.meta?.totalPage) {
      return;
    }
    await setPage(pageNumber);
    refetch();
  };

  // ✅ Create new blog
  const handleCreateBlog = (data: BlogFormData) => {
    setShowForm(false);
  };

  // ✅ Update existing blog
  const handleUpdateBlog = (data: BlogFormData) => {
    setEditingBlog(null);
    setShowForm(false);
  };

  // ✅ Delete blog
  const handleDelete = async (id: string) => {
    const res = await axiosPublic.delete(`/blogs/${id}`, {
      withCredentials: true, // 🔥 send/receive cookies
    });
    console.log("res ", res);
    refetch();
    toast.success("Blog deleted successfully!");
  };

  // ✅ Edit click handler
  const handleEditClick = (blog: Blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Toaster position="top-right" />

      {!showForm ? (
        <>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Blog Management
            </h1>
            <button
              onClick={() => {
                setEditingBlog(null);
                setShowForm(true);
              }}
              className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              <FaPlus className="mr-2" /> New Blog
            </button>
          </div>

          {/* Table / List */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            {blogs?.length > 0 ? (
              <table className="min-w-full text-left border-collapse text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-gray-700">Title</th>
                    <th className="py-3 px-4 text-gray-700 hidden sm:table-cell">
                      Category
                    </th>
                    <th className="py-3 px-4 text-gray-700 hidden md:table-cell">
                      Tags
                    </th>
                    <th className="py-3 px-4 text-gray-700 hidden md:table-cell">
                      Featured
                    </th>
                    <th className="py-3 px-4 text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs?.map((blog) => (
                    <tr
                      key={blog?._id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-4 font-medium">{blog?.title}</td>
                      <td className="py-3 px-4 hidden sm:table-cell">
                        {blog?.category}
                      </td>
                      <td className="py-3 px-4 hidden md:table-cell">
                        {blog?.tags.join(", ")}
                      </td>
                      <td className="py-3 px-4 hidden md:table-cell">
                        {blog?.isFeatured ? "Yes" : "No"}
                      </td>
                      <td className="py-3 px-4 flex items-center gap-3 text-lg">
                        <button
                          onClick={() => handleEditClick(blog)}
                          className="text-blue-600 hover:text-blue-800 transition"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(blog?._id)}
                          className="text-red-600 hover:text-red-800 transition"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-center py-6">No blogs found.</p>
            )}
          </div>

          {/* pagination  */}
          <div className="flex select-none justify-center items-center md:gap-5  mt-8 max-w-[100vw] md:max-w-[100vw-220px] mb-[70px] lg:mb-[80px]">
            {/* left arrow */}
            <div
              onClick={() => handlePage(page - 1)}
              className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-200 px-1 py-1 rounded-full"
            >
              <svg
                className="w-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15 7L10 12L15 17"
                    stroke="#0284C7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
            </div>
            <div className="flex  justify-center items-center md:gap-2  ">
              {totalPageArr.map((item, ind) => (
                <div
                  key={ind}
                  onClick={() => handlePage(item)}
                  className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200  px-5 md:px-5
                      ${
                        blogs?.meta?.page === item
                          ? "bg-sky-500 text-white"
                          : "bg-white"
                      }
                      border-sky-300  font-semibold text-gray-700   py-3 rounded-full
                      `}
                >
                  {item}
                </div>
              ))}
            </div>
            {/* right arrow */}

            <div
              onClick={() => handlePage(page + 1)}
              className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-200 px-2 py-2 rounded-full"
            >
              <IoIosArrowForward
                size={30}
                className="text-sky-500"
              ></IoIosArrowForward>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Blog Form View */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {editingBlog ? "Edit Blog" : "Create New Blog"}
            </h1>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
            >
              Back
            </button>
          </div>

          <div className="max-w-3xl mx-auto">
            <BlogForm
              onSaved={editingBlog ? handleUpdateBlog : handleCreateBlog}
              initial={editingBlog ?? undefined}
              refetch={refetch}
              buttonText={editingBlog ? "Update Blog" : "Create Blog"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BlogManagementPage;
