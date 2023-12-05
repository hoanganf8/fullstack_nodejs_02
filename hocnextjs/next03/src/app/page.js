import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import PostsProvider from "./components/PostsProvider";
import Testimonials from "./components/Testimonials";
import styles from "./page.module.css";
import User from "./components/User";
const Home = () => {
  const projectDir = process.cwd();
  return (
    // <PostsProvider>
    //   <Posts />
    // </PostsProvider>
    // <h1 className={styles.box}>Home</h1>
    // <h1 className="text-blue-600 text-5xl border-4 border-indigo-600 px-3 py-2">
    //   Học NextJs không khó
    // </h1>
    <div>
      {/* <Header />
      <Hero />
      <Testimonials />
      <Footer /> */}
      {/* <img src="/next.svg" /> */}
      {/* <Image
        src="https://picsum.photos/200"
        width={200}
        height={200}
        alt="hình ảnh"
      /> */}
      {process.env.SERVER_API}
      <br />
      {projectDir}
      <User />
    </div>
  );
};

export default Home;
