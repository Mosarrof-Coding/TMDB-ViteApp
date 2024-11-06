/* eslint-disable react/no-unescaped-entities */
export default function ContributionBible() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden mb-4 md:mb-6 lg:mb-10">
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            backgroundImage: "url('https://your-image-url.com')", // Use your image URL here
          }}
        ></div>
        <div className="relative z-10 text-center py-6 sm:py-12 lg:py-20">
          <h1 className="text-3xl font-extrabold text-white">
            Contribution Bible
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-6">
            Welcome to the Contribution Bible! Here you can find information
            about how to contribute to our project.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. How to Contribute
          </h2>
          <p className="text-base text-gray-700 mb-4">
            We welcome contributions from everyone. Whether you are fixing bugs,
            adding new features, improving documentation, or helping with
            translation, your contributions are valuable!
          </p>
          <p className="text-base text-gray-700 mb-4">
            To contribute, follow these steps:
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Fork the repository and clone it to your local machine.</li>
              <li>Create a new branch for your changes.</li>
              <li>Make your changes and test them thoroughly.</li>
              <li>
                Submit a pull request with a detailed description of the
                changes.
              </li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Code of Conduct
          </h2>
          <p className="text-base text-gray-700 mb-4">
            We have a Code of Conduct to ensure that everyone feels welcome in
            our community. Please be respectful, kind, and considerate in all
            interactions.
          </p>
          <p className="text-base text-gray-700 mb-4">
            By participating in this project, you agree to abide by the
            following principles:
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Be respectful of others' time and contributions.</li>
              <li>
                Keep conversations constructive and focus on problem-solving.
              </li>
              <li>Assume good intentions and be open to feedback.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Reporting Issues
          </h2>
          <p className="text-base text-gray-700 mb-4">
            If you encounter any issues, please report them by creating an issue
            in our repository. When reporting an issue, please include:
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>A clear and descriptive title.</li>
              <li>
                A description of the problem, including steps to reproduce.
              </li>
              <li>Any relevant logs or error messages.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Contribution Guidelines
          </h2>
          <p className="text-base text-gray-700 mb-4">
            Please follow these guidelines when submitting contributions:
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Keep your changes small and focused on a single task.</li>
              <li>
                Write clear commit messages explaining the changes you made.
              </li>
              <li>
                Test your changes thoroughly before submitting a pull request.
              </li>
              <li>Ensure that your code adheres to our style guidelines.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. License
          </h2>
          <p className="text-base text-gray-700 mb-4">
            By contributing to this project, you agree to license your
            contributions under the same license as the project.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Thank You!
          </h2>
          <p className="text-base text-gray-700 mb-4">
            We appreciate all contributions to this project. Together, we can
            make it even better!
          </p>
        </div>
      </div>
    </div>
  );
}
