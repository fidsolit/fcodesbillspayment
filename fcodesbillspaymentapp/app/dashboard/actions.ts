'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function processBillPayment(formData: FormData) {
  const supabase = await createClient()
  
  // 1. Verify User
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Unauthorized')

  const billerId = formData.get('billerId') as string
  const accountNumber = formData.get('accountNumber') as string
  const amount = parseFloat(formData.get('amount') as string)

  // 2. Generate Reference Number
  const refNumber = `PAY-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`

  // 3. Insert Payment Record
  const { error } = await supabase.from('payments').insert({
    user_id: user.id,
    biller_id: billerId,
    account_number: accountNumber,
    amount: amount,
    status: 'completed', // Or integrate payment gateway like Stripe/PayMongo here
    reference_number: refNumber,
  })

  if (error) throw new Error(error.message)

  revalidatePath('/dashboard')
  return { success: true, refNumber }
}