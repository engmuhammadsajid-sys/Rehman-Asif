# Muhammad Rehman Asif — Portfolio

Personal portfolio site for **Muhammad Rehman Asif** (Full-Stack MERN Developer | AI Integrations | MCP Automation).

## Run locally

```bash
npm install
cp .env.example .env
# Edit .env: set EMAIL_USER and EMAIL_PASS (Gmail App Password)
npm start
```

Open http://localhost:3000

### Contact form (Nodemailer)

1. Create a [Gmail App Password](https://myaccount.google.com/apppasswords) for the sending account.
2. Put it in `.env`:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password
CONTACT_TO=muhammadrehman3346@gmail.com
```

## Deploy on Vercel

1. Push this repo to GitHub and import it in Vercel.
2. Set **Framework Preset** to **Other** (or leave blank).
3. Leave **Build Command** and **Output Directory** empty (root has `index.html`).
4. Add Environment Variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `CONTACT_TO` = `muhammadrehman3346@gmail.com`
5. Redeploy.

Contact form uses the serverless function at `/api/contact`.

- Profile & sections: `index.html`
- Resume PDF: `assets/Muhammad_Rehman_Asif_Resume.pdf`
- Project details: `projects/*.html`
