"use client";

import { useRouter } from "next/navigation";

interface IProps {
  children: React.ReactNode;
}

const HomeButton = ({ children }: IProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return <button onClick={handleClick}>홈으로</button>;
};

export default HomeButton;
