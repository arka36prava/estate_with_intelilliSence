"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Real Estate Investor",
    image: "/images/Avatar/profile_img_1.png",
    rating: 5,
    review:
      "The AI investment analysis helped me identify a property with a much better rental yield than I originally shortlisted. It saved me weeks of research.",
  },
  {
    id: 2,
    name: "Alexgender Joseph",
    role: "First-Time Home Buyer",
    image: "/images/Avatar/profile_img_2.png",
    rating: 5,
    review:
      "The affordability score and EMI calculator gave me confidence before making one of the biggest financial decisions of my life.",
  },
  {
    id: 3,
    name: "Dabbu Koushik",
    role: "Property Consultant",
    image: "/images/Avatar/profile_img_3.png",
    rating: 5,
    review:
      "The market insights and AI recommendations allow me to compare multiple investment opportunities in just a few minutes.",
  },
];
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-950 py-10 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
          
        >

          <span
            className="
            rounded-full
            border
            border-blue-500/30
            bg-blue-500/10
            px-5
            py-2
            text-sm
            text-blue-300
          "
          >
            Trusted by Investors
          </span>

          <h2
            className="
            mt-8
            text-5xl
            font-bold
            text-white
          "
          >
            What Our

            <span className="text-blue-400">
              {" "}Users Say
            </span>

          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-slate-400
          "
          >
            Thousands of investors and home buyers
            rely on our AI-powered insights to make
            smarter real estate decisions.
          </p>

        </motion.div>

        {/* Cards */}

        <div
          className="
          mt-20
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
        >
            
                  {testimonials.map((user) => (

            <motion.div
              key={user.id}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: .25,
              }}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              shadow-xl
            "
            >

              <div className="flex items-center gap-5">

                <Image
                  src={user.image}
                  alt={user.name}
                  width={70}
                  height={70}
                  className="
                  rounded-full
                  object-cover
                  border
                  border-blue-500/30
                "
                />

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {user.name}
                  </h3>

                  <p className="text-slate-400">
                    {user.role}
                  </p>

                </div>

              </div>

              {/* Stars */}

              <div className="mt-6 flex gap-1">

              {Array.from({ length: user.rating }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review */}

            <p
              className="
              mt-6
              leading-8
              text-slate-400
            "
            >
              "{user.review}"
            </p>

          </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-24 text-center"
>

  <h3 className="text-4xl font-bold">
    <span className="text-white">Ready to Make Smarter{" "}</span>
    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
      Property Investments?
    </span>
  </h3>

  <p
    className="
      mx-auto
      mt-6
      max-w-2xl
      text-lg
      leading-8
      text-slate-400
    "
  >
    Let our AI analyze properties, estimate ROI, calculate EMI, Cheak affordability , NearBy Locations
    predict rental yield, and help you make confident investment
    decisions.
  </p>

  <div
    className="
      mt-10
      flex
      flex-wrap
      justify-center
      gap-5
    "
  >

    <a
      href="/ai"
      className="
        rounded-full
        bg-blue-600
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-700
      "
    >
      Try AI Assistant
    </a>

    <a
      href="/properties"
      className="
        rounded-full
        border
        border-white/20
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-white/10
      "
    >
      Explore Properties
    </a>

  </div>

</motion.div>

      </div>

    </section>
  );
}