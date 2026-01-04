# backend/utils/notify.py
import os, logging
import httpx

SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")
NOTIFY_TO = os.getenv("NOTIFY_TO")                # e.g., "onyero.ofuzim@gmail.com"
NOTIFY_FROM = os.getenv("NOTIFY_FROM")            # must be a verified sender in SendGrid

async def send_new_contact_email(payload: dict):
    """
    Fire-and-forget email via SendGrid when a new contact form arrives.
    Safe no-op if env vars are not present.
    """
    if not (SENDGRID_API_KEY and NOTIFY_TO and NOTIFY_FROM):
        return

    subject = f"New portfolio message from {payload.get('name')}"
    content = (
        f"Name: {payload.get('name')}\n"
        f"Email: {payload.get('email')}\n"
        f"Subject: {payload.get('subject') or '(none)'}\n"
        f"Message:\n{payload.get('message')}\n\n"
        f"IP: {payload.get('ip_address') or '-'}\n"
        f"UA: {payload.get('user_agent') or '-'}\n"
        f"Created: {payload.get('created_at')}\n"
    )

    data = {
        "personalizations": [{"to": [{"email": NOTIFY_TO}]}],
        "from": {"email": NOTIFY_FROM},
        "subject": subject,
        "content": [{"type": "text/plain", "value": content}],
    }

    headers = {"Authorization": f"Bearer {SENDGRID_API_KEY}"}

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            r = await client.post("https://api.sendgrid.com/v3/mail/send", json=data, headers=headers)
            r.raise_for_status()
    except Exception as e:
        logging.exception("SendGrid email failed: %s", e)
