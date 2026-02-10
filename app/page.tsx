import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-red-600 selection:text-white">
      {/* Hero Section */}
      <header className="relative flex min-h-[80vh] flex-col justify-start overflow-hidden lg:flex-row lg:items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-neutral-950 to-neutral-950" />
        
        <div className="relative z-10 w-full max-w-4xl px-6 pt-12 text-left order-2 lg:order-1 lg:w-1/2 lg:px-12 lg:pt-0">
          <h2 className="mb-2 text-sm font-bold tracking-[0.2em] text-red-600 uppercase animate-fade-in opacity-0">2008 &bull; 8th Gen</h2>
          <h1 className="text-6xl font-black tracking-tighter text-white sm:text-8xl lg:text-8xl animate-fade-in opacity-0 delay-100">
            TYPE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">S</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-neutral-400 sm:text-2xl animate-fade-in opacity-0 delay-200">
            The 3-door that redefined the compact segment. Also known as the <span className="text-white">"Spaceship"</span> for its futuristic design.
          </p>
        </div>

        <div className="relative h-[45vh] w-full animate-fade-in opacity-0 delay-300 order-1 lg:order-2 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-neutral-950 lg:bg-gradient-to-r lg:from-neutral-950 lg:via-neutral-950/40 lg:to-transparent" />
          <Image
            src="/Group 2147226707.png"
            alt="Honda Civic Type S"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Abstract "Grille" Visual Element */}
        <div className="absolute -right-20 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rotate-12 bg-neutral-900 opacity-50 blur-3xl lg:h-[800px] lg:w-[800px]" />
      </header>

      <main className="px-6 py-20 lg:px-12">
        {/* Specs Grid */}
        <section className="mb-32">
          <div className="mb-12 border-b border-neutral-800 pb-4">
            <h3 className="text-2xl font-bold text-white">Technical Specifications</h3>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
              <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">Engine</span>
              <h4 className="text-3xl font-bold text-red-500">1.8L i-VTEC</h4>
              <p className="mt-2 text-neutral-400">138hp naturally aspirated brilliance. High-revving character with efficient cruising.</p>
            </div>
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
              <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">Chassis</span>
              <h4 className="text-3xl font-bold text-white">3-door</h4>
              <p className="mt-2 text-neutral-400">I have no idea who's idea was to make this car 3-door, but ok.</p>
            </div>
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
              <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">More Engine Info</span>
              <h4 className="text-3xl font-bold text-red-500">1.8L</h4>
              <p className="mt-2 text-neutral-400">Pure gasoline. Massive torque and not so incredible fuel economy. That 2nd gear is fun.</p>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-12 border-b border-neutral-800 pb-4">
            <h3 className="text-2xl font-bold text-white">Fun facts</h3>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
              <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">1.</span>
              <h4 className="text-3xl font-bold text-red-500">Belt</h4>
              <p className="mt-2 text-neutral-400">When sitting in the front you can't reach the seatbelt</p>
            </div>
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
              <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">2.</span>
              <h4 className="text-3xl font-bold text-red-500">The Back Window</h4>
              <p className="mt-2 text-neutral-400">Perfectly placed to split your rear view in half. You'll never know if it's a cop or a normal car behind you.</p>
            </div>
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
              <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">3.</span>
              <h4 className="text-3xl font-bold text-white">Start Button</h4>
              <p className="mt-2 text-neutral-400">Insert key. Turn key. Then press button. Because starting a car should feel like launching a 1.8L.</p>
            </div>
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
              <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">4.</span>
              <h4 className="text-3xl font-bold text-white">Back Windshield Wiper</h4>
              <p className="mt-2 text-neutral-400">There isn't one... You just have to deal with it.</p>
            </div>
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
               <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">5.</span>
               <h4 className="text-3xl font-bold text-white">Door Handles</h4>
               <p className="mt-2 text-neutral-400">Hidden in the window frame so your passengers stand there confused for 30 seconds trying to get in.</p>
            </div>
            <div className="group rounded-2xl bg-neutral-900/50 p-6 transition hover:bg-neutral-900">
               <span className="mb-2 block text-xs font-medium text-neutral-500 uppercase">6.</span>
               <h4 className="text-3xl font-bold text-red-500">Suspension</h4>
               <p className="mt-2 text-neutral-400">Civic will make sure you'll feel every single hole on the road.</p>
            </div>
          </div>
        </section>

        {/* Design Highlight Section
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square overflow-hidden rounded-full border border-neutral-800 bg-neutral-900 md:aspect-video lg:rounded-3xl">
               {/* Abstract "Wheel" or Detail */}
               {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-40 w-40 rounded-full border-4 border-red-600/20 shadow-[0_0_100px_rgba(220,38,38,0.2)]"></div>
                  <div className="absolute h-32 w-32 rounded-full border border-neutral-700"></div>
                  <div className="absolute h-2 w-2 rounded-full bg-red-500"></div>
               </div>
               <div className="absolute bottom-4 left-4 font-mono text-xs text-neutral-600">
                   IMG_REF: DUAL_EXHAUST_TRIANGLE
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="mb-6 text-4xl font-bold leading-tight text-white">
              Design that Aged Like <span className="text-red-600">Magma</span>
            </h3>
            <div className="space-y-6 text-neutral-400">
              <p>
                The 8th Generation Civic wasn't just an evolution; it was a revolution. The interior features a two-tier "Multiplex" dashboard that puts critical information right in the driver's eye line.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-900/20 text-red-500">1</span>
                  <span>Signature triangular exhaust tips incorporated into the rear bumper.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-900/20 text-red-500">2</span>
                  <span>Full-width rear light bar (before it was cool).</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-900/20 text-red-500">3</span>
                  <span>Specific Type S side skirts and 17" alloy wheels.</span>
                </li>
              </ul>
            </div>
          </div> */}
        {/* </section> */}
      </main>

      <footer className="border-t border-neutral-900 bg-neutral-950 py-12 text-center text-neutral-600">
        <p className="text-sm">
          made withouht ❤️ by <a href="symonround.com">symonround.com</a>
        </p>
      </footer>
    </div>
  );
}
