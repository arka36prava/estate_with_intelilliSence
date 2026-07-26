"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, FileText, Bot, Code2} from "lucide-react";
import { toast } from "react-toastify";
import { ClipboardList } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  // async function onSubmit(
  //   event: React.FormEvent<HTMLFormElement>
  // ) {
  //   event.preventDefault();

  //   setLoading(true);

  //   const formData = new FormData(event.currentTarget);

  //   formData.append(
  //     "access_key",
  //     "057e887e-cd8f-4b4c-bd18-a2a0da3b18fb"
  //   );

  //   const response = await fetch(
  //     "https://api.web3forms.com/submit",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   );

  //   const data = await response.json();

  //   if (data.success) {
  //     toast.success(
  //       "Your message has been sent successfully!"
  //     );

  //     event.currentTarget.reset();
  //   } else {
  //     toast.error(data.message);
  //   }

  //   setLoading(false);
  // }
  async function onSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  const form = event.currentTarget;

  setLoading(true);

  try {
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "057e887e-cd8f-4b4c-bd18-a2a0da3b18fb"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      toast.success("Your message has been sent successfully!");

      form.reset(); // Clears all fields
    } else {
      toast.error(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error(error);

    toast.error("Failed to send message. Please try again.");
  } finally {
    setLoading(false); // Always executes
  }
}

  return (
    <section
      id="contact"
      className="bg-slate-950 py-16 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold text-white">

            Get In

            <span className="text-blue-400">
              {" "}Touch
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">

            Have questions about AI-powered
            property recommendations,
            investment analysis,
            or the platform?

            We'd love to hear from you.

          </p>

        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
          mx-auto
          max-w-3xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-xl
        "
        >

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm text-slate-300">

                <User size={16} />

                Full Name

              </label>

              <input
                name="name"
                required
                placeholder="Your Name"
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-white
                outline-none
                transition
                focus:border-blue-500
              "
              />

            </div>

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm text-slate-300">

                <Mail size={16} />

                Email Address

              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="your email ******@email.com"
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-white
                outline-none
                transition
                focus:border-blue-500
              "
              />

            </div>

          </div>

          <div className="mt-6">

            <label className="mb-2 flex items-center gap-2 text-sm text-slate-300">

              <FileText size={16} />

              Subject

            </label>

            <input
              name="subject"
              required
              placeholder="AI Property Investment"
              className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-blue-500
            "
            />

          </div>

          <div className="mt-6">

            <label className="mb-2 text-sm text-slate-300 block">

              Message

            </label>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell us how we can help..."
              className="
              w-full
              resize-none
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              outline-none
              transition
              focus:border-blue-500
            "
            />

          </div>

                    <button
            type="submit"
            disabled={loading}
            className="
            mt-8
            w-full
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            py-4
            text-lg
            font-semibold
            text-white
            shadow-lg
            shadow-blue-500/30
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:from-blue-700
            hover:to-cyan-600
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

        </motion.form>

        {/* Contact Cards */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
            delay: .2,
          }}
          className="
          mt-20
          grid
          gap-6
          md:grid-cols-3
        "
        >

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            text-center
            backdrop-blur-xl
          "
          >

            <Mail
              className="mx-auto text-blue-400"
              size={34}
            />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Email us at - realstateorg@example.com
            </h3>

            <p className="mt-3 text-slate-400">
              Your cold email bring more value to us
            </p>

          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            text-center
            backdrop-blur-xl
          "
          >

            <Bot
              className="mx-auto text-blue-400"
              size={34}
            />

            <h3 className="mt-5 text-xl font-semibold text-white">
              For More Details - Fill the Form
            </h3>

            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              className="
              mt-3
              block
              text-blue-400
              hover:underline
            "
            >
              Google Form
            </a>

            <p className="mt-3 text-slate-400">
              By this Our Team and Our AI can match more your expectation
            </p>

          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            text-center
            backdrop-blur-xl
          "
          >

            <Code2
                className="mx-auto text-blue-400"
                size={34}
                />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Have Doubt Visit Our Office
            </h3>

            <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100"
                className="w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>

        </motion.div>

        {/* Bottom CTA */}
      </div>

    </section>
  );
}