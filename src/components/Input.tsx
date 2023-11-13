import React from 'react';
import { IconType } from 'react-icons'; 
import { UseFormRegister } from 'react-hook-form';
import { Inputs } from '../Pages/Contact.page';

type Props = {
  icon: IconType;
  placeholder: string;
  type: string;
  name: string;
  register: UseFormRegister<Inputs>;
};

const Input: React.FC<Props> = ({ icon, placeholder, type, name, register }) => {
  const IconComponent = icon;

  return (
    <div className="relative my-4">
      {IconComponent && (
        <IconComponent
          className="dark:text-myligth text-mydark absolute"
          style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}
        />
      )}
      <input
        {...register(name as keyof Inputs)} // Utilisez le nom en tant que clé de l'interface Inputs
        style={{ outline: 'none' }}
        type={type}
        placeholder={placeholder}
        className="form-input mx-auto w-full rounded bg-transparent pl-10 dark:text-myligth text-mydark font-poppins"
      />
    </div>
  );
};

export default Input;
