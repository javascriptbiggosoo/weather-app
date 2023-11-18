"use client"; // 에러 컴포넌트는 클라이언트 컴포넌트로 정의되어야 합니다.

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({
  error, // Error에 들어오는 param (약속)
  reset, // Error에 들어오는 param (약속)
}: Props) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h2></h2>
      <button onClick={() => reset()}>재시도</button>
    </div>
  );
}
