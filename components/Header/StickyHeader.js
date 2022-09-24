export default function Header() {
  return (
    <header class="z-100 fixed top-0 right-0 left-0 w-full shadow-sm">
      <div class="relative bg-white">
        <div class="mx-auto flex items-center justify-between px-4 py-5 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="#"
              class="grid grid-cols-[1fr_auto] place-items-center text-lg font-bold lg:text-4xl"
            >
              <span class="sr-only">Your Company</span>
              <img
                src="https://i.imgur.com/6Cshp7H.png"
                alt="Picture of the author"
                class="m-0 h-10 w-full pr-4"
                width="100%"
              />
              Mixtape
            </a>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>

              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden items-center space-x-6 md:flex">
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Blog
            </a>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </a>
          </nav>

          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <button
              href="#"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </button>
            <a
              href="#"
              class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-teal-400 bg-origin-border px-4 py-2 text-base font-medium text-sky-800 shadow-sm hover:bg-teal-500"
            >
              Sign up
            </a>
            <button class="pl-6">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                <span class="font-medium leading-none text-white">TW</span>
              </span>
            </button>
          </div>
        </div>

        <div class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
          <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <img
                  src="https://i.imgur.com/6Cshp7H.png"
                  alt="Picture of the author"
                  class="m-0 h-10 pr-4"
                />
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-sky-800 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Inbox
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-sky-800 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Messaging
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-sky-800 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Live Chat
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-sky-800 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Knowledge Base
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Partners
                </a>
                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Company
                </a>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-400 bg-origin-border px-4 py-2 text-base font-medium text-teal-800 shadow-sm hover:from-purple-700 hover:to-indigo-700"
                >
                  Sign up
                </a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" class="text-gray-900">
                    {' '}
                    Sign in{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
