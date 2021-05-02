import { Layout } from 'antd';
import './App.css';
import PhysicianList from './pages/ physicianList/PhysicianList';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout>
      <Header>Dream Hospital</Header>
      <Content className="content">
        <PhysicianList />
      </Content>
    </Layout>
  );
}

export default App;
