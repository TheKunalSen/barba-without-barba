// pages/[id].js
"use client"
import { useRouter,useSearchParams } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');
 
console.log(promptId)
  return (
    <div>{promptId}</div>
  );
};

export default Page;
