import { FileText, MessageSquare, Cloud, Users } from "lucide-react"

export function MpcBeyondSection() {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              MPC technology <span className="text-[#FF3C00]">beyond crypto</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how Multi-Party Computation is transforming digital security across industries and use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="w-8 h-8 text-[#FF3C00]" />,
                title: "Digital Identity",
                description: "Protect your digital identity with distributed authentication",
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-[#FF3C00]" />,
                title: "Secure Messaging",
                description: "Private communications with distributed encryption keys",
              },
              {
                icon: <Cloud className="w-8 h-8 text-[#FF3C00]" />,
                title: "Cloud Security",
                description: "Store files with encryption keys you control",
              },
              {
                icon: <Users className="w-8 h-8 text-[#FF3C00]" />,
                title: "Team Collaboration",
                description: "Share sensitive documents with distributed access",
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 scroll-animate">
                <div className="w-16 h-16 bg-[#FF3C00]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 float-on-scroll">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
