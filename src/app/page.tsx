import Link from "next/link";

import styles from "./page.module.css";

import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getTime } from "@/utils/getTime";
import RevalidateButton from "@/component/RevalidateButton";

export default async function Home() {
  const currentWeather = await getCurrentWeather("seoul");
  // 캐시 확인용
  const time = await getTime(currentWeather.location.tz_id);

  console.log(currentWeather.current.condition.text);

  return (
    <>
      <h1>날씨 앱</h1>
      <h3>{time.dateTime}</h3>
      <ul className={styles.list}>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
          <span>{currentWeather.current.condition.text}</span>
        </li>
        <li>
          <Link href="/tokyo?name=도쿄">도쿄</Link>
        </li>
        <li>
          <Link href="/nyc?name=뉴욕">뉴욕</Link>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={"time"} />
    </>
  );
}
