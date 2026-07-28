import Link from 'next/link'
import { 
  Zap, 
  Droplet, 
  Wifi, 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  Receipt, 
  ArrowRight 
} from 'lucide-react'

export default function LandingPage() {
  const categories = [
    { name: 'Electricity', icon: Zap, color: 'bg-amber-100 text-amber-600' },
    { name: 'Water Utilities', icon: Droplet, color: 'bg-blue-100 text-blue-600' },
    { name: 'Internet & Cable', icon: Wifi, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Credit Cards', icon: CreditCard, color: 'bg-emerald-100 text-emerald-600' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      {/* --- Navigation Bar --- */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Receipt className="w-6 h-6" />
            <span>Fcodes Bills</span>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/login" 
              className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase border border-blue-100">
            Fast & Secure Bill Payments
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Pay all your bills in <span className="text-blue-600">one central hub.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal">
            Simplify your monthly finances with Fcodes Bills. Fast processing, instant receipts, and complete payment history tracking powered by Supabase.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/login" 
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-md flex items-center justify-center gap-2"
            >
              Pay Your Bills Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="#categories" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border font-medium rounded-xl hover:bg-slate-50 transition-all"
            >
              Supported Billers
            </a>
          </div>
        </section>

        {/* --- Biller Categories Section --- */}
        <section id="categories" className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Supported Bill Categories</h2>
            <p className="text-slate-500 text-sm mt-1">Select a category to quickly manage your payments</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, index) => {
              const Icon = cat.icon
              return (
                <div 
                  key={index} 
                  className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className={`p-4 rounded-xl ${cat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{cat.name}</h3>
                </div>
              )
            })}
          </div>
        </section>

        {/* --- Value Proposition Highlights --- */}
        <section className="bg-white border-y my-12 py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto md:mx-0">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Instant Settlement</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Transactions process instantly with reference codes generated in real time.
              </p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto md:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Row Level Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your payment records are locked down using Supabase PostgREST Row Level Security policies.
              </p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto md:mx-0">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Complete History</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Keep track of every account number, amount, and timestamp in one accessible user dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* --- Call to Action Banner --- */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-xl">
            <h2 className="text-3xl font-bold">Ready to streamline your bill payments?</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-sm md:text-base">
              Create an account now to start logging transactions, managing recurring billers, and receiving instant electronic receipts.
            </p>
            <div>
              <Link 
                href="/login" 
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
              >
                Create Your Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="border-t bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Fcodes Bills Payment System. Built with Next.js & Supabase.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}