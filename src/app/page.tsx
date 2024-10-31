import Hero from "@/components/main/hero";
import AboutFunctions from "@/components/main/AboutFunctions";
import AboutTool from "@/components/main/AboutTool";
import AboutTeam from "@/components/main/aboutTeam";
import AboutEnterprise from "@/components/main/AboutEnterprise";
import Footer from "@/components/main/footer";
import AboutBook from "@/components/main/aboutBook";

export default function Home() {
  return (
    <div className="bg-gray-900 flex flex-col m-auto">
      <Hero/>
      <AboutFunctions/>
      <AboutTool/>
      <AboutTeam/>
      <AboutEnterprise/>
      <AboutBook/>
      <Footer/>
    </div>
  );
}
