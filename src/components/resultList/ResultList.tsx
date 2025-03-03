import './resultList.scss';

interface Item {
  id: number;
  title: string;
}

interface ResultListProps {
  data: Item[];
}

const ResultList: React.FC<ResultListProps> = ({ data }) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <div className='answer' key={item.id}>
            <span className='assistant-description'>{item.title}</span>
            <span>РМИАС</span>
          </div>
        ))
      ) : (
        <span>Ничего не найдено</span>
      )}
    </>
  );
};

export default ResultList;
