# Formspree Setup for Contact Form

This document provides instructions for setting up Formspree with the contact form on the Škljoc Foto website.

## Steps to Configure Formspree

1. **Create a Formspree account**
   - Visit [Formspree.io](https://formspree.io/) and sign up for an account
   - The free plan includes 50 submissions per month

2. **Create a new form**
   - From your dashboard, click "New Form"
   - Give it a name (e.g., "Škljoc Foto Contact")
   - Select the email address where you want to receive submissions

3. **Get your form ID**
   - After creating the form, Formspree will provide you with a unique form ID
   - It will look something like: `xqkyozjw`

4. **Update the contact form**
   - Open `/src/components/ui/ContactForm.astro`
   - Replace `your-form-id` in the form action URL with your actual Formspree form ID:
     ```html
     <form id="contactForm" class="space-y-6" action="https://formspree.io/f/your-form-id" method="POST">
     ```

5. **Test the form**
   - Fill out the form on your website
   - Submit it to ensure emails are being delivered properly
   - Check your inbox for the test submission

## Additional Configuration (Optional)

### Email Customization
- From your Formspree dashboard, you can customize:
  - Email subject lines
  - Reply-to address
  - Email templates

### Form Settings
- You can enable/disable:
  - AJAX submissions
  - reCAPTCHA
  - Email notifications
  - Form submission storage

### Spam Protection
- The form already includes a honeypot field for basic spam protection
- For additional protection, consider enabling reCAPTCHA in your Formspree settings

## Troubleshooting

- If emails are not being delivered, check your spam folder
- Verify that the form ID in the action URL is correct
- Test with different email providers if needed

## Upgrading

If you exceed the 50 monthly submissions on the free plan, you can upgrade to:
- Personal plan ($15/month): 200 submissions/month
- Professional plan ($30/month): 2,000 submissions/month
- Business plan ($150/month): 10,000 submissions/month

## Support

For any issues with Formspree, visit their [help center](https://help.formspree.io/).