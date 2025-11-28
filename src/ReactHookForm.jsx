import { useForm } from "react-hook-form";

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onData = (data) => {
    alert("Registration Seccsefulle\n" + JSON.stringify(data));
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-6">Student Registration</h2>
      <form onSubmit={handleSubmit(onData)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Student Name</label>
          <input
            type="text"
            {...register("username", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invailed Emial Formad",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium mb-1">Grade Level</label>
          <select
            {...register("gradeLevel", { required: "please select a grade" })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Grede</option>
            <option value="9">Grede 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          {errors.gradeLevel && (
            <p className="text-red-500">{errors.gradeLevel.message}</p>
          )}
        </div>
        <div>
          <label className="font-medium text-sm">subject Intersted</label>
          <div >
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects", {
                  required: "select at lest one Subject ",
                })}
                value="math"
                className="mr-2"
              />
              Mathematics
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects")}
                value="science"
                className="mr-2"
              />
              Science
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('subjects')}
                value="english"
                className="mr-2"
              />
              English
            </label>
          </div>
          {errors.subjects && <p className="text-red-500">{errors.subjects.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};
