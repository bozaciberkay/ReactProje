const Teams = () => {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-red-400 dark:text-white md:text-4xl">
              Takım Üyelerimiz
            </h2>
            <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, est ipsa quos id nam eum assumenda nesciunt minima
              nulla repellendus.
            </p>
          </div>
          <div className="grid  items-center gap-12 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Hentoni Doe
                </h4>
                <span className="block text-sm text-gray-500">
                  Accountant Member
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center  md:row-span-2">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-80"
                src="avatar.jpg"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">Lena</h4>
                <span className="block text-sm text-gray-500">
                  Chairman of the Board of Directors
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Anabelle Doe
                </h4>
                <span className="block text-sm text-gray-500">
                  Vice Chairman of the Board of Directors
                </span>
              </div>
            </div>
            {/* --- */}

            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Hentoni Doe
                </h4>
                <span className="block text-sm text-gray-500">
                  Accountant Member
                </span>
              </div>
            </div>

            <div className="space-y-4 text-center md:col-start-3  md:col-end-4">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src="avatar.jpg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-gray-700 dark:text-white">
                  Anabelle Doe
                </h4>
                <span className="block text-sm text-gray-500">
                  Vice Chairman of the Board of Directors
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   END OF SEC */}
    </>
  );
};

export default Teams;
