"use client";
import { useState } from "react";
export interface StoryFormData {
  title: string;
  type: string;
  image: string;
  blocks: [];
}

interface Error {
  name?: string;
  owner_name?: string;
  species?: string;
  image_url?: string;
}

const storyForm: StoryFormData = {
  title: "",
  type: "",
  image: "https://picsum.photos/920/446?random=1",
  blocks: [],
};

export default function FormStory() {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: storyForm.title,
    type: storyForm.type,
    image: storyForm.image,

    blocks: storyForm.blocks,
  });

  const formValidate = () => {
    let err: Error = {};
    if (!form.title) err.name = "Title is required";
    if (!form.type) err.owner_name = "Owner is required";
    if (!form.image) err.image_url = "Image URL is required";
    return err;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const postData = (form: StoryFormData) => {
    fetch("/api/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = formValidate();

    if (Object.keys(errs).length === 0) {
      postData(form);
    } else {
      setErrors({ errs });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-5 w-[500px]">
        <label htmlFor="title">Title</label>
        <input
          className=" text-black"
          type="text"
          maxLength={60}
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="type">Type</label>
        <input
          className=" text-black"
          type="text"
          maxLength={60}
          name="type"
          value={form.type}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image</label>
        <input
          className=" text-black"
          type="text"
          maxLength={60}
          name="image"
          value={form.image}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
}
