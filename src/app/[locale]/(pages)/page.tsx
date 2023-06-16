
import PageLayout from './layout'
import Home from "./(home)/page";
import Header from '@/components/Header';
import Posts from "./posts/page";
export default function Index() {

  return (<>
          <Header />
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

