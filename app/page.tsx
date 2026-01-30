"use client";

import Image from "next/image";

export default function Home() {

  const HandleUserSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;

    const newUser = { name, email, number };
    console.log(newUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <main className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 w-full max-w-md">

        <div className="flex justify-center mb-6">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Add User
        </h2>

        <form onSubmit={HandleUserSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Add User
          </button>
        </form>
      </main>
    </div>
  );
}
