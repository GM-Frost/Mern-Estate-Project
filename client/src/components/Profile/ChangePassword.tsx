const ChangePassword = () => {
  return (
    <div className="flex flex-col flex-wrap w-full h-full space-y-3">
      <div className="flex flex-wrap font-bold justify-between items-start text-start">
        <h1>Change Password</h1>
      </div>
      <p className="text-sm">
        Your email address will not be published. Required fields are marked *
      </p>
      <hr />
      <div className="flex flex-col w-full md:w-1/2 flex-wrap justify-normal space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="Email">Email</label>
          <input
            className="bg-primary/5 p-2 rounded-md"
            type="email"
            name=""
            id=""
            placeholder="email"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="password">Password</label>
          <input
            className="bg-primary/5 p-2 rounded-md"
            type="email"
            name=""
            id=""
            placeholder="●●●●●●"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="bg-primary/5 p-2 rounded-md"
            type="password"
            name="confirmPassword"
            id=""
            placeholder="●●●●●●"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-neutral p-3 rounded-md hover:bg-yellow-800 transition-colors duration-500 ease-in-out"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
