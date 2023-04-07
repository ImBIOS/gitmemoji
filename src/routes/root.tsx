const Root = () => {
  return (
    <div className='flex flex-col items-center justify-evenly bg-blue-300 min-h-screen'>
      <div className='flex flex-col items-center'>
        <div className='text-7xl font-normal m-4'>
          Git<b>me</b>moji
        </div>
        <div className='text-3xl'>
          <p>
            Learn
            <a href='https://gitmemoji.imam.dev/' className='text-red-500 no-underline'>
              gitmoji!
            </a>
          </p>
        </div>
      </div>
      <div>
        <a href='https://github.com/ImBIOS/gitmemoji' className="bg-yellow-900 text-white shadow-md inline-block cursor-pointer rounded-lg font-semibold py-3 px-4 hover:shadow-lg hover:shadow-white hover:translate-y-0.5">
          <span role='img' aria-label='star'>
            ⭐️
          </span>{' '}
          Github
        </a>
      </div>
      <div className="flex flex-col items-center scale-125">
        <div className="mt-5 scale-150">
          <a href="/easy" className="text-red-500 font-bold text-2xl">Quiz for newbies</a>
        </div>
        <div className="mt-5 scale-150">
          <a href="/hard" className="text-red-500 font-bold text-2xl">Quiz for gurus</a>
        </div>
      </div>
    </div>
  );
};

export default Root;
