const Success = ({setSuccess}: {setSuccess: Function}) => {
  return (
    <div className="alert alert-success shadow-lg fixed left-1/2 w-[90%] -translate-x-1/2 top-2">
      <div className="flex justify-between w-full pr-2">
        <div className="flex gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Your request has been submitted!</span>
        </div>

        <button onClick={() => setSuccess(false)}>&times;</button>
      </div>
    </div>
  );
};

export default Success;
