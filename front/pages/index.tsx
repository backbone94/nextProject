import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Home() {
  const email = useSelector((state: RootState) => state.user.email);
  console.log(email);

  return <>홈</>;
}
