import BasicListItem from "./BasicListItem";

export default function BasicList(props) {
  const arrayOfIndexes = [...Array(150).keys()];
  return (
    <div>
      {arrayOfIndexes.map((value, index) => {
        return (
          <BasicListItem primary={"Psalm " + (index + 1)} href={index + 1} />
        );
      })}
    </div>
  );
}
