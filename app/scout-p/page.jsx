'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { data } from '@Data/data';

const page = () => {
  console.log('Data', data);

  const { data: session } = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect('/signin?callbackUrl=/ScoutClient');
    // },
  });
  return (
    <section className="py-24">
      <div className="container">
        <h1> scout page</h1>
      </div>
    </section>
  );
};

export default page;
