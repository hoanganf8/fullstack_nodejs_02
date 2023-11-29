"use server";
import { todoApi } from "./TodoList";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies, headers } from "next/headers";

export const handleSubmit = async (formData) => {
  const name = formData.get("name");
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (response.ok) {
    const headerList = headers();
    const path = headerList.get("next-url");
    // console.log(path);
    // console.log(headerList);
    revalidatePath(path);
    // revalidateTag("todo_list");
    //set cookie
    cookies().set({
      name: "todo_item",
      value: name,
      maxAge: 3600,
      httpOnly: true,
    });
  }
};
