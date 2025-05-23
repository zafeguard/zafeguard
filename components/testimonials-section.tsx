export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What people are <span className="text-[#FF3C00]">saying</span>
            </h2>
            <p className="text-xl text-gray-400">Real stories from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The dual-app approach is genius. I love how Vault handles all the security while Wallet gives me a beautiful interface for managing my crypto.",
                author: "Alex",
                role: "Crypto Enthusiast",
              },
              {
                quote:
                  "After my friend lost $10,000 in a hack, I switched to Zafeguard. The MPC technology gives me peace of mind that my keys are truly secure.",
                author: "Sarah",
                role: "Long-term Investor",
              },
              {
                quote:
                  "I'm not tech-savvy, but Zafeguard made crypto security simple. The recovery phrase feature in Vault saved me when I lost my phone!",
                author: "Michael",
                role: "New to Crypto",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#1E1E1E] rounded-3xl p-8 border border-[#2A2A2A] card-hover scroll-animate">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-[#FF9D00] fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF3C00] text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
