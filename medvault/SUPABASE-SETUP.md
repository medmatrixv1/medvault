# Connecting the database (Supabase)

MedVault works fully offline with no server. Cloud sync is optional and stays OFF until you add your Supabase details.

1. Create a free project at https://supabase.com
2. Open **SQL Editor**, paste the contents of `supabase-setup.sql`, click **Run**. This creates the `vaults` table with Row Level Security, so each user can only read and write their own row.
3. Open **Project Settings > API**. Copy the **Project URL** and the **anon / publishable key**.
4. In `index.html` find this line and paste both values between the quotes:
   `const SB_URL="",SB_KEY="";`
5. (Optional) In **Authentication > Providers > Email**, turn off "Confirm email" while testing so sign-up logs in immediately.
6. Deploy over HTTPS (Netlify, Vercel, GitHub Pages). Open Profile > Cloud sync and create an account.

## How it behaves
- The app always saves to the device first, then copies the whole vault to the cloud 3 seconds after a change, when you tap Sync now, and when the connection returns.
- If the cloud copy is newer, the app asks before loading it onto the device.
- Newest save wins. If you edit on two devices before they sync, the older edits are lost.
- The PIN and backup date are never uploaded.

## Safety notes
- Only use the anon/publishable key in the app. Never put the service_role key in it.
- Data is protected by login and Row Level Security but is not end-to-end encrypted, so the Supabase project owner could technically read it. Add client-side encryption before storing real patient data for the public.
- Photos are stored inside the same JSON row. For larger vaults, move images to Supabase Storage.
- Medical data laws (for example HIPAA or GDPR) may apply. Check them before a public launch.
