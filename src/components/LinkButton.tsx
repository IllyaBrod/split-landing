const LinkButton = ({id, text}: {id: string, text: string}) => {
  return (
    <a href={`#${id}`} className="btn btn-md btn-primary rounded-full
        capitalize text-xl xl:text-2xl mt-16 px-5">
      {text}
    </a>
  );
};

export default LinkButton;
