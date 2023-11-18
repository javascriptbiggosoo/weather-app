import React from "react";

import HomeButton from "../../component/HomeButton";
import { getForecast } from "@/utils/getForecast";

interface Props {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
}

export function generateMetadata({ params, searchParams }: Props) {
  return {
    title: `날씨 앱-${searchParams.name}`,
    description: `${searchParams.name}의 날씨를 알려드림`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const res = await getForecast(params.location);

  return (
    <>
      <h1>{searchParams.name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date}: {day.day.avgtemp_c}°C
          </li>
        ))}
      </ul>
      <HomeButton>홈으로</HomeButton>
    </>
  );
}
