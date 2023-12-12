import Link from "./Link";

const Index = () => {
  const arrayOfIndexes = [...Array(150).keys()];
  return (
    <div>
      {arrayOfIndexes.map((value, index) => {
        return <Link index={index + 1} />;
      })}
    </div>
  );
};

export default Index;
