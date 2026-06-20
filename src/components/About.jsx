import React from "react";
import { motion } from "framer-motion";
import { Flag, Users, Trophy } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group"
  >
    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-indo-red group-hover:text-white transition-colors text-indo-red">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bebas mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-indo-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-indo-red font-semibold text-sm mb-6">
              <Flag size={16} />
              <span>Tema HUT RI 81</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bebas text-slate-900 mb-6 leading-tight">
              Nusantara Baru, <br />
              <span className="text-indo-red">Indonesia Maju</span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Mempererat tali silaturahmi antar warga, meningkatkan semangat
              nasionalisme, dan memupuk jiwa sportifitas pemuda RT 01/RW 19.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Kami panitia telah menyusun berbagai rangkaian acara dan
              perlombaan yang dirancang untuk semua kalangan, dari anak-anak
              hingga dewasa. Mari berpartisipasi dan jadikan perayaan ini tak
              terlupakan!
            </p>

            <div className="flex gap-4">
              <div className="border-l-4 border-indo-red pl-4">
                <p className="text-3xl font-bebas text-slate-900">20+</p>
                <p className="text-slate-500 font-medium">Perlombaan</p>
              </div>
              <div className="border-l-4 border-indo-red pl-4 ml-4">
                <p className="text-3xl font-bebas text-slate-900">100+</p>
                <p className="text-slate-500 font-medium">Warga Hadir</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg bg-gray-200 relative">
                <img
                  src="/images/foto-perayaan.jpg"
                  alt="Perayaan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg bg-gray-200 relative flex items-center justify-center text-center">
                <img
                  src="/images/foto-gotongroyong.jpg"
                  alt="Gotong Royong"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 mt-12"
            >
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg bg-gray-200 relative">
                <img
                  src="/images/foto-lomba.jpg"
                  alt="Lomba"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg bg-gray-200 relative">
                <img
                  src="/images/foto-kebersamaan.jpg"
                  alt="Kebersamaan"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <FeatureCard
            icon={Flag}
            title="Upacara Bendera"
            description="Upacara peringatan detik-detik proklamasi kemerdekaan yang diikuti oleh seluruh warga dengan khidmat."
            delay={0.2}
          />
          <FeatureCard
            icon={Trophy}
            title="Aneka Perlombaan"
            description="Berbagai lomba tradisional yang seru dan menghibur seperti panjat pinang, balap karung, dan tarik tambang."
            delay={0.4}
          />
          <FeatureCard
            icon={Users}
            title="Malam Terikatan"
            description="Malam puncak yang diisi dengan doa bersama, pembagian hadiah, dan hiburan dari warga untuk warga."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
