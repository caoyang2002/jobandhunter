import Header from './home/Header'
import Main from './home/Main'
import Footer from './home/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      {/* 将 Main 组件包裹在一个具有滚动属性的 div 中 */}
      <div className="main-scroll-container">
        <Main />
      </div>

      {/* <Main /> */}
      <Footer />
    </main>
  )
}
