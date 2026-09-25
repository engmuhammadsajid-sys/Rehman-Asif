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

Form submissions are emailed to `muhammadrehman3346@gmail.com`.

## Update content

- Profile & sections: `index.html`
- Resume PDF: `assets/Muhammad_Rehman_Asif_Resume.pdf`
- Project details: `projects/*.html`
