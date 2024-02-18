"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  // Redirect to the Dash page when the component mounts
 useEffect(() => {
    router.replace('/Dash');
  }, []);

  // This component doesn't render anything since it redirects immediately
  return null;
}
