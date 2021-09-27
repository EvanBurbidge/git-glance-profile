import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50">
      <Head>
        <title>Git glance</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Git Glance" />
        <meta name="keywords" content="Github, Pull Request, Overviews, Chrome, Extension" />
        <meta name="description" content="Git glance provides an overview of pull requests that you have created, are assigned to, are mentioned in or that have requested a review from you." />
      </Head>

      <header className="w-full">
        <div className="relative overflow-hidden bg-gray-50">
          <div
            className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
            aria-hidden="true"
          >
            <div className="relative h-full mx-auto max-w-7xl">
              <svg
                className="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="784"
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="784"
                  fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                />
              </svg>
            </div>
          </div>

          <div className="relative pt-6 pb-16 sm:pb-24">
            <div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-center"
                  aria-label="Global"
                >
                  <div
                    className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
                  >
                    <div
                      className="flex items-center justify-between w-full md:w-auto"
                    >
                      <img
                        className="w-auto h-8 sm:h-10"
                        src="./git-glance-logo.png"
                        alt=""
                      />
                      <p className="text-xl font-bold tracking-tighter text-pimary ">
                        Git Glance
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:space-x-10">
                    <a
                      target="_blank"
                      href="https://github.com/EvanBurbidge/git-glance"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >Github</a
                    >

                    <a
                      target="_blank"
                      href="https://twitter.com/thewebuiguy"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >Twitter</a
                    >

                    <a
                      target="_blank"
                      href="https://www.producthunt.com/posts/git-glance"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >Product hunt</a
                    >
                    <a
                      target="_blank"
                      href="https://www.buymeacoffee.com/thewebuiguy"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >Buy me a coffee</a
                    >
                  </div>
                </nav>
              </div>
            </div>

            <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
              <div className="text-center">
                <h1
                  className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                >
                  <span className="block xl:inline">Get an overview of your </span>
                  <span className="block text-blue-800 xl:inline"
                  >git pull requests</span
                  >
                </h1>
                <p
                  className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                >
                  Git glance provides you a quick overview of pull requests that you have created, are assigned to, are mentioned in or that have requested a review from you.
                </p>
                <div
                  className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8"
                >
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                      href="https://chrome.google.com/webstore/detail/git-glance/ggipehgmbcjjlibbgoicnolekdocanbi?hl=en&authuser=1"
                      target="_blank"
                      rel="no-referrer"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      <img src="./chrome.jpeg" className="w-10" />
                      Add to chrome
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </header>

      <div>
        <div className="py-16 overflow-hidden bg-gray-50 lg:py-24">
          <div
            className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl"
          >
            <svg
              className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>

            <div className="relative">
              <h2
                className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
              >
                How it works
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
                A quick overview of how to use the git glance and what it can do
                for you.
              </p>
            </div>

            <div
              className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
            >
              <div className="relative">
                <h3
                  className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
                >
                  Login to Github
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  We use a Github OAuth application in order to read from your
                  github repositories.
                </p>
              </div>

              <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
                <svg
                  className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                  />
                </svg>
                <img
                  className="relative mx-auto"
                  width="490"
                  src="./login.png"
                  alt=""
                />
              </div>
            </div>

            <svg
              className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div
                className=" lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
              >
                <div className="lg:col-start-2">
                  <h3
                    className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
                  >
                    Get an overview of your pull requests
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    We give you an overview of pull requests that are created or assigned to you and also pull requests where your review is requested or you have been mentioned.
                  </p>
                </div>

                <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                  <svg
                    className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                    width="784"
                    height="404"
                    fill="none"
                    viewBox="0 0 784 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="784"
                      height="404"
                      fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                    />
                  </svg>
                  <img
                    className="relative mx-auto"
                    width="490"
                    src="./prs.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
            >
              <div className="relative">
                <h3
                  className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
                >
                  Filter which categories you see
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Switch between different categories of pull request by using the dropdown menu
                </p>
              </div>

              <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
                <svg
                  className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                  />
                </svg>
                <img
                  className="relative mx-auto"
                  width="490"
                  src="./menu-open.png"
                  alt=""
                />
              </div>
            </div>
            <svg
              className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 w-full" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          {/* <!-- <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="mt-8 xl:mt-0">
              <h3
                className="text-sm font-semibold tracking-wider text-gray-400 uppercase "
              >
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-gray-300">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label for="email-address" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autocomplete="email"
                  required
                  className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div> --> */}
          <div
            className="pt-8 mt-8 border-t border-gray-700 md:flex md:items-center md:justify-between"
          >
            <div className="flex space-x-6 md:order-2">
              <a
                href="https://twitter.com/thewebuiguy"
                target="_blank"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/EvanBurbidge/git-glance"
                target="_blank"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2021 thewebuiguy, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
