import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center px-12">
      <LandingPage></LandingPage>
    </div>
  );
}
