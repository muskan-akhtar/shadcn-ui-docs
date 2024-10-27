import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <Header />
        <Breadcrumb className="p-4 font-serif font-semibold">
          <BreadcrumbList className="flex flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-6">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">About</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Article</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Contact us</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Hero />
      <div className="border-4 md:border-8 border-black border-double font-extrabold italic text-black text-xl md:text-3xl text-center mt-6 md:mt-11 bg-slate-800 bg-opacity-50 p-4 md:p-8 space-y-4 md:space-y-6 m-3 md:m-5 rounded-xl md:rounded-2xl">
        What is Shadcn UI?
        <p className="text-base md:text-2xl font-extralight font-serif mt-4 md:mt-6">
          The&nbsp;
          <a
            href="https://ui.shadcn.com/docs"
            target="_blank"
            className="underline text-blue-900"
          >
            Official Documentation
          </a>
          &nbsp;states that shadcn/ui is not a component library. It is a
          collection of reusable components that you copy-paste into your
          codebase. The components are part of your codebase and not a
          third-party dependency you installed.
        </p>
        <p className="text-base md:text-2xl font-extralight font-serif">
          Shadcn UI provides pre-built components that can be entirely
          customized to match your application&apos;s design system. This means
          you&apos;re not limited to a predefined style, as you would be with
          other component libraries. Instead, it delivers all of the
          functionality while letting you customize the appearance and feel.
        </p>
        <p className="text-base md:text-2xl font-extralight font-serif">
          The best part is, shadcn/ui is open-source. You can explore the entire
          codebase, see how things are done, and take inspiration from it to
          build something of your own.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/radix.jpg"
          alt="Radix logo"
          width={800}
          height={600}
          className="w-[90%] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto rounded-lg bg-center border-4 sm:border-6 md:border-8 border-black border-double"
        />
      </div>
      <div className="border-4 sm:border-6 md:border-8 border-black border-double font-extrabold italic text-black text-center mt-11 bg-slate-800 bg-opacity-50 space-y-4 p-4 sm:p-6 md:p-8 m-3 sm:m-5 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">What is Radix-UI?</h2>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6">
          <a
            href="https://www.radix-ui.com/"
            target="_blank"
            className="underline text-blue-900"
          >
            Radix-UI
          </a>
          &nbsp;is a component library for React that offers a collection of
          &apos;headless&apos; components, meaning components that manage
          functionality and accessibility without enforcing any specific styling
          or design. This approach lets developers implement fully customizable
          and accessible UI components while keeping design control in their
          hands.
        </p>
      </div>
      <div className="border-4 sm:border-6 md:border-8 border-black border-double font-extrabold italic text-black text-2xl sm:text-3xl md:text-4xl text-center m-5 sm:m-8 md:m-11 p-4 sm:p-6 md:p-5 bg-slate-800 bg-opacity-50 space-y-6 rounded-2xl">
        <h2 className="mt-2">Why you should use Shadcn UI?</h2>
        <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4">
          Even though it is a relatively new UI library, Shadcn UI has quickly
          risen in the ranks and is being adopted by several creators in the
          open source community and brands like Vercel. Its wide adoption is one
          great reason to use it — you’re likely to find tutorials, guides, and
          support from the community.
        </div>
        <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif">
          Here are a few other reasons you should use Shadcn UI:
        </div>

        <div className="font-bold mt-5 text-left pl-5 sm:pl-[50px] md:pl-[70px]">
          Offers beautifully designed components:
          <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
            One of Shadcn UI&apos;s major selling points is its well-designed
            components. You’re sure to have an aesthetically pleasing website if
            you build it with Shadcn UI.
          </div>
        </div>

        <div className="font-bold mt-5 text-left pl-5 sm:pl-[50px] md:pl-[70px]">
          Provides many components:
          <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
            Shadcn UI offers various component options, ranging from basic UI
            elements like buttons and inputs to more complex components like
            toasts, dropdown menus, and navigation menus. This gives you a wide
            range of building blocks for your app.
          </div>
        </div>

        <div className="font-bold mt-5 text-left pl-5 sm:pl-[50px] md:pl-[70px]">
          Built with Tailwind CSS:
          <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
            Shadcn uses Tailwind CSS, a popular and utility-first CSS framework,
            for styling. This allows you to easily customize the components to
            match your application&apos;s branding and design requirements.
          </div>
        </div>

        <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-8">
          However, Shadcn UI is not for every developer or every project.
          Here&apos;s why you shouldn&apos;t use Shadcn UI:
        </div>

        <div className="font-bold mt-5 text-left pl-5 sm:pl-[50px] md:pl-[70px]">
          Ownership and responsibility:
          <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
            Since every component&apos;s code lives in your codebase, you are
            responsible for maintaining the components and their dependencies
            and fixing any bugs or issues that may arise.
          </div>
        </div>

        <div className="font-bold mt-5 text-left pl-5 sm:pl-[50px] md:pl-[70px]">
          Bundling and performance:
          <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
            Any component you use will be included in your application&apos;s
            bundle. This can potentially increase the overall bundle size and
            affect performance. You will have to manually use performance
            optimization techniques like code splitting to optimize the bundle
            size, which requires extra effort.
          </div>
        </div>

        <div className="font-bold mt-5 text-left pl-5 sm:pl-[50px] md:pl-[70px]">
          Requires Tailwind CSS knowledge:
          <div className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
            While it&apos;s not a major issue, knowledge of Tailwind CSS is
            required to effectively use Shadcn UI.
          </div>
        </div>

        <h1 className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
          You should weigh these reasons to use or not use Shadcn UI, along with
          its pros and cons (which we&apos;ll discuss below), before deciding
          whether or not it&apos;s the right choice for your next project.
        </h1>
      </div>
      <div className="flex justify-center my-6">
        <Image
          src="/images/shadcn-og.webp"
          alt="Shadcn UI features overview"
          width={900}
          height={600}
          className="w-[90%] sm:w-[700px] md:w-[900px] h-auto rounded-lg bg-center border-8 border-black border-double"
        />
      </div>
      <div className="font-extrabold italic text-black text-3xl text-center m-6 p-4 bg-slate-800 bg-opacity-50 space-y-6 rounded-2xl">
        What are the Pros and Cons of using Shadcn-UI?
      </div>
      <div className="border-4 sm:border-6 md:border-8 border-black border-double italic text-black m-5 sm:m-8 md:m-11 font-serif bg-slate-800 bg-opacity-50 space-y-6 pb-8 rounded-2xl">
        <ol>
          <li className="font-bold mt-5 pt-11 text-left text-2xl sm:text-3xl pl-5 sm:pl-[50px] md:pl-[70px]">
            Pro no.1:
            <ol className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
              <li>Customizations are easy.</li>
              <li>
                Why? Because code is copied and pasted into your source code.
              </li>
            </ol>
          </li>
          <li className="font-bold mt-5 pt-11 text-left text-2xl sm:text-3xl pl-5 sm:pl-[50px] md:pl-[70px]">
            Pro no.2:
            <ol className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
              <li>Minimal lock in to the library.</li>
              <li>
                How? Easy to replace underlying dependencies. (facade pattern).
              </li>
              <li>
                Example: Can change the underlying calendar dependency in the
                future.
              </li>
            </ol>
          </li>
          <li className="font-bold mt-5 pt-11 text-left text-2xl sm:text-3xl pl-5 sm:pl-[50px] md:pl-[70px]">
            Pro no.3:
            <ol className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2">
              <li>
                The theme is controlled by a global.css file instead of
                proprietary theme object.
              </li>
              <li>
                If you&apos;ve built your own component library before, you know
                how hard it can be to create a universal theme.
              </li>
              <li>
                With Shadcn, you can create a global theme using Tailwind CSS.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      ;
      <div className="flex justify-center my-6">
        <Image
          src="/images/darktheme.png"
          alt="Dark theme by shadcn-ui"
          width={900}
          height={600}
          className="w-[90%] sm:w-[700px] md:w-[900px] h-auto rounded-lg bg-center border-8 border-black border-double"
        />
      </div>
      <div className="border-4 sm:border-6 md:border-8 border-black border-double font-extrabold italic font-serif text-black text-3xl sm:text-4xl md:text-5xl text-center m-5 sm:m-8 md:m-11 p-4 sm:p-6 md:p-5 bg-slate-800 bg-opacity-50 space-y-6 rounded-2xl">
        Dark mode
        <h1 className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-6">
          Shadcn UI supports dark mode for Next.js&nbsp;
          <a
            href="https://ui.shadcn.com/docs/dark-mode/next"
            target="_blank"
            className="underline text-blue-500"
          >
            Click here to learn more!
          </a>
        </h1>
      </div>
      <div className="border-8 border-black border-double font-extrabold italic font-serif text-black text-3xl sm:text-4xl md:text-5xl text-center m-6 sm:m-8 md:m-11 p-4 sm:p-5 md:p-6 bg-slate-800 bg-opacity-50 space-y-6 rounded-2xl">
        CLI
        <h1 className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6">
          You can use&nbsp;
          <a
            href="https://ui.shadcn.com/docs/cli"
            target="_blank"
            className="underline text-blue-900"
          >
            Shadcn UI&apos;s CLI
          </a>
          &nbsp;to integrate the library with your applications, add
          dependencies, and apply the relevant tailwind.config.js
          configurations. You can also add UI components to your applications
          with the CLI. You can either manually copy and paste the code for each
          component from the documentation or add them with the CLI. The CLI
          provides a superior developer experience and is one more feature that
          makes Shadcn UI work with.
        </h1>
      </div>
      <div className="border-8 border-black border-double font-extrabold italic font-serif text-black text-3xl sm:text-4xl md:text-5xl text-center m-6 sm:m-8 md:m-11 p-4 sm:p-5 md:p-6 bg-slate-800 bg-opacity-50 space-y-6 rounded-2xl">
        Multiple components
        <h1 className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6">
          As of this writing, Shadcn UI has 40 components, including Accordion,
          Skeleton, Table, and Popover. Instead of building components from
          scratch, you can save time by leveraging Shadcn UI’s prebuilt
          components.
        </h1>
      </div>
      <div className="font-extrabold italic font-serif text-black text-3xl sm:text-4xl md:text-5xl text-center m-6 sm:m-8 md:m-11 p-4 sm:p-5 md:p-6 border-8 border-black border-double bg-slate-800 bg-opacity-50 space-y-6 rounded-2xl">
        Benefits of Shadcn UI
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6">
          Shadcn UI provides several benefits compared to other component
          libraries. Here are the most significant:
        </p>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center m-6 sm:m-8 md:m-11 space-y-2">
          1. Rich Component Library
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6 text-black">
          Shadcn UI offers a vast library of pre-built components that cater to
          a wide array of common use cases. These components range from basic
          elements like buttons and forms to complex structures such as data
          tables and modals. Each component is designed to be highly
          customizable, ensuring that developers can tailor them to fit their
          specific design requirements.
        </p>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center m-6 sm:m-8 md:m-11 space-y-2">
          2. Customizability
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6 text-black">
          One of the standout features of Shadcn UI is its high degree of
          customizability. Every component is designed with flexibility in mind,
          allowing developers to easily override default styles and behaviors.
          This ensures that the UI can be tailored to match the specific design
          requirements of any project.
        </p>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center m-6 sm:m-8 md:m-11 space-y-2">
          3. Accessibility
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6 text-black">
          Accessibility is a core focus of Shadcn UI. All components are built
          with accessibility best practices, ensuring that applications are
          usable by people with disabilities. This includes keyboard navigation,
          screen reader support, and compliance with ARIA (Accessible Rich
          Internet Applications) standards.
        </p>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center m-6 sm:m-8 md:m-11 space-y-2">
          4. Responsive Design
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6 text-black">
          Shadcn UI components are designed to be fully responsive, adapting
          seamlessly to different screen sizes and orientations. This is crucial
          for creating applications that provide a consistent user experience
          across desktops, tablets, and mobile devices.
        </p>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center m-6 sm:m-8 md:m-11 space-y-2">
          5. Performance
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-4 sm:mt-6 text-black">
          Performance is a critical aspect of modern web development, and Shadcn
          UI is optimized to ensure fast load times and efficient rendering.
        </p>
      </div>
      <div className="font-extrabold italic font-serif text-black text-3xl sm:text-4xl md:text-5xl text-center m-6 sm:m-8 md:m-11 p-4 sm:p-5 md:p-6 border-8 border-black border-double bg-slate-800 bg-opacity-50 space-y-6 rounded-2xl">
        Getting Started with Shadcn UI
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center mt-3 space-y-6">
          Step 1: Installation
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2 text-black">
          To get started with Shadcn UI, you first need to install the library.
          This can be done using npm or yarn:
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/ishad.jpg"
            alt="Shadcn description"
            width={500}
            height={400}
            className="w-[90%] md:w-[500px] h-auto rounded-lg bg-center"
          />
        </div>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center mt-3 space-y-6">
          Step 2: Importing Components
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2 text-black">
          Once installed, you can start importing and using Shadcn UI components
          in your project. For example, to use a button component, you can do
          the following:
        </p>
        ;
        <div className="flex justify-center">
          <Image
            src="/images/importshad.png"
            alt="Importing shadcn-UI"
            width={500}
            height={400}
            className="w-[90%] md:w-[500px] h-auto rounded-lg bg-center"
          />
        </div>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center mt-3 space-y-6">
          Step 3: Customizing Components
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2 text-black">
          Customizing Shadcn UI components is straightforward. You can use
          CSS-in-JS libraries like styled-components or Emotion to override
          styles, or you can apply your custom classes directly:
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/customshad.png"
            alt="Shadcn-UI Customization image"
            width={500}
            height={400}
            className="w-[90%] md:w-[500px] h-auto rounded-lg bg-center"
          />
        </div>
      </div>
      <div className="font-extrabold italic font-serif text-black text-3xl sm:text-4xl md:text-5xl text-center m-6 sm:m-8 md:m-11 p-4 sm:p-5 md:p-6 border-8 border-black border-double bg-slate-800 bg-opacity-50 space-y-6 rounded-2xl">
        How is ShadCN UI based on Radix UI?
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center mt-3 space-y-6">
          Headless and Accessible Components:
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2 text-black">
          Radix UI is known for its &quot;headless&quot; components, meaning
          they handle functionality and accessibility without imposing specific
          styling. ShadCN UI leverages these components to ensure they are both
          highly accessible and customizable, meeting modern web accessibility
          standards.
        </p>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center mt-3 space-y-6">
          Focus on Customization:
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2 text-black">
          Since Radix UI separates functionality from styling, ShadCN UI can
          easily apply custom styles (often using Tailwind CSS) to create a
          cohesive and visually appealing design. This customization flexibility
          allows ShadCN to offer components that adapt to various design needs
          without being constrained by preset styles.
        </p>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center mt-3 space-y-6">
          Consistency and Usability:
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2 text-black">
          Radix UI provides a consistent API for various components, which
          ShadCN UI extends. This makes ShadCN&apos;s components not only
          uniform in behavior but also easier to use and integrate with other
          components in a project.
        </p>
        <h1 className="font-extrabold italic font-serif text-white text-xl sm:text-2xl text-center mt-3 space-y-6">
          Enhanced Developer Experience:
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2 text-black">
          By building on Radix UI, ShadCN UI offers components that work
          smoothly out of the box, saving developers time and effort on
          accessibility and interactivity concerns.
        </p>
        <p className="text-base sm:text-lg md:text-2xl font-extralight font-serif mt-2 text-black">
          In essence, ShadCN UI takes Radix UI&apos;s solid, accessible
          foundation and enhances it with a visually polished, customizable
          layer, resulting in a modern, user-friendly UI component library.
        </p>
      </div>
      <h1 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl m-6 sm:m-8 md:m-10 lg:m-11 font-semibold text-black text-center hover:italic bg-slate-300 p-4 rounded-lg">
        I&apos;ve also incorporated a ShadCN component in this project for an
        enhanced user experience—Let&apos;s see if you can spot it!
      </h1>
    </div>
  );
}
