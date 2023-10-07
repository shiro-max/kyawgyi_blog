import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import TopicList from "@/components/TopicList";

export default function Home() {
  return (
    <div>
      <Navbar title={"Home"} isAddTopicPage={false} />
      <div className="flex flex-col m-0 lg:p-8">
        <HeroSection/>
        
          <TopicList />

      </div>
    </div>
  )
}
