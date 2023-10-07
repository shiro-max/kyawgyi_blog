import AboutForm from "@/components/AboutForm";
import { Navbar } from "@/components/Navbar";

export default function page() {
    return (
        <div >
            <Navbar title="About" isAddTopicPage={false} />
            <div  className="flex flex-col gap-4 p-4 border rounded-lg bg-slate-100 m-4 lg:m-8 shadow-md">
            <AboutForm />
            </div>
        </div>
    )
}
