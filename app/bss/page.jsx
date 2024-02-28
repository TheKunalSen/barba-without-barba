"use client";

import Link from "next/link";

const page = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <ul>
        {arr.map((e, i) => {
          return (
            <li key={i}>
              <Link href={`/bss-in?id=${e}`}>{e}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default page;
