import Cards from "./components/Cards"
import Heading from "./components/Heading"

function App() {
  return (
    <main className="bg-Very_dark_blue min-h-screen relative before:absolute before:inset-0 before:bg-[url('../images/bg-stars.svg')] before:w-full before:h-full">
      <div className="container px-px-mobile md:px-5 lg:px-0 relative z-30">
        {/* heading */}
        <div className="pt-36 md:pt-32 pb-[3.75rem] md:pb-[6.875rem]">
          <Heading />
        </div>
        <section className="flex items-center justify-center">
          <div className="w-full md:w-[43.375rem]">
            <Cards />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
