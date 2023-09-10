import React from 'react';
import classnames from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  HiAtSymbol,
  HiKey,
  HiExclamationCircle,
  HiArrowCircleRight,
} from 'react-icons/hi';

type LogInFields = {
  email: string;
  password: string;
};

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFields>();
  const onSubmit: SubmitHandler<LogInFields> = (data) => console.log(data);

  return (
    <form
      className="space-y-4 flex flex-col justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold">Iniciar sesión</h1>

      <div
        className={classnames(
          'flex justify-start items-center text-black bg-white border rounded-full p-2',
          errors.email ? 'border-red-500' : 'border-black',
        )}
      >
        <HiAtSymbol className="h-5 w-5 mr-2" />
        <input
          className="grow"
          {...register('email', { required: true })}
          placeholder="Email"
          type="email"
        ></input>
        {errors.email && (
          <HiExclamationCircle className="h-5 w-5 ml-2 text-red-500" />
        )}
      </div>
      <div
        className={classnames(
          'flex justify-start items-center text-black bg-white border rounded-full p-2',
          errors.password ? 'border-red-500' : 'border-black',
        )}
      >
        <HiKey className="h-5 w-5 mr-2" />
        <input
          className="grow"
          {...register('password', { required: true })}
          placeholder="Password"
          type="password"
        ></input>
        {errors.password && (
          <HiExclamationCircle className="h-5 w-5 ml-2 text-red-500" />
        )}
      </div>
      <button
        className="flex items-center text-white bg-black rounded-lg p-2 shadow-md"
        type="submit"
      >
        Entrar
        <HiArrowCircleRight className="h-5 w-5 ml-2" />
      </button>
    </form>
  );
};

export default LogIn;
