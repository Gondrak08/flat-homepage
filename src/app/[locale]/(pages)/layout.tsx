import Header from "@/components/Header"

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  
  return (
    <>
      <Header />
     {children}
    </>
  )
}
