export default function Footer() {
  return (
    <footer className="bg-white p-5 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center space-y-2 text-center">
        <div className="flex space-x-4">
          <a
            href="https://github.com/JustDevRae"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/JustDevRae"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/JustDevRae"
            className="text-blue-500 hover:underline"
          >
            Instagram
          </a>
        </div>
        <p>
          Copyright ©2024 <br />
          JustDevRae All rights reserved.
        </p>
      </div>
    </footer>
  );
}
