import { useForm, SubmitHandler } from "react-hook-form";
import {BsPeopleFill} from "react-icons/bs"
import {MdAlternateEmail} from "react-icons/md"
import {HiMail} from "react-icons/hi"
import Input from "../components/Input";
import {useSpring, animated} from "@react-spring/web"

export type Inputs = {
  name: string;
  mail: string;
  object: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <animated.div style={{...formAnimation}} className="h-full pt-12 pb-20 2xl:px-12">
      <h1 className="text-myorange uppercase font-league font-bold text-3xl text-center xl:text-5xl">
        Contactez-moi
      </h1>
      <p className="text-mydark dark:text-myligth font-poppins text-xs mb-5 text-center xl:text-lg">
        j'attends avec impatience de travailler avec vous.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="sm:px-20 xl:px-72 2xl:px-96">
      <Input register={register} name="name" type="text" icon={BsPeopleFill} placeholder="nom complet" />
        <Input register={register} name="email" type="email" icon={MdAlternateEmail} placeholder="email" />
        <Input register={register}  name="objet" type="text" icon={HiMail} placeholder="objet" />
        <textarea {...register("message")} name="message" placeholder="Votre demande" className="form-input w-full rounded bg-transparent dark:text-myligth text-mydark font-poppins" style={{resize: 'none'}} rows={10}></textarea>
        <button type="submit" className="bg-myorange w-full py-2 text-myligth font-poppins rounded mt-5 text-xl">soumettre</button>
      </form>
    </animated.div>
  );
};

export default Contact;
