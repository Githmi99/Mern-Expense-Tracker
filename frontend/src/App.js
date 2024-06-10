import styled from "styled-components";
import bg from'./img/bg.jpg'
import {MainLayout} from './styles/Layout'
import Orb from "./Components/Orb/Orb";
import Navigation from './Components/Navigation/Navigation'
import React, { useMemo, useState } from "react";

function App() {
  const [active,setActive] = React.useState(1)
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  //hi
  return (
    <AppStyled bg={bg} className="App">
      <orbMemo />
      
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>

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
 




 }

`;

export default App;
