
import AdForm from "../components/AdForm";
import Rank from "../components/Rank";
import { Table } from 'antd';

const dataSource = [
    {
      key: '1',
      Team: 'Mike',
      Money: 30000000,
      Rank: '1',
    },
    {
      key: '2',
      Team: 'John',
      Money: 42,
      Rank: '10 Downing Street',
    },


  ];
  
  const columns = [
    {
      title: 'Team',
      dataIndex: 'Team',
      key: 'Team',
    },
    {
      title: 'Money',
      dataIndex: 'Money',
      key: 'Money',
    },
    {
      title: 'Rank',
      dataIndex: 'Rank',
      key: 'Rank',
    },
  ];


const index = () => {
    return (
        <>
            <AdForm />
            <Rank />
            <div style={{marginLeft:"20%", marginRight:"20%",marginBottom : "20px", paddingBottom:"20px",borderBottom : "1px solid"}}>
            <Table style={{marginLeft:"13%", marginRight:"13%"}} dataSource={dataSource} columns={columns} />
            </div>
        </>
    )
}
export default index