import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex border-none sm:w-fit  bg-slate-100 m-4 shadow-lg relative">
            <div className=" absolute w-2/4 ">
                <h2
                className=" text-xl font-bold text-white/70 mt-4 ml-4 p-4 capitalize text-ellipsis lg:text-2xl"
                >Welcome to Kyaw Gyi blog </h2>
                <p className="text-xs lg:text-lg text-white/70 mt-2 ml-4 p-4 truncate">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Debitis odit repellat doloribus harum temporibus in consequuntur possimus. Officiis accusamus odio, soluta unde numquam. adipisicing elit. Debitis odit repellat doloribus harum temporibus in consequuntur possimus. Officiis accusamus odio, soluta unde numquam.</p>
            </div>

            <div className="overflow-hidden rounded-lg w-full" style={{ maxWidth: '100%' }}>
                <Image
                    src="/galaxy.png"
                    layout="responsive" // Use layout="responsive" to enable responsive sizing
                    width={500}
                    height={300}
                    alt="hero section"
                />
            </div>
        </div>
    )
}
