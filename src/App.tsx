import Form from "./Form";
import Logo from "/images/logo.svg"
import HeroMobile from "/images/hero-mobile.jpg"
import HeroDesktop from "/images/hero-desktop.jpg"

export default function App() {
    return (
        <main className="w-full min-h-screen flex">
            <div className="bg-cover flex flex-col items-center md:bg-[url(/images/bg-pattern-desktop.svg)] flex-grow">
                <div className="flex flex-col min-h-full md:w-[min(29rem,100%)]">
                    <img
                        src={Logo}
                        alt="logo"
                        className="md:w-44 w-24 md:my-12 my-6 md:mx-0 mx-6"
                    />
                    <img
                        src={HeroMobile}
                        alt="mobile hero image"
                        className="md:hidden"
                    />
                    <div className="flex-grow justify-center flex flex-col md:py-8 py-24 md:px-0 px-6">
                        <h1 className="font-josefin md:py-0 md:text-[4.5rem] text-[3rem] md:text-left text-center md:tracking-[1rem] tracking-[0.5rem] md:leading-[4.5rem] leading-[3rem]">
                            <span className="text-c_Desaturated_Red font-light">
                                WE'RE{" "}
                            </span>
                            <span className="font-semibold text-c_Dark_Grayish_Red">
                                COMING SOON
                            </span>
                        </h1>
                        <p className="font-josefin md:px-0 md:text-[16px] text-sm md:text-left text-center text-c_Desaturated_Red tracking-wide pt-6 pb-10 leading-7">
                            Hello fellow shoppers! We're currently building our
                            new fashion store. Add your email below to stay
                            up-to-date with announcements and our launch deals.
                        </p>
                        <Form />
                    </div>
                </div>
            </div>
            <img
                src={HeroDesktop}
                alt="desktop hero image"
                className="md:block hidden h-screen aspect-[610/800]"
            />
        </main>
    );
}
