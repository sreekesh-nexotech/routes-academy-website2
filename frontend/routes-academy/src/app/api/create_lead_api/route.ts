// app/api/create-lead/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, mobile_no } = body;

//   if (!process.env.FRAPPE_BASE_URL || !process.env.CRM_API_KEY || !process.env.CRM_API_SECRET) 
      if (!process.env.FRAPPE_BASE_URL) {
    return NextResponse.json({ message: 'Missing environment variables' }, { status: 500 });
  }

  try {
    const response = await fetch(`${process.env.FRAPPE_BASE_URL}/api/method/create_lead_api`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
    //   'Authorization': `token ${process.env.CRM_API_KEY}:${process.env.CRM_API_SECRET}`,
      },
      body: JSON.stringify({ name, mobile_no }),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Frappe API error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
