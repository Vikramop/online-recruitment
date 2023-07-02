import Link from 'next/link';
import Features from '@app/features/page';
import Testimonials from '@app/testimonials/page';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Scout & Recruit
        <br />
        <span className="orange_gradient">Your Next Client</span>
      </h1>
      <p className="text-center mt-7 text-blue-950 font-extrabold text-3xl">
        Search for your desire clients just in one click!
      </p>
      <div className="mt-6 flex flex-col items-center justify-center">
        <Link href="/scout-p">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Scout Clients
            </span>
          </button>
        </Link>
        <p className="purple_gradient mt-6 mb-6">
          Why do Companies Prefer Us!!
        </p>
        <Features />
        <p className="purple_gradient mt-6 mb-6">
          Great Personality Briliant Testimonials
        </p>
        <Testimonials />
      </div>
    </section>
  );
}
