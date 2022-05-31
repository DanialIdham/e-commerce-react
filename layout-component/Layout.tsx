import Navbar from '../components/nav-bar/nav-bar'

type LayoutProps = {
    children: React.ReactNode,
  };
  

export default function Layout({ children} : LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}