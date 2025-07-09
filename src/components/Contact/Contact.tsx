"use client";

// Package imports
import { useState } from "react";
import Button from "../Button/Button";
import Link from "../Link/Link";

// Custom imports

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xyzjqqde", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        // body: JSON.stringify(formData),
        body: new FormData(e.target as HTMLFormElement),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
        setError(true);
      } else {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full h-[105vh]">
      <div
        id="container--contact"
        className="max-w-[980px] mx-auto w-full flex flex flex-col relative"
      >
        <div className="w-full flex justify-between items-center  mb-8">
          <div className="overflow-hidden">
            <h2
              id="title--contact"
              className="font-header text-[48px] font-[500]"
            >
              Contact
            </h2>
          </div>
          <div className="flex items-center gap-4 h-auto">
            <p className="text-[18px] text-[var(--darkGray)]">
              {"(925) 200-7710"}
            </p>
            <div className="h-6 bg-[var(--teal)] w-[1px]" />
            <a
              href="mailto:dmvelzy@gmail.com"
              className="flex items-center gap-2"
            >
              <p className="text-[18px] text-[var(--darkGray)]">
                dmvelzy@gmail.com
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M14 0V9.5H13V1.72656L1 13.7266L0.292969 13.0195L12.3125 1H4V0H14Z"
                  fill="#52796F"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-12">
          <p className="text-[var(--darkGray)] font-sans text-[18px] leading-[1.5]">
            Book a free discovery call. I currently have availability during
            evenings or select daytime slots. Choose what works best for you in
            the link below.
          </p>
          <Link className="stagger z-[1]" href="/">
            Book a free discovery call
          </Link>
        </div>

        {submitted ? (
          <p>Thanks! Your message has been sent.</p>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-[var(--darkGray)] font-sans text-[18px] leading-[1.5]">
              Or, message me with some details about your project.
            </p>
            <form
              className="flex flex-col gap-4 w-full items-end"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-4 w-full">
                <div className="flex-1 flex flex-col">
                  <label
                    className="text-[14px] text-[rgba(0,0,0,0.5)]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="bg-[var(--lightGray)] px-4 py-2 border-b-[1px] border-[var(--deepMarine)]"
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label
                    className="text-[14px] text-[rgba(0,0,0,0.5)]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-[var(--lightGray)] px-4 py-2 border-b-[1px] border-[var(--deepMarine)]"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4 w-full">
                <label
                  className="text-[14px] text-[rgba(0,0,0,0.5)]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="bg-[var(--lightGray)] px-4 py-2 border-b-[1px] border-[var(--deepMarine)] w-full"
                  id="message"
                  name="message"
                  rows={4}
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
              </div>
              {loading ? (
                <Button className="float-right" disabled>
                  Sending...
                </Button>
              ) : (
                <Button
                  className="float-right"
                  disabled={
                    !formData.email || !formData.name || !formData.message
                  }
                >
                  Send
                </Button>
              )}
              {error && <p className="text-red-500">Error submitting form.</p>}
            </form>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 w-full">
        <p className="text-white mx-auto w-fit mb-1">
          Designed and Developed by Derek Velzy
        </p>
        <p className="text-white mx-auto w-fit">2025</p>
      </div>
    </div>
  );
};

export default Contact;
