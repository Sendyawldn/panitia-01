import React from "react";
import { motion } from "framer-motion";

const Avatar = ({ name, size = 'small' }) => {
  const [error, setError] = React.useState(false);
  const sizeClasses = size === 'large' ? 'w-16 h-16 text-xl' : 'w-10 h-10 text-sm';
  
  return (
    <div className={`rounded-full bg-slate-100 shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center text-slate-500 font-bold ${sizeClasses}`}>
      {!error ? (
        <img 
          src={`/images/panitia-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`} 
          alt={name} 
          className="w-full h-full object-cover" 
          onError={() => setError(true)} 
        />
      ) : (
        <span>{name.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
};

const OrgNode = ({ title, names, horizontal = false, noPhoto = false, className = "", delay = 0 }) => {
  const nameArray = Array.isArray(names) ? names : [names];
  const isSingle = nameArray.length === 1;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white border-2 border-indo-red/20 shadow-lg rounded-xl p-4 min-w-[180px] max-w-[280px] mx-auto z-10 relative ${className}`}
    >
      <h4 className="bg-red-50 text-indo-red font-bebas text-lg px-2 py-1 rounded-md mb-4 text-center">
        {title}
      </h4>
      <div className={`text-slate-700 font-medium text-sm ${horizontal ? 'flex flex-wrap justify-center gap-x-4 gap-y-2' : 'flex flex-col gap-3'}`}>
        {nameArray.map((name, i) => (
          <div key={i} className={`flex items-center gap-3 ${isSingle && !horizontal ? 'flex-col justify-center text-center' : 'justify-start'}`}>
            {!noPhoto && <Avatar name={name} size={isSingle && !horizontal ? 'large' : 'small'} />}
            <span className={isSingle && !horizontal ? 'text-base font-semibold' : ''}>{name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Panitia = () => {
  return (
    <section id="panitia" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bebas text-slate-900 mb-4"
          >
            Struktur <span className="text-indo-red">Panitia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Susunan panitia HUT RI 81 Kp. Kedep RT 01/RW 19.
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Level 1: Pembimbing */}
          <div className="relative flex flex-col items-center w-full">
            <OrgNode
              title="Pembimbing"
              names={["Bpk. Masjum", "Bpk. Ridha", "Tamara"]}
              horizontal={true}
              noPhoto={true}
              delay={0.1}
            />
            {/* Vertical Line */}
            <div className="w-1 h-8 bg-indo-red/30" />
          </div>

          {/* Level 2: Ketua & Wakil */}
          <div className="relative flex flex-col items-center w-full">
            <div className="flex gap-4 md:gap-12 relative">
              <OrgNode title="Ketua" names="Yusuf" delay={0.2} />
              <OrgNode title="Wakil Ketua" names="Amon" delay={0.3} />
              {/* Horizontal line connecting Ketua and Wakil */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-indo-red/30 -z-10 hidden sm:block" />
            </div>
            {/* Vertical Line going down */}
            <div className="w-1 h-12 bg-indo-red/30" />
          </div>

          {/* Level 3: Sekretaris & Bendahara */}
          <div className="relative flex flex-col items-center w-full">
            {/* Horizontal connector top */}
            <div className="absolute top-0 w-[50%] md:w-[60%] h-1 bg-indo-red/30 -z-10" />

            <div className="flex w-full justify-center gap-8 md:gap-32 lg:gap-64 relative">
              {/* Vertical line drop for Sekretaris */}
              <div className="absolute top-0 left-[25%] md:left-[20%] w-1 h-8 bg-indo-red/30 -z-10 hidden sm:block" />
              {/* Vertical line drop for Bendahara */}
              <div className="absolute top-0 right-[25%] md:right-[20%] w-1 h-8 bg-indo-red/30 -z-10 hidden sm:block" />

              <OrgNode
                title="Sekretaris"
                names={["Sendi", "Lita"]}
                delay={0.4}
                className="mt-8 sm:mt-8"
              />
              <OrgNode
                title="Bendahara"
                names={["Sipa", "Mutia", "Nagita"]}
                delay={0.5}
                className="mt-8 sm:mt-8"
              />
            </div>

            {/* Center line to Level 4 */}
            {/* This connects from the middle of Level 2 down to Level 4 */}
            <div className="absolute top-0 w-1 h-full bg-indo-red/30 -z-20" />
          </div>

          {/* Connect to Level 4 */}
          <div className="w-1 h-16 bg-indo-red/30" />

          {/* Level 4: Divisi */}
          <div className="relative w-full max-w-5xl">
            {/* Horizontal connector for Divisi */}
            <div className="absolute top-0 left-[10%] right-[10%] md:left-[5%] md:right-[5%] h-1 bg-indo-red/30 -z-10" />

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8 relative">
              <OrgNode
                title="Divisi Acara"
                names={["Raya", "Araya", "Sena"]}
                delay={0.6}
              />
              <OrgNode
                title="Divisi Perlengkapan"
                names={["Api", "Nayla", "Putri"]}
                delay={0.7}
              />
              <OrgNode
                title="Divisi Konsumsi"
                names={["Fabio", "Elsa", "Delinda", "Zidan"]}
                delay={0.8}
              />
              <OrgNode
                title="Divisi Humas"
                names={["Arif", "Ledi", "Eka", "Ozan", "Rexsa"]}
                delay={0.9}
              />
              <OrgNode
                title="Divisi Dokumentasi"
                names={["Sena", "Alpin"]}
                delay={1.0}
              />

              {/* Vertical drops for each division */}
              <div className="absolute top-0 w-1 h-8 bg-indo-red/30 -z-10 left-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panitia;
