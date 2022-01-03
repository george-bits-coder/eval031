export default function Showit(arr) {
  //getformatted();
  return (
    <>
      <div>
        {arr.map((e) => {
          return e.title + " " + e.timetocook;
        })}
      </div>
    </>
  );
}
