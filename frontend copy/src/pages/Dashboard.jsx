import { useMemo, useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import Dashboard from "../Components/Dashboard/Dashboard";
import Transaction from "../Components/Transaction/Transaction";
import IncomeItem from "../Components/IncomeItem/IncomeItem";
import Expenses from "../Components/Expenses/Expenses";
import Orb from "../Components/Orb/Orb";
import { MainLayout } from "../styles/Layout";
import Navigation from "../Components/Navigation/Navigation";
import bg from '../img/bg.jpg'
import styled from "styled-components";

function DashboardPage() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <IncomeItem />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }`;
export default DashboardPage;