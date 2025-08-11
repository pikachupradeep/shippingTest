import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const trackingNumber = url.searchParams.get('number');

  if (!trackingNumber) {
    return NextResponse.json({ status: 'Missing tracking number.' }, { status: 400 });
  }

  return NextResponse.json({
    status: `Shipment #${trackingNumber} is currently in transit.`,
  });
}
