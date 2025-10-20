"use client";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

import SingleImageUploader from "@/components/shared/SingleImageUploader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface User {
  name: string;
  email: string;
  phone?: string;
  bio?: string;
  picture?: string;
  role?: string;
  isBlock?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const axiosPublic = useAxiosPublic();

  const { data: user, refetch, isLoading: loading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/me`, { withCredentials: true });
      return res?.data?.data?.data;
    },
  });

  const form = useForm({
    defaultValues: {
      name: user?.data?.name || "",
    },
  });

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Profile update is loading");
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    if (image) {
      formData.append("file", image as File);
    }
    console.log("✅ Submitted Data:", formData);

    try {
      const res = await axiosPublic.patch(`/user/${user?._id}`, formData, {
        withCredentials: true, // 🔥 send/receive cookies
      });
      refetch();
      toast.success("Profile updated ", { id: toastId });
    } catch (error) {
      toast.error("Profile upload failed", { id: toastId });
      console.log(error);
    }
  };

  if (loading) return <Loading />;

  if (!user)
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load profile.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 py-6 flex justify-center items-start">
      <Toaster position="top-right" />

      <Card className="w-full max-w-2xl shadow-lg border border-gray-200 bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center md:text-left">
            User Profile
          </CardTitle>
        </CardHeader>

        <CardContent>
          {!isEditing ? (
            // ✅ View Mode
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 flex justify-center">
                  <Image
                    height={1200}
                    width={1200}
                    src={user?.picture}
                    alt="Profile"
                    className="w-28 h-28 rounded-full border object-cover"
                  />
                </div>

                <div>
                  <Label className="text-gray-500 text-sm">Name</Label>
                  <p className="text-lg font-medium text-gray-800 mt-1">
                    {user?.name}
                  </p>
                </div>

                <div>
                  <Label className="text-gray-500 text-sm">Email</Label>
                  <p className="text-lg font-medium text-gray-800 mt-1">
                    {user?.email}
                  </p>
                </div>

                <div>
                  <Label className="text-gray-500 text-sm">Role</Label>
                  <p className="text-lg font-medium text-gray-800 mt-1 capitalize">
                    {user?.role}
                  </p>
                </div>

                <div>
                  <Label className="text-gray-500 text-sm">Phone</Label>
                  <p className="text-lg font-medium text-gray-800 mt-1">
                    {user?.phone || "N/A"}
                  </p>
                </div>

                <div>
                  <Label className="text-gray-500 text-sm">Status</Label>
                  <p
                    className={`text-lg font-medium mt-1 ${
                      user.isBlock ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    {user.isBlock ? "Blocked" : "Active"}
                  </p>
                </div>

                <div>
                  <Label className="text-gray-500 text-sm">Created At</Label>
                  <p className="text-sm text-gray-600 mt-1">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <Label className="text-gray-500 text-sm">Updated At</Label>
                  <p className="text-sm text-gray-600 mt-1">
                    {new Date(user.updatedAt).toLocaleDateString()}
                  </p>
                </div>

                {user.bio && (
                  <div className="sm:col-span-2">
                    <Label className="text-gray-500 text-sm">Bio</Label>
                    <p className="text-gray-700 mt-1 leading-relaxed">
                      {user.bio}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-center md:justify-start gap-3">
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                >
                  Edit Profile
                </Button>
              </div>
            </div>
          ) : (
            // ✅ Edit Mode
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Picture */}
                    <SingleImageUploader
                      setImage={setImage}
                      currentImage={user?.data?.picture}
                    ></SingleImageUploader>
                  
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => form.reset()}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
