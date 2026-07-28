import { login, signup } from "./action"
import { Receipt, Mail, Lock, LogIn, UserPlus, ShieldCheck } from "lucide-react"

export default function LoginPage() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        login(formData)
        console.log("Form submitted:", Object.fromEntries(formData.entries()))
    }   
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-12">
      {/* Brand Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center justify-center p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/30 mb-2">
          <Receipt className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Fcodes Bills Payment
        </h1>
        <p className="text-sm font-medium text-slate-500">
          Maayong Adlaw! Log in to manage & pay your bills.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-800">Welcome Back, Suki!</h2>
          <p className="text-xs text-slate-500 mt-1">
            Enter your details below to access your biller account.
          </p>
        </div>

        <form className="space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                name="email"
                type="email"
                required
                placeholder="suki@fcodes.com"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-5 h-5" />
              </div>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-3">
            <button
              formAction={login}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-sm"
                onClick={()  => (  handleSubmit)}
          
          >
              <LogIn className="w-4 h-4" />
              Log In
            </button>

            <button
                formAction={signup}
              className="w-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 font-semibold py-3 px-4 rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <UserPlus className="w-4 h-4" />
              Create New Account
            </button>
          </div>
        </form>

        {/* Security Badge */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Secured with Supabase Encryption</span>
        </div>
      </div>
    </div>
  )
}