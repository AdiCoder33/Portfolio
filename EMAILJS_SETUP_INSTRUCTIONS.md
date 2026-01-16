# EmailJS Setup Instructions

Follow these steps to enable contact form emails without a backend:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your email or Google account

## Step 2: Add Email Service
1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or any email provider you prefer)
4. Connect your Gmail account (yerrabothuadithya183@gmail.com)
5. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template like this:

**Template Settings:**
- Template Name: `Portfolio Contact Form`
- Subject: `New Contact from {{from_name}}`

**Template Content:**
```
Hello Adithya,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Click **Save**
5. Copy the **Template ID** (looks like: template_xxxxxxx)

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find **Public Key** (looks like: aBcD1234EfGh5678)
3. Copy it

## Step 5: Update Your Code
Open `e:\Portfolio\main.js` and replace these three values around line 211:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");           // Replace with your Public Key
```

Then around line 223:
```javascript
emailjs.sendForm(
    'YOUR_SERVICE_ID',    // Replace with your Service ID
    'YOUR_TEMPLATE_ID',   // Replace with your Template ID
    contactForm
)
```

## Example:
```javascript
emailjs.init("aBcD1234EfGh5678");

emailjs.sendForm(
    'service_abc1234',
    'template_xyz5678',
    contactForm
)
```

## Step 6: Test It!
1. Open your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email (yerrabothuadithya183@gmail.com)
5. You should receive the message!

## Troubleshooting:
- **Not receiving emails?** Check your EmailJS dashboard for delivery status
- **Error in console?** Make sure all IDs are correct and match your EmailJS account
- **Gmail blocking?** Enable "Less secure app access" or use App Passwords

---

**That's it! No backend needed. All emails will come directly to your Gmail inbox.** 🎉
