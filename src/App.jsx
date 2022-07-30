import Heading from "./components/Heading"
import Footer from "./components/Footer"
import Count from "./components/Count"

function App() {
  return (
    <div className="bg-Very_dark_blue min-h-screen w-screen relative before:absolute before:inset-0 before:bg-[url('../images/bg-stars.svg')] before:w-full before:h-full">
      <div className="container px-px-mobile md:px-5 lg:px-0 relative z-30">
        {/* heading */}
        <header className="pt-36 md:pt-32 pb-[3.75rem] md:pb-[6.475rem]">
          <Heading />
        </header>
        <section className="flex items-center justify-center">
          <div className="w-full md:w-[43.375rem] md:pb-36">
            <Count />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default App
