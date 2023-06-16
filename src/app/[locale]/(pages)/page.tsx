
import PageLayout from './layout'
import Home from "./(home)/page";

import Posts from "./posts/page";
export default function Index() {

  return (
             
      <PageLayout >
          <Home/>
          <Posts/>
      </PageLayout>
       
  )
};

