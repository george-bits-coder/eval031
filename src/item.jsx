export const Ritem = ({
  title,
  ingredients,
  timetocook,
  image,
  instructions
}) => {
  return (
    <>
      <button>
        {title} -{timetocook}
      </button>
    </>
  );
};
