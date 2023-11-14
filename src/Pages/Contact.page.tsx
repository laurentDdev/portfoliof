import { useForm, SubmitHandler } from "react-hook-form";
import {BsPeopleFill} from "react-icons/bs"
import {MdAlternateEmail} from "react-icons/md"
import {HiMail} from "react-icons/hi"
import Input from "../components/Input";
import {useSpring, animated} from "@react-spring/web"
import emailjs from "@emailjs/browser"
import {useState} from "react"

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
    formState: { errors, isValid, isDirty },
    resetField,
  } = useForm<Inputs>();

  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    if (isValid) {
      emailjs.send("service_vqq7j1e","template_de7ltt7",{
        'to_email': 'laurent5dessy@gmail.com',
        'from_message': data.message,
        'from_object': data.object,
        'from_email': data.mail,
        "to_name": data.name,
      }, "CC65Jr390ZTa5m4pK")
      .then(() => {
        setSuccessMessage("Votre demande a été envoyé avec succès")
        resetField("name")
        resetField("mail")
        resetField("message")
        resetField("object")
        setTimeout(() => {
          setSuccessMessage("")
        }, 2000);
        setErrorMessage("")
      })
      .catch(() => {
        setErrorMessage("Un problème a eu lieu lors de votre demande")
        setSuccessMessage("")
      })
    }
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
        <Input register={register} name="mail" type="email" icon={MdAlternateEmail} placeholder="email" />
        <Input register={register}  name="object" type="text" icon={HiMail} placeholder="objet" />
        <textarea {...register("message", {minLength: 2, maxLength: 400, required: true})} name="message" placeholder="Votre demande" className="form-input w-full rounded bg-transparent dark:text-myligth text-mydark font-poppins" style={{resize: 'none'}} rows={10}></textarea>
        {isDirty && errors.mail?.type == "pattern" || errors.mail?.type == "required" && <p className="text-red-500 my-3 text-xs xl:text-lg">{errors.mail.message}</p>}
        {isDirty && errors.name?.type == "minLength" || errors.name?.type == "maxLength" || errors.name?.type == "required" && <p className="text-red-500 my-3 text-xs xl:text-lg">Votre nom complet doit faire entre 3 et 30 caractères</p>}
        {isDirty && errors.object?.type == "minLength" || errors.object?.type == "maxLength" || errors.object?.type == "required" && <p className="text-red-500 my-3 text-xs xl:text-lg">L' objet du mail doit faire entre 3 et 30 caractères</p>}
        {isDirty && errors.message?.type == "minLength" || errors.message?.type == "maxLength" || errors.message?.type == "required" && <p className="text-red-500 my-3 text-xs xl:text-lg">Votre message doit faire entre 2 et 400 caractères</p>}
        {isDirty && successMessage.length > 0 && <p className="text-green-500">{successMessage}</p>}
        {errorMessage.length > 0 && <p className="text-red-500 my-3">{errorMessage}</p>}
        <button type="submit" className="bg-myorange w-full py-2 text-myligth font-poppins rounded mt-5 text-xl disabled:opacity-60" disabled={!isValid}>soumettre</button>
      </form>
      
    </animated.div>
  );
};

export default Contact;
