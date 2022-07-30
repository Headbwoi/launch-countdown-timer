import Heading from "./components/Heading"

function App() {
  return (
    <main className="bg-Very_dark_blue min-h-screen relative before:absolute before:inset-0 before:bg-[url('../images/bg-stars.svg')] before:w-full before:h-full">
      <div className="container px-px-mobile md:px-5 lg:px-0">
        {/* heading */}
        <div className="pt-36 md:pt-32">
          <Heading />
        </div>
        <div className="md:w-[43.375rem]"></div>
      </div>
    </main>
  )
}

export default App
