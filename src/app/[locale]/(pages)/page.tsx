
import PageLayout from './layout'
import Home from "./(home)/page";

import Posts from "./posts/page";
export default function Index() {

  return (<>
       
            <main className={`flex min-h-screen  relative flex-col
             items-center justify-between `} >
           
              <PageLayout >
                  <Home/>
                  <Posts/>
              </PageLayout>
       
            </main>
  </>
             
  )
};

