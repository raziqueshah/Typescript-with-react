export {}

export type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends {}>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {index}
          </div>
        );
      })}
    </>
  );
};

export default List;
