import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import ErrorImg from "/images/icon-error.svg";
import Arrow from "/images/icon-arrow.svg"

const formSchema = z.object({
    email: z.string().email("Please provide a valid email"),
});
type FormType = z.infer<typeof formSchema>;

export default function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormType>({ resolver: zodResolver(formSchema) });
    const onSubmit: SubmitHandler<FormType> = () => {
        toast("Submit form successfully", {
            className:
                "font-josefin text-c_Desaturated_Red font-bold border-none outline-none",
        });
        reset();
    };
    return (
        <form
            className="relative w-full md:scale-100"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="relative flex items-center">
                <input
                    data-testid="email-input"
                    className={`border-[1px] min-w-0 w-full ${
                        errors.email && "outline-c_Soft_Red"
                    } rounded-full border-c_Desaturated_Red placeholder:text-c_Desaturated_Red placeholder:opacity-50 font-josefin md:pl-8 pl-6 md:pr-36 pr-28 md:py-4 py-3 text-c_Dark_Grayish_Red`}
                    placeholder="Email Address"
                    type="text"
                    {...register("email")}
                />
                {errors.email && (
                    <img
                        src={ErrorImg}
                        alt="error icon"
                        className="absolute md:right-28 right-20"
                    />
                )}
            </div>
            {errors.email && (
                <span className="text-xs text-c_Soft_Red font-josefin md:left-8 left-6 -bottom-6 absolute">
                    {errors.email.message}
                </span>
            )}
            <div className="absolute top-0 right-0 h-full md:w-24 w-16 rounded-full bg-gradient-to-br from-[hsl(0,80%,86%)] to-[hsl(0,74%,74%)] size-12">
                <button
                    data-testid="submit-btn"
                    type="submit"
                    className="h-full w-full flex justify-center items-center  transition hover:bg-opacity-50 bg-transparent hover:bg-white"
                >
                    <span className="sr-only">submit</span>
                    <img
                        src={Arrow}
                        alt="right arror"
                        className=""
                    />
                </button>
            </div>
        </form>
    );
}
