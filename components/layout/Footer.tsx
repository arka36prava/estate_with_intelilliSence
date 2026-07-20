"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Mail,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { toast } from "react-toastify";

export default function Footer() {
  const [feedback, setFeedback] = useState("");

  function handleSend() {
    if (!feedback.trim()) {
      toast.error("Please enter your feedback.");
      return;
    }

    toast.success("Thank you for your feedback! ❤️");
    setFeedback("");
  }

  return (
    <footer className="bg-slate-950 border-t border-white/10">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3">

              <Bot
                size={34}
                className="text-blue-400"
              />

              <div>

                <h2 className="text-2xl font-bold text-white">
                  AI Real Estate
                </h2>

                <p className="text-sm text-slate-400">
                  Investment Platform
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">

              AI-powered real estate platform
              helping investors discover
              smarter properties using
              ROI prediction,
              EMI calculation,
              rental yield analysis,
              and intelligent recommendations.

            </p>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/properties"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  href="/ai"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  AI Assistant
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </motion.div>

          {/* AI Features */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold text-white">
              AI Features
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>🤖 AI Property Recommendation</li>

              <li>📈 ROI Prediction</li>

              <li>💰 EMI Calculator</li>

              <li>🏠 Investment Analysis</li>

              <li>📊 Rental Yield</li>

              <li>📍 Smart Property Search</li>

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-blue-400"
                />

                <p className="text-slate-400">
                  realstateorg@example.com
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-blue-400"
                />

                <p className="text-slate-400">
                  +91 1234567890
                </p>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-blue-400"
                />

                <p className="text-slate-400">
                  Ranchi, Jharkhand,
                  India
                </p>

              </div>

            </div>

          </motion.div>

        </div>
                {/* Feedback */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
          >

            <h2 className="text-3xl font-bold text-white">
              Help Us Improve
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Your feedback helps us improve the AI Real Estate Platform.
              Tell us what features you'd like to see or report any issues.
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">

              <input
                type="text"
                placeholder="Write your feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="
                flex-1
                rounded-xl
                border
                border-white/10
                bg-slate-900
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-blue-500
              "
              />

              <button
                onClick={handleSend}
                className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
              >
                <Send size={18} />
                Send
              </button>

            </div>

          </div>

        </motion.div>

        {/* Bottom */}
        
      </div>
      <div
          className="
            border-t
            border-blue-500/20
            bg-gradient-to-r
            from-slate-950
            via-blue-950/30
            to-slate-950
            py-6
            text-center
          "
        >
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
              AI Real Estate
            </span>
            . All Rights Reserved.
          </p>
        </div>

    </footer>
  );
}