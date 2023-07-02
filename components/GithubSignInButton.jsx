'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

import Button from './Button';
import Image from 'next/image';

const GithubSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className="w-full"
      onClick={() => signIn('github', { callbackUrl })}
    >
      <Image
        src="/assets/images/github.webp"
        alt="logo"
        width={30}
        height={30}
        className="rounded-full mr-1"
      />
      <p className="mt-1">Continue with Github</p>
    </Button>
  );
};

export default GithubSignInButton;
