import Image from "next/image";

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Web Dev Blog</h1>
      </header>

      <div className="flex-grow flex">
        <main className="flex-grow p-4">
          <article>
            <h2 className="text-xl font-semibold mb-4">The Future of Web Development</h2>
            <Image
              src="https://picsum.photos/600"
              alt="Web Development"
              width={400}
              height={200}
              className="mb-4 rounded"
            />
            <p className="mb-4">Web development is constantly evolving, with new technologies emerging regularly.</p>
            <p>Stay tuned for more insights on the latest trends in web development!</p>

            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="text-black text-md font-semibold mb-2">The Future of Web Development</h4>
                  <p className="text-sm text-gray-600">
                    Web development is constantly evolving, with new technologies emerging regularly.
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="text-black text-md font-semibold mb-2">The Future of Web Development</h4>
                  <p className="text-sm text-gray-600">
                    Web development is constantly evolving, with new technologies emerging regularly.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </main>

        <aside className="w-64 bg-gray-100 p-4">
          <h3 className="font-semibold mb-2">Recent Posts</h3>
          <ul>
            <li>React vs Vue</li>
            <li>CSS Grid Layout</li>
            <li>JavaScript ES6+</li>
          </ul>
        </aside>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Web Dev Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
