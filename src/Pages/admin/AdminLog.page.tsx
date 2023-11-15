import { useSpring, animated } from "@react-spring/web";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/Input";
import { MdAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useState } from "react";

export type AdminLogInput = {
    email: string;
    password: string;
}

const AdminLog = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
        resetField,
    } = useForm<AdminLogInput>();
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const formAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    const onSubmit: SubmitHandler<AdminLogInput> = (data) => {
        console.log(data);

    }



    return (
        <animated.div style={{ ...formAnimation }} className="h-full pt-12 pb-20 2xl:px-12 my-56">
            <h1 className="text-myorange uppercase font-league font-bold text-3xl text-center xl:text-5xl">
                Connexion
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="sm:px-20 xl:px-72 2xl:px-96">
                <Input register={register} name="email" type="email" icon={MdAlternateEmail} placeholder="email" />
                <Input register={register} name="passowrd" type="password" icon={FaLock} placeholder="Mot de passe" />
                {isDirty && errors.email?.type == "pattern" || errors.email?.type == "required" && <p className="text-red-500 my-3 text-xs xl:text-lg">{errors.email.message}</p>}
                {isDirty && successMessage.length > 0 && <p className="text-green-500">{successMessage}</p>}
                {errorMessage.length > 0 && <p className="text-red-500 my-3">{errorMessage}</p>}
                <button type="submit" className="bg-myorange w-full py-2 text-myligth font-poppins rounded mt-5 text-xl disabled:opacity-60" disabled={!isValid}>Se connecter</button>
            </form>

        </animated.div>
    );
}

export default AdminLog;