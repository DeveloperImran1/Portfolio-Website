// src/components/BlogForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { toast } from "sonner"; // optional: nice feedback toast
import SingleImageUploader from "./shared/SingleImageUploader";

type BlogFormData = {
  title: string;
  category: string;
  content: string;
};

type BlogInitial = {
  _id?: string;
  title?: string;
  category?: string;
  content?: string;
};

export default function BlogForm({
  onSaved,
  initial,
  refetch,
}: {
  onSaved?: () => void;
  initial?: BlogInitial;
}) {
  const form = useForm<BlogFormData>({
    defaultValues: {
      title: initial?.title || "",
      category: initial?.category || "",
      content: initial?.content || "",
    },
  });

  // --------->

  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const axiosPublic = useAxiosPublic();

  // const { data: user, refetch, isLoading: loading } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/user/me`, { withCredentials: true });
  //     return res?.data?.data?.data;
  //   },
  // });

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Blog creating ..");
    const formData = new FormData();
    data = { ...data, tags: ["web development", "AI/ML"], isFeatured: true };

    formData.append("data", JSON.stringify(data));
    if (image) {
      formData.append("file", image as File);
    }

    setLoading(true);
    try {
      const res = await axiosPublic.post(`/blogs`, formData, {
        withCredentials: true, // 🔥 send/receive cookies
      });
      console.log("res ", res);
      onSaved?.();
      setLoading(false);
      toast.success("Blog posted", { id: toastId });
      refetch();
    } catch (error) {
      toast.error("Blog post failed", { id: toastId });
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-6 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {initial ? "Update Blog Post" : "Create New Blog Post"}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            {/* Picture */}
            <SingleImageUploader
              setImage={setImage}
              currentImage={image}
            ></SingleImageUploader>

            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">Title</p>
                  <FormControl>
                    <Input
                      placeholder="Enter blog title"
                      {...field}
                      className="focus-visible:ring-1"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* category */}
            <FormField
              control={form.control}
              name="category"
              rules={{ required: "category is required" }}
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">Category</p>
                  <FormControl>
                    <Input
                      placeholder="category"
                      {...field}
                      className="focus-visible:ring-1"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              rules={{ required: "content is required" }}
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">Content</p>
                  <FormControl>
                    <Input
                      placeholder="Blog content"
                      {...field}
                      className="focus-visible:ring-1"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" disabled={loading} className="w-full">
              {loading
                ? initial
                  ? "Updating..."
                  : "Creating..."
                : initial
                ? "Update"
                : "Create"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
