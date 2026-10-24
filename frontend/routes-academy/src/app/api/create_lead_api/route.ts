// app/api/create-lead/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Same rule the contact forms enforce client-side (10-digit Indian mobile).
const MOBILE_RE = /^[6-9]\d{9}$/;
const MAX_NAME_LENGTH = 100;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  const { name, mobile_no } = (body ?? {}) as { name?: unknown; mobile_no?: unknown };
  const cleanName = typeof name === 'string' ? name.trim() : '';
  const cleanMobile = typeof mobile_no === 'string' ? mobile_no.replace(/\s/g, '') : '';
  if (!cleanName || cleanName.length > MAX_NAME_LENGTH || !MOBILE_RE.test(cleanMobile)) {
    return NextResponse.json({ message: 'Please enter a valid name and mobile number' }, { status: 400 });
  }

  if (!process.env.FRAPPE_BASE_URL) {
    return NextResponse.json({ message: 'Missing environment variables' }, { status: 500 });
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  // Authenticate to the CRM whenever credentials are configured.
  if (process.env.CRM_API_KEY && process.env.CRM_API_SECRET) {
    headers['Authorization'] = `token ${process.env.CRM_API_KEY}:${process.env.CRM_API_SECRET}`;
  }

  try {
    const response = await fetch(`${process.env.FRAPPE_BASE_URL}/api/method/create_lead_api`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name: cleanName, mobile_no: cleanMobile }),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Frappe API error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
